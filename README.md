# HaTeX demos

Three documents typeset in the browser by [HaTeX](https://mejistus.github.io/hatex/), published at **https://mejistus.github.io/hatex/demo/**.

| Page | Source | Shows |
|---|---|---|
| [`paper/`](paper/) | [`diffusion.tex`](paper/diffusion.tex) | A two-column paper: propositions, numbered equations, TikZ and pgfplots, algorithms, code, references |
| [`slides/`](slides/) | [`slides.tex`](slides/slides.tex) | A beamer deck with blocks, columns and a full-screen presenter |
| [`zh/`](zh/) | [`luoyang.tex`](zh/luoyang.tex) | 《洛陽伽藍記》序 set like an old book: vertical, right to left, ruled columns, 夾注 and 句讀 |

There is no build step. Each `index.html` fetches its `.tex` file and renders it with `lib/hatex.js` (HaTeX 1.8.1). Each `tikz/` folder holds the pre-rendered TikZ figures (`<hash>.svg`), so readers never wait for TeX.

This repository is a git submodule of [mejistus.github.io](https://github.com/mejistus/mejistus.github.io) at `hatex/demo`. After pushing a change here, update the submodule pointer there so the site picks it up:

```sh
cd mejistus.github.io
git submodule update --remote hatex/demo
git commit -am "hatex demo: update" && git push
```

`theme.css` and `theme.js` give every page the light and dark themes of the HaTeX project page, with the same button and the same remembered choice, so the whole site is either light or dark. The rendered documents follow through HaTeX's `data-theme`.

To preview locally, run `python3 -m http.server` in this folder and open <http://localhost:8000/>.

Released under the [MIT License](LICENSE). The classical text in `zh/` (楊衒之, 6th century) is in the public domain.
