import type { AreaKey } from "@/lib/maps";

/**
 * "Nearby Locality Overview" data, matching the four-column block on Shiva
 * Associates' sector pages (connectivity / education / healthcare / projects).
 *
 * These are real landmarks for each region, listed at region level. We do not
 * claim a given landmark is nearest to a specific pocket — that would be
 * inventing facts we cannot verify for 176 individual plans.
 */

export type LocalityGroup = { title: string; items: string[] };

const GREATER_NOIDA: LocalityGroup[] = [
	{
		title: "Connectivity",
		items: [
			"Alpha 1 Metro Station",
			"Delta 1 Metro Station",
			"Pari Chowk Metro Station",
			"Noida–Greater Noida Expressway",
			"Yamuna Expressway",
		],
	},
	{
		title: "Education",
		items: [
			"Gautam Buddha University",
			"Sharda University",
			"Amity University",
			"Galgotias University",
			"Ryan International School",
		],
	},
	{
		title: "Healthcare",
		items: [
			"Kailash Hospital",
			"Sharda Hospital",
			"Yatharth Hospital",
			"Navin Hospital",
			"Government Institute of Medical Sciences",
		],
	},
	{
		title: "Landmarks",
		items: [
			"Pari Chowk",
			"The Grand Venice Mall",
			"Ansal Golf Links",
			"Jagat Farm Market",
			"Buddh International Circuit",
		],
	},
];

const YAMUNA: LocalityGroup[] = [
	{
		title: "Connectivity",
		items: [
			"Noida International Airport, Jewar",
			"Yamuna Expressway",
			"Eastern Peripheral Expressway",
			"Proposed Orbital Rail Corridor",
			"Pari Chowk interchange",
		],
	},
	{
		title: "Education",
		items: [
			"Gautam Buddha University",
			"Galgotias University",
			"Sharda University",
			"GL Bajaj Institute",
			"Noida International University",
		],
	},
	{
		title: "Healthcare",
		items: [
			"Kailash Hospital, Greater Noida",
			"Sharda Hospital",
			"Yatharth Hospital",
			"Government Institute of Medical Sciences",
			"Proposed medical device park facilities",
		],
	},
	{
		title: "Landmarks",
		items: [
			"Jewar Airport site",
			"Buddh International Circuit",
			"Jaypee Sports City",
			"Film City, Sector 21",
			"Night Safari site",
		],
	},
];

const NOIDA_EXTENSION: LocalityGroup[] = [
	{
		title: "Connectivity",
		items: [
			"Noida–Greater Noida Link Road",
			"Sector 51 / 52 Metro interchange",
			"FNG Expressway (proposed)",
			"Eastern Peripheral Expressway",
			"Noida–Greater Noida Expressway",
		],
	},
	{
		title: "Education",
		items: [
			"Ryan International School",
			"Delhi Public School, Greater Noida",
			"Lotus Valley International",
			"Amity University",
			"Galgotias University",
		],
	},
	{
		title: "Healthcare",
		items: [
			"Yatharth Hospital",
			"Numed Hospital",
			"Prakash Hospital",
			"Kailash Hospital",
			"Fortis Hospital, Noida",
		],
	},
	{
		title: "Landmarks",
		items: [
			"Gaur City Mall",
			"Ek Murti Chowk",
			"Charmwood Chowk",
			"Nikhil Vihar Market",
			"Gaur Chowk",
		],
	},
];

const BY_AREA: Record<AreaKey, LocalityGroup[]> = {
	greaterNoida: GREATER_NOIDA,
	yamunaExpressway: YAMUNA,
	noidaExtension: NOIDA_EXTENSION,
};

export const localityFor = (area: AreaKey) => BY_AREA[area];

/**
 * Google Maps embed for a place search. The `output=embed` form needs no API
 * key; the query is the sector/village name plus its region, so the pin lands
 * on the real place rather than a coordinate we guessed.
 */
export const mapEmbedUrl = (name: string, region: string) =>
	`https://www.google.com/maps?q=${encodeURIComponent(`${name}, ${region}, Uttar Pradesh`)}&output=embed`;
