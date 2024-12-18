export function MenuButton() {
  return (
    <button className="grid grid-cols-3 gap-1 p-2 group">
      {[...Array(9)].map((_, i) => (
        <div
          key={i}
          className="w-1.5 h-1.5 rounded-full bg-[#6B7280] group-hover:bg-[#4B5563] transition-colors"
        />
      ))}
    </button>
  );
}
