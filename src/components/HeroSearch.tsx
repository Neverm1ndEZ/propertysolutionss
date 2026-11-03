"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Search } from "lucide-react";

/**
 * Hero search, as on Shiva Associates' home page. Theirs searches properties;
 * ours searches the layout plans, which is what this client's visitors actually
 * come for. Submits to the area grid, which reads `?q=` on load.
 */
export default function HeroSearch({ areaSlug }: { areaSlug: string }) {
	const router = useRouter();
	const [q, setQ] = useState("");

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				const query = q.trim();
				router.push(
					query ? `/maps/${areaSlug}?q=${encodeURIComponent(query)}` : `/maps/${areaSlug}`,
				);
			}}
			role="search"
			className="mx-auto mt-8 flex w-full max-w-xl items-center gap-2 rounded-full bg-white p-1.5 shadow-(--shadow-lift)"
		>
			<label htmlFor="hero-search" className="sr-only">
				Search layout plans by sector or village
			</label>
			<Search aria-hidden className="ml-3 size-4 shrink-0 text-brand-900/40" />
			<input
				id="hero-search"
				type="search"
				value={q}
				onChange={(e) => setQ(e.target.value)}
				placeholder="Search maps by sector, village or pocket…"
				className="min-w-0 flex-1 bg-transparent py-2 text-sm text-brand-950 outline-none placeholder:text-brand-900/40"
			/>
			<button
				type="submit"
				className="shrink-0 rounded-full bg-brand-700 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-800"
			>
				Search
			</button>
		</form>
	);
}
