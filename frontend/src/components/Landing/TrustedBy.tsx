export function TrustedBy() {
  const names = ["Students", "Researchers", "Developers", "Writers", "Designers"];
  return (
    <div className="border-y border-gray-100 py-6 px-8">
      <div className="max-w-6xl mx-auto flex items-center gap-8 flex-wrap">
        <p className="text-xs text-gray-400 uppercase tracking-widest shrink-0">Used by</p>
        {names.map((n) => (
          <span key={n} className="text-sm font-medium text-gray-300 p-6 ml-14">{n}</span>
        ))}
      </div>
    </div>
  );
}