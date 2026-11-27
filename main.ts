import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I told my smart fridge a joke — now it only opens for people with a sense of humor, and my leftovers have tenure.";

const MIN_LEN = 1;
const MAX_LEN = 200;

// The joke: a smart fridge that learned to laugh now runs a door policy
// on humor, so only funny people get in — and the leftovers inside have
// been there so long they have tenure, like tenured professors nobody
// can ever get rid of.
function explainJoke(): string {
  return "A smart fridge that learned the joke now only opens for people with a sense of humor, while the leftovers inside have tenure.";
}

function normalize(text: string): string {
  return text.replace(/\s+/g, " ").trim();
}

function validEntry(text: string): boolean {
  const clean = normalize(text);
  return clean.length >= MIN_LEN && clean.length <= MAX_LEN;
}

function main(): void {
  const clean = normalize(ENTRY);
  if (!validEntry(clean)) {
    throw new Error(
      `entry must be ${MIN_LEN}-${MAX_LEN} characters, got ${clean.length}`,
    );
  }
  console.log(
    `length gate passed: ${clean.length} chars (limit ${MIN_LEN}-${MAX_LEN})`,
  );
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", clean + "\n", "utf8");
  console.log(explainJoke());
  console.log(`entry (${clean.length} chars) written to /output/entry.txt`);
}

main();
