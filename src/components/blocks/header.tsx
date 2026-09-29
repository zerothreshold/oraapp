"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowUpRight, Menu, X } from "lucide-react";

import { academyLinks, navLinks } from "@/data/navdata";
import Logo from "../common/logo";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal";

const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="h-16 border-b border-ink/10 bg-white text-ink">
      <nav
        aria-label="Main"
        className="mx-auto flex h-full max-w-[1400px] items-center justify-between px-5 sm:px-8"
      >
        <Link
          href="/"
          aria-label="Offroad Academies home"
          className={cn("rounded-sm", focusRing)}
        >
          <Logo
            variant="mainblack"
            width={244}
            height={30}
            className="h-5 w-auto sm:h-6"
          />
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.href}>
                  <NavigationMenuLink asChild active={isActive(link.href)}>
                    <Link
                      href={link.href}
                      className={cn(
                        "inline-flex h-9 items-center rounded-full px-3.5 text-[15px] font-medium transition-colors hover:bg-bone data-active:bg-bone",
                        focusRing,
                      )}
                    >
                      {link.name}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    "h-9 rounded-full bg-transparent px-3.5 text-[15px] font-medium hover:bg-bone focus:bg-bone data-[state=open]:bg-bone",
                    focusRing,
                  )}
                >
                  Academies
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[26rem] gap-1 p-2">
                    {academyLinks.map((academy) => (
                      <li key={academy.href}>
                        <a
                          href={academy.href}
                          target="_blank"
                          rel="noreferrer"
                          className={cn(
                            "group flex items-center gap-4 rounded-lg p-3 transition-colors hover:bg-bone focus-visible:bg-bone",
                            focusRing,
                          )}
                        >
                          <Logo
                            variant={academy.logo}
                            width={96}
                            height={32}
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
                            className="text-gravel transition-colors group-hover:text-signal"
                          />
                        </a>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Link href="/#academies" className="btn btn-ink h-10 px-5">
            Book a clinic
          </Link>
        </div>

        <Dialog.Root open={menuOpen} onOpenChange={setMenuOpen}>
          <Dialog.Trigger asChild>
            <button
              type="button"
              aria-label="Open menu"
              className={cn(
                "-mr-2 grid size-11 place-items-center rounded-full lg:hidden",
                focusRing,
              )}
            >
              <Menu aria-hidden="true" />
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 z-40 bg-ink/40 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0" />
            <Dialog.Content
              aria-describedby={undefined}
              className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col bg-white px-5 pb-6 text-ink shadow-xl duration-300 data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:animate-in data-[state=open]:slide-in-from-right"
            >
              <div className="flex h-16 items-center justify-between">
                <Dialog.Title className="sr-only">Menu</Dialog.Title>
                <Logo
                  variant="mainblack"
                  width={244}
                  height={30}
                  className="h-5 w-auto"
                />
                <Dialog.Close asChild>
                  <button
                    type="button"
                    aria-label="Close menu"
                    className={cn(
                      "-mr-2 grid size-11 place-items-center rounded-full",
                      focusRing,
                    )}
                  >
                    <X aria-hidden="true" />
                  </button>
                </Dialog.Close>
              </div>

              <ul className="mt-4 border-t border-ink/10">
                {navLinks.map((link) => (
                  <li key={link.href} className="border-b border-ink/10">
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      aria-current={isActive(link.href) ? "page" : undefined}
                      className={cn(
                        "flex items-center justify-between py-4 font-display text-4xl font-bold uppercase leading-none tracking-tight",
                        focusRing,
                      )}
                    >
                      {link.name}
                      {isActive(link.href) && (
                        <span
                          aria-hidden="true"
                          className="size-2.5 rounded-full bg-signal"
                        />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>

              <p className="mt-8 text-xs font-semibold tracking-[0.18em] text-gravel uppercase">
                Academies
              </p>
              <ul className="mt-3 space-y-2">
                {academyLinks.map((academy) => (
                  <li key={academy.href}>
                    <a
                      href={academy.href}
                      target="_blank"
                      rel="noreferrer"
                      className={cn(
                        "flex items-center justify-between gap-4 rounded-lg bg-bone px-4 py-3",
                        focusRing,
                      )}
                    >
                      <span>
                        <span className="block font-semibold">
                          {academy.name}
                        </span>
                        <span className="block text-sm text-gravel">
                          {academy.discipline}
                        </span>
                      </span>
                      <ArrowUpRight size={18} aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>

              <Link
                href="/#academies"
                onClick={closeMenu}
                className="btn btn-signal mt-auto"
              >
                Book a clinic
              </Link>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </nav>
    </header>
  );
};

export default Header;
