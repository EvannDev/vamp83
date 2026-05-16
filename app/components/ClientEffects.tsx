'use client';

import { useEffect } from 'react';

export default function ClientEffects() {
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
    // Close on nav link tap
    nav?.querySelectorAll('.nav__links a').forEach(a => {
      a.addEventListener('click', () => nav.classList.remove('menu-open'));
    });

    // Hero stat counter
    function animateCount(el: Element, target: number, duration = 1600) {
      const startTime = performance.now();
      const uEl = el.querySelector('.u');
      const prefix = uEl ? uEl.outerHTML : '';
      const tick = (now: number) => {
        const t = Math.min(1, (now - startTime) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        const v = Math.round(target * eased);
        el.innerHTML = (prefix ? prefix : '') + v;
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }

    const heroStats = document.getElementById('hero-stats');
    if (heroStats) {
      const statObserver = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.querySelectorAll('[data-count]').forEach(n => {
              animateCount(n, +(n as HTMLElement).dataset.count!);
            });
            statObserver.unobserve(e.target);
          }
        });
      }, { threshold: 0.35 });
      statObserver.observe(heroStats);
    }

    // Scroll reveals
    const revealObs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); revealObs.unobserve(e.target); }
      });
    }, { threshold: 0.18 });
    document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

    // Section heading reveal
    const srObs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); srObs.unobserve(e.target); }
      });
    }, { threshold: 0.25 });
    document.querySelectorAll('.scroll-reveal').forEach(el => srObs.observe(el));

    // Image clip reveal
    const imgObs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); imgObs.unobserve(e.target); }
      });
    }, { threshold: 0.18 });
    document.querySelectorAll('.img-reveal').forEach(el => imgObs.observe(el));

    // Gallery tile stagger
    const tileObs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const idx = parseInt((e.target as HTMLElement).dataset.idx || '0', 10);
          setTimeout(() => e.target.classList.add('in'), idx * 90);
          tileObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });
    document.querySelectorAll('.tile').forEach((el, i) => {
      (el as HTMLElement).dataset.idx = String(i);
      tileObs.observe(el);
    });

    // Chiffres counter
    const chiffresObs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        e.target.querySelectorAll('.stat__n').forEach((node) => {
          const txt = node.textContent?.trim() || '';
          if (/^\d+$/.test(txt)) {
            const final = parseInt(txt, 10);
            const start = performance.now();
            const dur = 1400;
            const isYear = final > 1900;
            const tick = (now: number) => {
              const t = Math.min(1, (now - start) / dur);
              const eased = 1 - Math.pow(1 - t, 3);
              const v = Math.round(isYear ? (1900 + (final - 1900) * eased) : final * eased);
              node.textContent = isYear ? String(v) : (final < 10 ? String(v).padStart(2, '0') : String(v));
              if (t < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          } else if (node.querySelector('.sup')) {
            const sup = node.querySelector('.sup')!.outerHTML;
            const final = 100;
            const start = performance.now();
            const dur = 1400;
            const tick = (now: number) => {
              const t = Math.min(1, (now - start) / dur);
              const eased = 1 - Math.pow(1 - t, 3);
              const v = Math.round(final * eased);
              node.innerHTML = sup + v;
              if (t < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
        chiffresObs.unobserve(e.target);
      });
    }, { threshold: 0.3 });
    document.querySelectorAll('.chiffres').forEach(el => chiffresObs.observe(el));

    // Countdown
    const countdownTarget = new Date('2026-06-14T09:00:00+02:00').getTime();
    const elD = document.getElementById('cd-d');
    const elH = document.getElementById('cd-h');
    const elM = document.getElementById('cd-m');
    const elS = document.getElementById('cd-s');
    const pad = (n: number) => String(Math.max(0, n)).padStart(2, '0');
    const lastVals: Record<string, string> = { d: '', h: '', m: '', s: '' };

    function setDigit(el: HTMLElement | null, val: string, key: string) {
      if (!el || lastVals[key] === val) return;
      lastVals[key] = val;
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
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      setDigit(elD, pad(d), 'd'); setDigit(elH, pad(h), 'h');
      setDigit(elM, pad(m), 'm'); setDigit(elS, pad(s), 's');
    }
    updateCountdown();
    const cdInterval = setInterval(updateCountdown, 1000);

    // Hero parallax
    const heroPhoto = document.querySelector<HTMLElement>('.hero__bg .photo');
    let heroTicking = false;
    const heroScrollHandler = () => {
      if (heroTicking) return;
      heroTicking = true;
      requestAnimationFrame(() => {
        const y = Math.min(window.scrollY, 800);
        if (heroPhoto) {
          heroPhoto.style.transform = `translate3d(0, ${y * 0.18}px, 0) scale(${1.06 + y * 0.00012})`;
        }
        heroTicking = false;
      });
    };
    window.addEventListener('scroll', heroScrollHandler, { passive: true });

    // Magnetic buttons
    const magneticRAFs: Map<Element, number> = new Map();
    document.querySelectorAll('.btn').forEach(btn => {
      const el = btn as HTMLElement;
      el.addEventListener('pointermove', (e: Event) => {
        const pe = e as PointerEvent;
        const r = el.getBoundingClientRect();
        const dx = (pe.clientX - r.left - r.width / 2) / r.width;
        const dy = (pe.clientY - r.top - r.height / 2) / r.height;
        const prev = magneticRAFs.get(el);
        if (prev) cancelAnimationFrame(prev);
        magneticRAFs.set(el, requestAnimationFrame(() => {
          el.style.transform = `translate(${dx * 10}px, ${dy * 8}px)`;
        }));
      });
      el.addEventListener('pointerleave', () => {
        const prev = magneticRAFs.get(el);
        if (prev) cancelAnimationFrame(prev);
        el.style.transform = '';
      });
    });

    // 3D tilt cards
    const tiltRAFs: Map<Element, number> = new Map();
    document.querySelectorAll('.tilt').forEach(card => {
      const el = card as HTMLElement;
      el.style.transformStyle = 'preserve-3d';
      el.addEventListener('pointermove', (e: Event) => {
        const pe = e as PointerEvent;
        const r = el.getBoundingClientRect();
        const px = (pe.clientX - r.left) / r.width;
        const py = (pe.clientY - r.top) / r.height;
        const rx = (py - 0.5) * -8;
        const ry = (px - 0.5) * 10;
        const prev = tiltRAFs.get(el);
        if (prev) cancelAnimationFrame(prev);
        tiltRAFs.set(el, requestAnimationFrame(() => {
          el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-6px)`;
          const glare = el.querySelector<HTMLElement>('.tilt__glare');
          if (glare) {
            glare.style.setProperty('--gx', (px * 100) + '%');
            glare.style.setProperty('--gy', (py * 100) + '%');
          }
        }));
      });
      el.addEventListener('pointerleave', () => {
        const prev = tiltRAFs.get(el);
        if (prev) cancelAnimationFrame(prev);
        el.style.transform = '';
      });
    });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('scroll', heroScrollHandler);
      burger?.removeEventListener('click', onBurger);
      clearInterval(cdInterval);
      revealObs.disconnect();
      srObs.disconnect();
      imgObs.disconnect();
      tileObs.disconnect();
      chiffresObs.disconnect();
    };
  }, []);

  return null;
}
