"use client";

import React, { useState } from "react";
import Link from "next/link";

import { navItems } from "@/data/navdata";
import Logo from "../common/logo";
import { Menu } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "../ui/button";

import { cn } from "@/lib/utils";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="bg-white border-b">
      <nav className="container p-4 lg:p-3 flex items-center justify-between mx-auto">
        <Link href="/">
          <Logo variant="mainblack" width={220} height={220} />
        </Link>

        <div
          className="flex lg:hidden"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
        >
          <Menu className="hover:cursor-pointer" />
        </div>

        <div className="hidden lg:flex lg:justify-end items-center gap-10 z-40">
          <NavigationMenu>
            <NavigationMenuList className="gap-3">
              {navItems.map((item) => {
                if (item.items) {
                  return (
                    <div key={item.name}>
                      <NavigationMenuItem>
                        <NavigationMenuTrigger className="text-base font-semibold">
                          {item.name}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid gap-3 p-6 w-[550px]">
                            {Array.isArray(item.items) &&
                              item.items.map((subItem: any) => (
                                <ListItem
                                  key={subItem.name}
                                  href={subItem.href}
                                  title={subItem.name}
                                  icon={subItem.icon}
                                >
                                  {subItem.description}
                                </ListItem>
                              ))}
                          </ul>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    </div>
                  );
                } else {
                  return (
                    <NavigationMenuItem key={item.name}>
                      <NavigationMenuLink
                        asChild
                        className={navigationMenuTriggerStyle()}
                      >
                        <Link href={item.href}>
                          <span className="text-base font-semibold">
                            {item.name}
                          </span>
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  );
                }
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </nav>

      <Drawer open={mobileMenuOpen}>
        <DrawerContent className="h-full">
          <DrawerHeader>
            <DrawerTitle>
              <Logo variant="mainblack" width={220} height={220} />
            </DrawerTitle>
          </DrawerHeader>

          <Accordion type="single" collapsible className="w-full flex flex-col">
            {navItems.map((item) => {
              if (item.items) {
                return (
                  <AccordionItem
                    value={item.name}
                    key={item.name}
                    className="px-4"
                  >
                    <AccordionTrigger className="text-xl font-bold">
                      {item.name}
                    </AccordionTrigger>
                    <AccordionContent>
                      {Array.isArray(item.items) &&
                        item.items.map((subItem: any) => (
                          <a
                            href={subItem.href}
                            className="flex gap-6 py-5"
                            key={subItem.name}
                          >
                            {subItem.icon}
                            <div>
                              <div className="text-sm font-bold leading-none">
                                {subItem.name}
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {subItem.description}
                              </p>
                            </div>
                          </a>
                        ))}
                    </AccordionContent>
                  </AccordionItem>
                );
              } else {
                return (
                  <Link
                    onClick={() => setMobileMenuOpen((prev) => !prev)}
                    href={item.href}
                    key={item.name}
                    className="text-xl font-bold mx-4 py-4 border-b"
                  >
                    {item.name}
                  </Link>
                );
              }
            })}
          </Accordion>

          <DrawerFooter>
            <DrawerClose onClick={() => setMobileMenuOpen((prev) => !prev)}>
              <Button variant="outline">close</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </header>
  );
};

const ListItem = ({
  className,
  href,
  title,
  children,
  icon,
  ...props
}: {
  className?: string;
  href: string;
  title: string;
  children: React.ReactNode;
  icon: string;
}) => {
  return (
    <li>
      <div>
        <a
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="flex gap-6">
            {icon}
            <div>
              <div className="text-sm font-bold leading-none">{title}</div>
              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                {children}
              </p>
            </div>
          </div>
        </a>
      </div>
    </li>
  );
};

export default Header;
