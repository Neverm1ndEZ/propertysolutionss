import type { AreaKey } from "../lib/maps.ts";

/**
 * Two deployments, one codebase. `SITE` picks which config is active:
 *
 *   Vercel project A -> SITE=greater-noida -> propertyssolution.com  (ss middle)
 *   Vercel project B -> SITE=yamuna        -> propertysolutionss.com (ss last)
 *
 * Both sites list every map, per the client. They differ by keyword focus and
 * by which region leads the ordering. Note this means the two domains publish
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

export type SiteKey = "greater-noida" | "yamuna";

export type SiteConfig = {
	key: SiteKey;
	domain: string;
	/** Map areas this site owns. No overlap between sites, by design. */
	areas: AreaKey[];
	/** Region name used throughout headings and metadata. */
	region: string;
	title: string;
	description: string;
	keywords: string[];
	heroHeadline: string;
	heroSubline: string;
	aboutLead: string;
	/** The other site, cross-linked in the header and footer. */
	sibling: { domain: string; region: string; label: string };
};

export const SITES: Record<SiteKey, SiteConfig> = {
	"greater-noida": {
		key: "greater-noida",
		domain: "propertyssolution.com",
		// Greater Noida first; this domain targets Greater Noida queries.
		areas: ["greaterNoida", "noidaExtension", "yamunaExpressway"],
		region: "Greater Noida",
		title: "Property Dealers in Greater Noida | Greater Noida Property Dealer",
		description:
			"Property Solutions is one of the leading property dealers in Greater Noida, specialising in residential, commercial and industrial properties across Greater Noida and Noida Extension. Browse and download every authority layout plan, free.",
		keywords: SHARED_KEYWORDS,
		heroHeadline: "Property Dealer in Greater Noida",
		heroSubline:
			"Residential, commercial and industrial plots across Greater Noida and Noida Extension — with every authority layout plan in one place.",
		aboutLead:
			"Property Solutions has handled the sale and purchase of plots across Greater Noida since 2009 — residential, commercial and industrial, from a single plot to a full factory site.",
		sibling: {
			domain: "propertysolutionss.com",
			region: "Yamuna Expressway",
			label: "Yamuna Expressway maps",
		},
	},

	yamuna: {
		key: "yamuna",
		domain: "propertysolutionss.com",
		// Yamuna first; this domain targets Yamuna Expressway queries.
		areas: ["yamunaExpressway", "greaterNoida", "noidaExtension"],
		region: "Yamuna Expressway",
		title: "Property Dealer in Yamuna Expressway | YEIDA Property Dealer",
		description:
			"Property Solutions is one of the leading property dealers on the Yamuna Expressway (YEIDA), specialising in residential, commercial and industrial plots around Jewar Airport. Browse and download every authority layout plan, free.",
		keywords: SHARED_KEYWORDS,
		heroHeadline: "Property Dealer in YEIDA",
		heroSubline:
			"Residential, commercial and industrial plots along the Yamuna Expressway and around Jewar Airport — with every YEIDA authority layout plan in one place.",
		aboutLead:
			"Property Solutions has handled the sale and purchase of plots along the Yamuna Expressway since 2009 — YEIDA sectors, Jewar Airport belt, residential through industrial.",
		sibling: {
			domain: "propertyssolution.com",
			region: "Greater Noida",
			label: "Greater Noida maps",
		},
	},
};

function resolve(): SiteConfig {
	const key = process.env.NEXT_PUBLIC_SITE as SiteKey | undefined;
	if (key && key in SITES) return SITES[key];
	if (key) {
		throw new Error(
			`NEXT_PUBLIC_SITE="${key}" is not a known site. Expected one of: ${Object.keys(SITES).join(", ")}`,
		);
	}
	// Unset (local dev, preview builds) -> Greater Noida.
	return SITES["greater-noida"];
}

export const SITE = resolve();
