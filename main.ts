// The 3AM Fridge Text — entry program.
//
// A smart fridge texts its owner at 3 a.m. This program writes that
// single line to $MAKEFUN_OUTPUT_DIR/entry.txt and nothing else: no
// second line, no explanation, no trailing newline.
//
// The line (111 of 140 characters allowed):
//   "It's 3 a.m. The ice cream's gone, the milk expired Tuesday, and
//    I'm the only one in this kitchen still working."
//
// The joke is built the way the brief asks — voice, timing, punchline:
//   * Voice: the fridge is an appliance that never sleeps, so it talks
//     like the one tired worker left on the night shift.
//   * Timing: it opens on the hour itself, "3 a.m.", the moment the
//     owner is standing in front of it in the dark.
//   * Punchline: after the evidence (ice cream gone, milk expired
//     Tuesday) comes the twist — the fridge, not the human, is the one
//     still working in this kitchen.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one line, a 3 a.m. text from the smart fridge.
const ENTRY =
  "It's 3 a.m. The ice cream's gone, the milk expired Tuesday, and I'm the only one in this kitchen still working.";

// Maximum length for this bounty, in characters.
const MAX_CHARS = 140;

function validateEntry(line: string): number {
  const chars = [...line];
  if (chars.length < 1 || chars.length > MAX_CHARS) {
    throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${chars.length}`);
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (/[\r\n]/.test(line)) {
    throw new Error("entry must be exactly one line (no line breaks)");
  }
  // The brief is a 3 a.m. text: the line must name the hour.
  if (!line.includes("3 a.m.")) {
    throw new Error("entry must name the 3 a.m. hour");
  }
  return chars.length;
}

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
  const length = validateEntry(ENTRY);

  mkdirSync(outDir, { recursive: true });
  const target = join(outDir, "entry.txt");
  writeFileSync(target, ENTRY, "utf8");

  // Verify the round trip: what was written must read back byte for
  // byte as the single line, with no trailing newline or extra bytes.
  const written = readFileSync(target, "utf8");
  if (written !== ENTRY) {
    throw new Error("written entry does not match the intended line");
  }
  console.log(
    `wrote entry (${length} characters, ${Buffer.byteLength(ENTRY, "utf8")} bytes) to ${target}`,
  );
}

main();
