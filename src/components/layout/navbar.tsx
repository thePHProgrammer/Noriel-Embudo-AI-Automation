"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { siteConfig } from "@/content/site";
import { SiteIcon } from "@/components/site-icon";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";

const navLinks = [
  { href: "/#services", label: "Services" },
  { href: "/#work", label: "Work" },
  { href: "/#process", label: "Process" },
  { href: "/#about", label: "About" },
];

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <SiteIcon id="nav-logo" className="h-8 w-8" />
          <span className="hidden text-sm font-semibold tracking-wide text-foreground sm:inline">
            {siteConfig.name}
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Button asChild size="sm">
            <Link href="/#contact">Start a project</Link>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <button
              className="flex size-11 items-center justify-center rounded-full text-foreground hover:bg-white/5 md:hidden"
              aria-label="Open menu"
            >
              <Menu className="size-6" />
            </button>
          </SheetTrigger>
          <SheetContent>
            <SheetTitle>Menu</SheetTitle>
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <SheetClose asChild key={link.href}>
                  <Link
                    href={link.href}
                    className="rounded-lg px-3 py-3 text-base text-foreground hover:bg-white/5"
                  >
                    {link.label}
                  </Link>
                </SheetClose>
              ))}
            </div>
            <SheetClose asChild>
              <Button asChild className="mt-auto">
                <Link href="/#contact">Start a project</Link>
              </Button>
            </SheetClose>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
