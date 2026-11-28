import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { craftsmen } from "@/data/craftsmen";
import CraftsmanProfileContent from "@/components/profile/CraftsmanProfileContent";
import { LoadingPage } from "@/components/common/LoadingPage";

type CraftsmanPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return craftsmen.map(({ id }) => ({ id }));
}

export async function generateMetadata({
  params,
}: CraftsmanPageProps): Promise<Metadata> {
  const { id } = await params;
  const craftsman = craftsmen.find((item) => item.id === id);

  if (!craftsman) {
    return { title: "Craftsman Not Found | Sanaie" };
  }

  return {
    title: `${craftsman.name} | Sanaie`,
    description: `${craftsman.tradeLabel} craftsman in ${craftsman.governorate}.`,
  };
}

async function CraftsmanProfileRoute({ params }: CraftsmanPageProps) {
  const { id } = await params;
  const craftsman = craftsmen.find((item) => item.id === id);

  if (!craftsman) {
    notFound();
  }

  return <CraftsmanProfileContent craftsman={craftsman} />;
}

export default function CraftsmanProfile(props: CraftsmanPageProps) {
  return (
    <Suspense fallback={<LoadingPage message="Loading craftsman profile..." />}>
      <CraftsmanProfileRoute params={props.params} />
    </Suspense>
  );
}
