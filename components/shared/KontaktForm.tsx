"use client";

import { useState } from "react";
import { industries } from "@/lib/config";

export function KontaktForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
    setLoading(false);
  }

  if (submitted) {
    return (
      <div className="border border-green-200 bg-green-50 rounded-sm p-8 text-center">
        <div className="text-3xl mb-4">✓</div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">Anfrage eingegangen</h3>
        <p className="text-slate-600 text-sm leading-relaxed">
          Vielen Dank! Wir melden uns innerhalb von 24 Stunden an Werktagen mit einer konkreten Einschätzung.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="name">
            Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-md border border-slate-300 px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
            placeholder="Ihr Name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="company">
            Unternehmen *
          </label>
          <input
            id="company"
            name="company"
            type="text"
            required
            className="w-full rounded-md border border-slate-300 px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
            placeholder="Firmenname"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="email">
          E-Mail *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-md border border-slate-300 px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
          placeholder="name@unternehmen.de"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="branche">
          Branche
        </label>
        <select
          id="branche"
          name="branche"
          className="w-full rounded-md border border-slate-300 px-3 py-2.5 text-sm text-slate-900 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
        >
          <option value="">Bitte wählen</option>
          {industries.map((ind) => (
            <option key={ind.slug} value={ind.slug}>
              {ind.title.replace("Robotik für ", "")}
            </option>
          ))}
          <option value="other">Andere Branche</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="interesse">
          Robotikinteresse
        </label>
        <select
          id="interesse"
          name="interesse"
          className="w-full rounded-md border border-slate-300 px-3 py-2.5 text-sm text-slate-900 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
        >
          <option value="">Bitte wählen</option>
          <option value="serviceroboter">Serviceroboter</option>
          <option value="reinigungsroboter">Reinigungsroboter</option>
          <option value="transportroboter">Transportroboter</option>
          <option value="hotelroboter">Hotelroboter</option>
          <option value="sicherheitsroboter">Sicherheitsroboter</option>
          <option value="raas">Robotics as a Service (RaaS)</option>
          <option value="unsicher">Noch unklar</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="nachricht">
          Ihre Situation / Fragen
        </label>
        <textarea
          id="nachricht"
          name="nachricht"
          rows={4}
          className="w-full rounded-md resize-none border border-slate-300 px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
          placeholder="Beschreiben Sie kurz Ihren Use Case, Ihre Fläche oder Ihr Team-Setup..."
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-md bg-brand-500 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-600 disabled:opacity-60"
      >
        {loading ? "Wird gesendet…" : "Demo anfragen"}
      </button>

      <p className="text-xs text-slate-400 text-center">
        Keine unverlangte Werbung. Antwort innerhalb von 24 Stunden an Werktagen.
      </p>
    </form>
  );
}
