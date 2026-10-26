"use client";

const roles = [
  {
    company: "Clavmen Studio",
    period: "2022 — present",
    role: "Art Director & Designer",
    location: "Tokyo, Japan",
    type: "Lead",
  },
  {
    company: "Modular Eight",
    period: "2020 — 2022",
    role: "Senior Developer",
    location: "Osaka, Japan",
    type: "Full-time",
  },
  {
    company: "Haus of Signal",
    period: "2018 — 2020",
    role: "Creative Technologist",
    location: "Berlin, Germany",
    type: "Remote",
  },
  {
    company: "Studio Orbit",
    period: "2016 — 2018",
    role: "UI/UX Designer",
    location: "Dallas, USA",
    type: "Studio",
  },
  {
    company: "Novaform Labs",
    period: "2014 — 2016",
    role: "Junior Designer",
    location: "Kyoto, Japan",
    type: "Apprentice",
  },
];

export default function Experience() {
  return (
    <section className="py-16 md:py-24 border-t border-white/10 select-none">
      {/* Meta Header */}
      <div className="flex items-center justify-between text-[11px] md:text-[12px] font-mono uppercase tracking-[0.05em] text-neutral-400 mb-8 md:mb-12">
        <div className="flex items-center gap-2">
          <span className="text-neutral-500">©</span>
          <span>Work History</span>
          <span className="text-neutral-500 font-sans">経歴</span>
        </div>
        <div className="flex items-center gap-2">
          <span>(WDX® — 07)</span>
          <span className="hidden sm:inline text-neutral-500">·</span>
          <span className="hidden sm:inline">Creative Collabs</span>
        </div>
      </div>

      {/* Section Headline */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-white/10">
        <h2 className="font-sans text-[clamp(2.4rem,6vw,5.5rem)] font-bold tracking-[-0.04em] leading-none text-foreground uppercase">
          Creative Partnerships
        </h2>
        <span className="font-mono text-[12px] text-neutral-400 uppercase tracking-widest">
          [ 2014 — PRESENT ]
        </span>
      </div>

      {/* Timeline Rows */}
      <div className="divide-y divide-white/10 mt-2">
        {roles.map((item, idx) => (
          <div
            key={idx}
            className="py-5 md:py-7 flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-6 hover:bg-white/[0.02] transition-colors group px-2 rounded-lg"
          >
            {/* Company & Role */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
              <span className="font-mono text-[11px] text-neutral-500 w-8">
                [0{idx + 1}]
              </span>
              <span className="font-sans text-[18px] md:text-[21px] font-semibold text-foreground group-hover:text-white transition-colors">
                {item.company}
              </span>
              <span className="hidden sm:inline text-neutral-600">·</span>
              <span className="font-sans text-[14px] md:text-[15px] text-neutral-400">
                {item.role}
              </span>
            </div>

            {/* Location & Period */}
            <div className="flex items-center justify-between sm:justify-end gap-6 text-[12px] md:text-[13px] font-mono text-neutral-400">
              <span className="text-neutral-500">{item.location}</span>
              <span className="text-neutral-300 font-medium">{item.period}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
