import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { craftsmen } from "@/data/craftsmen";
import CraftsmanWorkGalleryContent from "@/components/profile/CraftsmanWorkGalleryContent";

type CraftsmanWorkPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return craftsmen.map(({ id }) => ({ id }));
}

export async function generateMetadata({
  params,
}: CraftsmanWorkPageProps): Promise<Metadata> {
  const { id } = await params;
  const craftsman = craftsmen.find((item) => item.id === id);

  if (!craftsman) {
    return { title: "Work Not Found | Sanaie" };
  }

  return {
    title: `${craftsman.name}'s Work | Sanaie`,
    description: `Work gallery for ${craftsman.name}, ${craftsman.tradeLabel}.`,
  };
}

async function CraftsmanWorkRoute({ params }: CraftsmanWorkPageProps) {
  const { id } = await params;
  const craftsman = craftsmen.find((item) => item.id === id);

  if (!craftsman) {
    notFound();
  }

  return <CraftsmanWorkGalleryContent craftsman={craftsman} />;
}

export default function CraftsmanWorkGallery(props: CraftsmanWorkPageProps) {
  return (
    <Suspense
      fallback={
        <main className="mx-auto w-full max-w-360 flex-1 px-5 py-12 md:px-10">
          <p className="mono-label">Loading work gallery...</p>
        </main>
      }
    >
      <CraftsmanWorkRoute params={props.params} />
    </Suspense>
  );
}
