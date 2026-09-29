import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageIntro from "./page-intro";
import { site } from "@/data/site";

export type LegalSection = {
  id: string;
  title: string;
  // Set only when the document numbers its sections, so readers can cite them.
  number?: number;
  content: React.ReactNode;
};

type LegalDocumentProps = {
  path: string;
  title: string;
  lede: string;
  image: { src: string; alt: string };
  // Shown above the text, for example "Last updated 4 May 2024".
  meta?: string;
  sections: LegalSection[];
};

const linkClass =
  "rounded-sm transition-colors hover:text-signal focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal";

const Contents = ({ sections }: { sections: LegalSection[] }) => (
  <ol className="space-y-1 text-sm">
    {sections.map((section) => (
      <li key={section.id}>
        <a
          href={`#${section.id}`}
          className={`${linkClass} flex gap-3 py-1 text-gravel`}
        >
          {section.number !== undefined && (
            <span className="w-5 shrink-0 text-dust tabular-nums">
              {section.number}
            </span>
          )}
          {section.title}
        </a>
      </li>
    ))}
  </ol>
);

// Layout for the privacy policy, terms and shipping pages. The page opens with
// the shared photo band, then a contents list beside the text on wide screens
// and folded above it on phones. Each page passes its sections once and the
// contents list and headings both read from that.
const LegalDocument = ({
  path,
  title,
  lede,
  image,
  meta,
  sections,
}: LegalDocumentProps) => {
  const otherPages = site.pages.filter(
    (page) =>
      page.path !== path &&
      ["/privacy", "/terms", "/policy"].includes(page.path),
  );

  return (
    <>
      <PageIntro title={title} lede={lede} image={image} />

      <div className="wrap pb-20 text-ink lg:pb-28">
        <div className="border-t border-ink/10 pt-8 lg:grid lg:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] lg:gap-16 lg:pt-12">
          <aside className="lg:sticky lg:top-24 lg:max-h-[calc(100svh-7rem)] lg:self-start lg:overflow-y-auto">
            {meta && <p className="eyebrow">{meta}</p>}

            <details className="group mt-5 rounded-xl bg-bone px-4 py-3 lg:hidden">
              <summary className="cursor-pointer list-none text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal">
                Contents
                <span className="text-gravel">
                  {" "}
                  ({sections.length} sections)
                </span>
              </summary>
              <div className="mt-3 border-t border-ink/10 pt-3">
                <Contents sections={sections} />
              </div>
            </details>

            <nav aria-label="Contents" className="mt-6 hidden lg:block">
              <p className="eyebrow mb-3">Contents</p>
              <Contents sections={sections} />
            </nav>
          </aside>

          <div className="mt-10 lg:mt-0">
            <div className="max-w-2xl divide-y divide-ink/10">
              {sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  aria-labelledby={`${section.id}-heading`}
                  className="scroll-mt-24 py-8 first:pt-0 last:pb-0 lg:py-10"
                >
                  {section.number !== undefined && (
                    <p className="eyebrow">Section {section.number}</p>
                  )}
                  <h2
                    id={`${section.id}-heading`}
                    className="display-3 mt-2 text-balance"
                  >
                    {section.title}
                  </h2>
                  <div className="legal-prose mt-5">{section.content}</div>
                </section>
              ))}
            </div>

            <aside className="mt-14 max-w-2xl rounded-2xl bg-bone p-6 sm:p-8">
              <p className="display-3">Questions about this page?</p>
              <p className="mt-3 text-gravel">
                Email{" "}
                <a
                  href={`mailto:${site.email}`}
                  className={`${linkClass} font-semibold text-ink underline decoration-ink/30 underline-offset-4`}
                >
                  {site.email}
                </a>{" "}
                and we will reply.
              </p>
              <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 border-t border-ink/10 pt-5 text-sm font-semibold">
                {otherPages.map((page) => (
                  <li key={page.path}>
                    <Link
                      href={page.path}
                      className={`${linkClass} inline-flex items-center gap-1.5`}
                    >
                      {page.title}
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
};

export default LegalDocument;
