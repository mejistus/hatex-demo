# hatex demos

Three documents typeset in the browser by [hatex](https://mejistus.github.io/hatex/), published at **https://mejistus.github.io/hatex/demo/**.

| Page | Source | Shows |
|---|---|---|
| [`paper/`](paper/) | [`diffusion.tex`](paper/diffusion.tex) | A two-column paper: propositions, numbered equations, TikZ and pgfplots, algorithms, code, references |
| [`zh/`](zh/) | [`sishu.tex`](zh/sishu.tex) | Chinese typesetting: 《论语》 and 《大学》, footnotes, `multicols`, a table, maths in Chinese |
| [`slides/`](slides/) | [`slides.tex`](slides/slides.tex) | A beamer deck with blocks, columns and a full-screen presenter |

There is no build step. Each `index.html` fetches its `.tex` file and renders it with `lib/hatex.js` (hatex 1.2.2). Each `tikz/` folder holds the pre-rendered TikZ figures (`<hash>.svg`), so readers never wait for TeX.

This repository is a git submodule of [mejistus.github.io](https://github.com/mejistus/mejistus.github.io) at `hatex/demo`. After pushing a change here, update the submodule pointer there so the site picks it up:

```sh
cd mejistus.github.io
git submodule update --remote hatex/demo
git commit -am "hatex demo: update" && git push
```

To preview locally, run `python3 -m http.server` in this folder and open <http://localhost:8000/>.

Released under the [MIT License](LICENSE). The classical Chinese texts quoted in `zh/` are in the public domain.
