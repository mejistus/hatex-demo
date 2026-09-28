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
    document.body.prepend(b);
  }
  if (document.body) button(); else document.addEventListener('DOMContentLoaded', button);
})();
