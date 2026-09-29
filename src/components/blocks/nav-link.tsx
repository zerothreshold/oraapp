"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps, ReactNode } from "react";

type Props = Omit<ComponentProps<typeof Link>, "href"> & {
  href: string;
  mark?: boolean;
  children: ReactNode;
};

const NavLink = ({ href, className, children, mark = false, ...props }: Props) => {
  const pathname = usePathname();
  const active = href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      data-active={active ? "" : undefined}
      className={className}
      {...props}
    >
      {children}
      {mark && active ? (
        <span aria-hidden="true" className="size-2.5 rounded-full bg-signal" />
      ) : null}
    </Link>
  );
};

export default NavLink;
