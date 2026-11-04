/**
 * Keyword landing pages, mirroring the ones Shiva Associates run at root level
 * (/land-in-greater-noida, /industrial-land-in-greater-noida, …). Those pages
 * are a real part of why they rank: a flat, keyword-matched URL with the term
 * in the title, h1 and h2.
 *
 * Copy here is original. The services listed come from the client's own brief
 * (residential plots, shops, commercial plots, 6% Kisan Kota, industrial land
 * and warehousing) rather than from a competitor's inventory claims.
 */

export type LandingPage = {
	slug: string;
	/** Which map area to surface at the bottom of the page. */
	area: "greaterNoida" | "yamunaExpressway" | "noidaExtension";
	title: string;
	description: string;
	h1: string;
	h2: string;
	body: string[];
	/** Short bullet list rendered as a highlights block. */
	highlights: { title: string; body: string }[];
};

export const LANDING_PAGES: LandingPage[] = [
	{
		slug: "yamuna-expressway-plots",
		area: "yamunaExpressway",
		title: "Yamuna Expressway Plots",
		description:
			"YEIDA plots on the Yamuna Expressway near Jewar Airport. Residential, commercial and industrial. Authority layout plans free to view, then call Property Solutions.",
		h1: "Yamuna Expressway Plots",
		h2: "YEIDA plots on the Yamuna Expressway — check the layout plan first.",
		body: [
			"Plots along the Yamuna Expressway are allotted by the Yamuna Expressway Industrial Development Authority (YEIDA), sector by sector, with each sector broken into lettered and numbered pockets. Sector 18 alone runs from Pocket-1A through Pocket-7F, and each pocket has its own layout plan.",
			"That granularity matters. Two plots in the same sector can sit in completely different pockets with different plot sizes and different road frontage. The pocket number is what identifies your plot, and the layout plan is where you check it.",
			"Property Solutions deals in YEIDA residential, commercial and industrial plots, including the 7% and 6% abadi plots in the surrounding villages. Every plan we hold is below, free to download.",
		],
		highlights: [
			{
				title: "Sector 18 & 20",
				body: "Full pocket-by-pocket layout plans, from Pocket-1A through Pocket-7F.",
			},
			{
				title: "7% & 6% abadi plots",
				body: "Village abadi plots with documentation support through the process.",
			},
			{
				title: "Jewar Airport belt",
				body: "Sectors around the Noida International Airport site.",
			},
			{
				title: "Residential to industrial",
				body: "Plots across every YEIDA land-use category.",
			},
		],
	},
	{
		slug: "land-in-yamuna-expressway",
		area: "yamunaExpressway",
		title: "Land in Yamuna Expressway",
		description:
			"Buy land on the Yamuna Expressway (YEIDA) — residential, commercial and industrial plots near Jewar Airport. Free authority layout plans from Property Solutions.",
		h1: "Land in Yamuna Expressway",
		h2: "Land along the Yamuna Expressway — YEIDA sectors and village abadi.",
		body: [
			"The Yamuna Expressway corridor has moved faster than any other belt in the region since the Noida International Airport at Jewar was confirmed. Land here splits into YEIDA authority sectors and the 7% and 6% abadi plots released to villages whose land was acquired.",
			"The two are different purchases with different paperwork. Authority plots come with allotment documentation; abadi plots come through the village route and need more careful title work. We deal in both and will tell you which one you are actually looking at.",
			"Every YEIDA layout plan we hold is on this site, free to view and download. Find your sector and pocket below.",
		],
		highlights: [
			{
				title: "YEIDA sectors",
				body: "Authority-allotted plots across the Yamuna Expressway sectors.",
			},
			{
				title: "Village abadi plots",
				body: "7% and 6% plots released against acquired village land.",
			},
			{
				title: "Title checking",
				body: "Careful documentation work, especially on the abadi route.",
			},
			{
				title: "Airport corridor",
				body: "Sectors along the Jewar Airport and expressway belt.",
			},
		],
	},
	{
		slug: "industrial-land-in-yamuna-expressway",
		area: "yamunaExpressway",
		title: "Industrial Land in Yamuna Expressway",
		description:
			"Industrial land and factory plots on the Yamuna Expressway (YEIDA) near Jewar Airport. Authority layout plans free to view from Property Solutions.",
		h1: "Industrial Land in Yamuna Expressway",
		h2: "YEIDA industrial land — Sector 29, 32, 33 and the airport belt.",
		body: [
			"YEIDA's industrial sectors sit along the expressway with direct access to the Jewar Airport belt and the Eastern Peripheral Expressway. Sector 29 and the surrounding numbered sectors carry industrial allotments, with plot sizes running from small units to multi-acre parcels.",
			"For industry, the questions are plot size, approach road width, power and what the adjoining land use is. All of that is on the authority layout plan, which is why we publish every plan we hold rather than making you request one.",
			"We deal in YEIDA industrial plots and warehousing land. Check the plan below, then call us about availability.",
		],
		highlights: [
			{
				title: "Industrial sectors",
				body: "Sector 29 and the surrounding industrial allotment belt.",
			},
			{
				title: "Airport proximity",
				body: "Plots along the Noida International Airport corridor.",
			},
			{
				title: "Expressway logistics",
				body: "Yamuna Expressway and Eastern Peripheral access.",
			},
			{
				title: "Plot sizes on plan",
				body: "Sizes, road widths and zoning straight off the authority layout.",
			},
		],
	},
	{
		slug: "warehouse-in-yamuna-expressway",
		area: "yamunaExpressway",
		title: "Warehouse in Yamuna Expressway",
		description:
			"Warehouse and logistics land on the Yamuna Expressway (YEIDA), near Jewar Airport and the Eastern Peripheral Expressway. Free layout plans from Property Solutions.",
		h1: "Warehouse in Yamuna Expressway",
		h2: "Warehousing land on the Yamuna Expressway corridor.",
		body: [
			"The Yamuna Expressway is becoming a logistics corridor on the back of the Jewar airport build and the Eastern Peripheral Expressway interchange. Warehousing land here is allotted through YEIDA in the industrial sectors.",
			"For a godown, approach road width and container turning space decide whether a plot works at all. The authority layout plan shows road widths for every plot, so that question is answerable before you travel to site.",
			"We deal in warehouse land and built storage along the corridor. The plans are below, free.",
		],
		highlights: [
			{
				title: "Airport cargo belt",
				body: "Land near the Noida International Airport cargo corridor.",
			},
			{
				title: "EPE interchange",
				body: "Eastern Peripheral Expressway access for NCR distribution.",
			},
			{
				title: "Road widths on plan",
				body: "Check container access before committing to a site visit.",
			},
			{
				title: "Land & built units",
				body: "Bare plots for new sheds, plus existing storage.",
			},
		],
	},
	{
		slug: "residential-plots-in-yeida",
		area: "yamunaExpressway",
		title: "Residential Plots in YEIDA",
		description:
			"YEIDA residential plots on the Yamuna Expressway — Sector 18, Sector 20 and the village abadi belt. Authority layout plans free from Property Solutions.",
		h1: "Residential Plots in YEIDA",
		h2: "YEIDA residential plots — Sector 18, Sector 20 and village abadi.",
		body: [
			"YEIDA's residential plots are concentrated in Sector 18 and Sector 20, each divided into pockets running from 1A through to the 7-series. Plot sizes are standardised by pocket, which the layout plan sets out alongside every plot number.",
			"Alongside the authority sectors sit the 7% abadi plots released to villages whose land was acquired — Niloni Shahpur, Mirjapur, Rampur Bangar, Acheja Bujarg, Dungarpur Reelka and others. These are a different purchase with different paperwork.",
			"Find your sector and pocket below. Every plan is free to view and download at full resolution.",
		],
		highlights: [
			{
				title: "Sector 18 pockets",
				body: "Pocket-1A through Pocket-7F, each with its own layout plan.",
			},
			{
				title: "Sector 20 pockets",
				body: "Pocket-A through Pocket-U, pocket by pocket.",
			},
			{
				title: "7% abadi villages",
				body: "Village plots across the acquired-land belt.",
			},
			{
				title: "Standardised sizes",
				body: "Plot sizes set by pocket and shown on the plan.",
			},
		],
	},
	{
		slug: "about-yamuna-expressway",
		area: "yamunaExpressway",
		title: "About Yamuna Expressway",
		description:
			"The Yamuna Expressway and YEIDA — a planned development belt from Greater Noida toward Agra, anchored by Noida International Airport at Jewar.",
		h1: "About Yamuna Expressway",
		h2: "The Yamuna Expressway and YEIDA — a planned corridor.",
		body: [
			"The Yamuna Expressway runs from Greater Noida toward Agra, and the land along it is planned and allotted by the Yamuna Expressway Industrial Development Authority (YEIDA). Like Greater Noida, it is a planned belt — every sector has a published layout plan showing individual plots.",
			"The corridor's anchor is Noida International Airport at Jewar. Around it sit Jaypee Sports City and the Buddh International Circuit, the proposed Film City in Sector 21, and industrial sectors aimed at electronics, apparel and medical devices.",
			"YEIDA sectors are divided into pockets more finely than Greater Noida's — Sector 18 alone runs from Pocket-1A to Pocket-7F. The pocket number, not just the sector, identifies a plot.",
			"Beyond the authority sectors, 7% and 6% abadi plots have been released to villages whose land was acquired. Both routes are live markets, and both are on the layout plans below.",
		],
		highlights: [
			{
				title: "YEIDA planned",
				body: "Sector-by-sector layout plans, divided into pockets.",
			},
			{
				title: "Jewar Airport",
				body: "Noida International Airport anchors the corridor.",
			},
			{
				title: "Sports & film city",
				body: "Buddh International Circuit, Jaypee Sports City, Film City Sector 21.",
			},
			{
				title: "Abadi plot belt",
				body: "7% and 6% village plots alongside authority allotments.",
			},
		],
	},
];
