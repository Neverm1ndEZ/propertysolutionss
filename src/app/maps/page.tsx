import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { ALL_MAPS, AREA_LIST } from "@/lib/maps";
import { thumbUrl } from "@/lib/map-utils";
import JsonLd, { breadcrumbs } from "@/components/JsonLd";
import { keywordsFor, pageKeywords } from "@/lib/seo";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
	title: "Our Maps — All Layout Plans",
	description: `All ${ALL_MAPS.length} authority layout plans across ${AREA_LIST.map((a) => a.name).join(", ")}, free to view and download at full resolution.`,
	keywords: pageKeywords(
		AREA_LIST.flatMap((a) => keywordsFor(`${a.name} layout plans`, a.name)),
	),
	alternates: { canonical: "/maps" },
};

/**
 * A chooser, nothing more: one card per region, each opening that region's
 * searchable listing. No scroll animation and no combined listing here — the
 * per-area pages carry every plan.
 */
export default function AllMapsPage() {
	return (
		<>
			<div className="container-page py-8 sm:py-10">
				<nav aria-label="Breadcrumb" className="mb-6">
					<ol className="flex items-center gap-1.5 text-sm text-brand-900/55">
						<li>
							<Link href="/" className="hover:text-brand-700">
								Home
							</Link>
						</li>
						<ChevronRight aria-hidden className="size-3.5" />
						<li aria-current="page" className="font-medium text-brand-900">
							Our Maps
						</li>
					</ol>
				</nav>

				<h1 className="text-fluid-h2 text-center font-extrabold text-balance text-brand-950">
					Navigate with Ease — Explore Our Maps
				</h1>
				<p className="mx-auto mt-3 max-w-2xl text-center text-brand-900/65">
					All {ALL_MAPS.length} authority layout plans across{" "}
					{AREA_LIST.map((a) => a.name).join(", ")} — free to view and download
					at full resolution.
				</p>

				<ul className="mt-10 grid gap-6 sm:grid-cols-3">
					{AREA_LIST.map((area) => (
						<li key={area.slug}>
							<Link href={`/maps/${area.slug}`} className="group block">
								<span className="block overflow-hidden rounded-lg bg-white p-2 shadow-(--shadow-soft) ring-1 ring-sand-200 transition-shadow group-hover:shadow-(--shadow-lift)">
									{/* eslint-disable-next-line @next/next/no-img-element -- prebuilt webp thumbnail. */}
									<img
										src={thumbUrl(area.cover)}
										alt={`${area.name} master plan`}
										width={480}
										height={360}
										loading="lazy"
										decoding="async"
										className="aspect-4/3 w-full rounded-sm object-contain"
									/>
								</span>
								<span className="mt-3 flex items-center justify-center gap-2 rounded-full bg-brand-700 px-4 py-2.5 text-center text-sm font-semibold text-white transition-colors group-hover:bg-brand-800">
									{area.name}
									<span className="text-xs text-white/60 tabular-nums">
										{area.count}
									</span>
								</span>
							</Link>
						</li>
					))}
				</ul>
			</div>

			<JsonLd
				data={breadcrumbs([
					{ name: "Home", path: "/" },
					{ name: "Our Maps", path: "/maps" },
				])}
			/>

			<ContactSection />
		</>
	);
}
