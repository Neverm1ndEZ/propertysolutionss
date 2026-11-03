import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { ALL_MAPS, AREA_LIST } from "@/lib/maps";
import MapGrid from "@/components/MapGrid";
import JsonLd, { breadcrumbs } from "@/components/JsonLd";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
	title: "Our Maps — All Layout Plans",
	description: `All ${ALL_MAPS.length} authority layout plans for Greater Noida, Noida Extension and the Yamuna Expressway, free to view and download at full resolution.`,
	alternates: { canonical: "/maps" },
};

/**
 * Every map on one page, across all three regions. The per-area pages still
 * exist for region-specific search; this is the "show me everything" view the
 * nav points at. Grid is 3 here and 4 everywhere else.
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

				<h1 className="text-fluid-h2 font-extrabold text-balance text-brand-950">
					Our Layout Maps
				</h1>
				<p className="mt-2 max-w-prose text-brand-900/65">
					All {ALL_MAPS.length} authority layout plans across{" "}
					{AREA_LIST.map((a) => a.name).join(", ")} — free to view and download
					at full resolution.
				</p>

				<ul className="mt-5 flex flex-wrap gap-2">
					{AREA_LIST.map((area) => (
						<li key={area.slug}>
							<Link
								href={`/maps/${area.slug}`}
								className="inline-flex items-center gap-2 rounded-full border border-sand-300 bg-white px-4 py-2 text-sm font-semibold text-brand-800 transition-colors hover:border-brand-400 hover:bg-brand-50"
							>
								{area.name}
								<span className="text-xs text-brand-900/45 tabular-nums">
									{area.count}
								</span>
							</Link>
						</li>
					))}
				</ul>

				<div className="mt-8">
											<MapGrid
							maps={ALL_MAPS}
							columns={3}
							searchLabel={`Search all ${ALL_MAPS.length} layout plans…`}
						/>
				</div>

				<JsonLd
					data={breadcrumbs([
						{ name: "Home", path: "/" },
						{ name: "Our Maps", path: "/maps" },
					])}
				/>
			</div>

			<ContactSection />
		</>
	);
}
