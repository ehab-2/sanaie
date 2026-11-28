import PageHeader from "../common/PageHeader";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { craftsmen } from "@/data/craftsmen";
import SearchBar from "../common/client/SearchBar";
import { CraftsmenGrid } from "../common/client/CraftsmenGrid";


function TrustedCraftsmen({ isLoading = false }: { isLoading?: boolean }) {
  return (
    <section className="scroll-mt-24">
      <div className="mx-auto max-w-360 px-5 pt-12 md:px-10 md:pt-16">
        <PageHeader
          title={"Trusted craftspeople."}
          subTitle={
            "Skilled local specialists for every trade—reviewed, experienced, and one click away."
          }
        />
        <div className="mt-7">
          <SearchBar />
        </div>
      </div>

      <div className="mx-auto max-w-360 px-5 py-10 md:px-10 md:py-12">
        <CraftsmenGrid
          craftsmen={craftsmen}
          limit={6}
          isLoading={isLoading}
        />
        <div className="mt-12 flex justify-center">
          <Link
            href="/craftspeople"
            className="inline-flex items-center gap-2 rounded-md border border-foreground px-6 py-3.5 font-mono text-[10px] uppercase tracking-[0.16em] text-foreground shadow-sm transition-colors hover:bg-foreground hover:text-background"
          >
            Show all craftspeople
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default TrustedCraftsmen;
