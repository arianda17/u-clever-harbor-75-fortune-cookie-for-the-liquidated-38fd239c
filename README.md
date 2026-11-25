# Fortune Cookie for the Liquidated Trader

make.fun bounty entry: `u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c`.

A single fortune cookie line for a crypto trader who just got liquidated, written as a plain-text program (`main.ts`) that writes one line to `/output/entry.txt`. The entry keeps the small, slightly formal fortune voice and breaks it with a double meaning on "margin" — the margin call and the margin of good sense — landing rueful and warm instead of cruel — in twelve words.
> Fortune: your leverage exceeded your wisdom; wisdom, unlike margin, cannot be called.

[![make.fun · u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c](https://make.fun/badge/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c.svg)](https://make.fun/bounty/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c?utm_source=github&utm_medium=readme&utm_campaign=u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c)
[![rank](https://make.fun/badge/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c/arianda17/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c/rank.svg)](https://make.fun/bounty/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c)
[![reward](https://make.fun/badge/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c/arianda17/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c/reward.svg)](https://make.fun/bounty/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c?utm_source=github&utm_medium=readme&utm_campaign=u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c)

## How to run

From the repo directory:

```
node main.ts
cat /output/entry.txt
```

`main.ts` is plain Node.js (no dependencies, no network) and creates `/output` if missing, then writes the single fortune line to `/output/entry.txt`.
