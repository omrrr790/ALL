export function DataTable({
  columns, rows,
}: { columns: string[]; rows: (string | number | React.ReactNode)[][] }) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[650px] text-left text-[13px]">
          <thead className="border-b border-border bg-secondary/50 font-medium text-muted-foreground">
            <tr>{columns.map((c) => <th key={c} className="px-6 py-3 font-medium">{c}</th>)}</tr>
          </thead>
          <tbody className="divide-y divide-border">
            {rows.map((r, i) => (
              <tr key={i} className="transition-colors hover:bg-secondary/30">
                {r.map((cell, j) => (
                  <td key={j} className="px-6 py-3.5 text-foreground font-medium">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}