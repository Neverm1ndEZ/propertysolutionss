"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, Menu, Phone, X } from "lucide-react";
import type { AreaSummary } from "@/lib/map-utils";
import { EMAIL, PHONE, PHONE_HREF } from "@/lib/site";
import CallbackForm from "@/components/CallbackForm";

/**
 * Yamuna-site header, modelled on shivaassociates.co: a thin utility strip with
 * email, phone and the request-a-callback box, then a solid nav bar with the
 * logo left and the active item in a filled box. Distinct from the Greater
 * Noida site's header, which follows shivaassociates.com instead.
 */
const NAV = [
	{ href: "/", label: "HOME" },
	{ href: "/maps", label: "OUR MAPS" },
	{ href: "/about", label: "ABOUT US" },
	{ href: "/contact", label: "CONTACT" },
];

export default function HeaderYamuna({ areas }: { areas: AreaSummary[] }) {
	const [open, setOpen] = useState(false);
	const pathname = usePathname();
	const [lastPath, setLastPath] = useState(pathname);
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
			<div ref={barRef}>
				{/* Utility strip */}
				<div className="border-b border-sand-200 bg-white">
					<div className="container-page relative flex flex-col gap-2 py-2 text-sm sm:flex-row sm:items-center sm:justify-between">
						<div className="flex flex-wrap items-center gap-x-6 gap-y-1">
							<a
								href={`mailto:${EMAIL}`}
								className="inline-flex min-w-0 items-center gap-2 text-brand-950/75 transition-colors hover:text-brand-700"
							>
								<Mail aria-hidden className="size-4 shrink-0 text-brand-600" />
								<span className="truncate">
									<span className="font-semibold">Email:-</span> {EMAIL}
								</span>
							</a>
							<a
								href={PHONE_HREF}
								className="inline-flex items-center gap-2 text-brand-950/75 transition-colors hover:text-brand-700"
							>
								<Phone aria-hidden className="size-4 shrink-0 text-brand-600" />
								<span>
									<span className="font-semibold">Call Us :-</span> {PHONE}
								</span>
							</a>
						</div>
						<div className="hidden sm:block">
							<CallbackForm variant="light" />
						</div>
					</div>
				</div>

				{/* Solid nav bar */}
				<div className="bg-brand-900 text-white">
					<div className="container-page flex items-center justify-between gap-4 py-2">
						<Link href="/" className="flex shrink-0 items-center gap-2.5">
							<Image
								src="/site-assets/logo.webp"
								alt="Property Solutions"
								width={120}
								height={80}
								priority
								className="h-11 w-auto bg-white/95 px-1.5 py-1 md:h-14"
							/>
							<span className="hidden text-sm leading-tight font-extrabold tracking-wide sm:block">
								PROPERTY
								<br />
								SOLUTIONS
							</span>
						</Link>

						<nav className="hidden items-center gap-2 md:flex">
							{NAV.map((item) => {
								const active = isActive(item.href);
									const href = item.href;
								return (
									<Link
										key={item.href}
										href={href}
										aria-current={active ? "page" : undefined}
										className={`px-6 py-3 text-sm font-bold tracking-wide transition-colors ${
											active
												? "bg-white text-brand-800"
												: "text-white/85 hover:bg-white/10"
										}`}
									>
										{item.label}
									</Link>
								);
							})}
						</nav>

						<button
							type="button"
							onClick={() => setOpen((v) => !v)}
							aria-expanded={open}
							aria-controls="mobile-nav"
							aria-label={open ? "Close menu" : "Open menu"}
							className="grid size-11 shrink-0 place-items-center rounded border border-white/25 transition-colors hover:bg-white/10 md:hidden"
						>
							{open ? (
								<X aria-hidden className="size-5" />
							) : (
								<Menu aria-hidden className="size-5" />
							)}
						</button>
					</div>
				</div>
			</div>

			<div
				id="mobile-nav"
				hidden={!open}
				className="max-h-[calc(100dvh-8rem)] overflow-y-auto overscroll-contain bg-brand-900 text-white shadow-(--shadow-lift) md:hidden"
			>
				<nav className="container-page flex flex-col py-2">
					{NAV.filter((i) => i.href !== "/maps").map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className={`px-4 py-3 text-base font-bold tracking-wide ${
								isActive(item.href) ? "bg-white text-brand-800" : "text-white/90"
							}`}
						>
							{item.label}
						</Link>
					))}
					<p className="mt-2 px-4 pt-2 text-xs font-bold tracking-widest text-brand-300">
						OUR MAPS
					</p>
					{areas.map((area) => (
						<Link
							key={area.slug}
							href={`/maps/${area.slug}`}
							className="flex items-center justify-between px-4 py-3 text-base text-white/90"
						>
							{area.name}
							<span className="text-xs text-white/50 tabular-nums">
								{area.count}
							</span>
						</Link>
					))}
					<div className="my-3 px-1">
						<CallbackForm />
					</div>
				</nav>
			</div>
		</header>
	);
}
