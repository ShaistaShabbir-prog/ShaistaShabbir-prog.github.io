// Portfolio animations — scroll-triggered reveals + typing effect
(function(){
  'use strict';

  // ── Typing effect on hero ─────────────────────────────────────────────
  const ROLES = ['Industrial AI Researcher', 'Full-Stack Developer', 'Open Source Contributor', 'NLP & XAI Specialist'];
  let roleIdx = 0, charIdx = 0, deleting = false;

  function type() {
    const el = document.getElementById('typing-role');
    if(!el) return;
    const role = ROLES[roleIdx];
    if(!deleting) {
      el.textContent = role.slice(0, charIdx+1);
      charIdx++;
      if(charIdx === role.length) { setTimeout(()=>{ deleting=true; type(); }, 1800); return; }
    } else {
      el.textContent = role.slice(0, charIdx-1);
      charIdx--;
      if(charIdx === 0) { deleting=false; roleIdx=(roleIdx+1)%ROLES.length; }
    }
    setTimeout(type, deleting ? 40 : 80);
  }

  // ── Intersection Observer — fade-in sections ──────────────────────────
  function initScrollAnimations() {
    if(!('IntersectionObserver' in window)) return;
    const style = document.createElement('style');
    style.textContent = `
      .anim-fade { opacity: 0; transform: translateY(20px); transition: opacity .5s ease, transform .5s ease; }
      .anim-fade.visible { opacity: 1; transform: translateY(0); }
      @media (prefers-reduced-motion: reduce) {
        .anim-fade { opacity: 1 !important; transform: none !important; transition: none !important; }
      }
    `;
    document.head.appendChild(style);

    document.querySelectorAll('.sec, .card, .project-card, .pub-card, .skill-group')
      .forEach((el, i) => {
        el.classList.add('anim-fade');
        el.style.transitionDelay = `${Math.min(i * 0.05, 0.3)}s`;
      });

    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if(e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.08 });

    document.querySelectorAll('.anim-fade').forEach(el => obs.observe(el));
  }

  // ── Card hover lift ───────────────────────────────────────────────────
  function initCardHover() {
    document.querySelectorAll('.card, .project-card, .pub-card').forEach(card => {
      card.style.transition = (card.style.transition||'') + ', transform .18s ease, box-shadow .18s ease';
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-3px)';
        card.style.boxShadow = '0 8px 24px rgba(0,0,0,.15)';
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
        card.style.boxShadow = '';
      });
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      initScrollAnimations();
      initCardHover();
      type();
    }
  });
})();
