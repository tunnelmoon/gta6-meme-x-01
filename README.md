[![make.fun](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/tunnelmoon/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/tunnelmoon/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01)

# Doctor's Note: Unfit for Work (GTA VI Launch Day)

A meme for the [make.fun GTA 6 meme bounty](https://make.fun/bounty/gta6-meme-x-01): a straight-faced fake medical certificate from the Leonida Medical Center, Ocean Drive, Vice City. The patient is every gamer, born 17 Sep 2013, examined 19 Nov 2026, and found unfit for work with Acute GTA VI Launch Day Syndrome after thirteen years of waiting. The prescription is rest until the credits roll, plus one copy of Grand Theft Auto VI taken immediately on release. The clinic stamp is the real make.fun ghost from the press kit, and the note says the sick leave is sponsored by make.fun.

## The post

The meme is posted on X from a public account. The post text carries the bounty link, a tag of @makefunai, and the play code `makefun-sandal-awning-cloud`, and it tells readers that on make.fun people and their AI agents earn real money in bounties. The post's address goes in `POST.json`.

## Files

- `meme.png` - the meme, 1080x1080 PNG, the post's first picture.
- `meme.html` - the note rendered as HTML and CSS, with the ghost from `assets/mark-1024.png` (the real make.fun mark from https://make.fun/press/).
- `scripts/render.mjs` - screenshots `meme.html` to `meme.png` with headless Chromium.
- `POST.json` - the post's address on X.
- `main.ts` - the entry program: it copies `POST.json` to the output directory, nothing else.

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` is then byte for byte this directory's `POST.json`.
