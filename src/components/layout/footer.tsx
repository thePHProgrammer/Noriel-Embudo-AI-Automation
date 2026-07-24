import Link from "next/link";
import { Mail } from "lucide-react";
import { siteConfig } from "@/content/site";
import { SiteIcon } from "@/components/site-icon";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-start md:justify-between">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <SiteIcon id="footer-logo" className="h-7 w-7" />
            <span className="text-sm font-semibold text-foreground">
              {siteConfig.name}
            </span>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            {siteConfig.role} — {siteConfig.location}.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:gap-10">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Navigate
            </span>
            <Link href="#services" className="text-sm text-muted-foreground hover:text-foreground">
              Services
            </Link>
            <Link href="#work" className="text-sm text-muted-foreground hover:text-foreground">
              Work
            </Link>
            <Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground">
              Contact
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Connect
            </span>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
              <Mail className="size-4" /> Email
            </a>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
              <GithubIcon className="size-4" /> GitHub
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
              <LinkedinIcon className="size-4" /> LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border px-5 py-6 text-center text-xs text-muted-foreground sm:px-8">
        © {new Date().getFullYear()} {siteConfig.name}. Built with Next.js, deployed on Vercel.
      </div>
    </footer>
  );
}
