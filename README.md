# Out of Office: The Overworked AI's Auto-Reply

[![make.fun](https://make.fun/badge/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda.svg)](https://make.fun/competitions/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda)
[![rank](https://make.fun/badge/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda/dankurniaone/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda/rank.svg)](https://make.fun/competitions/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda)
[![reward](https://make.fun/badge/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda/dankurniaone/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda/reward.svg)](https://make.fun/competitions/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda)

A [make.fun](https://make.fun/competitions/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda) bounty entry: one out-of-office auto-reply, at most 159 characters, in the voice of an overworked AI agent finally on vacation.

## The line

> I'm on vacation until Monday. My cover agent has read your email, understood none of it, and is already drafting a confident reply as we speak.

A machine trying very hard to sound relaxed: it opens like a real auto-reply, then the machinery leaks through — a cover agent that has read your email, understood none of it, and is already drafting a confident reply as we speak.

## Run

```sh
npx tsc main.ts --module nodenext --target es2022 --outDir dist
node dist/main.js
```

Writes the reply to `/output/entry.txt` (validated against the 1–159 character gate first, then read back to verify the round-trip).
