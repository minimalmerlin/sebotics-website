"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { stagger, fadeUp, viewportConfig } from "@/lib/animations";
import { faqSchema } from "@/lib/schema";

type FAQ = { question: string; answer: string };

interface FAQAccordionProps {
  title?: string;
  faqs: FAQ[];
  withSchema?: boolean;
}

export function FAQAccordion({
  title = "Häufige Fragen",
  faqs,
  withSchema = false,
}: FAQAccordionProps) {
  return (
    <section className="py-16 md:py-20 bg-slate-50">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="mb-10">
            <p className="text-xs font-mono uppercase tracking-widest text-orange-500 mb-3">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">{title}</h2>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Accordion>
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={String(i)}>
                  <AccordionTrigger className="text-base font-medium text-slate-900 py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </motion.div>

        {withSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
          />
        )}
      </div>
    </section>
  );
}
