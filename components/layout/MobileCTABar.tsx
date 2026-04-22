import Link from "next/link";

export function MobileCTABar() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t border-zinc-200 shadow-xl">
      <div className="flex gap-2 px-4 py-3">
        <Link
          href="/kontakt/"
          className="flex-1 rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-center text-sm font-medium text-zinc-700 hover:bg-zinc-50 transition-colors"
        >
          Demo anfragen
        </Link>
        <Link
          href="/konfigurator/"
          className="flex-1 rounded-xl bg-brand-500 hover:bg-brand-600 px-4 py-2.5 text-center text-sm font-semibold text-white transition-colors"
        >
          Konfigurator
        </Link>
      </div>
    </div>
  );
}
