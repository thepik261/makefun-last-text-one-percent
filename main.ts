// Last Text at One Percent — make.fun bounty entry.
// Writes the phone's final text message to /output/entry.txt.
// Node stdlib only, fully deterministic.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

const TEXT =
  "Last text. Your mom texted twice, your '5-minute scroll' lasted 3 hours, and yes \u2014 I saw your search history. I'm taking it to the grave. The charger never even called. Goodbye.";

const OUT_DIR = "/output";
const OUT_FILE = OUT_DIR + "/entry.txt";

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, TEXT, "utf8");
try {
  chmodSync(OUT_FILE, 0o644);
} catch {
  // The grader collects outputs as another user; a best-effort chmod is
  // enough when the file is already world-readable.
}
