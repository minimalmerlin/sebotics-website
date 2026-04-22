"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, type FocusEvent } from "react";
import { Menu, ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const nav = [
  {
    label: "Lösungen",
    href: "/loesungen/",
    children: [
      { label: "Serviceroboter", href: "/loesungen/serviceroboter/", desc: "Für Gastronomie, Hotellerie & Pflege" },
      { label: "Reinigungsroboter", href: "/loesungen/reinigungsroboter/", desc: "Autonome Flächenreinigung ab 200 m²" },
      { label: "Transportroboter", href: "/loesungen/transportroboter/", desc: "Intralogistik & Materialflüsse" },
      { label: "Hotelroboter", href: "/loesungen/hotelroboter/", desc: "Room-Service & Gästeauslieferung" },
      { label: "Sicherheitsroboter", href: "/loesungen/sicherheitsroboter/", desc: "Monitoring & autonome Rundgänge" },
      { label: "Robotics as a Service", href: "/raas/", desc: "Einstieg ohne Kapitalinvestition" },
    ],
  },
  {
    label: "Branchen",
    href: "/branchen/",
    children: [
      { label: "Gastronomie", href: "/branchen/gastronomie/", desc: "Service & Tischroboter" },
      { label: "Hotellerie", href: "/branchen/hotellerie/", desc: "Hotelroboter & Room-Service" },
      { label: "Industrie", href: "/branchen/industrie/", desc: "Intralogistik & Reinigung" },
      { label: "Logistik", href: "/branchen/logistik/", desc: "AMR & Transportautomation" },
      { label: "Gesundheitswesen", href: "/branchen/gesundheitswesen/", desc: "Krankenhaus & Pflege" },
      { label: "Facility Management", href: "/branchen/facility-management/", desc: "Reinigungsautomation" },
    ],
  },
  {
    label: "ROI & Modelle",
    href: "/roi/",
    children: [
      { label: "ROI-Check", href: "/roi/", desc: "Wann lohnt sich Robotik?" },
      { label: "Kauf vs. Miete vs. RaaS", href: "/raas-vs-kauf/", desc: "Vollständiger Vergleich" },
      { label: "Pilotprojekt", href: "/pilotprojekt/", desc: "30–90 Tage Pilot" },
      { label: "Wartung & Support", href: "/wartung-support/", desc: "SLA & Monitoring" },
    ],
  },
  { label: "Case Studies", href: "/case-studies/" },
  { label: "Über uns", href: "/ueber-uns/" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDesktopMenu, setOpenDesktopMenu] = useState<string | null>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  function handleDesktopMenuBlur(event: FocusEvent<HTMLDivElement>) {
    const nextTarget = event.relatedTarget;

    // Why: Das Dropdown soll nur schließen, wenn der Fokus den gesamten Menü-Container verlässt.
    if (nextTarget instanceof Node && event.currentTarget.contains(nextTarget)) {
      return;
    }

    setOpenDesktopMenu(null);
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-zinc-200 shadow-sm"
          : "bg-white border-b border-zinc-100"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/logo.webp"
              alt="Sebotics"
              width={300}
              height={122}
              className="h-9 w-auto object-contain"
              preload
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {nav.map((item) => {
              const isOpen = openDesktopMenu === item.href;
              const submenuId = `desktop-submenu-${item.href.replaceAll("/", "-")}`;

              return item.children ? (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setOpenDesktopMenu(item.href)}
                  onMouseLeave={() => setOpenDesktopMenu(null)}
                  onFocusCapture={() => setOpenDesktopMenu(item.href)}
                  onBlurCapture={handleDesktopMenuBlur}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={submenuId}
                    onClick={() => setOpenDesktopMenu(isOpen ? null : item.href)}
                    className="flex items-center gap-1 rounded-lg px-3.5 py-2 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-50 hover:text-zinc-900"
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        "size-3.5 text-zinc-400 transition-transform duration-200",
                        isOpen && "rotate-180"
                      )}
                    />
                  </button>
                  <div className="absolute left-0 top-full pt-2">
                    <div
                      id={submenuId}
                      className={cn(
                        "w-64 rounded-xl border border-zinc-200 bg-white py-2 shadow-xl shadow-zinc-100/80 transition-all duration-150",
                        isOpen ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-1 opacity-0"
                      )}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="flex flex-col px-4 py-2.5 transition-colors hover:bg-zinc-50"
                        >
                          <span className="text-sm font-medium text-zinc-900">{child.label}</span>
                          <span className="mt-0.5 text-xs text-zinc-500">{child.desc}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3.5 py-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 rounded-lg hover:bg-zinc-50 transition-colors"
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-2 shrink-0">
            <Link href="/kontakt/" className="px-3.5 py-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">
              Demo anfragen
            </Link>
            <Link
              href="/konfigurator/"
              className="inline-flex items-center gap-1.5 rounded-lg bg-brand-500 hover:bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition-colors"
            >
              Konfigurator
              <ArrowRight className="size-3.5" />
            </Link>
          </div>

          {/* Mobile trigger */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger
              render={<Button variant="ghost" size="icon-sm" className="lg:hidden text-zinc-600" />}
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-80 p-0">
              <SheetHeader className="px-6 py-4 border-b border-zinc-100">
                <SheetTitle className="text-left">
                  <Image
                    src="/logo.webp"
                    alt="Sebotics"
                    width={300}
                    height={122}
                    className="h-8 w-auto object-contain"
                  />
                </SheetTitle>
              </SheetHeader>
              <nav className="px-4 py-4 overflow-y-auto">
                {nav.map((item) => (
                  <div key={item.href} className="mb-4">
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-2 py-1 text-sm font-semibold text-zinc-900 mb-1"
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <div className="pl-2 border-l-2 border-zinc-100">
                        {item.children.map((c) => (
                          <Link
                            key={c.href}
                            href={c.href}
                            onClick={() => setMobileOpen(false)}
                            className="block py-1.5 px-2 text-sm text-zinc-500 hover:text-zinc-900"
                          >
                            {c.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
              <div className="px-4 pb-6 pt-2 border-t border-zinc-100 space-y-2">
                <Link href="/konfigurator/" onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 w-full rounded-lg bg-brand-500 hover:bg-brand-600 px-4 py-3 text-sm font-semibold text-white transition-colors"
                >
                  Konfigurator starten
                </Link>
                <Link href="/kontakt/" onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center w-full rounded-lg border border-zinc-200 px-4 py-3 text-sm font-medium text-zinc-700 hover:bg-zinc-50 transition-colors"
                >
                  Demo anfragen
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
