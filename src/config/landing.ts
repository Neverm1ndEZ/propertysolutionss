import type { SiteKey } from "@/config/sites";

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

const GREATER_NOIDA: LandingPage[] = [
	{
		slug: "land-in-greater-noida",
		area: "greaterNoida",
		title: "Land in Greater Noida",
		description:
			"Buy land in Greater Noida with Property Solutions, property dealers in Greater Noida since 2009. Residential, commercial and industrial plots, with every authority layout plan free to view.",
		h1: "Land in Greater Noida",
		h2: "Land in Greater Noida — check the layout plan before you buy.",
		body: [
			"Buying land in Greater Noida starts with the authority layout plan. It tells you the plot number, the plot size, the width of the road in front of it, and what the land beside it is reserved for. Get that wrong and you find out at registry, which is the expensive moment to find out.",
			"Property Solutions has dealt in Greater Noida land since 2009 — residential plots in the Alpha, Beta, Gamma, Delta, Omicron, Sigma and Zeta sectors, commercial plots along the belts, and industrial land in the Ecotech and Surajpur pockets. We handle both sale and purchase, and we will tell you plainly when a plot is not worth what is being asked.",
			"Every authority layout plan we hold is on this site, free to view and download at full resolution. Find your sector below, check the plot, then call us about what is actually available and what it should cost.",
		],
		highlights: [
			{
				title: "Residential plots",
				body: "Authority plots across the Greek-letter sectors and the villages around them.",
			},
			{
				title: "Commercial plots & shops",
				body: "Retail frontage on the commercial belts, with clear title and transfer support.",
			},
			{
				title: "6% Kisan Kota plots",
				body: "Farmer-quota plots, with full documentation assistance through the process.",
			},
			{
				title: "Clear documentation",
				body: "Title checks, transfer paperwork and a straight answer on what a plot is worth.",
			},
		],
	},
	{
		slug: "residential-plots-in-greater-noida",
		area: "greaterNoida",
		title: "Residential Plots in Greater Noida",
		description:
			"Residential plots for sale and purchase in Greater Noida. Check the authority layout plan for any sector free, then call Property Solutions for current availability.",
		h1: "Residential Plots in Greater Noida",
		h2: "Residential plots in Greater Noida — sector by sector.",
		body: [
			"Greater Noida's residential sectors are laid out by the authority in numbered and lettered pockets — Alpha, Beta, Gamma, Delta, Omicron, Sigma, Zeta, Chi-Phi, Eta and Mu, plus the P-series and the abadi extensions in the surrounding villages. Each has its own layout plan showing every plot.",
			"We deal in resale and fresh allotment plots across these sectors. Plot sizes run from small residential units through to larger corner and park-facing plots, and what is available changes week to week, which is why the honest answer to 'what do you have' is a phone call rather than a list that goes stale.",
			"Use the layout plans below to find the sector and plot you are interested in. Bring us the plot number and we will tell you what we know about it.",
		],
		highlights: [
			{
				title: "Every sector plan",
				body: "Authority layout plans for the full set of Greater Noida residential sectors.",
			},
			{
				title: "Resale and allotment",
				body: "Both fresh authority allotments and resale plots from existing owners.",
			},
			{
				title: "Plot-level detail",
				body: "Plot numbers, sizes, road widths and park frontage, straight off the plan.",
			},
			{
				title: "Since 2009",
				body: "Fifteen years dealing in the same sectors, so we know how they have moved.",
			},
		],
	},
	{
		slug: "industrial-land-in-greater-noida",
		area: "greaterNoida",
		title: "Industrial Land in Greater Noida",
		description:
			"Industrial land and factory plots in Greater Noida — Ecotech, Surajpur, Udyog Kendra and Sikandrabad. View the authority layout plan free and call Property Solutions.",
		h1: "Industrial Land in Greater Noida",
		h2: "Industrial land in Greater Noida — Ecotech, Surajpur and Udyog Kendra.",
		body: [
			"Greater Noida's industrial land sits mainly in the Ecotech sectors, the Surajpur sites, Udyog Vihar and Udyog Kendra, the EPIP export zone and the Sikandrabad industrial area. Each has an authority layout plan showing plot sizes, road widths and which zones are allotted to what.",
			"Industrial buying is a different exercise from residential. Plot size, road access for trucks, power availability and what sits on the adjoining plot all matter, and the layout plan answers most of those questions before you visit the site.",
			"We deal in factory plots, warehouse land and built industrial units across these pockets. The plans are below, free to download — call us once you know which plot you are asking about.",
		],
		highlights: [
			{
				title: "Ecotech sectors",
				body: "Layout plans for the full Ecotech series, including extensions.",
			},
			{
				title: "Surajpur sites",
				body: "Industrial and residential sites across the Surajpur belt.",
			},
			{
				title: "EPIP & Sikandrabad",
				body: "Export zone and Sikandrabad industrial area plans.",
			},
			{
				title: "Factory & warehouse",
				body: "Land for new build, plus existing sheds and units.",
			},
		],
	},
	{
		slug: "warehouse-in-greater-noida",
		area: "greaterNoida",
		title: "Warehouse in Greater Noida",
		description:
			"Warehouse land and godown space in Greater Noida — Ecotech, Surajpur and the Sikandrabad belt. Authority layout plans free to view, then call Property Solutions.",
		h1: "Warehouse in Greater Noida",
		h2: "Warehousing land in Greater Noida — logistics-ready plots.",
		body: [
			"Greater Noida's position between the Eastern Peripheral Expressway, the Noida–Greater Noida Expressway and the Yamuna Expressway makes it a practical warehousing base for Delhi NCR distribution. The industrial sectors carry plots suited to godowns and storage, with the road widths to match.",
			"What matters for warehousing is approach road width, turning space for container traffic, and the land use permitted on the plot. All three are on the authority layout plan, which is why we put every plan on this site rather than making you ask for one.",
			"We deal in warehouse land and existing godown space across the Ecotech, Surajpur and Sikandrabad belts. Check the plan, then call.",
		],
		highlights: [
			{
				title: "Expressway access",
				body: "Plots near the EPE, Noida–Greater Noida and Yamuna Expressway corridors.",
			},
			{
				title: "Road widths on plan",
				body: "Check approach width for container access before you visit.",
			},
			{
				title: "Land and built units",
				body: "Bare plots for new sheds, plus existing godown space.",
			},
			{
				title: "Industrial zoning",
				body: "Permitted use shown on the authority layout plan.",
			},
		],
	},
	{
		slug: "commercial-property-in-greater-noida",
		area: "greaterNoida",
		title: "Commercial Property in Greater Noida",
		description:
			"Commercial plots and shops in Greater Noida — commercial belts, markets and retail frontage. View authority layout plans free and call Property Solutions.",
		h1: "Commercial Property in Greater Noida",
		h2: "Commercial plots and shops in Greater Noida.",
		body: [
			"Greater Noida's commercial land sits on the designated commercial belts running through the residential sectors, plus the market pockets and the institutional and office areas. The authority layout plan marks commercial plots distinctly from residential, which is the first thing to check.",
			"Retail works on footfall and frontage. A shop on a 60-metre belt is a different asset from one inside a sector market, and the plan shows you which is which before you commit.",
			"We deal in commercial plots, shops and office space across Greater Noida. The plans are below — call us for what is on the market.",
		],
		highlights: [
			{
				title: "Commercial belts",
				body: "Frontage on the main commercial corridors through each sector.",
			},
			{
				title: "Shops & markets",
				body: "Retail units in sector markets and established commercial pockets.",
			},
			{
				title: "Zoning on plan",
				body: "Commercial plots marked distinctly on the authority layout.",
			},
			{
				title: "Sale & purchase",
				body: "Both sides of the transaction, with documentation support.",
			},
		],
	},
	{
		slug: "about-greater-noida",
		area: "greaterNoida",
		title: "About Greater Noida",
		description:
			"Greater Noida — a planned city in Gautam Buddh Nagar, Uttar Pradesh, developed by GNIDA. Sectors, connectivity and where the authority layout plans fit in.",
		h1: "About Greater Noida",
		h2: "Greater Noida — a planned city, sector by sector.",
		body: [
			"Greater Noida is a planned city in Gautam Buddh Nagar district, Uttar Pradesh, developed by the Greater Noida Industrial Development Authority (GNIDA). Unlike cities that grew outward over time, it was laid out on a grid in advance, which is why every sector has a published layout plan showing each individual plot.",
			"Residential sectors carry Greek-letter names — Alpha, Beta, Gamma, Delta, Omicron, Sigma, Zeta, Chi, Phi, Eta and Mu — alongside numbered sectors and the P-series pockets. Industrial land sits in the Ecotech series, Surajpur and the Udyog areas. Institutional land is grouped in the Knowledge Park sectors.",
			"Connectivity runs through the Noida–Greater Noida Expressway, the Yamuna Expressway, the Eastern Peripheral Expressway and the Aqua Line metro via Pari Chowk, Alpha 1 and Delta 1. Gautam Buddha University, Sharda, Amity and Galgotias sit inside the city.",
			"Because the city is planned, the layout plan is the document that matters when buying. Every plan we hold is on this site, free.",
		],
		highlights: [
			{
				title: "GNIDA planned",
				body: "Laid out on a grid, with a published layout plan for every sector.",
			},
			{
				title: "Metro & expressways",
				body: "Aqua Line via Pari Chowk, plus three expressway corridors.",
			},
			{
				title: "Education hub",
				body: "Gautam Buddha, Sharda, Amity and Galgotias universities.",
			},
			{
				title: "Industry & institutions",
				body: "Ecotech industrial sectors and the Knowledge Park belt.",
			},
		],
	},
];

const YAMUNA: LandingPage[] = [
	{
		slug: "yamuna-expressway-plots",
		area: "yamunaExpressway",
		title: "Yamuna Expressway Plots",
		description:
			"YEIDA plots on the Yamuna Expressway near Jewar Airport. Residential, commercial and industrial. Authority layout plans free to view, then call Property Solutions.",
		h1: "Yamuna Expressway Plots",
		h2: "YEIDA plots on the Yamuna Expressway — check the layout plan first.",
		body: [
			"Plots along the Yamuna Expressway are allotted by the Yamuna Expressway Industrial Development Authority (YEIDA), sector by sector, with each sector broken into lettered and numbered parts. Sector 18 alone runs from Part-1A through Part-7F, and each part has its own layout plan.",
			"That granularity matters. Two plots in the same sector can sit in completely different pockets with different plot sizes and different road frontage. The part number is what identifies your plot, and the layout plan is where you check it.",
			"Property Solutions deals in YEIDA residential, commercial and industrial plots, including the 7% and 6% abadi plots in the surrounding villages. Every plan we hold is below, free to download.",
		],
		highlights: [
			{
				title: "Sector 18 & 20",
				body: "Full part-by-part layout plans, from Part-1A through Part-7F.",
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
			"Every YEIDA layout plan we hold is on this site, free to view and download. Find your sector and part below.",
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
			"YEIDA's residential plots are concentrated in Sector 18 and Sector 20, each divided into parts running from 1A through to the 7-series, plus pockets numbered separately. Plot sizes are standardised by pocket, which the layout plan sets out alongside every plot number.",
			"Alongside the authority sectors sit the 7% abadi plots released to villages whose land was acquired — Niloni Shahpur, Mirjapur, Rampur Bangar, Acheja Bujarg, Dungarpur Reelka and others. These are a different purchase with different paperwork.",
			"Find your sector and part below. Every plan is free to view and download at full resolution.",
		],
		highlights: [
			{
				title: "Sector 18 parts",
				body: "Part-1A through Part-7F, each with its own layout plan.",
			},
			{
				title: "Sector 20 parts",
				body: "Part-A through Part-U, pocket by pocket.",
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
			"YEIDA sectors are divided into parts and pockets more finely than Greater Noida's — Sector 18 alone runs from Part-1A to Part-7F. The part number, not just the sector, identifies a plot.",
			"Beyond the authority sectors, 7% and 6% abadi plots have been released to villages whose land was acquired. Both routes are live markets, and both are on the layout plans below.",
		],
		highlights: [
			{
				title: "YEIDA planned",
				body: "Sector-by-sector layout plans, divided into parts and pockets.",
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

const BY_SITE: Record<SiteKey, LandingPage[]> = {
	"greater-noida": GREATER_NOIDA,
	yamuna: YAMUNA,
};

export const landingPagesFor = (site: SiteKey) => BY_SITE[site];
