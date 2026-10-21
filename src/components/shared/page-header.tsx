// src/components/shared/page-header.tsx
export function PageHeader({
  title, subtitle, action,
}: { title: string; subtitle?: string; action?: React.ReactNode }) {
  return (
    <div className="flex flex-col justify-between gap-2 border-b pb-4 sm:flex-row sm:items-center">
      <div>
        <h2 className="text-lg font-extrabold tracking-tight lg:text-xl">{title}</h2>
        {subtitle && <p className="text-xs text-muted-foreground">{subtitle}</p>}
      </div>
      {action}
    </div>
  );
}