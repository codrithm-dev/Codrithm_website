export function BackgroundFX() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-40" />
      <div className="absolute -top-40 right-[-10%] w-[600px] h-[600px] rounded-full blur-[120px] opacity-40" style={{ background: "radial-gradient(circle, #0066FF, transparent 70%)" }} />
      <div className="absolute bottom-[-20%] left-[-10%] w-[700px] h-[700px] rounded-full blur-[140px] opacity-30" style={{ background: "radial-gradient(circle, #87FFBC, transparent 70%)" }} />
    </div>
  );
}
