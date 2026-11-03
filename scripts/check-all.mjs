// Runs the map-data checks for every site and exits non-zero if any fail.
// Keeps the failure visible — a per-site loop is easy to accidentally silence.
import { spawnSync } from "node:child_process";

const SITES = ["greater-noida", "yamuna"];
let failed = 0;

for (const site of SITES) {
	const r = spawnSync(
		process.execPath,
		["--experimental-strip-types", "scripts/check-maps.mjs"],
		{ stdio: "inherit", env: { ...process.env, NEXT_PUBLIC_SITE: site } },
	);
	if (r.status !== 0) {
		console.error(`FAILED: ${site}`);
		failed++;
	}
}

process.exit(failed ? 1 : 0);
