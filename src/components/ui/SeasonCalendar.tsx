"use client";

const months = [
  { name: "Jan", short: "J", level: 1 },
  { name: "Feb", short: "F", level: 1 },
  { name: "Mar", short: "M", level: 2 },
  { name: "Apr", short: "A", level: 2 },
  { name: "May", short: "M", level: 3 },
  { name: "Jun", short: "J", level: 3 },
  { name: "Jul", short: "J", level: 3 },
  { name: "Aug", short: "A", level: 3 },
  { name: "Sep", short: "S", level: 3 },
  { name: "Oct", short: "O", level: 3 },
  { name: "Nov", short: "N", level: 2 },
  { name: "Dec", short: "D", level: 1 },
];

const levelColors: Record<number, string> = {
  1: "bg-ocean-navy/20",
  2: "bg-cyan/40",
  3: "bg-cyan",
};

const levelLabels: Record<number, string> = {
  1: "Off Season",
  2: "Good",
  3: "Peak — Manta Season",
};

export function SeasonCalendar() {
  return (
    <div className="w-full">
      <h4 className="text-sm font-semibold text-ocean-navy uppercase tracking-wider mb-3">
        Best Time to Visit
      </h4>

      {/* Bar chart */}
      <div className="flex gap-1" role="img" aria-label="Season calendar: peak manta season May to October">
        {months.map((m) => (
          <div key={m.name} className="flex-1 flex flex-col items-center gap-1">
            <div
              className={`w-full rounded-sm transition-colors ${levelColors[m.level]}`}
              style={{ height: `${m.level * 16}px` }}
              title={`${m.name}: ${levelLabels[m.level]}`}
            />
            <span className="text-[10px] text-ocean-navy/60 font-medium">{m.short}</span>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="mt-3 flex gap-4 text-xs text-ocean-navy/60">
        <span className="flex items-center gap-1">
          <span className="w-3 h-3 rounded-sm bg-cyan inline-block" />
          Peak
        </span>
        <span className="flex items-center gap-1">
          <span className="w-3 h-3 rounded-sm bg-cyan/40 inline-block" />
          Good
        </span>
        <span className="flex items-center gap-1">
          <span className="w-3 h-3 rounded-sm bg-ocean-navy/20 inline-block" />
          Off Season
        </span>
      </div>
    </div>
  );
}
