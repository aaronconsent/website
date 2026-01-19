export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="flex items-center gap-3 text-sm text-slate-300">
        <span className="h-6 w-6 animate-spin rounded-full border-2 border-emerald-200 border-t-transparent" />
        Loading experience...
      </div>
    </div>
  );
}
