import Link from "next/link";

export function MobileCTABar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-zinc-800 bg-[#030712]/95 shadow-xl backdrop-blur-md lg:hidden">
      <div className="flex gap-2 px-4 py-3">
        <Link
          href="/kontakt/"
          className="flex-1 rounded-xl border border-zinc-700 bg-slate-900 px-4 py-2.5 text-center text-sm font-medium text-zinc-200 transition-colors hover:bg-slate-800"
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
