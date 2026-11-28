import { CraftsmenGrid } from "@/components/common/client/CraftsmenGrid";
import PageHeader from "@/components/common/PageHeader";
import SearchBar from "@/components/common/client/SearchBar";
import { craftsmen } from "@/data/craftsmen";
import { governorate } from "@/data/governorates";
import { trades } from "@/data/trades";
import { CraftspeopleLoading } from "@/components/common/client/CraftspeopleLoading";
import { Suspense } from "react";

type CraftsPeopleSearchParams = Promise<{
  trade?: string | string[];
  governorate?: string | string[];
  q?: string | string[];
}>;

async function CraftsPeopleResults({
  searchParams,
}: {
  searchParams: CraftsPeopleSearchParams;
}) {
  const params = await searchParams;
  const tradeParam = Array.isArray(params.trade)
    ? params.trade[0]
    : params.trade;
  const governorateParam = Array.isArray(params.governorate)
    ? params.governorate[0]
    : params.governorate;
  const queryParam = Array.isArray(params.q) ? params.q[0] : params.q;
  const tradeQuery = tradeParam?.trim().toLowerCase() ?? "";
  const textQuery = queryParam?.trim().toLowerCase() ?? "";
  const governorateSlug =
    governorateParam && governorateParam.trim().toLowerCase() !== "all"
      ? governorateParam.trim().toLowerCase()
      : "";
  const governorateLabel = governorate.find(
    (item) => item.slug === governorateSlug,
  )?.label;
  const validTrade =
    !tradeQuery ||
    trades.some(
      (item) =>
        item.slug === tradeQuery || item.label.toLowerCase() === tradeQuery,
    );
  const validGovernorate =
    !governorateSlug ||
    governorate.some((item) => item.slug === governorateSlug);

  const filteredCraftsmen = craftsmen.filter((craftsman) => {
    const matchesQuery =
      !textQuery ||
      craftsman.name.toLowerCase().includes(textQuery) ||
      craftsman.tradeLabel.toLowerCase().includes(textQuery) ||
      craftsman.trade.toLowerCase().includes(textQuery) ||
      craftsman.about.toLowerCase().includes(textQuery);
    const matchesTrade =
      validTrade &&
      (!tradeQuery ||
        craftsman.trade.toLowerCase() === tradeQuery ||
        craftsman.tradeLabel.toLowerCase() === tradeQuery);
    const matchesGovernorate =
      validGovernorate &&
      (!governorateLabel ||
        craftsman.governorate.toLowerCase() === governorateLabel.toLowerCase());

    return matchesQuery && matchesTrade && matchesGovernorate;
  });

  return (
    <section className="scroll-mt-24">
      <div className="mx-auto max-w-360 px-5 pt-12 md:px-10 md:pt-16">
        <PageHeader
          title={"All craftspeople"}
          subTitle={
            "Every verified craftsman in the directory. Filter by trade and governorate to narrow the list."
          }
        />
        <div className="mt-7">
          <SearchBar
            key={`${tradeQuery}-${governorateSlug}-${textQuery}`}
            initialTrade={
              validTrade && tradeQuery
                ? (trades.find(
                    (item) =>
                      item.slug === tradeQuery ||
                      item.label.toLowerCase() === tradeQuery,
                  )?.slug ?? "all")
                : "all"
            }
            initialGovernorate={
              validGovernorate && governorateSlug ? governorateSlug : "all"
            }
            initialQuery={queryParam ?? ""}
          />
        </div>
      </div>

      <div className="mx-auto max-w-360 px-5 py-10 md:px-10 md:py-12">
        <CraftsmenGrid craftsmen={filteredCraftsmen} />
      </div>
    </section>
  );
}

function CraftsPeople({
  searchParams,
}: {
  searchParams: CraftsPeopleSearchParams;
}) {
  return (
    <Suspense fallback={<CraftspeopleLoading />}>
      <CraftsPeopleResults searchParams={searchParams} />
    </Suspense>
  );
}

export default CraftsPeople;
