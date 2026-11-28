import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { craftsmen } from "@/data/craftsmen";
import CraftsmanWorkGalleryContent from "@/components/profile/CraftsmanWorkGalleryContent";
import { LoadingPage } from "@/components/common/LoadingPage";

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
    <Suspense fallback={<LoadingPage message="Loading work gallery..." />}>
      <CraftsmanWorkRoute params={props.params} />
    </Suspense>
  );
}
