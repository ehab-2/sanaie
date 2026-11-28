import PageHeader from "@/components/common/PageHeader";
import SearchBar from "@/components/common/client/SearchBar";
import { CraftsmenGridSkeleton } from "@/components/common/client/CraftsmenGridSkeleton";

export function CraftspeopleLoading() {
  return (
    <section className="scroll-mt-24">
      <div className="mx-auto max-w-360 px-5 pt-12 md:px-10 md:pt-16">
        <PageHeader
          title="All craftspeople"
          subTitle="Every verified craftsman in the directory. Filter by trade and governorate to narrow the list."
        />
        <div className="mt-7">
          <SearchBar />
        </div>
      </div>

      <div className="mx-auto max-w-360 px-5 py-10 md:px-10 md:py-12">
        <CraftsmenGridSkeleton count={6} />
      </div>
    </section>
  );
}
