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
	aboutLead:
		"Property Solutions has handled the sale and purchase of plots along the Yamuna Expressway since 2009 — YEIDA sectors, Jewar Airport belt, residential through industrial.",
	sibling: {
		domain: "propertyssolution.com",
		region: "Greater Noida",
		label: "Greater Noida maps",
	},
};
