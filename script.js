// Theme Toggle with localStorage
const root = document.documentElement;
const themeBtn = document.querySelector('#theme-toggle');
const saved = localStorage.getItem('theme');
if (saved) document.documentElement.dataset.theme = saved;

themeBtn?.addEventListener('click', () => {
  const current = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
  document.documentElement.dataset.theme = current;
  localStorage.setItem('theme', current);
  themeBtn.innerText = current === 'light' ? '🌞 Light' : '🌙 Dark';
});

// Initialize theme button label
(function(){
  const current = document.documentElement.dataset.theme || 'dark';
  if (themeBtn) themeBtn.innerText = current === 'light' ? '🌞 Light' : '🌙 Dark';
})();

// GitHub Projects cards (auto fetch)
const GITHUB_USER = 'ShaistaShabbir-prog';
const PRIORITY_REPOS = ['AIX']; // ensure these appear first if found
const PROJECTS_CONTAINER = document.querySelector('#projects-grid');

async function fetchRepos(){
  try {
    const res = await fetch(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=updated`);
    const repos = await res.json();
    if (!Array.isArray(repos)) return;

    // Move priority repos to the front when present
    const map = new Map(repos.map(r => [r.name, r]));
    const selected = [];
    PRIORITY_REPOS.forEach(name => { if (map.has(name)) selected.push(map.get(name)); });

    // Add more top repos by stars (Python first)
    const others = repos
      .filter(r => !PRIORITY_REPOS.includes(r.name))
      .sort((a,b)=> (b.stargazers_count||0) - (a.stargazers_count||0));
    const top = selected.concat(others).slice(0, 6);

    top.forEach(r => {
      const card = document.createElement('a');
      card.className = 'project';
      card.href = r.html_url;
      card.target = '_blank';
      card.rel = 'noreferrer';
      card.innerHTML = `
        <h4>${r.name}</h4>
        <p>${r.description ? r.description : '—'}</p>
        <div class="meta">
          <span>★ ${r.stargazers_count || 0}</span>
          <span>${r.language || ''}</span>
          <span>Updated: ${new Date(r.updated_at).toLocaleDateString()}</span>
        </div>
      `;
      PROJECTS_CONTAINER?.appendChild(card);
    });
  } catch (e){
    console.warn('Failed to load repos', e);
  }
}
fetchRepos();

// Optional Kaggle badge (set your username below)
const KAGGLE_USERNAME = ''; // e.g., 'shaistashabbir'
if (KAGGLE_USERNAME){
  const k = document.querySelector('#kaggle');
  if (k) {
    k.href = `https://www.kaggle.com/${KAGGLE_USERNAME}`;
    k.style.display = 'inline-flex';
  }
}
