import Link from "next/link";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { academyLinks, navLinks } from "@/data/navdata";
import Logo from "@/components/common/logo";
import NavLink from "@/components/blocks/nav-link";
import MobileMenu from "@/components/blocks/mobile-menu";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal";

const Header = () => {
  return (
    <header className="h-16 border-b border-ink/10 bg-white text-ink">
      <nav
        aria-label="Main"
        className="mx-auto flex h-full max-w-[1400px] items-center justify-between px-5 sm:px-8"
      >
        <Link
          href="/"
          aria-label="Offroad Academies home"
          className={`rounded-sm ${focusRing}`}
        >
          <Logo
            variant="mainblack"
            width={244}
            height={30}
            alt=""
            className="h-5 w-auto sm:h-6"
          />
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <NavLink
                  href={link.href}
                  className={`inline-flex h-9 items-center rounded-full px-3.5 text-[15px] font-medium transition-colors hover:bg-bone data-active:bg-bone ${focusRing}`}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
            <li className="group relative">
              <button
                type="button"
                className={`inline-flex h-9 items-center gap-1 rounded-full px-3.5 text-[15px] font-medium transition-colors hover:bg-bone group-focus-within:bg-bone ${focusRing}`}
              >
                Academies
                <ChevronDown
                  aria-hidden="true"
                  className="size-3.5 transition-transform group-hover:rotate-180 group-focus-within:rotate-180"
                />
              </button>
              {/* The padding is the hover bridge across the gap. opacity-0, rather
                  than visibility:hidden, leaves the links in tab order. */}
              <div className="pointer-events-none absolute right-0 top-full z-50 pt-2 opacity-0 transition group-focus-within:pointer-events-auto group-focus-within:opacity-100 group-hover:pointer-events-auto group-hover:opacity-100">
                <ul className="grid w-[26rem] gap-1 rounded-md border border-ink/10 bg-white p-2 shadow-lg">
                  {academyLinks.map((academy) => (
                    <li key={academy.href}>
                      <a
                        href={academy.href}
                        target="_blank"
                        rel="noreferrer"
                        className={`group/academy flex items-center gap-4 rounded-lg p-3 transition-colors hover:bg-bone focus-visible:bg-bone ${focusRing}`}
                      >
                        <Logo
                          variant={academy.logo}
                          width={96}
                          height={32}
                          alt=""
                          className="h-8 w-24 shrink-0"
                        />
                        <span className="flex-1">
                          <span className="block font-semibold">
                            {academy.name}
                          </span>
                          <span className="block text-sm text-gravel">
                            {academy.discipline}
                          </span>
                        </span>
                        <ArrowUpRight
                          size={16}
                          aria-hidden="true"
                          className="text-gravel transition-colors group-hover/academy:text-signal"
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>

          <Link href="/#academies" className="btn btn-ink h-10 px-5">
            Book a clinic
          </Link>
        </div>

        <MobileMenu />
      </nav>
    </header>
  );
};

export default Header;
