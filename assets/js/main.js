/* JWA Design & Build — shared behaviour */
document.documentElement.classList.add('js');

const ICON = {
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M4 12h15M13 6l6 6-6 6"/></svg>',
  left: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M20 12H5M11 6l-6 6 6 6"/></svg>',
  down: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M12 4v15M6 13l6 6 6-6"/></svg>',
  close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M5 5l14 14M19 5L5 19"/></svg>',
  pause: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6 4h4v16H6zM14 4h4v16h-4z"/></svg>',
  play: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 4l13 8-13 8z"/></svg>',
  li: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5zM3 9.75h4V21H3zM9.5 9.75h3.8v1.6h.06c.53-1 1.84-2.06 3.78-2.06 4.04 0 4.79 2.66 4.79 6.12V21h-4v-4.98c0-1.19-.02-2.72-1.66-2.72-1.66 0-1.91 1.3-1.91 2.63V21h-4z"/></svg>',
  fb: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.87.25-1.46 1.5-1.46h1.54V4.46A20 20 0 0014.3 4.3c-2.2 0-3.7 1.34-3.7 3.8v2.4H8.1v3h2.5V21z"/></svg>',
  ig: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17"/><circle cx="12" cy="12" r="4"/><circle cx="17.3" cy="6.7" r=".9" fill="currentColor" stroke="none"/></svg>',
  wa: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.04 2a9.9 9.9 0 00-8.5 14.98L2 22l5.16-1.5A9.9 9.9 0 1012.04 2zm0 18.1a8.2 8.2 0 01-4.19-1.15l-.3-.18-3.06.89.9-2.98-.2-.31a8.2 8.2 0 1116.45-4.47 8.2 8.2 0 01-9.6 8.2zm4.5-6.14c-.25-.12-1.46-.72-1.69-.8-.23-.09-.39-.13-.56.12-.16.25-.64.8-.79.97-.14.16-.29.18-.54.06a6.7 6.7 0 01-3.35-2.93c-.25-.44.25-.4.72-1.34.08-.16.04-.31-.02-.43l-.76-1.83c-.2-.48-.4-.41-.56-.42h-.47a.9.9 0 00-.66.31 2.77 2.77 0 00-.86 2.06 4.8 4.8 0 001 2.55 11 11 0 004.22 3.73c1.57.68 2.19.74 2.97.62.48-.07 1.46-.6 1.67-1.18.2-.58.2-1.08.14-1.18-.06-.1-.22-.16-.47-.29z"/></svg>'
};
const LOGO = 'assets/img/jwa-logo.png'; // full JWA lockup: mark + JWA DESIGN & BUILD, SDN BHD

const NAV = [
  ['about.html', 'About Us'],
  ['services.html', 'Our Business'],
  ['projects.html', 'Projects'],
  ['careers.html', 'Careers'],
  ['contact.html', 'Contact Us'],
  ['newsletter.html', 'Newsletter']
];

function renderHeader() {
  const host = document.querySelector('[data-header]');
  if (!host) return;
  const page = document.body.dataset.page;
  host.outerHTML = `
  <header class="header">
    <div class="wrap">
      <a class="brand" href="index.html" aria-label="JWA Design & Build, home">
        <img src="${LOGO}" alt="JWA Design & Build Sdn Bhd" width="623" height="377">
      </a>
      <nav class="nav" id="nav" aria-label="Main">
        ${NAV.map(([href, label]) => `<a href="${href}"${href.startsWith(page) ? ' aria-current="page"' : ''}>${label}</a>`).join('')}
        <a class="nav-profile" href="assets/JWA-Company-Profile.pdf" download="JWA-Design-and-Build-Company-Profile.pdf">Company Profile (PDF)</a>
      </nav>
      <div style="display:flex;gap:10px;align-items:center">
        <a class="btn btn--ink" href="assets/JWA-Company-Profile.pdf" download="JWA-Design-and-Build-Company-Profile.pdf" title="Download company profile (PDF, 12.6 MB)">Company Profile ${ICON.down}</a>
        <button class="menu-btn" aria-label="Open menu" aria-controls="nav" aria-expanded="false"><span></span></button>
      </div>
    </div>
    <span class="progress" aria-hidden="true"></span>
  </header>`;
  document.body.insertAdjacentHTML('afterbegin', '<a class="skip" href="#main">Skip to content</a>');
  const btn = document.querySelector('.menu-btn');
  const setMenu = open => { document.body.classList.toggle('menu-open', open); btn.setAttribute('aria-expanded', open); btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu'); };
  btn.addEventListener('click', () => setMenu(!document.body.classList.contains('menu-open')));
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && document.body.classList.contains('menu-open')) { setMenu(false); btn.focus(); } });
}

function renderFooter() {
  const host = document.querySelector('[data-footer]');
  if (!host) return;
  const year = new Date().getFullYear();
  host.outerHTML = `
  <footer class="footer">
    <div class="wrap">
      <div class="footer-grid">
        <div class="about">
          <a class="brand brand--footer" href="index.html"><img src="${LOGO}" alt="JWA Design & Build Sdn Bhd" width="623" height="377"></a>
          <p>An architect-led CIDB G7 contractor delivering corporate, GLC and government projects across Malaysia.</p>
          <p class="creds-line">CIDB Grade G7 · MOF Registered · ISO 9001:2015 · SPKK</p>
          <div class="social">
            <a href="https://www.linkedin.com/company/jwa-design-build/" target="_blank" rel="noopener" aria-label="JWA on LinkedIn">${ICON.li}</a>
            <a href="https://www.facebook.com/jwadesignbuild/" target="_blank" rel="noopener" aria-label="JWA on Facebook">${ICON.fb}</a>
            <a href="https://www.instagram.com/jwadesignbuild/" target="_blank" rel="noopener" aria-label="JWA on Instagram">${ICON.ig}</a>
          </div>
        </div>
        <div>
          <h4>Navigation</h4>
          <ul>${NAV.map(([h, l]) => `<li><a href="${h}">${l}</a></li>`).join('')}</ul>
        </div>
        <div>
          <h4>Our Services</h4>
          <ul>
            <li><a href="services.html">Design &amp; Build Construction</a></li>
            <li><a href="services.html">Architectural Design</a></li>
            <li><a href="services.html">Local Authority Submission</a></li>
            <li><a href="services.html">Interior Design &amp; Fit-out</a></li>
            <li><a href="services.html">Carpentry Workshop</a></li>
            <li><a href="services.html">Project Management</a></li>
          </ul>
        </div>
        <div>
          <h4>Headquarters</h4>
          <ul>
            <li>Lot No. 1, 2nd Floor, YLY Plaza,<br>Jalan Tuaran Bypass, Inanam,<br>88450 Kota Kinabalu, Sabah</li>
            <li><a href="tel:+6088335618">+6088 335 618</a> (office)<br><a href="tel:+60128802432">+6012 880 2432</a> (mobile)</li>
            <li><a href="mailto:inquiries@jwadesignbuild.com">inquiries@jwadesignbuild.com</a></li>
            <li>Mon to Fri, 8.30am to 5.30pm</li>
          </ul>
        </div>
      </div>
      <div class="footer-base">
        <span>© ${year} JWA Design &amp; Build Sdn Bhd (1197767-W). All rights reserved.</span>
        <nav><a href="privacy.html">Privacy Notice</a><a href="https://maps.google.com/?q=YLY+Plaza+Inanam+Kota+Kinabalu" target="_blank" rel="noopener">Directions</a></nav>
      </div>
    </div>
  </footer>
  <a class="wa" href="https://wa.me/60128802432?text=Hi%20JWA%2C%20I'd%20like%20to%20discuss%20a%20project." aria-label="WhatsApp JWA">${ICON.wa}</a>`;
}

const REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* Scroll reveal. Siblings that reveal together are staggered; lists marked
   as .stagger bring their children in one after another. */
const STAGGER = '.creds, .steps, .why, .perks, .figgrid, .stats, .names, .logos, .clients, .values, .chips, .svc-list, .group, .pillars, .award-line, .facts';
let revealIO;
function initReveal() {
  document.querySelectorAll(STAGGER).forEach(el => el.classList.add('reveal', 'stagger'));
  const els = [...document.querySelectorAll('.reveal:not(.in)')];
  const show = el => {
    const sibs = el.parentElement ? [...el.parentElement.children].filter(c => c.classList.contains('reveal')) : [];
    const i = Math.max(0, sibs.indexOf(el));
    el.style.transitionDelay = sibs.length > 1 ? `${Math.min(i, 5) * 90}ms` : '';
    if (el.classList.contains('stagger')) [...el.children].forEach((c, j) => { c.style.transitionDelay = `${Math.min(j, 10) * 70 + 80}ms`; });
    el.classList.add('in');
    setTimeout(() => { el.style.transitionDelay = ''; if (el.classList.contains('stagger')) [...el.children].forEach(c => { c.style.transitionDelay = ''; }); }, 1800);
    el.dispatchEvent(new CustomEvent('revealed'));
  };
  if (REDUCED || !('IntersectionObserver' in window)) { els.forEach(e => e.classList.add('in')); return; }
  // Photos start fully clipped (zero visible area), so watch their container instead
  const proxy = el => (el.matches('.frame, .tile') ? el.parentElement : el);
  const waiting = new Map();
  revealIO = revealIO || new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      (waiting.get(e.target) || [e.target]).forEach(show);
      waiting.delete(e.target);
      revealIO.unobserve(e.target);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.02 });
  els.forEach(el => {
    const t = proxy(el);
    if (t !== el) { if (!waiting.has(t)) waiting.set(t, t.matches('.reveal:not(.in)') ? [t] : []); waiting.get(t).push(el); }
    revealIO.observe(t);
  });
}

/* Numbers count up once when they come into view (16, RM200M+, 90%, 800+ ...) */
function initCountUp() {
  const els = document.querySelectorAll('.figure b, .stats b, .figgrid b');
  if (REDUCED || !('IntersectionObserver' in window)) return;
  const io = new IntersectionObserver(entries => entries.forEach(e => {
    if (!e.isIntersecting) return;
    io.unobserve(e.target);
    const el = e.target.querySelector('em') || e.target;
    const m = el.textContent.match(/^(\D*)(\d[\d,]*)(.*)$/);
    if (!m) return;
    const [, pre, num, post] = m, end = parseInt(num.replace(/,/g, ''), 10), t0 = performance.now(), dur = 1400;
    const tick = t => {
      const k = Math.min(1, (t - t0) / dur), v = Math.round(end * (1 - Math.pow(1 - k, 3)));
      el.textContent = pre + v.toLocaleString('en-MY') + post;
      if (k < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }), { threshold: 0.6 });
  els.forEach(el => io.observe(el));
}

/* Header: compact on scroll + a thin red reading-progress line */
function initHeaderScroll() {
  const h = document.querySelector('.header');
  if (!h) return;
  const bar = h.querySelector('.progress');
  let ticking = false;
  const update = () => {
    const y = scrollY, max = document.documentElement.scrollHeight - innerHeight;
    h.classList.toggle('scrolled', y > 24);
    bar.style.transform = `scaleX(${max > 0 ? Math.min(1, y / max) : 0})`;
    ticking = false;
  };
  addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
  update();
}

/* Gentle parallax on full-bleed photography and the red corners */
function initParallax() {
  if (REDUCED) return;
  const media = [...document.querySelectorAll('.hero-media video, .page-hero > img, .spotlight > img, .cta > img')];
  const wedges = [...document.querySelectorAll('.wedge')];
  media.forEach(m => m.classList.add('parallax'));
  let ticking = false;
  const update = () => {
    const vh = innerHeight;
    media.forEach(m => {
      const r = m.parentElement.getBoundingClientRect();
      if (r.bottom < 0 || r.top > vh) return;
      const p = (r.top + r.height / 2 - vh / 2) / vh;       // -1 .. 1 across the viewport
      m.style.setProperty('--py', `${(p * -48).toFixed(1)}px`);
    });
    wedges.forEach(w => {
      const r = w.getBoundingClientRect();
      if (r.bottom < -200 || r.top > vh + 200) return;
      const p = (r.top + r.height / 2 - vh / 2) / vh;
      w.style.setProperty('--wy', `${(p * 28).toFixed(1)}px`);
    });
    ticking = false;
  };
  addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
  addEventListener('resize', update);
  update();
}

/* Soft fade between pages */
function initPageTransitions() {
  if (REDUCED) return;
  document.addEventListener('click', e => {
    const a = e.target.closest('a[href]');
    if (!a || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || a.target) return;
    const href = a.getAttribute('href');
    if (!/^[\w-]+\.html(#[\w-]*)?$/.test(href) || href.split('#')[0] === location.pathname.split('/').pop()) return;
    e.preventDefault();
    document.body.classList.add('leaving');
    setTimeout(() => { location.href = href; }, 260);
  });
  addEventListener('pageshow', e => { if (e.persisted) document.body.classList.remove('leaving'); });
}

function initHeroVideo() {
  const v = document.querySelector('.hero video');
  const b = document.querySelector('[data-video-toggle]');
  if (!v || !b) return;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) { v.pause(); v.removeAttribute('autoplay'); }
  const sync = () => { b.innerHTML = v.paused ? ICON.play : ICON.pause; b.setAttribute('aria-label', v.paused ? 'Play video' : 'Pause video'); };
  b.addEventListener('click', () => { v.paused ? v.play() : v.pause(); });
  v.addEventListener('play', sync); v.addEventListener('pause', sync); sync();
  const line = document.querySelector('.vprog i');
  if (line) {
    const loop = () => { if (v.duration) line.style.transform = `scaleX(${v.currentTime / v.duration})`; requestAnimationFrame(loop); };
    requestAnimationFrame(loop);
  }
}

function initStrip() {
  document.querySelectorAll('[data-strip]').forEach(wrap => {
    const strip = wrap.querySelector('.strip');
    const step = () => strip.querySelector('.card').getBoundingClientRect().width + 20;
    wrap.querySelector('[data-prev]')?.addEventListener('click', () => strip.scrollBy({ left: -step(), behavior: 'smooth' }));
    wrap.querySelector('[data-next]')?.addEventListener('click', () => strip.scrollBy({ left: step(), behavior: 'smooth' }));
    // Progress line under the strip
    const thumb = wrap.querySelector('.strip-bar span');
    const sync = () => {
      if (!thumb) return;
      const ratio = strip.clientWidth / strip.scrollWidth, pos = strip.scrollLeft / (strip.scrollWidth - strip.clientWidth || 1);
      thumb.style.width = `${ratio * 100}%`;
      thumb.style.transform = `translateX(${pos * (1 / ratio - 1) * 100}%)`;
    };
    strip.addEventListener('scroll', () => requestAnimationFrame(sync), { passive: true });
    addEventListener('resize', sync); sync();
    // Drag with the mouse (touch already scrolls natively)
    let down = false, startX = 0, startL = 0, moved = false;
    strip.addEventListener('pointerdown', e => {
      if (e.pointerType !== 'mouse') return;
      down = true; moved = false; startX = e.clientX; startL = strip.scrollLeft;
      strip.classList.add('dragging');
    });
    addEventListener('pointermove', e => {
      if (!down) return;
      const dx = e.clientX - startX;
      if (Math.abs(dx) > 4) moved = true;
      strip.scrollLeft = startL - dx;
    });
    addEventListener('pointerup', () => { if (!down) return; down = false; strip.classList.remove('dragging'); });
    strip.addEventListener('click', e => { if (moved) { e.preventDefault(); e.stopPropagation(); moved = false; } }, true);
    strip.addEventListener('dragstart', e => e.preventDefault());
  });
}

function initServices() {
  const list = document.querySelector('.svc-list');
  if (!list) return;
  const items = [...list.querySelectorAll('li')];
  const imgs = [...document.querySelectorAll('.svc-media img')];
  const set = i => {
    items.forEach((li, j) => li.classList.toggle('on', i === j));
    imgs.forEach((im, j) => im.classList.toggle('on', i === j));
  };
  let cur = 0, paused = false, visible = false;
  items.forEach((li, i) => {
    li.addEventListener('mouseenter', () => { paused = true; cur = i; set(i); });
    li.addEventListener('focusin', () => { paused = true; cur = i; set(i); });
  });
  list.addEventListener('mouseleave', () => { paused = false; });
  set(0);
  if (REDUCED || !('IntersectionObserver' in window)) return;
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; }).observe(list);
  setInterval(() => { if (visible && !paused) { cur = (cur + 1) % items.length; set(cur); } }, 4200);
}

/* Replace a broken image with a quiet grey block instead of a broken icon */
function initImgFallback() {
  document.addEventListener('error', e => {
    const t = e.target;
    if (t.tagName === 'IMG' && !t.dataset.failed) { t.dataset.failed = '1'; t.style.visibility = 'hidden'; }
  }, true);
}

/* ---------- Projects page ---------- */
function initProjects() {
  const grid = document.querySelector('[data-projects]');
  if (!grid || typeof PROJECTS === 'undefined') return;
  const bar = document.querySelector('[data-filters]');
  let current = location.hash.replace('#', '') || 'all';
  if (current === 'hospitality') current = 'hotels';
  if (!SECTORS.some(s => s.key === current)) current = 'all';
  let place = 'all';
  const TBC = '<span class="tbc">TBC</span>';
  const city = p => p.location.split(',').pop().trim();
  const cities = [...new Set(PROJECTS.map(city))];

  const count = k => k === 'all' ? PROJECTS.length : PROJECTS.filter(p => p.sector === k).length;
  bar.innerHTML = `
    <div class="filter-chips">${SECTORS.filter(s => count(s.key) > 0)
      .map(s => `<button type="button" data-k="${s.key}" aria-pressed="${s.key === current}">${s.label}</button>`).join('')}</div>
    <label class="filter-place"><span class="sr-only">Location</span>
      <select id="f-place" aria-label="Filter by location">
        <option value="all">All locations</option>
        ${cities.map(c => `<option value="${c}">${c}</option>`).join('')}
      </select>
    </label>`;

  const card = p => `
      <article class="pcard reveal" data-slug="${p.slug}">
        <div class="pcard-media">
          <div class="frame"><img src="${p.images[0]}" alt="${p.name}" loading="lazy"></div>
          <div class="badges">${p.ongoing ? '<span class="badge badge--live">Ongoing</span>' : ''}${p.flagship ? '<span class="badge">Flagship</span>' : ''}</div>
        </div>
        <div class="pcard-body">
          <span class="pcard-sector">${p.sectorLabel}</span>
          <h3>${p.name}</h3>
          <dl class="pcard-facts">
            <div><dt>Client</dt><dd>${p.client || TBC}</dd></div>
            <div><dt>Location</dt><dd>${p.location}</dd></div>
            <div><dt>Year</dt><dd>${p.year || TBC}</dd></div>
            <div><dt>Value</dt><dd>${p.value || TBC}</dd></div>
          </dl>
          <button type="button" class="link-arrow pcard-more">View details ${ICON.arrow}</button>
        </div>
      </article>`;

  const draw = () => {
    const list = PROJECTS.filter(p => (current === 'all' || p.sector === current) && (place === 'all' || city(p) === place));
    grid.innerHTML = list.length ? list.map(card).join('') : '<p class="pgrid-empty">No projects match these filters.</p>';
    initReveal();
  };
  bar.addEventListener('click', e => {
    const b = e.target.closest('button[data-k]'); if (!b) return;
    current = b.dataset.k;
    bar.querySelectorAll('button[data-k]').forEach(x => x.setAttribute('aria-pressed', x === b));
    history.replaceState(null, '', current === 'all' ? location.pathname : '#' + current);
    draw();
  });
  bar.querySelector('#f-place').addEventListener('change', e => { place = e.target.value; draw(); });
  draw();

  // Lightbox
  const lb = document.querySelector('.lightbox');
  const img = lb.querySelector('.lb-stage img');
  const side = lb.querySelector('.lb-side');
  const cnt = lb.querySelector('.lb-count');
  let proj = null, idx = 0, lastFocus = null;
  const show = () => { img.classList.remove('swap'); void img.offsetWidth; img.classList.add('swap'); img.src = proj.images[idx]; img.alt = `${proj.name}, photo ${idx + 1}`; cnt.textContent = `${String(idx + 1).padStart(2, '0')} / ${String(proj.images.length).padStart(2, '0')}`; };
  const open = slug => {
    proj = PROJECTS.find(p => p.slug === slug); idx = 0; lastFocus = document.activeElement;
    side.innerHTML = `
      <span class="eyebrow">${proj.sectorLabel}</span>
      <h2 class="h3" style="font-size:34px">${proj.name}</h2>
      <dl class="facts">
        <div><dt>Client</dt><dd>${proj.client || '<span class="tbc">TBC</span>'}</dd></div>
        <div><dt>Location</dt><dd>${proj.location}</dd></div>
        <div><dt>Status</dt><dd>${proj.ongoing ? 'Ongoing' : 'Completed'}</dd></div>
        <div><dt>Year</dt><dd>${proj.year || '<span class="tbc">TBC</span>'}</dd></div>
        <div><dt>Contract value</dt><dd>${proj.value || '<span class="tbc">TBC</span>'}</dd></div>
        <div><dt>Scope</dt><dd>${proj.scope}</dd></div>
      </dl>
      <a class="btn btn--red" href="contact.html">Discuss a similar project ${ICON.arrow}</a>`;
    show(); lb.hidden = false; document.body.style.overflow = 'hidden'; lb.querySelector('.lb-close').focus();
  };
  const close = () => { lb.hidden = true; document.body.style.overflow = ''; lastFocus?.focus(); };
  grid.addEventListener('click', e => { const c = e.target.closest('[data-slug]'); if (c) open(c.dataset.slug); });
  lb.querySelector('.lb-close').addEventListener('click', close);
  lb.querySelector('[data-lb-prev]').addEventListener('click', () => { idx = (idx - 1 + proj.images.length) % proj.images.length; show(); });
  lb.querySelector('[data-lb-next]').addEventListener('click', () => { idx = (idx + 1) % proj.images.length; show(); });
  document.addEventListener('keydown', e => {
    if (lb.hidden) return;
    if (e.key === 'Tab') {
      const f = [...lb.querySelectorAll('button, a[href]')].filter(el => el.offsetParent !== null);
      if (f.length) {
        const first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    }
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowRight') lb.querySelector('[data-lb-next]').click();
    if (e.key === 'ArrowLeft') lb.querySelector('[data-lb-prev]').click();
  });
}

/* ---------- Newsletter: category filter + subscribe ---------- */
function initNewsletter() {
  const bar = document.querySelector('[data-post-filters]');
  if (bar) {
    const posts = [...document.querySelectorAll('[data-cat]')];
    bar.addEventListener('click', e => {
      const b = e.target.closest('button'); if (!b) return;
      bar.querySelectorAll('button').forEach(x => x.setAttribute('aria-pressed', x === b));
      posts.forEach(p => { p.hidden = b.dataset.k !== 'all' && p.dataset.cat !== b.dataset.k; });
    });
  }
}

/* ---------- Copy email (careers) ---------- */
function initCopy() {
  document.querySelectorAll('[data-copy]').forEach(btn => btn.addEventListener('click', async () => {
    const text = btn.dataset.copy;
    try { await navigator.clipboard.writeText(text); btn.textContent = 'Copied'; }
    catch { const r = document.createRange(); r.selectNodeContents(btn.previousElementSibling); getSelection().removeAllRanges(); getSelection().addRange(r); btn.textContent = 'Selected'; }
    setTimeout(() => { btn.textContent = 'Copy'; }, 1800);
  }));
}

/* ---------- Contact form ---------- */
function initForm() {
  const f = document.querySelector('[data-enquiry]');
  if (!f) return;
  const note = f.querySelector('.form-note');
  f.addEventListener('submit', e => {
    e.preventDefault();
    if (!f.checkValidity()) { f.reportValidity(); return; }
    // No server yet: open the visitor's email app with the enquiry filled in.
    // To send from the page instead, post these fields to a form service or API route.
    const d = Object.fromEntries(new FormData(f));
    const subject = `Project enquiry: ${d.type || 'General'} — ${d.company}`;
    const body = [
      `Name: ${d.name}`, `Company: ${d.company}`, `Email: ${d.email}`, `Phone: ${d.phone || '-'}`,
      `Project type: ${d.type || '-'}`, `Estimated value: ${d.value || '-'}`, '', d.message || ''
    ].join('\n');
    location.href = `mailto:inquiries@jwadesignbuild.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    note.innerHTML = 'Your email app should now open with the enquiry filled in. If it doesn’t, email <a href="mailto:inquiries@jwadesignbuild.com">inquiries@jwadesignbuild.com</a> or call +6088 335 618.';
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderHeader();
  renderFooter();
  initImgFallback();
  initHeroVideo();
  initStrip();
  initServices();
  initProjects();
  initForm();
  initNewsletter();
  initCopy();
  initReveal();
  initCountUp();
  initHeaderScroll();
  initParallax();
  initPageTransitions();
  document.querySelectorAll('[data-icon]').forEach(el => {
    if (el.tagName === 'SPAN') el.outerHTML = ICON[el.dataset.icon];
    else el.insertAdjacentHTML('beforeend', ICON[el.dataset.icon]);
  });
});
