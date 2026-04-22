import { Fragment } from "react";
import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  dark?: boolean;
}

export function Breadcrumbs({ items, dark = false }: BreadcrumbsProps) {
  const linkClassName = dark ? "hover:text-slate-300" : "hover:text-slate-900";
  const currentClassName = dark ? "text-slate-300" : "text-slate-900";
  const separatorClassName = dark ? "text-slate-600" : "text-slate-300";
  const wrapperClassName = dark ? "text-slate-500" : "text-slate-500";

  return (
    <nav aria-label="Breadcrumb" className={`mb-8 ${wrapperClassName}`}>
      <ol className="flex flex-wrap items-center gap-2 text-sm">
        {items.map((item, index) => {
          const isCurrent = index === items.length - 1;

          return (
            <Fragment key={`${item.label}-${index}`}>
              <li>
                {isCurrent || !item.href ? (
                  <span aria-current="page" className={currentClassName}>
                    {item.label}
                  </span>
                ) : (
                  <Link href={item.href} className={linkClassName}>
                    {item.label}
                  </Link>
                )}
              </li>
              {!isCurrent && (
                <li aria-hidden="true" className={separatorClassName}>
                  /
                </li>
              )}
            </Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
