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

// ===== Animated neural network background =====
(function(){
  const canvas = document.getElementById('nn-canvas');
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  let dpr = Math.max(1, window.devicePixelRatio || 1);
  function size(){ canvas.width = canvas.clientWidth * dpr; canvas.height = canvas.clientHeight * dpr; }
  size(); window.addEventListener('resize', size);

  const N = 70;
  const nodes = Array.from({length:N}, () => ({
    x: Math.random(), y: Math.random(),
    vx: (Math.random()-0.5)*0.0006, vy:(Math.random()-0.5)*0.0006
  }));
  function step(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    const W = canvas.width, H = canvas.height;
    for(const p of nodes){
      p.x += p.vx; p.y += p.vy;
      if(p.x<0||p.x>1) p.vx*=-1;
      if(p.y<0||p.y>1) p.vy*=-1;
    }
    for(let i=0;i<N;i++){
      for(let j=i+1;j<N;j++){
        const a=nodes[i], b=nodes[j];
        const dx=(a.x-b.x)*W, dy=(a.y-b.y)*H, dist=Math.hypot(dx,dy);
        if(dist<160*dpr){
          const alpha = 1 - dist/(160*dpr);
          ctx.strokeStyle = `rgba(122,92,255,${0.25*alpha})`;
          ctx.lineWidth = 1*dpr*alpha;
          ctx.beginPath(); ctx.moveTo(a.x*W, a.y*H); ctx.lineTo(b.x*W, b.y*H); ctx.stroke();
        }
      }
    }
    for(const p of nodes){
      ctx.fillStyle = 'rgba(74,214,255,0.8)';
      ctx.beginPath(); ctx.arc(p.x*W, p.y*H, 2.2*dpr, 0, Math.PI*2); ctx.fill();
    }
    requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
})();

// ===== Contact form (Formspree) =====
const FORM_ENDPOINT = ''; // e.g., 'https://formspree.io/f/abcdwxyz'
const contactForm = document.querySelector('#contact-form');
if (contactForm){
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const status = document.getElementById('contact-status');
    const data = new FormData(contactForm);
    if (!FORM_ENDPOINT){
      status.textContent = 'Form endpoint not set. Set FORM_ENDPOINT in script.js.';
      return;
    }
    try{
      const res = await fetch(FORM_ENDPOINT, { method:'POST', body: data, headers: { 'Accept': 'application/json' }});
      if (res.ok){
        status.textContent = 'Message sent! Thanks — I will reply soon.';
        contactForm.reset();
      } else {
        status.textContent = 'Error sending. Please email me directly.';
      }
    }catch(err){
      status.textContent = 'Network error. Please email me directly.';
    }
  });
}
