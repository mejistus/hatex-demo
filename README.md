# Denoising Diffusion Models, Derived

A short technical note that derives denoising diffusion models from first principles, published at **https://mejistus.github.io/hatex-demo/**.

The page is typeset in the browser from [`diffusion.tex`](diffusion.tex) by [hatex](https://mejistus.github.io/hatex/), a LaTeX-to-HTML renderer. There is no build step: `index.html` fetches the `.tex` file and renders it.

```
index.html      title block, page styles (black on white), render call
diffusion.tex   the note
tikz/           pre-rendered TikZ figures (<hash>.svg), so readers don't wait for TeX
hatex/          hatex.js + hatex.css (v1.1.5)
```

To preview it locally, run `python3 -m http.server` and open <http://localhost:8000/>.
