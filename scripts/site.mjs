// Runs a Next command with NEXT_PUBLIC_SITE set, cross-platform.
//
//   node scripts/site.mjs <greater-noida|yamuna> <dev|build|start> [...args]
//
// `FOO=bar next dev` does not work in npm scripts on Windows (they run through
// cmd.exe), and each site also needs its own port and build directory so the two
// can run side by side without fighting over .next.
import { spawn } from "node:child_process";
import { createRequire } from "node:module";

const [site, command, ...rest] = process.argv.slice(2);

const SITES = {
	"greater-noida": { port: "3000" },
	yamuna: { port: "3001" },
};

if (!SITES[site] || !command) {
	console.error(
		`usage: node scripts/site.mjs <${Object.keys(SITES).join("|")}> <dev|build|start> [args]`,
	);
	process.exit(1);
}

// Resolve Next's CLI entry and run it with plain `node`. Spawning the `.cmd`
// shim instead fails with EINVAL on Windows under Node 20+.
const require = createRequire(import.meta.url);
const nextBin = require.resolve("next/dist/bin/next");

// Only dev and start listen on a port; build rejects -p.
const portArgs = command === "build" ? [] : ["-p", SITES[site].port];

const child = spawn(
	process.execPath,
	[nextBin, command, ...portArgs, ...rest],
	{
		stdio: "inherit",
		env: {
			...process.env,
			NEXT_PUBLIC_SITE: site,
			NEXT_DIST_DIR: `.next-${site}`,
		},
	},
);

child.on("exit", (code) => process.exit(code ?? 0));
