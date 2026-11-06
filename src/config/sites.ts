import type { AreaKey } from "../lib/maps.ts";

/**
 * Config for propertysolutionss.com (ss at the end) — the Yamuna Expressway site.
 * The sibling site lives in its own repo.
 *
 * Both sites list every map, per the client. They differ by design, keyword
 * focus and which region leads the ordering. That means the two domains publish
 * the same map pages, so Google will pick one and discount the other's copies —
 * flagged to the client, who chose this.
 */

/**
 * Competitor keyword set (Shiva Associates' own meta keywords), rebranded.
 * Used on both sites per the client's instruction. Titles and H1s still differ
 * per region so the two domains do not compete head-on for the same query.
 */
const SHARED_KEYWORDS = [
	"Greater Noida Property Dealers",
	"Best Property Dealer in Greater Noida",
	"Yamuna Expressway Property Dealer",
	"Property Dealers In Noida",
	"Real Estate Agents In Noida",
	"Property Dealers in Greater Noida West",
	"Real Estate Agents in Greater Noida",
	"Property Dealer in YEIDA",
	"Greater Noida layout plan",
	"Yamuna Expressway layout plan",
	"Noida sector map",
];

export const SITE = {
	key: "yamuna",
	domain: "propertysolutionss.com",
	// Yamuna first; this domain targets Yamuna Expressway queries.
	areas: ["yamunaExpressway", "greaterNoida", "noidaExtension"] as AreaKey[],
	region: "Yamuna Expressway",
	title: "Property Dealer in Yamuna Expressway | YEIDA Property Dealer",
	description:
		"Property Solutions is one of the leading property dealers on the Yamuna Expressway (YEIDA), specialising in residential, commercial and industrial plots around Jewar Airport. Browse and download every authority layout plan, free.",
	keywords: SHARED_KEYWORDS,
	/** The line under the name in the contact band; client's own wording. */
	tagline: "Property Dealer in Yamuna Expressway | Jewar City",
	heroHeadline: "Property Solutions",
	// The regions, as the client writes them.
	heroRegions: "Greater Noida • Noida • YEIDA (Yamuna Expressway)",
	heroTagline:
		"From homes to industries, we help you find your perfect space.",
	heroSubline:
		"Residential, commercial and industrial plots along the Yamuna Expressway and around Jewar Airport — with every YEIDA authority layout plan in one place.",
	/**
	 * The region-specific block on /about. Each domain argues its own belt here
	 * so the two About pages are not the same page twice.
	 */
	aboutFocus: {
		heading: "Property Dealers in Yamuna Expressway",
		paragraphs: [
			"The Yamuna Expressway belt is this domain's home ground. As property dealers in Yamuna Expressway and a property dealer of YEIDA Authority land, we work the residential sectors from 16 through 33, the institutional and industrial pockets beside them, and the villages whose 6% and 7% abadi plots sit between the sectors.",
			"Jewar changed this belt. The airport pulled demand, rates and timelines forward across every YEIDA sector, and it also pulled in a great deal of noise — plots sold on a story about a road that is not cut yet, or a sector that is still a line on a map. As a property dealer in Jewar we deal in what the authority has actually allotted and what is actually transacting, and we will say plainly when a Yamuna Expressway plot is priced on hope rather than on evidence.",
			"YEIDA divides its sectors far more finely than Greater Noida does — Sector 18 alone runs from Pocket-1A through Pocket-7F, and the pocket, not just the sector, is what identifies your plot. Plot sizes are standardised by pocket, which the layout plan sets out alongside every plot number. Every one of those plans is on this site, free, so a plot for sale in Yamuna Expressway can be checked before a rupee moves.",
			"Alongside residential, we handle industrial land for sale and warehousing land for sale along the expressway corridor, where the logistics demand around the airport sits, plus freehold parcels and the Kisan Abadi plots in the surrounding villages.",
		],
	},
	aboutLead:
		"Property Solutions has handled the sale and purchase of plots along the Yamuna Expressway since 2009 — YEIDA sectors, Jewar Airport belt, residential through industrial.",
	sibling: {
		domain: "propertyssolution.com",
		region: "Greater Noida",
		label: "Greater Noida maps",
	},
};
