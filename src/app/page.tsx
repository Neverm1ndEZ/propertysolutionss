import { SITE } from "@/config/sites";
import HomeGreaterNoida from "@/components/gn/HomeGreaterNoida";
import HomeYamuna from "@/components/ym/HomeYamuna";

/**
 * The two sites have genuinely different home pages, each modelled on the
 * matching competitor site. Which one renders is a build-time constant, so the
 * unused tree is dropped from the bundle.
 */
export default function Home() {
	return SITE.key === "yamuna" ? <HomeYamuna /> : <HomeGreaterNoida />;
}
