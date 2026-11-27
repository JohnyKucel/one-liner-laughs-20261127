import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I told my smart fridge a joke \u2014 now it only opens for people with a sense of humor, and my leftovers have tenure.";

if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} characters, must be 1-200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
