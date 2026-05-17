import type { Metadata } from 'next';
import CompetitionsEffects from '../components/CompetitionsEffects';

export const metadata: Metadata = {
  title: 'VAMP83 — Compétitions 2026',
  description: 'Calendrier complet, classements et résultats des compétitions VAMP83 — saison 2026.',
};

export default function CompetitionsPage() {
  return (
    <>
      <CompetitionsEffects />

      {/* NAV */}
      <header className="nav" id="nav">
        <div className="container nav__inner">
          <a href="/" className="logo">
            <div className="logo__mark">V</div>
            <div className="logo__text"><b>VAMP83</b><span>EST. 1984 · PIERREFEU</span></div>
          </a>
          <nav className="nav__links">
            <a href="/">Accueil</a>
            <a href="/#club">Le Club</a>
            <a href="/#piste">La Piste</a>
            <a href="/competitions" className="active">Compétitions</a>
            <a href="/#galerie">Photos</a>
            <a href="/#footer">Contact</a>
          </nav>
          <div className="nav__cta">
            <span className="nav__live"><span className="dot"></span>Saison 2026</span>
            <a href="#inscription" className="btn">S&apos;inscrire <span className="arrow">→</span></a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="hero--comp">
        <div className="container">
          <div className="hero__inner">
            <div>
              <h1 className="h-title hero__title">
                Calendrier<br />
                <span className="accent">2026</span>
              </h1>
            </div>
            <div className="hero__right">
              <p>Huit manches au club, trois sorties externes, un <b>GP International</b> en septembre. Quarante-deux ans que le paddock s&apos;ouvre à Pierrefeu.</p>
            </div>
          </div>

          <div className="hero__stats">
            <div className="hero__stat"><div className="n">12</div><div className="l">Courses programmées</div></div>
            <div className="hero__stat"><div className="n">04</div><div className="l">Manches championnat club</div></div>
            <div className="hero__stat"><div className="n">03</div><div className="l">Sorties externes</div></div>
            <div className="hero__stat"><div className="n">01</div><div className="l">GP International</div></div>
            <div className="hero__stat"><div className="n" style={{ color: 'var(--red)' }}>+87</div><div className="l">Pilotes engagés</div></div>
          </div>
        </div>
      </section>

      {/* FEATURED NEXT RACE */}
      <section className="featured">
        <div className="container">
          <div className="feature-card">
            <div className="feature__left">
              <div className="feature__top">
                <span className="feature__tag"><span className="liveDot"></span>Prochaine course</span>
                <span className="feature__date">14 → 15 Juin 2026 · Sam–Dim</span>
              </div>
              <div>
                <h2 className="feature__title">GP de Pierrefeu<br />— Manche 4</h2>
                <p className="feature__desc">Championnat régional PACA · 1/8 TT thermique. Essais libres samedi matin, chronos l&apos;après-midi, finales dimanche. Plateau ouvert aux licenciés FFVRC.</p>
                <div className="feature__row">
                  <div className="item"><b>Pierrefeu-du-Var</b><span>Circuit VAMP83</span></div>
                  <div className="item"><b>1/8 TT Nitro</b><span>Catégorie</span></div>
                  <div className="item"><b>09:00</b><span>Briefing pilotes</span></div>
                  <div className="item"><b>40€ / pilote</b><span>Engagement</span></div>
                </div>
              </div>
            </div>
            <div className="feature__right">
              <div className="feature__cd-label">Compte à rebours · Départ libres</div>
              <div className="comp-countdown" id="cd">
                <div className="cd-cell"><span className="n" id="cd-d">00</span><span className="l">Jours</span></div>
                <div className="cd-cell"><span className="n" id="cd-h">00</span><span className="l">Heures</span></div>
                <div className="cd-cell"><span className="n" id="cd-m">00</span><span className="l">Min</span></div>
                <div className="cd-cell"><span className="n" id="cd-s">00</span><span className="l">Sec</span></div>
              </div>
              <div className="feature__cta">
                <a href="#" className="btn">S&apos;inscrire à la course <span className="arrow">→</span></a>
                <a href="#" className="btn btn--outline">Règlement <span className="arrow">→</span></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FILTERS + VIEW TOGGLE */}
      <section className="container">
        <div className="controls">
          <div className="controls__inner">
            <div className="filters" id="filters">
              <button className="filter active" data-filter="all">Toutes <span className="count">12</span></button>
              <button className="filter filter--regio" data-filter="regio">Régionale <span className="count">6</span></button>
              <button className="filter filter--france" data-filter="france">France <span className="count">2</span></button>
              <button className="filter filter--gp" data-filter="gp">GP International <span className="count">1</span></button>
              <button className="filter filter--club" data-filter="club">Club <span className="count">3</span></button>
            </div>
            <div className="view-toggle" id="viewToggle">
              <button data-view="grid" className="active">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
                  <rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>
                </svg>
                Grille
              </button>
              <button data-view="list">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>
                </svg>
                Liste
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="container timeline-wrap">
        <div className="timeline">
          <div className="timeline__head">
            <h3>Saison 2026 · vue d&apos;ensemble</h3>
            <div className="legend">
              <span className="legend__item"><span className="legend__dot regio"></span>Régionale</span>
              <span className="legend__item"><span className="legend__dot france"></span>France</span>
              <span className="legend__item"><span className="legend__dot gp"></span>GP Intl.</span>
              <span className="legend__item"><span className="legend__dot club"></span>Club</span>
            </div>
          </div>
          <div className="timeline__rail">
            <div className="timeline__line"></div>
            <div className="timeline__months">
              <div className="tm-month"><span className="tm-month__label">Fév</span><span className="tm-month__num">02</span></div>
              <div className="tm-month"><span className="tm-month__label">Mar</span><span className="tm-month__num">03</span></div>
              <div className="tm-month"><span className="tm-month__label">Avr</span><span className="tm-month__num">04</span></div>
              <div className="tm-month now"><span className="tm-month__label">Mai</span><span className="tm-month__num">05</span></div>
              <div className="tm-month"><span className="tm-month__label">Juin</span><span className="tm-month__num">06</span></div>
              <div className="tm-month"><span className="tm-month__label">Juil</span><span className="tm-month__num">07</span></div>
              <div className="tm-month"><span className="tm-month__label">Août</span><span className="tm-month__num">08</span></div>
              <div className="tm-month"><span className="tm-month__label">Sept</span><span className="tm-month__num">09</span></div>
              <div className="tm-month"><span className="tm-month__label">Oct</span><span className="tm-month__num">10</span></div>
              <div className="tm-month"><span className="tm-month__label">Nov</span><span className="tm-month__num">11</span></div>
            </div>
            <a href="#race-1" className="tm-pin done" style={{ left: '6%' }}><span className="tm-pin__num">R1</span><span className="tm-pin__dot"></span><span className="tm-tip"><b>Ouverture régionale</b><span>15 Fév · Solliès-Pont</span></span></a>
            <a href="#race-2" className="tm-pin club done" style={{ left: '14%' }}><span className="tm-pin__num">C1</span><span className="tm-pin__dot"></span><span className="tm-tip"><b>Champ. club M1</b><span>08 Mar · Pierrefeu</span></span></a>
            <a href="#race-3" className="tm-pin done" style={{ left: '24%' }}><span className="tm-pin__num">R2</span><span className="tm-pin__dot"></span><span className="tm-tip"><b>Manche 2 régionale</b><span>05 Avr · Aix-en-Pce</span></span></a>
            <a href="#race-4" className="tm-pin club done" style={{ left: '33%' }}><span className="tm-pin__num">C2</span><span className="tm-pin__dot"></span><span className="tm-tip"><b>Champ. club M2</b><span>26 Avr · Pierrefeu</span></span></a>
            <a href="#race-5" className="tm-pin done" style={{ left: '43%' }}><span className="tm-pin__num">R3</span><span className="tm-pin__dot"></span><span className="tm-tip"><b>Manche 3 régionale</b><span>10 Mai · Pierrefeu</span></span></a>
            <a href="#race-6" className="tm-pin next" style={{ left: '54%' }}><span className="tm-pin__num">R4</span><span className="tm-pin__dot"></span><span className="tm-tip"><b>GP Pierrefeu M4</b><span>14 Juin · Pierrefeu</span></span></a>
            <a href="#race-7" className="tm-pin france" style={{ left: '62%' }}><span className="tm-pin__num">F1</span><span className="tm-pin__dot"></span><span className="tm-tip"><b>Ch. de France M3</b><span>05 Juil · Montpellier</span></span></a>
            <a href="#race-8" className="tm-pin club" style={{ left: '71%' }}><span className="tm-pin__num">C3</span><span className="tm-pin__dot"></span><span className="tm-tip"><b>Champ. club M3</b><span>02 Août · Pierrefeu</span></span></a>
            <a href="#race-9" className="tm-pin gp" style={{ left: '82%' }}><span className="tm-pin__num">GP</span><span className="tm-pin__dot"></span><span className="tm-tip"><b>GP International</b><span>19→21 Sept · Pierrefeu</span></span></a>
            <a href="#race-10" className="tm-pin france" style={{ left: '90%' }}><span className="tm-pin__num">F2</span><span className="tm-pin__dot"></span><span className="tm-tip"><b>Finale France</b><span>18 Oct · Bordeaux</span></span></a>
            <a href="#race-11" className="tm-pin" style={{ left: '95%' }}><span className="tm-pin__num">R5</span><span className="tm-pin__dot"></span><span className="tm-tip"><b>Clôture régionale</b><span>08 Nov · Nice</span></span></a>
          </div>
        </div>
      </section>

      {/* RACES */}
      <section className="races" id="all-races">
        <div className="container">
          <div className="races__head">
            <div>
              <span className="eyebrow">Toutes les courses · 12 dates</span>
              <h2 className="h-title scroll-reveal">Le calendrier<br />complet.</h2>
            </div>
            <div className="results-info">Affichage · <b id="resultCount">12</b> courses · saison <b>2026</b></div>
          </div>

          {/* GRID VIEW */}
          <div className="race-grid--comp" id="raceGrid" data-view="grid">
            <article className="race race--regio reveal" id="race-6" data-type="regio">
              <div className="race__top"><span className="badge">Régionale · M4</span><span className="race__round">04 / 12</span></div>
              <div className="race__date"><div className="day">14</div><div className="meta"><span className="month">Juin</span><span className="dow">Sam → Dim · 09h00</span></div></div>
              <div className="race__body">
                <h3 className="race__title">GP de Pierrefeu — Manche 4</h3>
                <span className="race__loc">▲ Pierrefeu-du-Var · Circuit VAMP83</span>
                <p className="race__desc">Manche maison sur deux jours. Essais libres samedi, qualifs et finales dimanche.</p>
              </div>
              <div className="race__foot"><span>Engagement · <b>40€</b></span><span className="status status--open"><span className="dot"></span>Inscriptions ouvertes</span></div>
            </article>

            <article className="race race--regio race--done reveal" id="race-5" data-type="regio">
              <div className="race__top"><span className="badge">Régionale · M3</span><span className="race__round">03 / 12</span></div>
              <div className="race__date"><div className="day">10</div><div className="meta"><span className="month">Mai</span><span className="dow">Dim · 08h30</span></div></div>
              <div className="race__body">
                <h3 className="race__title">Manche 3 PACA — Pierrefeu</h3>
                <span className="race__loc">▲ Pierrefeu-du-Var · 64 engagés</span>
                <p className="race__desc">Pole pour Mathieu R. en 1/8 TT, podium maison sur la finale A.</p>
              </div>
              <div className="race__winner">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.4 6.9 7.2.4-5.6 4.5 1.8 7L12 17l-5.8 3.8 1.8-7L2.4 9.3l7.2-.4z"/></svg>
                Vainqueur · <b>Mathieu R.</b> · 1/8 TT
              </div>
              <div className="race__foot"><span>Résultats · <b>+ podium</b></span><span className="status status--done"><span className="dot"></span>Terminée</span></div>
            </article>

            <article className="race race--club race--done reveal" id="race-4" data-type="club">
              <div className="race__top"><span className="badge">Club · M2</span><span className="race__round">02 / 12</span></div>
              <div className="race__date"><div className="day">26</div><div className="meta"><span className="month">Avr</span><span className="dow">Dim · 09h00</span></div></div>
              <div className="race__body">
                <h3 className="race__title">Championnat club — Manche 2</h3>
                <span className="race__loc">▲ Pierrefeu-du-Var · 38 engagés</span>
                <p className="race__desc">Course interne ouverte aux licenciés VAMP83, toutes catégories TT.</p>
              </div>
              <div className="race__foot"><span>Engagement · <b>15€</b></span><span className="status status--done"><span className="dot"></span>Terminée</span></div>
            </article>

            <article className="race race--france reveal" id="race-7" data-type="france">
              <div className="race__top"><span className="badge">France · M3</span><span className="race__round">05 / 12</span></div>
              <div className="race__date"><div className="day">05</div><div className="meta"><span className="month">Juil</span><span className="dow">Sam → Dim</span></div></div>
              <div className="race__body">
                <h3 className="race__title">Championnat de France — M3</h3>
                <span className="race__loc">▲ Montpellier (34) · Circuit MC34</span>
                <p className="race__desc">Manche nationale 1/8 TT. Délégation VAMP83 confirmée (8 pilotes).</p>
              </div>
              <div className="race__foot"><span>Sur sélection · <b>FFVRC</b></span><span className="status status--soon"><span className="dot"></span>Pré-engagement</span></div>
            </article>

            <article className="race race--club reveal" id="race-8" data-type="club">
              <div className="race__top"><span className="badge">Club · M3</span><span className="race__round">06 / 12</span></div>
              <div className="race__date"><div className="day">02</div><div className="meta"><span className="month">Août</span><span className="dow">Dim · 17h00</span></div></div>
              <div className="race__body">
                <h3 className="race__title">Nocturne d&apos;été — Club</h3>
                <span className="race__loc">▲ Pierrefeu-du-Var · Éclairage LED</span>
                <p className="race__desc">Course de nuit, format spécial été. BBQ paddock + finale sous projecteurs.</p>
              </div>
              <div className="race__foot"><span>Engagement · <b>15€</b></span><span className="status status--open"><span className="dot"></span>Inscriptions ouvertes</span></div>
            </article>

            <article className="race race--gp reveal" id="race-9" data-type="gp">
              <div className="race__top"><span className="badge">GP International</span><span className="race__round">07 / 12</span></div>
              <div className="race__date"><div className="day">19</div><div className="meta"><span className="month">Sept</span><span className="dow">Ven → Dim · 3 jours</span></div></div>
              <div className="race__body">
                <h3 className="race__title">35ᵉ Grand Prix International de Pierrefeu</h3>
                <span className="race__loc">▲ Pierrefeu-du-Var · Plateau européen</span>
                <p className="race__desc">L&apos;événement phare du club. 120 pilotes, retransmission live, 1 200 visiteurs attendus.</p>
              </div>
              <div className="race__foot"><span>Engagement · <b>85€</b></span><span className="status status--soon"><span className="dot"></span>Bientôt ouvert</span></div>
            </article>

            <article className="race race--club race--done reveal" id="race-2" data-type="club">
              <div className="race__top"><span className="badge">Club · M1</span><span className="race__round">01 / 12</span></div>
              <div className="race__date"><div className="day">08</div><div className="meta"><span className="month">Mar</span><span className="dow">Dim · 09h00</span></div></div>
              <div className="race__body">
                <h3 className="race__title">Ouverture saison — Club M1</h3>
                <span className="race__loc">▲ Pierrefeu-du-Var · 42 engagés</span>
                <p className="race__desc">Première manche du championnat interne. Reprise après pause hivernale.</p>
              </div>
              <div className="race__foot"><span>Résultats · <b>+ podium</b></span><span className="status status--done"><span className="dot"></span>Terminée</span></div>
            </article>

            <article className="race race--france reveal" id="race-10" data-type="france">
              <div className="race__top"><span className="badge">France · Finale</span><span className="race__round">08 / 12</span></div>
              <div className="race__date"><div className="day">18</div><div className="meta"><span className="month">Oct</span><span className="dow">Sam → Dim</span></div></div>
              <div className="race__body">
                <h3 className="race__title">Finale Championnat de France</h3>
                <span className="race__loc">▲ Bordeaux (33) · Circuit Aquitaine</span>
                <p className="race__desc">Finale nationale 1/8 TT. Sélectionnés VAMP83 selon classement intermédiaire.</p>
              </div>
              <div className="race__foot"><span>Sur sélection · <b>FFVRC</b></span><span className="status status--soon"><span className="dot"></span>Pré-engagement</span></div>
            </article>

            <article className="race race--regio reveal" id="race-11" data-type="regio">
              <div className="race__top"><span className="badge">Régionale · M5</span><span className="race__round">09 / 12</span></div>
              <div className="race__date"><div className="day">08</div><div className="meta"><span className="month">Nov</span><span className="dow">Dim · 09h00</span></div></div>
              <div className="race__body">
                <h3 className="race__title">Clôture régionale — M5</h3>
                <span className="race__loc">▲ Nice (06) · Circuit RC Côte d&apos;Azur</span>
                <p className="race__desc">Dernière manche du championnat PACA. Remise des prix de la saison sur place.</p>
              </div>
              <div className="race__foot"><span>Engagement · <b>40€</b></span><span className="status status--open"><span className="dot"></span>Inscriptions ouvertes</span></div>
            </article>

            <article className="race race--regio race--done reveal" id="race-1" data-type="regio">
              <div className="race__top"><span className="badge">Régionale · M1</span><span className="race__round">10 / 12</span></div>
              <div className="race__date"><div className="day">15</div><div className="meta"><span className="month">Fév</span><span className="dow">Dim · 09h00</span></div></div>
              <div className="race__body">
                <h3 className="race__title">Ouverture régionale PACA</h3>
                <span className="race__loc">▲ Solliès-Pont (83) · 58 engagés</span>
                <p className="race__desc">Première manche du championnat régional. Conditions sèches, bonne adhérence.</p>
              </div>
              <div className="race__winner">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.4 6.9 7.2.4-5.6 4.5 1.8 7L12 17l-5.8 3.8 1.8-7L2.4 9.3l7.2-.4z"/></svg>
                Vainqueur · <b>K. Beaufort</b> · 1/8 TT
              </div>
              <div className="race__foot"><span>Résultats · <b>+ podium</b></span><span className="status status--done"><span className="dot"></span>Terminée</span></div>
            </article>

            <article className="race race--regio race--done reveal" id="race-3" data-type="regio">
              <div className="race__top"><span className="badge">Régionale · M2</span><span className="race__round">11 / 12</span></div>
              <div className="race__date"><div className="day">05</div><div className="meta"><span className="month">Avr</span><span className="dow">Dim · 09h00</span></div></div>
              <div className="race__body">
                <h3 className="race__title">Manche 2 PACA — Aix</h3>
                <span className="race__loc">▲ Aix-en-Provence (13) · 51 engagés</span>
                <p className="race__desc">Sortie externe. Délégation VAMP83 sur le podium en 1/10 TT électrique.</p>
              </div>
              <div className="race__foot"><span>Résultats · <b>+ podium</b></span><span className="status status--done"><span className="dot"></span>Terminée</span></div>
            </article>

            <article className="race race--club reveal" id="race-12" data-type="club">
              <div className="race__top"><span className="badge">Club · Gala</span><span className="race__round">12 / 12</span></div>
              <div className="race__date"><div className="day">13</div><div className="meta"><span className="month">Déc</span><span className="dow">Sam · 19h00</span></div></div>
              <div className="race__body">
                <h3 className="race__title">Gala de fin de saison</h3>
                <span className="race__loc">▲ Pierrefeu-du-Var · Salle du club</span>
                <p className="race__desc">Remise des trophées du championnat interne, repas du club, projection saison.</p>
              </div>
              <div className="race__foot"><span>Adhérents · <b>Gratuit</b></span><span className="status status--soon"><span className="dot"></span>Sur réservation</span></div>
            </article>
          </div>

          {/* LIST VIEW */}
          <div className="race-list hidden-view" id="raceList" data-view="list">
            <div className="race-row race--regio race--done" data-type="regio">
              <div className="col-date"><div className="day">15</div><div className="month">Fév</div></div>
              <div className="col-title"><b>Ouverture régionale PACA</b><span>▲ Solliès-Pont (83) · 58 engagés</span></div>
              <div className="col-type"><b>Régionale · M1</b>1/8 TT Nitro</div>
              <div className="col-status"><span className="dot" style={{ background: '#3a3a40' }}></span>Terminée</div>
              <div className="col-cta"><a href="#race-1">Résultats →</a></div>
            </div>
            <div className="race-row race--club race--done" data-type="club">
              <div className="col-date"><div className="day">08</div><div className="month">Mar</div></div>
              <div className="col-title"><b>Ouverture saison — Club M1</b><span>▲ Pierrefeu-du-Var · 42 engagés</span></div>
              <div className="col-type"><b>Club · M1</b>Toutes catégories</div>
              <div className="col-status"><span className="dot" style={{ background: '#3a3a40' }}></span>Terminée</div>
              <div className="col-cta"><a href="#race-2">Résultats →</a></div>
            </div>
            <div className="race-row race--regio race--done" data-type="regio">
              <div className="col-date"><div className="day">05</div><div className="month">Avr</div></div>
              <div className="col-title"><b>Manche 2 PACA — Aix</b><span>▲ Aix-en-Provence (13) · 51 engagés</span></div>
              <div className="col-type"><b>Régionale · M2</b>1/10 + 1/8 TT</div>
              <div className="col-status"><span className="dot" style={{ background: '#3a3a40' }}></span>Terminée</div>
              <div className="col-cta"><a href="#race-3">Résultats →</a></div>
            </div>
            <div className="race-row race--club race--done" data-type="club">
              <div className="col-date"><div className="day">26</div><div className="month">Avr</div></div>
              <div className="col-title"><b>Championnat club — M2</b><span>▲ Pierrefeu-du-Var · 38 engagés</span></div>
              <div className="col-type"><b>Club · M2</b>Toutes catégories</div>
              <div className="col-status"><span className="dot" style={{ background: '#3a3a40' }}></span>Terminée</div>
              <div className="col-cta"><a href="#race-4">Résultats →</a></div>
            </div>
            <div className="race-row race--regio race--done" data-type="regio">
              <div className="col-date"><div className="day">10</div><div className="month">Mai</div></div>
              <div className="col-title"><b>Manche 3 PACA — Pierrefeu</b><span>▲ Pierrefeu-du-Var · 64 engagés</span></div>
              <div className="col-type"><b>Régionale · M3</b>1/8 TT Nitro</div>
              <div className="col-status"><span className="dot" style={{ background: '#3a3a40' }}></span>Terminée</div>
              <div className="col-cta"><a href="#race-5">Résultats →</a></div>
            </div>
            <div className="race-row race--regio" data-type="regio">
              <div className="col-date"><div className="day">14</div><div className="month">Juin</div></div>
              <div className="col-title"><b>GP de Pierrefeu — Manche 4</b><span>▲ Pierrefeu-du-Var · Manche maison</span></div>
              <div className="col-type"><b>Régionale · M4</b>1/8 TT Nitro</div>
              <div className="col-status"><span className="dot" style={{ background: 'var(--green)' }}></span>Inscriptions ouvertes</div>
              <div className="col-cta"><a href="#race-6">S&apos;engager →</a></div>
            </div>
            <div className="race-row race--france" data-type="france">
              <div className="col-date"><div className="day">05</div><div className="month">Juil</div></div>
              <div className="col-title"><b>Championnat de France — M3</b><span>▲ Montpellier (34) · Délégation 8 pilotes</span></div>
              <div className="col-type"><b>France · M3</b>1/8 TT Nitro</div>
              <div className="col-status"><span className="dot" style={{ background: 'var(--orange)' }}></span>Pré-engagement</div>
              <div className="col-cta"><a href="#race-7">Détails →</a></div>
            </div>
            <div className="race-row race--club" data-type="club">
              <div className="col-date"><div className="day">02</div><div className="month">Août</div></div>
              <div className="col-title"><b>Nocturne d&apos;été — Club</b><span>▲ Pierrefeu-du-Var · Course sous LED</span></div>
              <div className="col-type"><b>Club · M3</b>Toutes catégories</div>
              <div className="col-status"><span className="dot" style={{ background: 'var(--green)' }}></span>Inscriptions ouvertes</div>
              <div className="col-cta"><a href="#race-8">S&apos;engager →</a></div>
            </div>
            <div className="race-row race--gp" data-type="gp">
              <div className="col-date"><div className="day">19</div><div className="month">Sept</div></div>
              <div className="col-title"><b>35ᵉ Grand Prix International</b><span>▲ Pierrefeu-du-Var · 3 jours · 120 pilotes</span></div>
              <div className="col-type"><b>GP Intl.</b>1/8 TT Élite</div>
              <div className="col-status"><span className="dot" style={{ background: 'var(--orange)' }}></span>Bientôt ouvert</div>
              <div className="col-cta"><a href="#race-9">Détails →</a></div>
            </div>
            <div className="race-row race--france" data-type="france">
              <div className="col-date"><div className="day">18</div><div className="month">Oct</div></div>
              <div className="col-title"><b>Finale Championnat de France</b><span>▲ Bordeaux (33) · Aquitaine</span></div>
              <div className="col-type"><b>France · Finale</b>1/8 TT Nitro</div>
              <div className="col-status"><span className="dot" style={{ background: 'var(--orange)' }}></span>Pré-engagement</div>
              <div className="col-cta"><a href="#race-10">Détails →</a></div>
            </div>
            <div className="race-row race--regio" data-type="regio">
              <div className="col-date"><div className="day">08</div><div className="month">Nov</div></div>
              <div className="col-title"><b>Clôture régionale — M5</b><span>▲ Nice (06) · Remise des prix</span></div>
              <div className="col-type"><b>Régionale · M5</b>1/8 TT Nitro</div>
              <div className="col-status"><span className="dot" style={{ background: 'var(--green)' }}></span>Inscriptions ouvertes</div>
              <div className="col-cta"><a href="#race-11">S&apos;engager →</a></div>
            </div>
            <div className="race-row race--club" data-type="club">
              <div className="col-date"><div className="day">13</div><div className="month">Déc</div></div>
              <div className="col-title"><b>Gala de fin de saison</b><span>▲ Pierrefeu-du-Var · Salle du club</span></div>
              <div className="col-type"><b>Club · Gala</b>Remise des trophées</div>
              <div className="col-status"><span className="dot" style={{ background: 'var(--orange)' }}></span>Sur réservation</div>
              <div className="col-cta"><a href="#race-12">Détails →</a></div>
            </div>
          </div>
        </div>
      </section>

      {/* STANDINGS */}
      <section className="standings">
        <div className="container standings__inner">
          <div className="standings__intro">
            <span className="eyebrow">Classement provisoire</span>
            <h2 className="h-title scroll-reveal">Top 6 pilotes<br />— Saison 2026</h2>
            <p>Cumul des points après <b>3 manches</b> régionales. Le championnat club est calculé séparément. Mise à jour automatique après chaque épreuve.</p>
            <div className="standings__meta">
              <span>Dernière mise à jour · <b>11 Mai 2026 · 22:48</b></span>
              <span>Système · <b>FFVRC barème officiel</b></span>
              <span>Catégories · <b>1/8 TT Nitro</b></span>
            </div>
          </div>

          <div className="standings__table">
            <div className="standings__head">
              <span>Pos</span><span>Pilote</span><span className="cat">Catégorie</span><span className="wins">V.</span><span style={{ textAlign: 'right' }}>Pts</span>
            </div>
            <div className="standings__row podium-1">
              <span className="pos">01</span>
              <div className="pilot"><div className="avatar">MR</div><div><b>Mathieu Reynaud</b><span>VAMP83 · n°42</span></div></div>
              <span className="cat">1/8 TT Nitro</span>
              <span className="wins">2 V.</span>
              <span className="pts">147</span>
            </div>
            <div className="standings__row podium-2">
              <span className="pos">02</span>
              <div className="pilot"><div className="avatar">KB</div><div><b>Kévin Beaufort</b><span>VAMP83 · n°7</span></div></div>
              <span className="cat">1/8 TT Nitro</span>
              <span className="wins">1 V.</span>
              <span className="pts">132</span>
            </div>
            <div className="standings__row podium-3">
              <span className="pos">03</span>
              <div className="pilot"><div className="avatar">JL</div><div><b>Julien Lacroix</b><span>VAMP83 · n°18</span></div></div>
              <span className="cat">1/8 TT Nitro</span>
              <span className="wins">0 V.</span>
              <span className="pts">118</span>
            </div>
            <div className="standings__row">
              <span className="pos">04</span>
              <div className="pilot"><div className="avatar">SD</div><div><b>Sébastien Daniels</b><span>VAMP83 · n°23</span></div></div>
              <span className="cat">1/8 TT Nitro</span>
              <span className="wins">0 V.</span>
              <span className="pts">102</span>
            </div>
            <div className="standings__row">
              <span className="pos">05</span>
              <div className="pilot"><div className="avatar">TM</div><div><b>Théo Marchand</b><span>VAMP83 · n°9</span></div></div>
              <span className="cat">1/8 TT Nitro</span>
              <span className="wins">0 V.</span>
              <span className="pts">94</span>
            </div>
            <div className="standings__row">
              <span className="pos">06</span>
              <div className="pilot"><div className="avatar">FP</div><div><b>Florian Pérez</b><span>VAMP83 · n°31</span></div></div>
              <span className="cat">1/8 TT Nitro</span>
              <span className="wins">0 V.</span>
              <span className="pts">88</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="cta-strip" id="inscription">
        <div className="container cta-strip__inner">
          <h3 className="h-title scroll-reveal">
            Tu veux courir avec nous<br /><span className="accent">cette saison</span> ?
          </h3>
          <div className="cta-strip__actions">
            <a href="#" className="btn">S&apos;inscrire à une manche <span className="arrow">→</span></a>
            <a href="/#footer" className="btn btn--outline">Nous contacter <span className="arrow">→</span></a>
          </div>
        </div>
      </section>

      {/* FOOTER (simple) */}
      <footer className="foot-simple">
        <div className="container">
          <a href="/" className="logo">
            <div className="logo__mark">V</div>
            <div className="logo__text"><b>VAMP83</b><span>EST. 1984 · PIERREFEU</span></div>
          </a>
          <span className="slogan">↳ Une grande famille depuis 1984</span>
          <span className="copy">© 2026 VAMP83 · mail@gmail.fr · Pierrefeu-du-Var (83)</span>
        </div>
      </footer>
    </>
  );
}
