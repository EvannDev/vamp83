import ClientEffects from './components/ClientEffects';

export default function Home() {
  return (
    <>
      <ClientEffects />

      {/* NAV */}
      <header className="nav" id="nav">
        <div className="container nav__inner">
          <a href="#" className="logo">
            <div className="logo__mark">V</div>
            <div className="logo__text">
              <b>VAMP83</b>
              <span>EST. 1984 · PIERREFEU</span>
            </div>
          </a>
          <nav className="nav__links">
            <a href="#" className="active">Accueil</a>
            <a href="#club">Le Club</a>
            <a href="#piste">La Piste</a>
            <a href="/competitions">Compétitions</a>
            <a href="#galerie">Photos</a>
            <a href="#footer">Contact</a>
          </nav>
          <div className="nav__cta">
            <span className="nav__live"><span className="dot"></span>Saison 2026</span>
            <a href="#" className="btn">Rejoindre le club <span className="arrow">→</span></a>
            <button className="burger" aria-label="Menu"><span></span></button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero__bg">
          <div className="photo photo--hero photo--clean" style={{ position: 'absolute', inset: 0 }}></div>
        </div>
        <div className="hero__grain"></div>

        <div className="container hero__inner">
          <div className="hero__top">
            <div>
              <div className="hero__meta">
                <div className="hero__meta-row">
                  <span><b>83·390</b> Pierrefeu-du-Var</span>
                  <span className="pipe">/</span>
                  <span>43°13&apos;N · 06°08&apos;E</span>
                  <span className="pipe">/</span>
                  <span><b>1/8 · 1/10</b> TT</span>
                </div>
              </div>
              <h1 className="h-title hero__title">
                <span className="w"><span style={{ animationDelay: '.10s' }}>Var</span></span>
                {' '}
                <span className="w"><span style={{ animationDelay: '.18s' }}>Auto</span></span><br />
                <span className="w"><span style={{ animationDelay: '.28s' }}>Modélisme</span></span><br />
                <span className="accent">
                  <span className="w"><span style={{ animationDelay: '.46s' }}>Pierrefeu</span></span>
                </span>
              </h1>
            </div>
            <div>
              <p className="hero__sub">
                Le club de voiture <b>RC tout-terrain</b> du Var depuis <b>1984</b>. 42 ans de poussière, de chronos serrés et de pilotes qui n&apos;ont rien lâché.
              </p>
              <div className="hero__cta">
                <a href="#club" className="btn">Découvrir le club <span className="arrow">→</span></a>
                <a href="#comp" className="btn btn--outline">Voir les compétitions <span className="arrow">→</span></a>
              </div>
            </div>
          </div>

          <div className="hero__stats" id="hero-stats">
            <div className="hero__stat">
              <div className="n" data-count="124">0</div>
              <div className="l"><span className="u">/</span> Membres actifs</div>
            </div>
            <div className="hero__stat">
              <div className="n" data-count="42"><span className="u" style={{ color: 'var(--red)' }}>+</span>0</div>
              <div className="l"><span className="u">/</span> Ans d&apos;existence</div>
            </div>
            <div className="hero__stat">
              <div className="n" data-count="20">0</div>
              <div className="l"><span className="u">/</span> GP organisés</div>
            </div>
            <div className="hero__stat">
              <div className="n" data-count="3">0</div>
              <div className="l"><span className="u">/</span> Titres nationaux</div>
            </div>
          </div>
        </div>

        <div className="scroll-hint">
          <span>Scroll</span>
          <div className="bar"></div>
        </div>
      </section>

      {/* NEXT RACE STRIP */}
      <section className="next-race">
        <div className="container next-race__inner">
          <div className="next-race__label">
            <span className="badge">● Live</span>
            <b>Prochaine course</b>
          </div>
          <div className="next-race__title">
            Grand Prix de Pierrefeu — Manche 4
            <small>Circuit VAMP83 · 14 → 15 Juin 2026 · 1/8 TT Thermique</small>
          </div>
          <div className="countdown" id="countdown">
            <div className="countdown__cell"><span className="n" id="cd-d">00</span><span className="l">Jours</span></div>
            <div className="countdown__cell"><span className="n" id="cd-h">00</span><span className="l">Heures</span></div>
            <div className="countdown__cell"><span className="n" id="cd-m">00</span><span className="l">Min</span></div>
            <div className="countdown__cell"><span className="n" id="cd-s">00</span><span className="l">Sec</span></div>
          </div>
        </div>
      </section>

      {/* ACTUALITES */}
      <section className="actu" id="club">
        <div className="container">
          <div className="sec-head">
            <div className="sec-head__left">
              <span className="eyebrow">Actualités · Saison 2026</span>
              <h2 className="h-title scroll-reveal">Ce qui se passe<br />au paddock.</h2>
            </div>
            <div className="sec-head__right">
              <a href="#" className="sec-link">Toutes les actus <span className="arrow">→</span></a>
            </div>
          </div>

          <div className="news-grid">
            <article className="news-card reveal tilt">
              <div className="tilt__glare"></div>
              <div className="news-card__img">
                <div className="photo photo--pink photo--clean img-reveal"></div>
                <div className="news-card__date"><div className="d">12</div><div className="m">Mai</div></div>
                <div className="news-card__tag">Course</div>
              </div>
              <div className="news-card__body">
                <h3 className="news-card__title">Manche 3 : Mathieu R. décroche la pole en 1/8 TT</h3>
                <p className="news-card__excerpt">Sous un soleil de plomb, plus de 60 pilotes engagés pour une finale serrée jusqu&apos;au dernier virage.</p>
                <a href="#" className="news-card__read">Lire l&apos;article <span className="arrow">→</span></a>
              </div>
            </article>

            <article className="news-card reveal tilt">
              <div className="tilt__glare"></div>
              <div className="news-card__img">
                <div className="photo photo--sand photo--clean img-reveal"></div>
                <div className="news-card__date"><div className="d">28</div><div className="m">Avr</div></div>
                <div className="news-card__tag">Piste</div>
              </div>
              <div className="news-card__body">
                <h3 className="news-card__title">La piste évolue : nouveau double-saut & relance étendue</h3>
                <p className="news-card__excerpt">Le tracé gagne 18m et un module rythmique. Réouverture officielle après les essais libres du 5 mai.</p>
                <a href="#" className="news-card__read">Lire l&apos;article <span className="arrow">→</span></a>
              </div>
            </article>

            <article className="news-card reveal tilt">
              <div className="tilt__glare"></div>
              <div className="news-card__img">
                <div className="photo photo--assoc photo--clean img-reveal"></div>
                <div className="news-card__date"><div className="d">15</div><div className="m">Avr</div></div>
                <div className="news-card__tag">Club</div>
              </div>
              <div className="news-card__body">
                <h3 className="news-card__title">Stage jeunes pilotes : 14 nouveaux licenciés en avril</h3>
                <p className="news-card__excerpt">Trois week-ends d&apos;initiation, encadrement par les anciens du club. Inscriptions ouvertes pour la session estivale.</p>
                <a href="#" className="news-card__read">Lire l&apos;article <span className="arrow">→</span></a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* LIVE TICKER */}
      <section className="ticker" aria-hidden="true">
        <div className="ticker__track">
          <span className="ticker__item">Circuit VAMP83 · Pierrefeu-du-Var <span className="ticker__sep"></span></span>
          <span className="ticker__item hot">● GP 14–15 JUIN 2026 <span className="ticker__sep"></span></span>
          <span className="ticker__item alt">1/8 TT Nitro · 1/10 électrique <span className="ticker__sep"></span></span>
          <span className="ticker__item">Éclairage LED · Nocturnes <span className="ticker__sep"></span></span>
          <span className="ticker__item alt">AMB MyLaps · Chrono Live <span className="ticker__sep"></span></span>
          <span className="ticker__item hot">● Saison 42 ouverte <span className="ticker__sep"></span></span>
          <span className="ticker__item">École de pilotage — inscriptions <span className="ticker__sep"></span></span>
          <span className="ticker__item alt">Depuis 1984 · +100 pilotes <span className="ticker__sep"></span></span>
          {/* duplicate for seamless loop */}
          <span className="ticker__item">Circuit VAMP83 · Pierrefeu-du-Var <span className="ticker__sep"></span></span>
          <span className="ticker__item hot">● GP 14–15 JUIN 2026 <span className="ticker__sep"></span></span>
          <span className="ticker__item alt">1/8 TT Nitro · 1/10 électrique <span className="ticker__sep"></span></span>
          <span className="ticker__item">Éclairage LED · Nocturnes <span className="ticker__sep"></span></span>
          <span className="ticker__item alt">AMB MyLaps · Chrono Live <span className="ticker__sep"></span></span>
          <span className="ticker__item hot">● Saison 42 ouverte <span className="ticker__sep"></span></span>
          <span className="ticker__item">École de pilotage — inscriptions <span className="ticker__sep"></span></span>
          <span className="ticker__item alt">Depuis 1984 · +100 pilotes <span className="ticker__sep"></span></span>
        </div>
      </section>

      {/* CHIFFRES */}
      <section className="chiffres">
        <div className="container chiffres__inner">
          <div className="chiffres__head">
            <div>
              <span className="eyebrow" style={{ color: '#fff' }}>Le club en chiffres</span>
              <h2 className="h-title scroll-reveal" style={{ marginTop: '14px' }}>Quatre décennies<br />à pleins gaz.</h2>
            </div>
            <p>Le VAMP83 fait partie des plus anciens clubs RC tout-terrain de France. Une histoire écrite par ses pilotes — et par sa piste.</p>
          </div>

          <div className="stats-grid">
            <div className="stat">
              <div className="stat__n">1984</div>
              <div className="stat__l">Année de fondation</div>
              <div className="stat__d">— il y a 42 saisons</div>
            </div>
            <div className="stat">
              <div className="stat__n"><span className="sup">+</span>100</div>
              <div className="stat__l">Pilotes accueillis</div>
              <div className="stat__d">— toutes catégories</div>
            </div>
            <div className="stat">
              <div className="stat__n">20</div>
              <div className="stat__l">Grands Prix organisés</div>
              <div className="stat__d">— dont 4 internationaux</div>
            </div>
            <div className="stat">
              <div className="stat__n">01</div>
              <div className="stat__l">Piste unique dans le Var</div>
              <div className="stat__d">— éclairée · chronométrée</div>
            </div>
          </div>
        </div>
      </section>

      {/* PISTE */}
      <section className="piste" id="piste">
        <div className="container">
          <div className="sec-head">
            <div className="sec-head__left">
              <span className="eyebrow">Le circuit · 43.21°N 06.13°E</span>
              <h2 className="h-title scroll-reveal">La piste — Notre<br />terrain de jeu.</h2>
            </div>
          </div>

          <div className="piste__grid">
            <div className="piste__img">
              <div className="photo photo--piste photo--clean img-reveal"></div>
              <div className="piste__img-badge">Pierrefeu-du-Var · 83</div>
              <div className="piste__img-coord">
                LAT 43.214°N<br />
                LNG 06.137°E<br />
                ALT 95m · 1/8 TT
              </div>
            </div>

            <div className="piste__content">
              <span className="eyebrow">Équipements</span>
              <h2 className="h-title scroll-reveal">Conçue pour<br />les pilotes.</h2>
              <p>320m de tracé technique sur terre latéritique, doubles, table-top, virages relevés. Une piste pensée pour la compétition autant que pour les loisirs — accessible toute l&apos;année.</p>

              <div className="equip-list">
                <div className="equip">
                  <div className="equip__icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 11h18v8H3z"/><path d="M5 11V7l7-4 7 4v4"/>
                    </svg>
                  </div>
                  <div className="equip__txt">
                    <b>Stands couverts</b>
                    <span>Plus de 100 emplacements pilotes, alimentation 220V à chaque box</span>
                  </div>
                </div>
                <div className="equip">
                  <div className="equip__icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.5 4.5l2 2M17.5 17.5l2 2M4.5 19.5l2-2M17.5 6.5l2-2"/>
                    </svg>
                  </div>
                  <div className="equip__txt">
                    <b>Éclairage nocturne</b>
                    <span>LED puissants — sessions et finales de nuit toute la saison</span>
                  </div>
                </div>
                <div className="equip">
                  <div className="equip__icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 11h18l-2 9H5l-2-9z"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>
                    </svg>
                  </div>
                  <div className="equip__txt">
                    <b>Buvette · Restauration</b>
                    <span>Snack chaud le week-end, terrasse ombragée face à la ligne droite</span>
                  </div>
                </div>
                <div className="equip">
                  <div className="equip__icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="8" width="18" height="10" rx="1"/><path d="M20 11h2v5h-2"/>
                      <circle cx="7" cy="19" r="1.5"/><circle cx="15" cy="19" r="1.5"/>
                    </svg>
                  </div>
                  <div className="equip__txt">
                    <b>Parking camping-car</b>
                    <span>Aire dédiée avec point d&apos;eau, pratique pour les week-ends de course</span>
                  </div>
                </div>
                <div className="equip">
                  <div className="equip__icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="13" r="8"/><path d="M12 9v4l2.5 2.5"/><path d="M9 1h6M12 1v4"/>
                    </svg>
                  </div>
                  <div className="equip__txt">
                    <b>Chrono informatisé</b>
                    <span>Système AMB MyLaps, classements live sur écran et application</span>
                  </div>
                </div>
                <div className="equip">
                  <div className="equip__icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 17l4-4 4 4 6-6 4 4"/><path d="M14 6h7v7"/>
                    </svg>
                  </div>
                  <div className="equip__txt">
                    <b>Tracé évolutif</b>
                    <span>Variable au gré des courses : 320m configurable en mode rapide ou technique</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIAGONAL DIVIDER */}
      <div className="divider"></div>

      {/* COMPETITIONS */}
      <section className="comp" id="comp">
        <div className="container">
          <div className="sec-head">
            <div className="sec-head__left">
              <span className="eyebrow">Compétitions · Niveau régional → international</span>
              <h2 className="h-title scroll-reveal">Où l&apos;on court,<br />et qui l&apos;on accueille.</h2>
            </div>
            <div className="sec-head__right">
              <a href="#" className="sec-link">Calendrier complet <span className="arrow">→</span></a>
            </div>
          </div>

          <div className="race-grid">
            <article className="race race--regio reveal tilt">
              <div className="tilt__glare"></div>
              <div className="race__top">
                <span className="badge">Régionale</span>
                <span className="race__num">N°01 / 03</span>
              </div>
              <div className="race__img">
                <div className="photo photo--day photo--clean"></div>
              </div>
              <div className="race__body">
                <h3 className="race__title">Épreuves Régionales PACA</h3>
                <p className="race__desc">Six manches par saison, ouvertes aux pilotes licenciés de la région. Format découverte / confirmé.</p>
                <div className="race__meta">
                  <span>Niveau · <b>Régional</b></span>
                  <span><span className="accent">●</span> 6 manches</span>
                </div>
              </div>
            </article>

            <article className="race race--france reveal tilt">
              <div className="tilt__glare"></div>
              <div className="race__top">
                <span className="badge">France</span>
                <span className="race__num">N°02 / 03</span>
              </div>
              <div className="race__img">
                <div className="photo photo--sunset photo--clean"></div>
              </div>
              <div className="race__body">
                <h3 className="race__title">Championnat de France</h3>
                <p className="race__desc">VAMP83 accueille régulièrement une manche du Championnat de France 1/8 TT. Plateau national, ambiance grand prix.</p>
                <div className="race__meta">
                  <span>Niveau · <b>National</b></span>
                  <span><span className="accent">●</span> Sur sélection</span>
                </div>
              </div>
            </article>

            <article className="race race--gp reveal tilt">
              <div className="tilt__glare"></div>
              <div className="race__top">
                <span className="badge">GP International</span>
                <span className="race__num">N°03 / 03</span>
              </div>
              <div className="race__img">
                <div className="photo photo--hero photo--clean"></div>
              </div>
              <div className="race__body">
                <h3 className="race__title">Grand Prix International de Pierrefeu</h3>
                <p className="race__desc">L&apos;événement phare. Trois jours de course, pilotes européens, retransmission live et plus de 1 200 visiteurs.</p>
                <div className="race__meta">
                  <span>Niveau · <b>Élite</b></span>
                  <span><span className="accent">●</span> Septembre</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* GALERIE */}
      <section className="gal" id="galerie">
        <div className="container">
          <div className="sec-head">
            <div className="sec-head__left">
              <span className="eyebrow">Galerie · Saison 2025-2026</span>
              <h2 className="h-title scroll-reveal">Quatre décennies<br />en images.</h2>
            </div>
            <div className="sec-head__right">
              <a href="#" className="sec-link">Voir toutes les photos <span className="arrow">→</span></a>
            </div>
          </div>

          <div className="masonry">
            <a href="#" className="tile tile--a">
              <span className="tile__num">01 / 06</span>
              <div className="photo photo--pink photo--clean"></div>
              <div className="tile__caption">
                <div><b>Buggy n°8 · Vol stationnaire</b><span>1/8 TT Nitro · Pierrefeu</span></div>
                <div className="tile__zoom">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="7"/><path d="M21 21l-4.5-4.5"/>
                  </svg>
                </div>
              </div>
            </a>
            <a href="#" className="tile tile--b">
              <span className="tile__num">02 / 06</span>
              <div className="photo photo--banked photo--clean"></div>
              <div className="tile__caption">
                <div><b>Section relevée</b><span>1/8 TT · Pierrefeu</span></div>
                <div className="tile__zoom">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="7"/><path d="M21 21l-4.5-4.5"/>
                  </svg>
                </div>
              </div>
            </a>
            <a href="#" className="tile tile--c">
              <span className="tile__num">03 / 06</span>
              <div className="photo photo--wood photo--clean"></div>
              <div className="tile__caption">
                <div><b>Virage bois</b><span>Stage technique</span></div>
                <div className="tile__zoom">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="7"/><path d="M21 21l-4.5-4.5"/>
                  </svg>
                </div>
              </div>
            </a>
            <a href="#" className="tile tile--d">
              <span className="tile__num">04 / 06</span>
              <div className="photo photo--sand photo--clean"></div>
              <div className="tile__caption">
                <div><b>Saut sable</b><span>Tremplin nord</span></div>
                <div className="tile__zoom">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="7"/><path d="M21 21l-4.5-4.5"/>
                  </svg>
                </div>
              </div>
            </a>
            <a href="#" className="tile tile--e">
              <span className="tile__num">05 / 06</span>
              <div className="photo photo--assoc photo--clean"></div>
              <div className="tile__caption">
                <div><b>Vol n°5</b><span>1/10 TT · Comm. piste</span></div>
                <div className="tile__zoom">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="7"/><path d="M21 21l-4.5-4.5"/>
                  </svg>
                </div>
              </div>
            </a>
            <a href="#" className="tile tile--f">
              <span className="tile__num">06 / 06</span>
              <div className="photo photo--hero photo--clean"></div>
              <div className="tile__caption">
                <div><b>GP International</b><span>Septembre 2025</span></div>
                <div className="tile__zoom">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="7"/><path d="M21 21l-4.5-4.5"/>
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="cta-strip">
        <div className="container cta-strip__inner">
          <h3 className="h-title scroll-reveal">
            Envie de poser tes roues<br /><span className="accent">sur notre piste</span> cette saison ?
          </h3>
          <div className="cta-strip__actions">
            <a href="#" className="btn">Rejoindre le club <span className="arrow">→</span></a>
            <a href="#" className="btn btn--outline">Venir essayer <span className="arrow">→</span></a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="footer">
        <div className="container">
          <div className="foot-grid">
            <div className="foot-brand">
              <a href="#" className="logo">
                <div className="logo__mark">V</div>
                <div className="logo__text"><b>VAMP83</b><span>EST. 1984 · PIERREFEU</span></div>
              </a>
              <p>Var Auto Modélisme Pierrefeu — club affilié, école de pilotage, organisateur du Grand Prix International depuis 1991.</p>
              <span className="slogan">↳ Une grande famille depuis 1984</span>
              <div className="socials">
                <a href="#" aria-label="Facebook">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13.4 21v-7.9h2.7l.4-3.1h-3.1V8c0-.9.3-1.5 1.6-1.5h1.7V3.7c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1V10H7.6v3.1h2.7V21h3.1z"/>
                  </svg>
                </a>
                <a href="#" aria-label="YouTube">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21.6 7.2s-.2-1.4-.8-2c-.7-.8-1.6-.8-2-.9C16 4 12 4 12 4s-4 0-6.8.3c-.4 0-1.3.1-2 .9-.6.6-.8 2-.8 2S2 8.9 2 10.5v1.7c0 1.7.2 3.3.2 3.3s.2 1.4.8 2c.8.8 1.8.8 2.2.9 1.6.2 6.8.3 6.8.3s4 0 6.8-.3c.4 0 1.3-.1 2-.9.6-.6.8-2 .8-2s.2-1.6.2-3.3v-1.7c0-1.6-.2-3.3-.2-3.3zM10 14.4V8.6l5.2 2.9-5.2 2.9z"/>
                  </svg>
                </a>
                <a href="#" aria-label="Instagram">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="4"/>
                    <circle cx="12" cy="12" r="4"/>
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="foot-col">
              <h4>Le club</h4>
              <ul>
                <li><a href="#">À propos</a></li>
                <li><a href="#">Bureau & encadrants</a></li>
                <li><a href="#">Adhésion 2026</a></li>
                <li><a href="#">Règlement intérieur</a></li>
                <li><a href="#">École de pilotage</a></li>
              </ul>
            </div>

            <div className="foot-col">
              <h4>Courses</h4>
              <ul>
                <li><a href="#">Calendrier 2026</a></li>
                <li><a href="#">Résultats live</a></li>
                <li><a href="#">Championnat club</a></li>
                <li><a href="#">GP de Pierrefeu</a></li>
                <li><a href="#">Inscription pilote</a></li>
              </ul>
            </div>

            <div className="foot-col">
              <h4>Contact</h4>
              <ul>
                <li className="row">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                  <span>Circuit VAMP83<br />83390 Pierrefeu-du-Var</span>
                </li>
                <li className="row">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="5" width="20" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>
                  </svg>
                  <a href="mailto:mail@gmail.fr">mail@gmail.fr</a>
                </li>
                <li className="row">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
                  </svg>
                  <span>Week-end · 9h–18h<br />Sessions nocturnes sur RDV</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="foot-bot">
            <span>© 2026 VAMP83 · Tous droits réservés</span>
            <span>Made in Pierrefeu · 83 · S.42</span>
            <span><a href="#">Mentions légales</a> · <a href="#">Cookies</a></span>
          </div>
        </div>
      </footer>
    </>
  );
}
