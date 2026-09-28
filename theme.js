// Light and dark for the demo pages, shared with the HaTeX project page and
// manual (localStorage "hatex-theme"). Until the button is used, the pages
// follow the system; a click sets and remembers the other theme.
//
// Load it in <head>, before the page paints: it sets data-color (the page's
// colours, see theme.css) and data-theme (HaTeX's colours) on <html>.
(function () {
  const html = document.documentElement;
  const systemDark = matchMedia('(prefers-color-scheme: dark)');
  let saved = null;
  try { saved = localStorage.getItem('hatex-theme'); } catch (_) {}
  const apply = (choice) => {
    if (choice === 'light' || choice === 'dark') html.dataset.color = choice;
    html.dataset.theme = html.dataset.color || 'auto';
  };
  apply(saved);
  const isDark = () => html.dataset.color ? html.dataset.color === 'dark' : systemDark.matches;

  function button() {
    const b = document.createElement('button');
    b.className = 'theme';
    b.type = 'button';
    b.innerHTML =
      '<svg class="i-light" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4"/></svg>' +
      '<svg class="i-dark" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" aria-hidden="true"><path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/></svg>';
    const zh = html.lang && html.lang.startsWith('zh');
    const show = () => {
      const dark = isDark();
      const label = zh ? (dark ? '切换到浅色' : '切换到深色') : (dark ? 'Switch to the light theme' : 'Switch to the dark theme');
      b.dataset.mode = dark ? 'dark' : 'light';
      b.title = label;
      b.setAttribute('aria-label', label);
    };
    b.addEventListener('click', () => {
      const next = isDark() ? 'light' : 'dark';
      apply(next);
      try { localStorage.setItem('hatex-theme', next); } catch (_) {}
      show();
    });
    systemDark.addEventListener('change', show);
    show();
    const corner = document.createElement('div');
    corner.className = 'corner';
    corner.innerHTML = '<a class="gh" href="https://github.com/mejistus/hatex" aria-label="HaTeX on GitHub" title="HaTeX on GitHub"><svg viewBox="0 0 16 16" aria-hidden="true"><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg></a>';
    corner.appendChild(b);
    document.body.prepend(corner);
  }
  if (document.body) button(); else document.addEventListener('DOMContentLoaded', button);
})();
