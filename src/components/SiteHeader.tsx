"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import type { AreaSummary } from "@/lib/map-utils";
import { PHONE, PHONE_HREF } from "@/lib/site";
import CallbackForm from "@/components/CallbackForm";

/**
 * Header mirrors Shiva Associates': logo far left, large clickable phone number
 * far right, horizontal nav beneath it. Their palette is black/gold; this is the
 * white/green the client asked for.
 */
const NAV = [
	{ href: "/", label: "Home" },
	{ href: "/maps", label: "Maps" },
	{ href: "/about", label: "About Us" },
	{ href: "/contact", label: "Contact Us" },
];

export default function SiteHeader({ areas }: { areas: AreaSummary[] }) {
	const [open, setOpen] = useState(false);
	const pathname = usePathname();
	const [lastPath, setLastPath] = useState(pathname);

	// Close the sheet when the route changes. Adjusting during render avoids a
	// frame where the new page is shown with the old menu still open.
	if (pathname !== lastPath) {
		setLastPath(pathname);
		setOpen(false);
	}

	useEffect(() => {
		if (!open) return;
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);

	// Publish the measured header height so the sticky map search clears it.
	const barRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		const el = barRef.current;
		if (!el) return;
		const ro = new ResizeObserver(([entry]) => {
			document.documentElement.style.setProperty(
				"--header-h",
				`${Math.round(entry.contentRect.height)}px`,
			);
		});
		ro.observe(el);
		return () => ro.disconnect();
	}, []);

	const isActive = (href: string) =>
		href === "/"
			? pathname === "/"
			: href === "/maps"
				? pathname.startsWith("/maps")
				: pathname.startsWith(href);

	return (
		<header className="sticky top-0 z-50">
			<div ref={barRef} className="bg-white shadow-(--shadow-soft)">
				<div className="container-page flex items-center justify-between gap-4 py-3">
					<Link href="/" className="flex shrink-0 items-center gap-2.5">
						<Image
							src="/site-assets/logo.webp"
							alt="Property Solutions"
							width={120}
							height={80}
							priority
							className="h-12 w-auto md:h-16"
						/>
						<span className="hidden text-base leading-tight font-extrabold tracking-tight text-brand-900 sm:block md:text-lg">
							PROPERTY
							<br />
							SOLUTIONS
						</span>
					</Link>

					<div className="flex flex-col items-end gap-2">
						{/* The oversized phone number is the signature of their header. */}
						<a
							href={PHONE_HREF}
							className="flex items-center gap-2 text-brand-800 transition-colors hover:text-brand-600"
						>
							<Phone
								aria-hidden
								className="size-5 shrink-0 md:size-7"
								strokeWidth={2.5}
							/>
							<span className="text-lg font-extrabold tracking-tight tabular-nums sm:text-2xl md:text-3xl">
								{PHONE.replace("+91 ", "")}
							</span>
						</a>

						<nav className="hidden items-center gap-1 md:flex">
							{NAV.map((item) => (
								<Link
									key={item.href}
									href={item.href}
									aria-current={isActive(item.href) ? "page" : undefined}
									className={`rounded px-3 py-1.5 text-sm font-semibold transition-colors ${
										isActive(item.href)
											? "text-brand-700"
											: "text-brand-950/80 hover:text-brand-700"
									}`}
								>
									{item.label}
								</Link>
							))}
						</nav>
					</div>

					<button
						type="button"
						onClick={() => setOpen((v) => !v)}
						aria-expanded={open}
						aria-controls="mobile-nav"
						aria-label={open ? "Close menu" : "Open menu"}
						className="grid size-11 shrink-0 place-items-center rounded border border-sand-200 text-brand-900 transition-colors hover:bg-sand-100 md:hidden"
					>
						{open ? (
							<X aria-hidden className="size-5" />
						) : (
							<Menu aria-hidden className="size-5" />
						)}
					</button>
				</div>
			</div>

			<div
				id="mobile-nav"
				hidden={!open}
				className="max-h-[calc(100dvh-7rem)] overflow-y-auto overscroll-contain border-b border-sand-200 bg-white shadow-(--shadow-lift) md:hidden"
			>
				<nav className="container-page flex flex-col gap-1 py-4">
					{NAV.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className={`rounded px-4 py-3 text-base font-semibold transition-colors ${
								isActive(item.href)
									? "bg-brand-50 text-brand-800"
									: "text-brand-950/85 hover:bg-sand-100"
							}`}
						>
							{item.label}
						</Link>
					))}

					<p className="mt-3 px-4 text-xs font-bold tracking-widest text-brand-900/40 uppercase">
						Layout Maps
					</p>
					{areas.map((area) => (
						<Link
							key={area.slug}
							href={`/maps/${area.slug}`}
							className="flex items-center justify-between rounded px-4 py-3 text-base font-medium text-brand-950/85 transition-colors hover:bg-sand-100"
						>
							{area.name}
							<span className="text-xs text-brand-900/45 tabular-nums">
								{area.count}
							</span>
						</Link>
					))}

					<div className="mt-4 rounded-lg bg-brand-950 p-3">
						<CallbackForm />
					</div>
				</nav>
			</div>
		</header>
	);
}
