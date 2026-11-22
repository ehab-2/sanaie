import Link from "next/link";
import Image from "next/image";

export default function SiteFooter() {
  return (
    <footer className="mt-20 bg-[#1A1A1A] text-white">
      <div className="mx-auto max-w-360 px-5 py-14 md:px-10 md:py-16">
        <div className="flex flex-col justify-around gap-10 md:flex-row ">
          <div>
            <Image src="/logo.png" alt="Logo" width={100} height={40} />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/55">
              A directory of independent craftspeople and technicians across
              Egypt.
            </p>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/35">
              Sanaie
            </p>
            <div className="mt-4 flex flex-col gap-2 text-sm text-white/75">
              <Link href="/join" className="w-fit hover:text-primary">
                Apply to join
              </Link>
              <Link href="/craftspeople" className="w-fit hover:text-primary">
                Craftsmen
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-white/35 md:flex-row md:items-center md:justify-between">
          <span>© 2026 Sanaie</span>
          <span>All rights reserved</span>
        </div>
      </div>
    </footer>
  );
}
