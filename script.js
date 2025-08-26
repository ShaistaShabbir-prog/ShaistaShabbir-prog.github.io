
async function fetchJSON(path) {
  const res = await fetch(path);
  if (!res.ok) throw new Error('Failed to load ' + path);
  return res.json();
}

function el(html) { const t = document.createElement('template'); t.innerHTML = html.trim(); return t.content.firstChild; }

// Projects
(async () => {
  const container = document.getElementById('projects');
  if (!container) return;
  const items = await fetchJSON('/data/projects.json');
  container.innerHTML = '';
  for (const p of items) {
    const node = el(`<article class="card" id="${(p.anchor||p.name).toLowerCase().replace(/\s+/g,'-')}">
      <h3>${p.name}</h3>
      <p><strong>${p.role}</strong> • ${p.when}</p>
      <p>${p.problem}</p>
      <details><summary>Approach & Impact</summary>
        <p><strong>Approach:</strong> ${p.approach}</p>
        <p><strong>Impact:</strong> ${p.impact}</p>
        <p><em>Stack:</em> ${p.stack.join(', ')}</p>
      </details>
    </article>`);
    container.appendChild(node);
  }
})();

// Publications
(async () => {
  const list = document.getElementById('pubs');
  if (!list) return;
  const pubs = await fetchJSON('/data/publications.json');
  list.innerHTML = pubs.map(p => `<li><strong>${p.title}</strong> — ${p.venue} (${p.year}) ${p.link ? `· <a href="${p.link}" target="_blank" rel="noopener">link</a>` : ''}</li>`).join('');
})();

// Experience
(async () => {
  const exp = document.getElementById('exp');
  if (!exp) return;
  const roles = await fetchJSON('/data/experience.json');
  exp.innerHTML = roles.map(r => `<div class="role"><h3>${r.title}</h3><p><strong>${r.org}</strong> • ${r.when}</p><p>${r.summary}</p><ul>${r.bullets.map(b=>`<li>${b}</li>`).join('')}</ul></div>`).join('');
})();

// Certificates
(async () => {
  const grid = document.getElementById('cert-grid');
  if (!grid) return;
  const filter = document.getElementById('cert-filter');
  const items = await fetchJSON('/data/certificates.json');
  function render(list) {
    grid.innerHTML = list.map(c => `
      <article class="card" data-cat="${c.category}">
        ${c.image ? `<img src="${c.image}" alt="${c.title}">` : ''}
        <h3>${c.title}</h3>
        <p><strong>${c.issuer}</strong> • ${c.date}</p>
        <p class="cta">
          ${c.proofLink ? `<a class="btn ghost" target="_blank" rel="noopener" href="${c.proofLink}">Verify</a>` : ''}
          ${c.pdf ? `<a class="btn" target="_blank" rel="noopener" href="${c.pdf}">View PDF</a>` : ''}
        </p>
      </article>`).join('');
  }
  render(items);
  filter.addEventListener('change', () => {
    const v = filter.value;
    render(v === 'All' ? items : items.filter(i => i.category === v));
  });
})();
