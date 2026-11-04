import Image from "next/image";
import Link from "next/link";
import { ALL_MAPS, AREA_LIST } from "@/lib/maps";
import { thumbUrl } from "@/lib/map-utils";
import { SITE_NAME } from "@/lib/site";
import MapCard from "@/components/MapCard";
import ContactSection from "@/components/ContactSection";

/**
 * Yamuna home page, modelled on shivaassociates.co: a stacked centred hero of
 * decreasing lines, an authority logo strip, then OUR MAPS with the label bar
 * sitting *above* each card and one large featured plan underneath.
 *
 * Deliberately a different shape from the Greater Noida site, which follows
 * shivaassociates.com.
 */

/**
 * The client's own front-page wording, from his handwritten note (Nov 2026):
 * the name, the YEIDA / Jewar City dealer line, the two service lines, the
 * region line, then the Greater Noida dealer line last. `lead` lines get the
 * larger green treatment; the pipe lines sit under them.
 */
const HERO_LINES: { text: string; lead?: boolean }[] = [
	{ text: "Property Dealer in YEIDA (Yamuna Expressway) | Jewar City", lead: true },
	{ text: "SALE  |  PURCHASE  |  LEASING" },
	{ text: "INDUSTRY  |  RESIDENTIAL PLOTS  |  WAREHOUSING" },
	{ text: "GREATER NOIDA  |  YEIDA  |  NOIDA" },
	{ text: "Property Dealer in Greater Noida", lead: true },
];

const AUTHORITIES = ["YEIDA", "GREATER NOIDA", "NOIDA", "UPSIDA", "JAYPEE GREENS"];

const FEATURED = [...ALL_MAPS].sort(() => Math.random() - 0.5).slice(0, 8);

export default function HomeYamuna() {
	const headline = ALL_MAPS.find((m) => /MASTER PLAN YAMUNA/i.test(m.name));

	return (
		<>
			{/* Stacked hero */}
			<section className="relative isolate flex min-h-[64svh] items-center overflow-hidden">
				<Image
					src="/site-assets/hero-1920.webp"
					alt=""
					fill
					priority
					fetchPriority="high"
					sizes="100vw"
					className="-z-10 object-cover"
				/>
				<div className="absolute inset-0 -z-10 bg-brand-950/75" />

				<div className="container-page py-12 text-center text-white sm:py-16">
					{/* The home page's only h1 — it was a <p>, which left the page with
					    no h1 at all. */}
					<h1 className="text-fluid-hero font-extrabold tracking-tight uppercase">
						{SITE_NAME}
					</h1>
					{HERO_LINES.map((line) => (
						<p
							key={line.text}
							className={
								line.lead
									? "mt-4 text-xl font-bold tracking-wide text-balance text-brand-200 sm:text-3xl"
									: "mt-3 text-sm font-semibold tracking-wide text-balance text-white/80 uppercase sm:text-lg"
							}
						>
							{line.text}
						</p>
					))}
				</div>
			</section>

			{/* Authority strip */}
			<section className="border-y border-sand-200 bg-white py-6">
				<h2 className="sr-only">Development authorities we work with</h2>
				<ul className="container-page flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
					{AUTHORITIES.map((a) => (
						<li
							key={a}
							className="text-sm font-extrabold tracking-widest text-brand-800/70 sm:text-base"
						>
							{a}
						</li>
					))}
				</ul>
			</section>

			{/* OUR MAPS — label bar above each card */}
			<section className="bg-sand-100 py-10 sm:py-12">
				<div className="container-page">
					<h2 className="text-fluid-h2 text-center font-extrabold tracking-wide text-brand-950 uppercase">
						Our Maps
					</h2>
					<ul className="mx-auto mt-9 grid max-w-6xl gap-7 sm:grid-cols-2">
						{AREA_LIST.map((area) => (
							<li key={area.slug}>
								<Link href={`/maps/${area.slug}`} className="group block">
									<span className="block bg-brand-900 px-4 py-3 text-center text-sm font-extrabold tracking-wide text-brand-200 uppercase transition-colors group-hover:bg-brand-800 sm:text-base">
										{area.name} Map
									</span>
									<span className="block border-4 border-brand-700 bg-white p-2">
										{/* eslint-disable-next-line @next/next/no-img-element -- prebuilt webp thumbnail. */}
										<img
											src={thumbUrl(area.cover)}
											alt={`${area.name} layout map`}
											width={480}
											height={360}
											loading="lazy"
											decoding="async"
											className="aspect-4/3 w-full object-contain transition-transform duration-500 group-hover:scale-105"
										/>
									</span>
								</Link>
							</li>
						))}
					</ul>

					{/* One large featured plan, as on their page */}
					{headline && (
						<Link
							href={`/maps/${headline.area.slug}/${headline.id}`}
							className="group mt-10 block"
						>
							<span className="block border-4 border-brand-700 bg-white p-2">
								{/* eslint-disable-next-line @next/next/no-img-element -- prebuilt webp thumbnail. */}
								<img
									src={thumbUrl(headline.imageUrl)}
									alt={headline.name}
									width={480}
									height={360}
									loading="lazy"
									decoding="async"
									className="w-full object-contain"
								/>
							</span>
							<span className="block bg-brand-900 px-4 py-3 text-center text-sm font-bold text-white transition-colors group-hover:bg-brand-800">
								{headline.name}
							</span>
						</Link>
					)}
				</div>
			</section>

			{/* Featured plans + enquiry */}
			<section className="container-page py-10 sm:py-12">
				<div>
					<h2 className="text-fluid-h2 font-extrabold tracking-wide text-brand-950 uppercase">
						Layout Plans
					</h2>
					<p className="mt-2 text-sm text-brand-900/65">
						{ALL_MAPS.length} authority layout plans, free to view and download.
					</p>
					<div className="mt-7 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
						{FEATURED.map((map) => (
							<MapCard key={map.id} map={map} areaSlug={map.area.slug} />
						))}
					</div>
				</div>
			</section>

			<ContactSection />
		</>
	);
}
