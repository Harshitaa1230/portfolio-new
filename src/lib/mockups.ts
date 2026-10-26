import { readdirSync } from "node:fs";
import path from "node:path";
import { getImageProps } from "next/image";

const IMAGE_EXTENSIONS = new Set([
  ".avif",
  ".gif",
  ".jpeg",
  ".jpg",
  ".png",
  ".webp",
]);

const VIDEO_EXTENSIONS = new Set([".m4v", ".mov", ".mp4", ".webm"]);

export type MockupMedia = {
  src: string;
  type: "image" | "video";
};

export type MockupImage = {
  src: string;
  optimizedSrc: string;
};

function getMockupFiles(): string[] {
  const directory = path.join(process.cwd(), "public", "mockups");

  try {
    return readdirSync(directory, { withFileTypes: true })
      .filter((entry) => entry.isFile())
      .map((entry) => entry.name)
      .filter((name) => {
        if (name.startsWith(".")) return false;

        const extension = path.extname(name).toLowerCase();
        return (
          IMAGE_EXTENSIONS.has(extension) || VIDEO_EXTENSIONS.has(extension)
        );
      })
      .sort((a, b) =>
        a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }),
      );
  } catch {
    return [];
  }
}

export function getMockupMedia(): MockupMedia[] {
  return getMockupFiles().map((file) => {
    const extension = path.extname(file).toLowerCase();

    return {
      src: `/mockups/${encodeURIComponent(file)}`,
      type: VIDEO_EXTENSIONS.has(extension) ? "video" : "image",
    };
  });
}

export function getMockupImages(): MockupImage[] {
  return getMockupMedia().flatMap((media) => {
    if (media.type !== "image") return [];

    try {
      const { props } = getImageProps({
        src: media.src,
        alt: "",
        width: 640,
        height: 360,
        quality: 75,
      });

      const optimizedSrc = typeof props.src === "string" ? props.src : "";

      return optimizedSrc ? [{ src: media.src, optimizedSrc }] : [];
    } catch {
      return [];
    }
  });
}
