interface SkeletonRowProps {
  columns?: number;
  rows?: number;
}

/**
 * Shimmer skeleton placeholder for table rows during loading states.
 * Uses CSS animation defined in index.css for the shimmer sweep.
 */
export function SkeletonRow({ columns = 7, rows = 8 }: SkeletonRowProps) {
  // Vary the widths to look realistic, not uniform
  const widthPatterns = ["w-24", "w-20", "w-16", "w-28", "w-14", "w-20", "w-12"];

  return (
    <>
      {Array.from({ length: rows }).map((_, rowIdx) => (
        <tr key={rowIdx} className="border-b border-slate-800/40">
          {Array.from({ length: columns }).map((_, colIdx) => (
            <td key={colIdx} className="py-2.5 px-3">
              <div
                className={`h-3.5 rounded-md skeleton-shimmer ${
                  widthPatterns[(rowIdx + colIdx) % widthPatterns.length]
                }`}
                style={{
                  animationDelay: `${(rowIdx * columns + colIdx) * 60}ms`,
                }}
              />
            </td>
          ))}
        </tr>
      ))}
    </>
  );
}
