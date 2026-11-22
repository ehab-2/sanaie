'use client'
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function SiteHeader() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <section className="sticky top-0 z-40 border-b border-border bg-background">
      <div className="mx-auto flex h-16 max-w-360 items-center gap-8 px-5 md:h-20 md:px-10">
        <Link
          href="/"
          className="flex items-center"
          onClick={() => setOpen(false)}
          aria-label="Sanaie"
        >
            <Image src="/logo.png" alt="Logo" width={100} height={40} />
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          <Link
            href="/craftspeople"
            className="mono-label text-foreground/60 transition-colors hover:text-foreground"
          >
            Craftsmen
          </Link>
        </nav>

        <div className="ms-auto flex items-center gap-2 md:gap-3">
          <Link
            href="/join"
            className="hidden rounded-md bg-foreground px-5 py-3 font-mono text-[10px] uppercase tracking-[0.16em] text-background shadow-sm transition-colors hover:bg-primary sm:inline-flex"
          >
            Join as Craftsman
          </Link>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label="Menu"
            aria-expanded={open}
            className="rounded-md border border-border bg-card p-2.5 text-foreground shadow-sm transition-colors hover:border-foreground md:hidden"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-border bg-background md:hidden">
          <div className="mx-auto flex max-w-360 flex-col gap-1 px-5 py-4">
            <Link
              href="/craftspeople"
              onClick={() => setOpen(false)}
              className="py-2.5 text-sm text-foreground"
            >
              Craftsmen
            </Link>
            <Link
              href="/join"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md bg-foreground px-5 py-3 text-center font-mono text-[10px] uppercase tracking-[0.16em] text-background shadow-sm sm:hidden"
            >
              Join as Craftsman
            </Link>
          </div>
        </div>
      ) : null}
    </section>
  );
}
