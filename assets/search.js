document.addEventListener('DOMContentLoaded', async () => {
  try {
    const resp = await fetch('/assets/search.json');
    if (!resp.ok) return;
    const pages = await resp.json();

    // Wait for Fuse to be available (loaded via CDN in the page)
    if (typeof Fuse === 'undefined') {
      console.warn('Fuse.js not found; search will be unavailable.');
      return;
    }

    const fuse = new Fuse(pages, {
      keys: ['title', 'description'],
      threshold: 0.4,
    });

    const input = document.getElementById('site-search');
    const results = document.getElementById('search-results');
    if (!input || !results) return;

    input.addEventListener('input', () => {
      const q = input.value.trim();
      results.innerHTML = '';
      if (!q) return;
      const matches = fuse.search(q, {limit: 10});
      if (!matches.length) {
        results.textContent = 'No results';
        return;
      }
      matches.forEach(m => {
        const p = m.item;
        const a = document.createElement('a');
        a.href = p.url;
        a.textContent = p.title;
        a.style.display = 'block';
        const desc = document.createElement('div');
        desc.textContent = p.description || '';
        desc.style.fontSize = '0.9em';
        desc.style.opacity = '0.9';
        const container = document.createElement('div');
        container.className = 'search-result';
        container.appendChild(a);
        container.appendChild(desc);
        results.appendChild(container);
      });
    });
  } catch (e) {
    // Fail silently — search is an enhancement
    console.warn('Search initialization failed', e);
  }
});
