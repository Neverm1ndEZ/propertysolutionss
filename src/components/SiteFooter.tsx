import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { ALL_MAPS, AREA_LIST } from "@/lib/maps";
import { LANDING_PAGES } from "@/config/landing";
import {
	ADDRESS,
	EMAIL,
	HOURS,
	PHONE,
	PHONE_HREF,
	SITE_NAME,
} from "@/lib/site";

export default function SiteFooter() {
	return (
		<footer className="bg-brand-950 text-white">
			<div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-6">
				<div className="sm:col-span-2 lg:col-span-1">
					<h2 className="text-lg font-bold tracking-tight">{SITE_NAME}</h2>
					<p className="mt-3 max-w-xs text-sm leading-relaxed text-white/60">
						Industrial, residential and commercial plots across Greater Noida,
						the Yamuna Expressway and Sikandrabad since 2009.
					</p>
				</div>

				<nav aria-labelledby="footer-maps">
					<h3
						id="footer-maps"
						className="text-xs font-semibold tracking-widest text-brand-400 uppercase"
					>
						Layout maps
					</h3>
					<ul className="mt-4 space-y-2.5 text-sm">
						{AREA_LIST.map((area) => (
							<li key={area.slug}>
								<Link
									href={`/maps/${area.slug}`}
									className="text-white/70 transition-colors hover:text-white"
								>
									{area.name}
								</Link>
							</li>
						))}
					</ul>
				</nav>

				<nav aria-labelledby="footer-buy">
					<h3
						id="footer-buy"
						className="text-xs font-semibold tracking-widest text-brand-400 uppercase"
					>
						What we deal in
					</h3>
					<ul className="mt-4 space-y-2.5 text-sm">
						{LANDING_PAGES.map((p) => (
							<li key={p.slug}>
								<Link
									href={`/${p.slug}`}
									className="text-white/70 transition-colors hover:text-white"
								>
									{p.title}
								</Link>
							</li>
						))}
					</ul>
				</nav>

				<nav aria-labelledby="footer-company">
					<h3
						id="footer-company"
						className="text-xs font-semibold tracking-widest text-brand-400 uppercase"
					>
						Company
					</h3>
					<ul className="mt-4 space-y-2.5 text-sm">
						{[
							{ href: "/", label: "Home" },
							{ href: "/about", label: "About us" },
							{ href: "/contact", label: "Contact" },
						].map((l) => (
							<li key={l.href}>
								<Link
									href={l.href}
									className="text-white/70 transition-colors hover:text-white"
								>
									{l.label}
								</Link>
							</li>
						))}
					</ul>
				</nav>

				{/* Two columns wide: at one, the email address and the opening hours
				    both wrapped onto a second line. */}
				<address className="text-sm not-italic lg:col-span-2">
					<h3 className="text-xs font-semibold tracking-widest text-brand-400 uppercase">
						Reach us
					</h3>
					<ul className="mt-4 space-y-3 text-white/70">
						<li className="flex gap-3">
							<MapPin aria-hidden className="mt-0.5 size-4 shrink-0 text-brand-400" />
							<span>{ADDRESS}</span>
						</li>
						<li className="flex gap-3">
							<Phone aria-hidden className="mt-0.5 size-4 shrink-0 text-brand-400" />
							<a href={PHONE_HREF} className="hover:text-white">
								{PHONE}
							</a>
						</li>
						<li className="flex gap-3">
							<Mail aria-hidden className="mt-0.5 size-4 shrink-0 text-brand-400" />
							<a href={`mailto:${EMAIL}`} className="hover:text-white">
								{EMAIL}
							</a>
						</li>
						<li className="flex gap-3">
							<Clock aria-hidden className="mt-0.5 size-4 shrink-0 text-brand-400" />
							<span>{HOURS}</span>
						</li>
					</ul>
				</address>
			</div>

			{/*
			 * Every map, tagged and linked, on every page — the same strip
			 * shivaassociates.co carry above their copyright line. It is the bulk
			 * of their internal linking: each of the 177 plans is one click from
			 * anywhere on the site, and each link carries the sector name as its
			 * anchor text.
			 */}
			<div className="border-t border-white/10">
				<div className="container-page grid gap-10 py-12 lg:grid-cols-2">
					{AREA_LIST.map((area) => {
						const maps = ALL_MAPS.filter((m) => m.area.slug === area.slug);
						return (
							<nav
								key={area.slug}
								aria-labelledby={`tags-${area.slug}`}
								className={area.count > 80 ? "lg:col-span-2" : undefined}
							>
								<h3
									id={`tags-${area.slug}`}
									className="text-xs font-semibold tracking-widest text-brand-400 uppercase"
								>
									{area.name} maps
									<span className="ml-2 text-white/35 tabular-nums">
										{area.count}
									</span>
								</h3>
								<ul className="mt-4 flex flex-wrap gap-2">
									{maps.map((map) => (
										<li key={map.id}>
											<Link
												href={`/maps/${area.slug}/${map.id}`}
												className="block rounded bg-white/5 px-2.5 py-1 text-[0.7rem] leading-tight font-medium text-white/65 ring-1 ring-white/10 transition-colors hover:bg-brand-700 hover:text-white hover:ring-brand-600"
											>
												{map.name}
											</Link>
										</li>
									))}
								</ul>
							</nav>
						);
					})}
				</div>
			</div>

			<div className="border-t border-white/10">
				<p className="container-page py-5 text-center text-xs text-white/45">
					© {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
				</p>
			</div>
		</footer>
	);
}
