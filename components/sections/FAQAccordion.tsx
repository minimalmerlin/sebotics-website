"use client";

import { motion } from "framer-motion";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { stagger, fadeUp, viewportConfig } from "@/lib/animations";
import { faqSchema } from "@/lib/schema";

type FAQ = { question: string; answer: string };

interface FAQAccordionProps {
  title?: string;
  faqs: FAQ[];
  withSchema?: boolean;
  dark?: boolean;
}

export function FAQAccordion({ title = "Häufige Fragen", faqs, withSchema = false, dark = false }: FAQAccordionProps) {
  return (
    <section className={`py-20 md:py-28 ${dark ? "bg-[#030712]" : "bg-zinc-50"}`}>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="mb-12">
            <p className={`text-[11px] font-mono uppercase tracking-[0.15em] mb-3 ${dark ? "text-brand-400" : "text-brand-600"}`}>
              FAQ
            </p>
            <h2 className={`text-3xl md:text-4xl font-bold tracking-tight ${dark ? "text-white" : "text-zinc-900"}`}>
              {title}
            </h2>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Accordion className={`divide-y ${dark ? "divide-zinc-800" : "divide-zinc-200"}`}>
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={String(i)} className="border-0">
                  <AccordionTrigger
                    className={`text-base font-medium py-5 text-left hover:no-underline ${
                      dark ? "text-zinc-100" : "text-zinc-900"
                    }`}
                  >
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className={`text-sm leading-relaxed pb-4 ${dark ? "text-zinc-400" : "text-zinc-500"}`}>
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </motion.div>
      </div>

      {withSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
        />
      )}
    </section>
  );
}
