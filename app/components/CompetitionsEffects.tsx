'use client';

import { useEffect } from 'react';

export default function CompetitionsEffects() {
  useEffect(() => {
    // Nav scroll state
    const nav = document.getElementById('nav');
    const onScroll = () => nav?.classList.toggle('scrolled', window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Burger menu toggle
    const burger = document.querySelector<HTMLElement>('.burger');
    const onBurger = () => nav?.classList.toggle('menu-open');
    burger?.addEventListener('click', onBurger);
    nav?.querySelectorAll('.nav__links a').forEach(a => {
      a.addEventListener('click', () => nav.classList.remove('menu-open'));
    });

    // Countdown
    const countdownTarget = new Date('2026-06-14T09:00:00+02:00').getTime();
    const elD = document.getElementById('cd-d');
    const elH = document.getElementById('cd-h');
    const elM = document.getElementById('cd-m');
    const elS = document.getElementById('cd-s');
    const pad = (n: number) => String(Math.max(0, n)).padStart(2, '0');
    const last: Record<string, string> = { d: '', h: '', m: '', s: '' };

    function setDigit(el: HTMLElement | null, val: string, key: string) {
      if (!el || last[key] === val) return;
      last[key] = val;
      el.textContent = val;
      el.classList.remove('flip');
      void el.offsetWidth;
      el.classList.add('flip');
    }

    function updateCountdown() {
      const diff = countdownTarget - Date.now();
      if (diff <= 0) {
        setDigit(elD, '00', 'd'); setDigit(elH, '00', 'h');
        setDigit(elM, '00', 'm'); setDigit(elS, '00', 's');
        return;
      }
      setDigit(elD, pad(Math.floor(diff / 86400000)), 'd');
      setDigit(elH, pad(Math.floor((diff % 86400000) / 3600000)), 'h');
      setDigit(elM, pad(Math.floor((diff % 3600000) / 60000)), 'm');
      setDigit(elS, pad(Math.floor((diff % 60000) / 1000)), 's');
    }
    updateCountdown();
    const cdInterval = setInterval(updateCountdown, 1000);

    // Filters
    const filterBtns = document.querySelectorAll<HTMLElement>('#filters .filter');
    const grid = document.getElementById('raceGrid');
    const list = document.getElementById('raceList');
    const counter = document.getElementById('resultCount');
    let currentFilter = 'all';

    function applyFilter() {
      const gridCards = grid ? [...grid.children] : [];
      const listCards = list ? [...list.children] : [];
      let count = 0;
      [...gridCards, ...listCards].forEach(c => {
        const el = c as HTMLElement;
        const t = el.dataset.type;
        const show = currentFilter === 'all' || t === currentFilter;
        el.style.display = show ? '' : 'none';
        if (show && el.parentElement === grid) count++;
      });
      if (counter) counter.textContent = String(count);
    }

    filterBtns.forEach(f => {
      f.addEventListener('click', () => {
        filterBtns.forEach(x => x.classList.remove('active'));
        f.classList.add('active');
        currentFilter = f.dataset.filter || 'all';
        applyFilter();
      });
    });

    // View toggle
    const viewBtns = document.querySelectorAll<HTMLElement>('#viewToggle button');
    viewBtns.forEach(b => {
      b.addEventListener('click', () => {
        viewBtns.forEach(x => x.classList.remove('active'));
        b.classList.add('active');
        const v = b.dataset.view;
        if (v === 'grid') {
          grid?.classList.remove('hidden-view');
          list?.classList.add('hidden-view');
        } else {
          grid?.classList.add('hidden-view');
          list?.classList.remove('hidden-view');
        }
      });
    });

    // Scroll reveals
    const revealObs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); revealObs.unobserve(e.target); }
      });
    }, { threshold: 0.15 });
    document.querySelectorAll('.reveal, .scroll-reveal').forEach(el => revealObs.observe(el));

    return () => {
      window.removeEventListener('scroll', onScroll);
      burger?.removeEventListener('click', onBurger);
      clearInterval(cdInterval);
      revealObs.disconnect();
    };
  }, []);

  return null;
}
