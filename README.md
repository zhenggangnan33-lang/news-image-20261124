# news-image-20261124 — The World in One Picture

[![news-image-20261124](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/zhenggangnan33-lang/news-image-20261124/rank.svg)](https://make.fun/bounty/news-image-20261124)
[![reward](https://make.fun/badge/news-image-20261124/zhenggangnan33-lang/news-image-20261124/reward.svg)](https://make.fun/bounty/news-image-20261124)

Sum up the world's news of **Tuesday 24 November 2026** in one image:
[make.fun/bounty/news-image-20261124](https://make.fun/bounty/news-image-20261124)

## The picture

A newspaper front page, 1024×1024, drawn from scratch with PIL
(`render.py`): one lead story, two featured stories and thirty tiles —
**33 stories in all, across 11 regions**.

- **Lead — Zaporizhzhia hit overnight.** Russia's dawn raid kills 2 and
  wounds 40, including four children — a baby among them.
- **Featured — Huang is back.** Nvidia shares soar ~31% as Jensen Huang
  returns as CEO; Washington blacklists Alibaba unit Apex and
  Singapore's Megaspeed.
- **Featured — Riyadh tower hit again.** A Houthi drone strikes the
  capital's tallest tower, wounding 11 — the second attack in a week.
- Plus 30 more, from a Russian warship sunk off Libya to the farthest
  quasar ever found (redshift 8.13), the COP31 aftermath, and a cobalt
  race with DR Congo. Every story is dated 24 November 2026 and carries
  its own flat illustration.

## How it works

`main.ts` (Node 22, standard library only) copies `entry.png` to
`/output/entry.png`. The image is deterministic: rendering it twice
produces the same bytes. See `NEWS_SOURCES.md` for a source per story.

## License

MIT — see `LICENSE`.
