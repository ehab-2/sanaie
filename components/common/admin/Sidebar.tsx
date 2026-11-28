"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ClipboardList, Users, Flag, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";


const NAV: { label: string; href: string; icon: LucideIcon }[] = [
  { label: "Applications", href: "/dashboard/applications", icon: ClipboardList },
  { label: "Craftsmen", href: "/dashboard/craftsmen", icon: Users },
  { label: "Complaints", href: "/dashboard/complaints", icon: Flag },
];

function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="border-b border-border bg-card/40 md:sticky md:top-0 md:h-screen md:border-b-0 md:border-r">
      <div className="px-5 pt-6 md:pt-6">
        <Image
          src="/logo.png"
          alt="Sanaie"
          width={72}
          height={40}
          className="h-10 w-18 object-contain"
          priority
        />
        <p className="mt-5 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          Admin Console
        </p>
      </div>

      <nav
        aria-label="Admin"
        className="flex gap-1 overflow-x-auto p-4 md:mt-4 md:flex-col md:overflow-visible"
      >
        {NAV.map(({ label, href, icon: Icon }) => {
          const active = pathname === href || pathname.startsWith(`${href}/`);
          return (
            <Link
              key={href}
              href={href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "flex shrink-0 items-center gap-3 rounded-md border px-3.5 py-2.5 text-[11px] uppercase tracking-[0.16em] transition-colors",
                active
                  ? "border-border bg-background text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground",
              )}
            >
              <Icon className="h-4 w-4" strokeWidth={1.5} />
              {label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

export default Sidebar;
