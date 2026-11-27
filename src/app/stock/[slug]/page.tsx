import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MachineDetail } from "@/components/MachineDetail";
import { TrustStrip } from "@/components/TrustStrip";
import { getMachine, machines } from "@/data/machines";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return machines.map((machine) => ({ slug: machine.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const machine = getMachine(slug);
  if (!machine) return { title: "Machine introuvable" };
  return {
    title: `${machine.brand} ${machine.model} — chariot élévateur Agadir`,
    description: machine.metaDescription,
    alternates: { canonical: `/stock/${machine.slug}` },
    openGraph: {
      title: `Chariot élévateur ${machine.brand} ${machine.model} · Agadir`,
      description: machine.metaDescription,
      images: [
        {
          url: machine.heroImage,
          alt: `Chariot élévateur électrique ${machine.brand} ${machine.model} Agadir`,
        },
      ],
    },
  };
}

export default async function MachinePage({ params }: Props) {
  const { slug } = await params;
  const machine = getMachine(slug);
  if (!machine) notFound();

  return (
    <>
      <div className="px-5 pt-10 md:px-8 md:pt-14">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/stock"
            className="cta-underline text-xs uppercase tracking-[0.16em] text-mist-bright"
          >
            ← Retour aux machines
          </Link>
        </div>
      </div>
      <div className="mt-6">
        <TrustStrip />
      </div>
      <div className="px-5 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-6xl">
          <MachineDetail machine={machine} />
        </div>
      </div>
    </>
  );
}
