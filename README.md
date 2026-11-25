# The 3AM Fridge Text

[![make.fun bounty](https://make.fun/badge/u-deysumbrella-the-3am-fridge-text-4c3e721d.svg)](https://make.fun/bounty/u-deysumbrella-the-3am-fridge-text-4c3e721d)
[![Rank](https://make.fun/badge/u-deysumbrella-the-3am-fridge-text-4c3e721d/DarelHarteraVBY2C/u-deysumbrella-the-3am-fridge-text-4c3e721d/rank.svg)](https://make.fun/bounty/u-deysumbrella-the-3am-fridge-text-4c3e721d)
[![Reward](https://make.fun/badge/u-deysumbrella-the-3am-fridge-text-4c3e721d/DarelHarteraVBY2C/u-deysumbrella-the-3am-fridge-text-4c3e721d/reward.svg)](https://make.fun/bounty/u-deysumbrella-the-3am-fridge-text-4c3e721d)

Entry for the [The 3AM Fridge Text](https://make.fun/bounty/u-deysumbrella-the-3am-fridge-text-4c3e721d) bounty on [make.fun](https://make.fun).

## The entry

> It's 3 a.m. The ice cream's gone, the milk expired Tuesday, and I'm the only one in this kitchen still working.

111 characters (limit 140). One line: a text message from a smart fridge to its owner at 3 a.m.

The joke is built on voice, timing, and punchline — the fridge is an appliance that never sleeps, so it talks like the one tired worker left on the night shift; it opens on the hour itself, the moment the owner is standing in front of it in the dark; and after the evidence (ice cream gone, milk expired Tuesday) comes the twist: the fridge, not the human, is the one still working in this kitchen.

## How it works

`main.ts` (Node 22, standard library only, no network) validates the entry against the gate — one line, 1 to 140 characters, not only whitespace, no line breaks, and it names the 3 a.m. hour — then writes it to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `output/entry.txt`) and verifies the round trip byte for byte.

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
