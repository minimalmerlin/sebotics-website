"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { ctaConfig } from "@/lib/config";

const nav = [
  {
    label: "Lösungen",
    href: "/loesungen/",
    children: [
      { label: "Serviceroboter", href: "/loesungen/serviceroboter/" },
      { label: "Reinigungsroboter", href: "/loesungen/reinigungsroboter/" },
      { label: "Transportroboter", href: "/loesungen/transportroboter/" },
      { label: "Hotelroboter", href: "/loesungen/hotelroboter/" },
      { label: "Sicherheitsroboter", href: "/loesungen/sicherheitsroboter/" },
      { label: "Robotics as a Service", href: "/raas/" },
    ],
  },
  {
    label: "Branchen",
    href: "/branchen/",
    children: [
      { label: "Gastronomie", href: "/branchen/gastronomie/" },
      { label: "Hotellerie", href: "/branchen/hotellerie/" },
      { label: "Industrie", href: "/branchen/industrie/" },
      { label: "Logistik", href: "/branchen/logistik/" },
      { label: "Gesundheitswesen", href: "/branchen/gesundheitswesen/" },
      { label: "Facility Management", href: "/branchen/facility-management/" },
    ],
  },
  {
    label: "ROI & Modelle",
    href: "/roi/",
    children: [
      { label: "ROI-Check", href: "/roi/" },
      { label: "Robotik mieten", href: "/robotik-mieten/" },
      { label: "Kauf vs. Miete vs. RaaS", href: "/raas-vs-kauf/" },
      { label: "Pilotprojekt", href: "/pilotprojekt/" },
      { label: "Wartung & Support", href: "/wartung-support/" },
    ],
  },
  { label: "Case Studies", href: "/case-studies/" },
  { label: "Blog", href: "/blog/" },
  { label: "Über Sebotics", href: "/ueber-uns/" },
];

const mobileAccordion = (items: { label: string; href: string }[], closeSheet: () => void) =>
  items.map((item) => (
    <Link
      key={item.href}
      href={item.href}
      onClick={closeSheet}
      className="block py-2 pl-4 text-sm text-slate-600 hover:text-slate-900"
    >
      {item.label}
    </Link>
  ));

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur-sm transition-shadow duration-200",
        scrolled ? "shadow-md" : "shadow-none border-slate-200"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="text-xl font-bold tracking-tight text-slate-900">
              Sebo<span className="text-orange-500">tics</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {nav.map((item) =>
              item.children ? (
                <div key={item.href} className="relative group">
                  <button
                    className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 rounded-md hover:bg-slate-50 transition-colors"
                    onMouseEnter={() => setOpenMenu(item.label)}
                    onMouseLeave={() => setOpenMenu(null)}
                  >
                    {item.label}
                    <ChevronDown className="size-3.5 text-slate-400 group-hover:text-slate-600 transition-transform group-hover:rotate-180 duration-200" />
                  </button>
                  {/* Mega-dropdown */}
                  <div
                    className={cn(
                      "absolute top-full left-0 mt-1 w-56 rounded-md border border-slate-200 bg-white shadow-lg py-1 transition-all duration-150",
                      "opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto"
                    )}
                    onMouseEnter={() => setOpenMenu(item.label)}
                    onMouseLeave={() => setOpenMenu(null)}
                  >
                    <Link
                      href={item.href}
                      className="block px-4 py-2 text-xs font-mono font-medium uppercase tracking-wider text-slate-400 hover:text-orange-500"
                    >
                      Alle {item.label}
                    </Link>
                    <div className="border-t border-slate-100 my-1" />
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-slate-700 hover:text-slate-900 hover:bg-slate-50"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 rounded-md hover:bg-slate-50 transition-colors"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-2 shrink-0">
            <Link href={ctaConfig.secondary.href}>
              <Button variant="outline" size="sm" className="rounded-md border-slate-300">
                Demo anfragen
              </Button>
            </Link>
            <Link href={ctaConfig.primary.href}>
              <Button
                size="sm"
                className="rounded-md bg-orange-500 hover:bg-orange-600 text-white border-0"
              >
                Konfigurator starten
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon-sm" className="lg:hidden" />
              }
            >
              <Menu className="size-5" />
              <span className="sr-only">Menü öffnen</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 overflow-y-auto p-0">
              <SheetHeader className="border-b border-slate-100 px-6 py-4">
                <SheetTitle className="text-left">
                  <span className="text-xl font-bold tracking-tight">
                    Sebo<span className="text-orange-500">tics</span>
                  </span>
                </SheetTitle>
              </SheetHeader>
              <nav className="px-6 py-4 space-y-4">
                {nav.map((item) => (
                  <div key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block text-sm font-semibold text-slate-900 hover:text-orange-500 mb-1"
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <div className="border-l border-slate-200 ml-1">
                        {mobileAccordion(item.children, () => setOpen(false))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
              <div className="px-6 pb-6 space-y-2 border-t border-slate-100 pt-4">
                <Link href={ctaConfig.primary.href} onClick={() => setOpen(false)}>
                  <Button className="w-full rounded-md bg-orange-500 hover:bg-orange-600 text-white border-0">
                    Konfigurator starten
                  </Button>
                </Link>
                <Link href={ctaConfig.secondary.href} onClick={() => setOpen(false)}>
                  <Button variant="outline" className="w-full rounded-md">
                    Demo anfragen
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
