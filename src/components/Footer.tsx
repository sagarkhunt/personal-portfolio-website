export function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between md:px-6">
        <p>
          © {new Date().getFullYear()} Tech Services.
        </p>
        <p className="text-slate-400">
          Focused on clean architecture, secure APIs, and great UI/UX.
        </p>
      </div>
    </footer>
  );
}


