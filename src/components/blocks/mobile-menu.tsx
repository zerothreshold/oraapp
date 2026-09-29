"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { academyLinks, navLinks } from "@/data/navdata";
import Logo from "@/components/common/logo";
import NavLink from "@/components/blocks/nav-link";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal";

const MobileMenu = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const onClick = (event: MouseEvent) => {
      const rect = dialog.getBoundingClientRect();
      const inside =
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom;
      if (!inside) dialog.close();
    };

    dialog.addEventListener("click", onClick);
    return () => dialog.removeEventListener("click", onClick);
  }, []);

  const close = () => dialogRef.current?.close();

  return (
    <>
      <button
        type="button"
        aria-label="Open menu"
        onClick={() => dialogRef.current?.showModal()}
        className={`-mr-2 grid size-11 place-items-center rounded-full lg:hidden ${focusRing}`}
      >
        <Menu aria-hidden="true" />
      </button>

      <dialog ref={dialogRef} aria-label="Menu" className="mobile-nav">
        <div className="flex h-16 shrink-0 items-center justify-between">
          <Link
            href="/"
            aria-label="Offroad Academies home"
            onClick={close}
            className={`rounded-sm ${focusRing}`}
          >
            <Logo
              variant="mainblack"
              width={244}
              height={30}
              alt=""
              className="h-5 w-auto"
            />
          </Link>
          <button
            type="button"
            aria-label="Close menu"
            autoFocus
            onClick={close}
            className={`-mr-2 grid size-11 place-items-center rounded-full ${focusRing}`}
          >
            <X aria-hidden="true" />
          </button>
        </div>

        <ul className="mt-4 border-t border-ink/10">
          {navLinks.map((link) => (
            <li key={link.href} className="border-b border-ink/10">
              <NavLink
                href={link.href}
                mark
                onClick={close}
                className={`flex items-center justify-between rounded-sm py-4 font-display text-4xl font-bold uppercase leading-none tracking-tight ${focusRing}`}
              >
                {link.name}
              </NavLink>
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
                onClick={close}
                className={`flex items-center justify-between gap-4 rounded-lg bg-bone px-4 py-3 ${focusRing}`}
              >
                <span>
                  <span className="block font-semibold">{academy.name}</span>
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
          onClick={close}
          className="btn btn-signal mt-auto"
        >
          Book a clinic
        </Link>
      </dialog>
    </>
  );
};

export default MobileMenu;
