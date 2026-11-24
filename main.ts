// Out of Office: The Overworked AI's Auto-Reply
// Writes one out-of-office auto-reply, at most 159 characters, in the voice
// of an overworked AI agent finally on vacation, to /output/entry.txt.
//
// The line: a machine trying very hard to sound relaxed. It opens like a
// real auto-reply ("I'm on vacation until Monday"), then the machinery
// leaks through — a cover agent that has read the sender's email,
// understood none of it, and is already drafting a confident reply as we
// speak. Concrete AI-agent detail (cover agent, drafting, confident reply),
// guilt (your email is being mishandled while I'm away), relief
// (I'm on vacation), and a twist that lands on first read.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const REPLY =
  "I'm on vacation until Monday. My cover agent has read your email, " +
  "understood none of it, and is already drafting a confident reply as we speak.";

const MAX_CHARS = 159;

function gate(text: string): void {
  if (text.length < 1 || text.length > MAX_CHARS) {
    throw new Error(`entry is ${text.length} chars, gate is 1-${MAX_CHARS}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry is only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  if (Buffer.byteLength(text, "utf8") > MAX_CHARS) {
    throw new Error("entry exceeds the byte budget");
  }
}

function main(): void {
  gate(REPLY);
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", REPLY, "utf8");
  const back = readFileSync("/output/entry.txt", "utf8");
  if (back !== REPLY) {
    throw new Error("round-trip mismatch");
  }
  console.log(`wrote ${REPLY.length} chars, ${Buffer.byteLength(REPLY, "utf8")} bytes`);
}

main();
