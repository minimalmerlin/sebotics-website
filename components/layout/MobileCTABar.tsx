import Link from "next/link";

export function MobileCTABar() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden border-t border-slate-200 bg-white/95 backdrop-blur-sm shadow-lg pb-safe">
      <div className="flex gap-2 px-4 py-3">
        <Link
          href="/kontakt/"
          className="flex-1 rounded-md border border-slate-300 bg-white px-4 py-2.5 text-center text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
        >
          Demo anfragen
        </Link>
        <Link
          href="/konfigurator/"
          className="flex-1 rounded-md bg-orange-500 hover:bg-orange-600 px-4 py-2.5 text-center text-sm font-medium text-white transition-colors"
        >
          Konfigurator starten
        </Link>
      </div>
    </div>
  );
}
