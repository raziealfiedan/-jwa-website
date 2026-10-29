/* JWA Design & Build — shared behaviour (v21) */
document.documentElement.classList.add('js');

const S = (d, w = 1.5) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
const ICON = {
  arrow: S('<path d="M4 12h15M13 6l6 6-6 6"/>', 1.6),
  left: S('<path d="M20 12H5M11 6l-6 6 6 6"/>', 1.6),
  up: S('<path d="M12 20V5M6 11l6-6 6 6"/>', 1.6),
  down: S('<path d="M12 4v15M6 13l6 6 6-6"/>', 1.6),
  dl: S('<path d="M12 3.5v11M7.5 10l4.5 4.5 4.5-4.5M4 14.5v3.2c0 1 .8 1.8 1.8 1.8h12.4c1 0 1.8-.8 1.8-1.8v-3.2"/>'),
  close: S('<path d="M5 5l14 14M19 5L5 19"/>', 1.6),
  pause: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6 4h4v16H6zM14 4h4v16h-4z"/></svg>',
  play: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 4l13 8-13 8z"/></svg>',
  li: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5zM3 9.75h4V21H3zM9.5 9.75h3.8v1.6h.06c.53-1 1.84-2.06 3.78-2.06 4.04 0 4.79 2.66 4.79 6.12V21h-4v-4.98c0-1.19-.02-2.72-1.66-2.72-1.66 0-1.91 1.3-1.91 2.63V21h-4z"/></svg>',
  fb: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.87.25-1.46 1.5-1.46h1.54V4.46A20 20 0 0014.3 4.3c-2.2 0-3.7 1.34-3.7 3.8v2.4H8.1v3h2.5V21z"/></svg>',
  ig: S('<rect x="3.5" y="3.5" width="17" height="17" rx="4.5"/><circle cx="12" cy="12" r="4"/><circle cx="17.3" cy="6.7" r=".9" fill="currentColor" stroke="none"/>', 1.7),
  wa: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35m-5.42 7.4h-.01a9.87 9.87 0 01-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 01-1.51-5.26c0-5.45 4.44-9.89 9.89-9.89 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 012.89 7c0 5.45-4.44 9.89-9.88 9.89m8.41-18.3A11.82 11.82 0 0012.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 005.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.17-3.48-8.41z"/></svg>',
  link: S('<path d="M10 14a4.5 4.5 0 006.4 0l3-3a4.5 4.5 0 00-6.4-6.4l-1.2 1.2M14 10a4.5 4.5 0 00-6.4 0l-3 3a4.5 4.5 0 006.4 6.4l1.2-1.2"/>'),
  share: S('<circle cx="18" cy="5.5" r="2.5"/><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="18.5" r="2.5"/><path d="M8.2 10.8l7.6-4.1M8.2 13.2l7.6 4.1"/>'),
  // Figures & credentials
  years: S('<rect x="3.5" y="5" width="17" height="15" rx="1.5"/><path d="M3.5 9.5h17M8 3v4M16 3v4M8 13.5h2M14 13.5h2M8 16.5h2"/>'),
  jobs: S('<circle cx="9" cy="8" r="3.2"/><path d="M3 20c.6-3.4 3-5.4 6-5.4s5.4 2 6 5.4"/><circle cx="17" cy="9" r="2.4"/><path d="M16.2 14.2c2.6-.3 4.4 1.4 4.8 4.3"/>'),
  grade: S('<path d="M12 3l7.5 3v5.6c0 4.4-3.1 8-7.5 9.4-4.4-1.4-7.5-5-7.5-9.4V6z"/><path d="M8.6 12.2l2.4 2.4 4.6-4.8"/>'),
  value: S('<path d="M4 20V10M10 20V6M16 20v-8M22 20H2"/><path d="M4 7l6-3 6 5 5-4"/>'),
  building: S('<path d="M4 21V5.5L12 3v18M12 8.5l8 2.5v10M2.5 21h19M7 8h2M7 11.5h2M7 15h2M15 13.5h2M15 17h2"/>'),
  trophy: S('<path d="M7.5 4h9v5a4.5 4.5 0 01-9 0z"/><path d="M7.5 6H4.5a3 3 0 003 4M16.5 6h3a3 3 0 01-3 4M12 13.5V17M8.5 20.5h7M9.5 17h5v3.5h-5z"/>'),
  laurel: S('<path d="M12 20.5c-4.8-1.4-7.6-5.4-7.6-10.7M12 20.5c4.8-1.4 7.6-5.4 7.6-10.7"/><path d="M5.2 13.4c1.5-.2 2.8.6 3.2 2M4.5 9.8c1.4.2 2.4 1.2 2.6 2.6M6.8 16.8c1.4-.6 2.8-.2 3.6 1M18.8 13.4c-1.5-.2-2.8.6-3.2 2M19.5 9.8c-1.4.2-2.4 1.2-2.6 2.6M17.2 16.8c-1.4-.6-2.8-.2-3.6 1"/><path d="M12 5.2l1.2 2.5 2.7.3-2 1.9.5 2.7-2.4-1.3-2.4 1.3.5-2.7-2-1.9 2.7-.3z"/>'),
  medal: S('<circle cx="12" cy="14.5" r="5.5"/><path d="M8.6 10.2L5.5 3.5h4L12 9M15.4 10.2l3.1-6.7h-4L12 9"/><path d="M12 12v5M10.3 13.2L12 12"/>'),
  cert: S('<path d="M5 3.5h10.5L19 7v13.5H5z"/><path d="M15 3.5V7.5h4M8 9h6M8 12h8"/><circle cx="11" cy="16.5" r="2"/><path d="M10 18.3l-.6 2.7 1.6-.8 1.6.8-.6-2.7"/>'),
  iso: S('<circle cx="12" cy="12" r="8.5"/><path d="M8 12.2l2.6 2.6L16.2 9.2"/><path d="M12 1.8v1.8M12 20.4v1.8M1.8 12h1.8M20.4 12h1.8"/>'),
  gov: S('<path d="M3 20.5h18M4.5 18v-7.5M9.5 18v-7.5M14.5 18v-7.5M19.5 18v-7.5M2.5 10.5L12 4l9.5 6.5z"/><path d="M3.5 18h17"/>'),
  nib: S('<path d="M12 3l5.5 7.5-5.5 10.5-5.5-10.5z"/><path d="M12 13.5V21M12 13.5a1.6 1.6 0 100-3.2 1.6 1.6 0 000 3.2z"/>'),
  star: S('<path d="M12 3.5l2.6 5.4 5.9.8-4.3 4.1 1 5.8L12 16.8l-5.2 2.8 1-5.8-4.3-4.1 5.9-.8z"/>'),
  // Services
  key: S('<circle cx="8" cy="15" r="4.5"/><path d="M11.2 11.8L20 3M16.5 6.5l2.5 2.5M14 9l2 2"/>'),
  crane: S('<path d="M6 21V3.5M6 5h15M6 3.5L3 6.5M17.5 5v5"/><path d="M15.8 10h3.4v3h-3.4zM3 21h7M6 9l4-4M6 13l4-4"/>'),
  plan: S('<rect x="5" y="4" width="14" height="17" rx="1.5"/><path d="M9 4V3h6v1M8.5 11l1.5 1.5 3-3M8.5 16.5h7"/>'),
  compass: S('<circle cx="12" cy="4.5" r="1.6"/><path d="M11.2 6L6 20.5M12.8 6L18 20.5M8 15h8"/>'),
  sofa: S('<path d="M5 11V8a2.5 2.5 0 012.5-2.5h9A2.5 2.5 0 0119 8v3"/><path d="M3.5 11.5a1.5 1.5 0 013 0V14h11v-2.5a1.5 1.5 0 013 0V18h-17zM5.5 18v2M18.5 18v2"/>'),
  saw: S('<path d="M3 15l10.5-10.5 3 3L6 18z"/><path d="M5.5 15.5l1 1M8 13l1 1M10.5 10.5l1 1M16.5 7.5L21 3M14.5 18.5h6M17.5 15.5v6"/>'),
  lamp: S('<path d="M8 3.5h8l3 8H5z"/><path d="M12 11.5V20M8 20.5h8"/>'),
  gear: S('<circle cx="12" cy="12" r="3"/><path d="M12 2.8v2.4M12 18.8v2.4M2.8 12h2.4M18.8 12h2.4M5.5 5.5l1.7 1.7M16.8 16.8l1.7 1.7M5.5 18.5l1.7-1.7M16.8 7.2l1.7-1.7"/>'),
  // Contact
  phone: S('<path d="M5 3.5h3.5l1.8 4.5-2.3 1.5a11 11 0 006.5 6.5l1.5-2.3 4.5 1.8V19a1.5 1.5 0 01-1.5 1.5A16.5 16.5 0 013.5 5 1.5 1.5 0 015 3.5z"/>'),
  mail: S('<rect x="3" y="5" width="18" height="14" rx="1.5"/><path d="M3.5 6l8.5 7 8.5-7"/>'),
  pin: S('<path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0113 0c0 5.4-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.4"/>'),
  clock: S('<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>'),
  heart: S('<path d="M12 20s-7.5-4.6-7.5-10A4.3 4.3 0 0112 7.4 4.3 4.3 0 0119.5 10c0 5.4-7.5 10-7.5 10z"/>'),
  globe: S('<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.6 2.6 3.6 5.4 3.6 8.5s-1 5.9-3.6 8.5c-2.6-2.6-3.6-5.4-3.6-8.5s1-5.9 3.6-8.5z"/>'),
  leaf: S('<path d="M5 19c0-8 5-13.5 14.5-14.5C19 14 13.5 19 5 19z"/><path d="M5 19c3-4 6-6.5 9.5-8.5"/>'),
  mountain: S('<path d="M2.5 19.5L9 8l3.5 5.5 2.5-3.5 6.5 9.5z"/><path d="M7.4 10.8L9 12.2l1.4-1.2"/>'),
  alert: S('<path d="M12 3.5L21.5 20h-19z"/><path d="M12 10v4.5M12 17.2v.3"/>', 1.6),
  hex1: S('<path d="M12 2.8l8 4.6v9.2l-8 4.6-8-4.6V7.4z"/><path d="M10.6 9.4L12.4 8v8.2"/>', 1.6),
  wing: S('<path d="M3 17c4.5 0 8-1.2 10.5-4.2L20.5 4c-4 1-7.5 3-10 6M6 13.8c2.6-.2 5-1 7-2.6M8.5 10.6c2-.4 3.8-1.2 5.2-2.4"/><path d="M3 17h7.5c3 0 5.2 1.4 6 3.5"/>'),
  shield: S('<path d="M12 3l7.5 3v5.6c0 4.4-3.1 8-7.5 9.4-4.4-1.4-7.5-5-7.5-9.4V6z"/>'),
  tools: S('<path d="M14.5 6.5a4 4 0 015.2-2.2l-2.6 2.6.5 2 2 .5 2.6-2.6A4 4 0 0117 12l-8.5 8.5a1.8 1.8 0 01-2.5-2.5z"/><path d="M4 4l3 1 4.5 4.5-2 2L5 7z"/>'),
  book: S('<path d="M12 6.5C10 5 7 4.5 3.5 4.8v13.5c3.5-.3 6.5.2 8.5 1.7 2-1.5 5-2 8.5-1.7V4.8C17 4.5 14 5 12 6.5zM12 6.5V20"/>'),
  stress: S('<circle cx="12" cy="12" r="8.5"/><path d="M8.5 15.5c1-1 2.2-1.4 3.5-1.4s2.5.4 3.5 1.4M8 9.5l2 1-2 1M16 9.5l-2 1 2 1"/>'),
  family: S('<circle cx="8" cy="6.5" r="2.3"/><circle cx="16" cy="6.5" r="2.3"/><circle cx="12" cy="12" r="1.8"/><path d="M4 20v-4.5A3.5 3.5 0 017.5 12h1M20 20v-4.5a3.5 3.5 0 00-3.5-3.5h-1M9.5 20v-2.5a2.5 2.5 0 015 0V20"/>'),
  bolt: S('<path d="M13 2.5L4.5 13.5H11l-1 8 8.5-11H12z"/>'),
  user: S('<circle cx="12" cy="8" r="3.6"/><path d="M4.5 20.5c.8-4 3.7-6.3 7.5-6.3s6.7 2.3 7.5 6.3"/>'),
  truck: S('<path d="M2.5 6h11v10h-11zM13.5 9.5H18l3.5 3.5v3h-8"/><circle cx="7" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/>'),
  coins: S('<ellipse cx="9" cy="6.5" rx="5.5" ry="2.5"/><path d="M3.5 6.5v4c0 1.4 2.5 2.5 5.5 2.5s5.5-1.1 5.5-2.5v-4"/><path d="M9.5 15.6c.9 1.1 2.9 1.9 5.5 1.9 3 0 5.5-1.1 5.5-2.5v-4c0-1.2-1.8-2.2-4.3-2.4"/>'),
  bulb: S('<path d="M9 17.5h6M10 20.5h4M12 3a6 6 0 00-3.5 10.9c.6.5 1 1.2 1 2V16h5v-.1c0-.8.4-1.5 1-2A6 6 0 0012 3z"/>'),
  plug: S('<path d="M8 3v5M16 3v5M5.5 8h13v3a6.5 6.5 0 01-13 0zM12 17.5V21"/>'),
  paint: S('<rect x="4" y="3.5" width="14" height="6" rx="1"/><path d="M18 6.5h2v5.5h-8v3M10.5 15h3v6h-3z"/>')
};
const LOGO = 'assets/img/jwa-logo.png';
const PROFILE = 'assets/JWA-Company-Profile.pdf';

/* Menu follows Datuk James's copy document (Oct 2026) */
const NAV = [
  ['about.html', 'About JWA'],
  ['services.html', 'Our Capabilities'],
  ['projects.html', 'Projects'],
  ['jwa-way.html', 'The JWA Way'],
  ['careers.html', 'Careers'],
  ['newsletter.html', 'News'],
  ['contact.html', 'Contact']
];
const CERTS = [
  ['cidb', 'CIDB Grade G7', 'CIDB Malaysia'], ['mof', 'MOF registered', 'Ministry of Finance Malaysia'], ['acs', 'ISO 9001:2015', 'ACS Certification'],
  ['lam', 'LAM registered', 'Lembaga Arkitek Malaysia'], ['pam-mark', 'PAM member', 'Pertubuhan Akitek Malaysia'], ['miid-mark', 'MIID member', 'Malaysian Institute of Interior Designers']
];
const SERVICES = [
  ['design-build', 'Design & Build'], ['construction', 'Building Construction'], ['project-management', 'Project Management'],
  ['architecture', 'Architecture'], ['interior-design', 'Interior Design'], ['carpentry', 'Carpentry Fit-Out'],
  ['decor', 'Décor & Materials'], ['facility-management', 'Facility Management']
];

/* Header options. Preview with ?hdr=glass (default), split, dark or band. Add &pick=1 to show a small switcher on the page. Remembered for the visit. */
const pickParam = (name, allowed, dflt) => { let v = new URLSearchParams(location.search).get(name); try { if (v) sessionStorage.setItem('jwa-' + name, v); else v = sessionStorage.getItem('jwa-' + name); } catch (e) {} return allowed.includes(v) ? v : dflt; };
const HDR = pickParam('hdr', ['glass', 'split', 'dark', 'band'], 'glass');
const FTR = pickParam('ftr', ['ink', 'navy', 'crimson'], 'ink');
const PICK = (() => { let v = new URLSearchParams(location.search).get('pick'); try { if (v) sessionStorage.setItem('jwa-pick', v); else v = sessionStorage.getItem('jwa-pick'); } catch (e) {} return v === '1'; })();
document.documentElement.dataset.hdr = HDR;
document.documentElement.dataset.ftr = FTR;

function renderHeader() {
  const host = document.querySelector('[data-header]');
  if (!host) return;
  const page = document.body.dataset.page;
  const link = ([href, label]) => `<a href="${href}"${href.replace('.html', '') === page ? ' aria-current="page"' : ''}>${label}</a>`;
  const brand = `<a class="brand" href="index.html" aria-label="JWA Design & Build, home"><img src="${LOGO}" alt="JWA Design & Build Sdn Bhd" width="623" height="377"></a>`;
  const prof = `<a class="nav-profile" href="${PROFILE}" download="JWA-Design-and-Build-Company-Profile.pdf">Company Profile (PDF)</a>`;
  let left = '', nav;
  if (HDR === 'split') {
    const half = Math.ceil(NAV.length / 2);
    left = `<nav class="nav nav--l" aria-label="Main">${NAV.slice(0, half).map(link).join('')}</nav>`;
    nav = `<nav class="nav nav--r" aria-label="Main, more">${NAV.slice(half).map(link).join('')}<a class="nav-profile nav-profile--pill" href="${PROFILE}" download="JWA-Design-and-Build-Company-Profile.pdf">${ICON.dl}<span>Company Profile</span></a></nav>
      <nav class="nav nav--m" id="nav" aria-label="Menu">${NAV.map(link).join('')}${prof}</nav>`;
  } else {
    nav = `<nav class="nav" id="nav" aria-label="Main">${NAV.map(link).join('')}${prof}</nav>`;
  }
  host.outerHTML = `
  <header class="header">
    <div class="header-bar">
      ${HDR === 'split' ? left + brand : brand}
      ${nav}
      <div class="header-actions">
        <a class="btn-profile" href="${PROFILE}" download="JWA-Design-and-Build-Company-Profile.pdf" title="Download company profile (PDF, 12.6 MB)"><span class="bp-ico">${ICON.dl}</span><span class="bp-txt">Company Profile</span></a>
        <button class="menu-btn" aria-label="Open menu" aria-controls="nav" aria-expanded="false"><span></span></button>
      </div>
      <span class="progress" aria-hidden="true"></span>
    </div>
  </header>`;
  if (PICK) {
    const q = (k, v) => { const u = new URL(location.href); u.searchParams.set(k, v); u.searchParams.set('pick', '1'); return u.pathname.split('/').pop() + u.search; };
    const row = (label, key, cur, opts) => `<div><b>${label}</b>${opts.map(o => `<a href="${q(key, o)}"${o === cur ? ' class="on"' : ''}>${o}</a>`).join('')}</div>`;
    document.body.insertAdjacentHTML('beforeend', `<div class="picker" role="group" aria-label="Design options">${row('Header', 'hdr', HDR, ['glass', 'split', 'dark', 'band'])}</div>`);
  }
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
    <span class="footer-bar" aria-hidden="true"></span>
    <div class="wrap">
      <div class="footer-glass">
        <div class="footer-cta"><p class="footer-cta-h">Let’s Build Better. Faster. Together.</p><div class="footer-cta-b"><a class="btn btn--red" href="contact.html">Contact Us <span data-icon="arrow"></span></a><a class="btn btn--line" href="${PROFILE}" download="JWA-Design-and-Build-Company-Profile.pdf">Company Profile (PDF)</a></div></div>
        <div class="footer-grid">
          <div class="footer-about">
            <a class="footer-brand" href="index.html"><img src="${LOGO}" alt="JWA Design & Build Sdn Bhd" width="623" height="377"></a>
            <p>Transforming Sabah’s Construction Industry Through Excellence, Speed &amp; Innovation.</p>
            <p class="footer-sub">International Standards. Smarter Delivery. Integrated Expertise. Local Talent.</p>
            <div class="social">
              <a href="https://www.linkedin.com/company/jwa-design-build/" target="_blank" rel="noopener" aria-label="JWA on LinkedIn">${ICON.li}</a>
              <a href="https://www.facebook.com/jwadesignbuild/" target="_blank" rel="noopener" aria-label="JWA on Facebook">${ICON.fb}</a>
              <a href="https://www.instagram.com/jwadesignbuild/" target="_blank" rel="noopener" aria-label="JWA on Instagram">${ICON.ig}</a>
            </div>
          </div>
          <div>
            <h4>Explore</h4>
            <ul>${[['index.html', 'Home'], ...NAV].map(([h, l]) => `<li><a href="${h}">${l}</a></li>`).join('')}</ul>
          </div>
          <div>
            <h4>Visit us</h4>
            <ul class="footer-contact">
              <li>${ICON.pin}<span>Lot No. 1, 2nd Floor, YLY Plaza,<br>Jalan Tuaran Bypass, Inanam,<br>88450 Kota Kinabalu, Sabah</span></li>
              <li>${ICON.phone}<span><a href="tel:+6088335618">+6088 335 618</a><br><a href="tel:+60128802432">+6012 880 2432</a></span></li>
              <li>${ICON.mail}<a href="mailto:inquiries@jwadesignbuild.com">inquiries@jwadesignbuild.com</a></li>
              <li>${ICON.clock}<span>Monday to Friday, 8am to 5pm</span></li>
            </ul>
          </div>
        </div>
        <div class="footer-creds" aria-label="Certifications">
          ${CERTS.map(([k, label, alt]) => `<span class="fc"><img src="assets/img/certs/gold/${k}.png" alt="${alt}" loading="lazy">${label}</span>`).join('')}
        </div>
      </div>
      <div class="footer-base">
        <span>© ${year} JWA Design &amp; Build. All rights reserved. JWA Design &amp; Build Sdn Bhd (1197767-W)</span>
        <nav><a href="privacy.html">Privacy notice</a><a href="https://maps.google.com/?q=YLY+Plaza+Inanam+Kota+Kinabalu" target="_blank" rel="noopener">Directions</a></nav>
      </div>
    </div>
  </footer>
  <a class="wa" href="https://wa.me/60128802432?text=Hi%20JWA%2C%20I'd%20like%20to%20discuss%20a%20project." aria-label="WhatsApp JWA" target="_blank" rel="noopener">${ICON.wa}</a>
  <button type="button" class="to-top" aria-label="Back to top" tabindex="-1">${ICON.up}</button>`;
}

const REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Motion: quiet entrances that follow the reader down the page ---------- */
let revealIO;
const REVEAL = [
  '.mark', '.eyebrow', '.lead', '.stack > p:not(.lead)', '.btns', '.quote', '.figs', '.fig', '.vision-keys li', '.vkc', '.pf', '.pf-more li', '.svc-list li', '.card', '.pcard', '.alb', '.post',
  '.news li', '.jrow', '.person', '.names div', '.vmv > div', '.cl', '.creds .cred', '.tags li', '.group li', '.logo-wall li', '.tq', '.os-card',
  '.speed-card', '.speed-row', '.steps-nav a', '.points div', '.apply article', '.ways a', '.ways div', '.pfacts div', '.pnav', '.marquee', '.sub-head',
  '.ring', '.eco-ring', '.eco-panels', '.ttree-scroll', '.article-body > *', '.article-side', '.form .field', '.filters', '.pub', '.chips li', '.legal > *', '.stamp'
].join(',');
function splitWords(el) {
  if (el.dataset.split) return;
  el.dataset.split = '1';
  const walk = node => [...node.childNodes].forEach(n => {
    if (n.nodeType === 3) {
      const frag = document.createDocumentFragment();
      n.textContent.split(/(\s+)/).forEach(part => {
        if (!part) return;
        if (/^\s+$/.test(part)) { frag.append(document.createTextNode(part)); return; }
        const w = document.createElement('span'); w.className = 'w';
        const i = document.createElement('span'); i.textContent = part; w.append(i); frag.append(w);
      });
      n.replaceWith(frag);
    } else if (n.nodeType === 1 && n.tagName !== 'BR') walk(n);
  });
  walk(el);
  el.querySelectorAll('.w > span').forEach((s, k) => s.style.setProperty('--i', k));
  el.classList.add('wr');
}
function initReveal() {
  const NOROLL = ['about', 'services', 'careers', 'newsletter'].includes(document.body.dataset.page);
  const heads = NOROLL ? [] : [...document.querySelectorAll('h1.display, h1, .h2:not(.wr)')].filter(h => !h.closest('.menu, .footer') && !h.dataset.split);
  heads.forEach(splitWords);
  const photos = [...document.querySelectorAll('main .ph:not(.rvp), .pcard-media:not(.rvp), .pg-item:not(.rvp)')].filter(p => !p.closest('.news, .jrow, .pub, .award-imgs'));
  photos.forEach(p => p.classList.add('rvp'));
  document.querySelectorAll('.hero:not(.hero--full) .hero-media, .phero-media, .split > .ph, .svc-top .ph, .feat .card:first-child .ph, .svc-row > .ph, .gallery .g1 .ph').forEach(p => p.classList.add('par'));
  const items = [...document.querySelectorAll(REVEAL)].filter(el => !el.classList.contains('rv') && !el.closest('.header, .footer, .lightbox'));
  items.forEach(el => el.classList.add('rv'));
  const all = [...document.querySelectorAll('.rv:not(.in), .wr:not(.in), .rvp:not(.in)')];
  if (REDUCED || !('IntersectionObserver' in window)) { all.forEach(e => e.classList.add('in')); return; }
  const show = el => {
    const parent = el.parentElement;
    if (el.classList.contains('rv') && parent) {
      const sibs = [...parent.children].filter(c => c.classList.contains('rv') && !c.classList.contains('in'));
      el.style.setProperty('--d', `${Math.min(Math.max(0, sibs.indexOf(el)), 6) * 80}ms`);
    }
    el.classList.add('in');
    setTimeout(() => { el.style.removeProperty('--d'); }, 2400);
  };
  revealIO = revealIO || new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { show(e.target); revealIO.unobserve(e.target); } });
  }, { rootMargin: '0px 0px -6% 0px', threshold: 0.01 });
  all.forEach(el => revealIO.observe(el));
  // Safety net: anything the reader has already scrolled to or past is shown, even after a fast jump
  if (!initReveal.sweep) {
    let t = 0;
    initReveal.sweep = () => {
      const vh = innerHeight;
      document.querySelectorAll('.rv:not(.in), .wr:not(.in), .rvp:not(.in)').forEach(el => {
        if (el.getBoundingClientRect().top < vh * 0.94) { show(el); revealIO.unobserve(el); }
      });
    };
    addEventListener('scroll', () => { const n = performance.now(); if (n - t > 120) { t = n; requestAnimationFrame(initReveal.sweep); } }, { passive: true });
    addEventListener('scrollend', () => requestAnimationFrame(initReveal.sweep));
    addEventListener('load', () => requestAnimationFrame(initReveal.sweep));
  }
}

/* Photographs drift a little slower than the page */
function initParallax() {
  if (REDUCED) return;
  let els = [], ticking = false;
  const collect = () => { els = [...document.querySelectorAll('.par')].map(el => ({ el, m: el.querySelector('img, video') })).filter(o => o.m); };
  const update = () => {
    const vh = innerHeight;
    els.forEach(({ el, m }) => {
      const r = el.getBoundingClientRect();
      if (r.bottom < -100 || r.top > vh + 100) return;
      const p = (r.top + r.height / 2 - vh / 2) / (vh / 2 + r.height / 2);
      m.style.translate = `0 ${(-p * r.height * 0.045).toFixed(1)}px`;
    });
    ticking = false;
  };
  collect();
  addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
  addEventListener('resize', update);
  update();
}

/* Numbers count up the first time they are seen */
function initCountUp() {
  const figs = [...document.querySelectorAll('.fig b')].filter(b => /^\d+\+?$/.test(b.textContent.trim()));
  if (REDUCED || !figs.length || !('IntersectionObserver' in window)) return;
  const io = new IntersectionObserver(entries => entries.forEach(e => {
    if (!e.isIntersecting) return;
    io.unobserve(e.target);
    const b = e.target, txt = b.textContent.trim(), end = parseInt(txt, 10), plus = txt.endsWith('+') ? '+' : '';
    const t0 = performance.now(), dur = 1400;
    b.style.minWidth = `${b.offsetWidth}px`;
    const tick = t => { const k = Math.min(1, (t - t0) / dur), v = Math.round(end * (1 - Math.pow(1 - k, 3))); b.textContent = v + plus; if (k < 1) requestAnimationFrame(tick); };
    requestAnimationFrame(tick);
  }), { threshold: 0.6 });
  figs.forEach(b => io.observe(b));
}

/* A soft light follows the pointer across dark panels */
function initSpotlight() {
  if (REDUCED || !matchMedia('(hover: hover)').matches) return;
  document.querySelectorAll('.sec--dark, .footer').forEach(el => {
    el.addEventListener('pointermove', e => {
      const r = el.getBoundingClientRect();
      el.style.setProperty('--mx', `${e.clientX - r.left}px`); el.style.setProperty('--my', `${e.clientY - r.top}px`);
      el.classList.add('lit');
    });
    el.addEventListener('pointerleave', () => el.classList.remove('lit'));
  });
}

/* Client logos drift past; the list is doubled so the loop has no seam */
function initMarquee() {
  document.querySelectorAll('.marquee-track').forEach(t => {
    if (t.dataset.dup) return;
    t.dataset.dup = '1';
    [...t.children].forEach(c => { const d = c.cloneNode(true); d.alt = ''; d.setAttribute('aria-hidden', 'true'); t.append(d); });
  });
}

/* About: the hero photographs change slowly, with dots to choose one */
function initSlides() {
  document.querySelectorAll('[data-slides]').forEach(box => {
    const imgs = [...box.querySelectorAll('img')];
    if (imgs.length < 2) return;
    let i = 0, timer;
    const dots = document.createElement('div'); dots.className = 'slide-dots';
    dots.innerHTML = imgs.map((_, k) => `<button type="button" aria-label="Show photo ${k + 1}"></button>`).join('');
    box.append(dots);
    const go = k => { i = (k + imgs.length) % imgs.length; imgs.forEach((im, n) => im.classList.toggle('on', n === i)); [...dots.children].forEach((d, n) => d.classList.toggle('on', n === i)); };
    const play = () => { clearInterval(timer); if (!REDUCED) timer = setInterval(() => go(i + 1), 6000); };
    dots.addEventListener('click', e => { const b = e.target.closest('button'); if (!b) return; go([...dots.children].indexOf(b)); play(); });
    go(0); play();
  });
}

/* Header: glass bar that firms up after scrolling, plus a red reading-progress line */
function initHeaderScroll() {
  const h = document.querySelector('.header');
  if (!h) return;
  const bar = h.querySelector('.progress');
  const darks = [...document.querySelectorAll('.sec--dark, .footer')];
  let ticking = false;
  const update = () => {
    const y = scrollY, max = document.documentElement.scrollHeight - innerHeight;
    h.classList.toggle('scrolled', y > 24);
    const hb = h.querySelector('.header-bar').getBoundingClientRect(), probe = (hb.top + hb.bottom) / 2;
    const dark = darks.some(d => { const r = d.getBoundingClientRect(); return r.top <= probe && r.bottom >= probe; });
    h.classList.toggle('on-dark', HDR === 'dark' || (HDR !== 'band' && dark));
    bar.style.transform = `scaleX(${max > 0 ? Math.min(1, y / max) : 0})`;
    ticking = false;
  };
  addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
  update();
}

function initToTop() {
  const b = document.querySelector('.to-top');
  if (!b) return;
  const wa = document.querySelector('.wa');
  const hero = document.querySelector('main > .hero, main > .phero');
  let ticking = false;
  const update = () => {
    const long = document.documentElement.scrollHeight > innerHeight * 2;
    const on = long && scrollY > innerHeight * 0.9;
    b.classList.toggle('show', on);
    if (wa) wa.classList.toggle('is-hidden', !!hero && scrollY < hero.offsetHeight * 0.6);
    b.tabIndex = on ? 0 : -1;
    ticking = false;
  };
  addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
  addEventListener('resize', update);
  b.addEventListener('click', () => {
    scrollTo({ top: 0, behavior: REDUCED ? 'auto' : 'smooth' });
    document.querySelector('.header a')?.focus({ preventScroll: true });
  });
  update();
}

function initPageTransitions() {
  if (REDUCED) return;
  document.addEventListener('click', e => {
    const a = e.target.closest('a[href]');
    if (!a || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || a.target || a.hasAttribute('download')) return;
    const href = a.getAttribute('href');
    if (!/^[\w-]+\.html([?#][\w=&-]*)?$/.test(href) || href.split(/[#?]/)[0] === (location.pathname.split('/').pop() || 'index.html') && href.includes('#')) return;
    e.preventDefault();
    document.body.classList.add('leaving');
    setTimeout(() => { location.href = href; }, 260);
  });
  addEventListener('pageshow', e => { if (e.persisted) document.body.classList.remove('leaving'); });
}

function initHeroVideo() {
  const v = document.querySelector('.hero video');
  const b = document.querySelector('[data-video-toggle]');
  if (!v) return;
  if (REDUCED) { v.pause(); v.removeAttribute('autoplay'); }
  if (!b) return;
  const sync = () => { b.innerHTML = `<span class="ico">${v.paused ? ICON.play : ICON.pause}</span>${v.paused ? 'Play film' : 'Pause film'}`; };
  b.addEventListener('click', () => { v.paused ? v.play() : v.pause(); });
  v.addEventListener('play', sync); v.addEventListener('pause', sync); sync();
  const line = document.querySelector('.vprog i');
  if (line) {
    const loop = () => { if (v.duration) line.style.transform = `scaleX(${v.currentTime / v.duration})`; requestAnimationFrame(loop); };
    requestAnimationFrame(loop);
  }
}

/* Home: words of the statement light up as they are read */
function initRW() {
  document.querySelectorAll('[data-rw]').forEach(el => {
    const words = [];
    const walk = node => [...node.childNodes].forEach(c => {
      if (c.nodeType === 3) {
        const f = document.createDocumentFragment();
        c.textContent.split(/(\s+)/).forEach(p => {
          if (!p) return;
          if (/^\s+$/.test(p)) { f.append(document.createTextNode(p)); return; }
          const w = document.createElement('span'); w.className = 'rw-w'; w.textContent = p; words.push(w); f.append(w);
        });
        c.replaceWith(f);
      } else if (c.nodeType === 1) walk(c);
    });
    walk(el);
    if (REDUCED) { words.forEach(w => w.classList.add('on')); return; }
    const upd = () => {
      const r = el.getBoundingClientRect(), vh = innerHeight;
      const p = Math.min(1, Math.max(0, (vh * 0.9 - r.top) / (r.height + vh * 0.4)));
      const n = Math.round(p * words.length);
      words.forEach((w, i) => w.classList.toggle('on', i < n));
    };
    addEventListener('scroll', () => requestAnimationFrame(upd), { passive: true });
    addEventListener('resize', upd); upd();
  });
}

/* Home: the four vision cards clear their red tint on hover, focus or tap */
function initVkc() {
  document.querySelectorAll('.vkc').forEach(c => {
    c.addEventListener('click', () => c.classList.toggle('is-clear'));
    c.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); c.classList.toggle('is-clear'); } });
  });
}

/* Home: hovering a service changes the photograph (first tap on touch, second tap opens) */
function initSvcStage() {
  document.querySelectorAll('[data-svc-stage]').forEach(st => {
    const imgs = [...st.querySelectorAll('.svc-view img')], caps = [...st.querySelectorAll('.svc-cap span')], lis = [...st.querySelectorAll('.svc-list li')];
    const set = k => {
      imgs.forEach(i => i.classList.toggle('on', i.dataset.k === k));
      caps.forEach(i => i.classList.toggle('on', i.dataset.k === k));
      lis.forEach(i => i.classList.toggle('on', i.dataset.k === k));
    };
    const touch = matchMedia('(hover: none)');
    lis.forEach(li => {
      const k = li.dataset.k;
      li.addEventListener('pointerenter', e => { if (e.pointerType !== 'touch') set(k); });
      li.addEventListener('focusin', () => set(k));
      li.querySelector('a').addEventListener('click', e => { if (touch.matches && !li.classList.contains('on')) { e.preventDefault(); set(k); } });
    });
  });
}

/* Home: the film magnetises the pointer; the hero eases away as you scroll */

/* Carousels: scroll-snap track with previous / next buttons and a running count */
function initCarousels() {
  document.querySelectorAll('[data-car]').forEach(car => {
    const tr = car.querySelector('.car-track'), prev = car.querySelector('[data-dir="-1"]'), next = car.querySelector('[data-dir="1"]'), cnt = car.querySelector('.car-count');
    if (!tr) return;
    const kids = [...tr.children];
    const step = () => { const a = kids[0], b = kids[1]; return b ? b.offsetLeft - a.offsetLeft : a.offsetWidth; };
    const upd = () => {
      const st = step(), per = Math.max(1, Math.round(tr.clientWidth / st)), first = Math.round(tr.scrollLeft / st);
      const fit = tr.scrollWidth <= tr.clientWidth + 4; car.classList.toggle('is-fit', fit);
      if (prev) prev.disabled = tr.scrollLeft < 4; if (next) next.disabled = tr.scrollLeft + tr.clientWidth >= tr.scrollWidth - 4;
      if (cnt) cnt.textContent = `${first + 1} to ${Math.min(kids.length, first + per)} of ${kids.length}`;
    };
    [prev, next].forEach(b => b && b.addEventListener('click', () => tr.scrollBy({ left: Number(b.dataset.dir) * step() * Math.max(1, Math.round(tr.clientWidth / step())), behavior: REDUCED ? 'auto' : 'smooth' })));
    tr.addEventListener('scroll', () => requestAnimationFrame(upd), { passive: true });
    addEventListener('resize', upd); upd();
  });
}

function initHeroPlay() {
  const hero = document.querySelector('.hero--full');
  if (!hero || REDUCED) return;
  const a = hero.querySelector('.hero-play'), d = a && a.querySelector('.hp-disc');
  if (d && matchMedia('(hover: hover)').matches) {
    a.addEventListener('pointermove', e => { const r = a.getBoundingClientRect(); d.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * .28}px, ${(e.clientY - r.top - r.height / 2) * .28}px)`; });
    a.addEventListener('pointerleave', () => { d.style.transform = ''; });
  }
  let t = false;
  const upd = () => { hero.style.setProperty('--hs', Math.min(1, Math.max(0, scrollY / innerHeight)).toFixed(3)); t = false; };
  addEventListener('scroll', () => { if (!t) { t = true; requestAnimationFrame(upd); } }, { passive: true });
  upd();
}

/* Home: the full film plays on this site, in a window over the page */
function initFilm() {
  document.querySelectorAll('[data-film]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const bg = document.querySelector('.hero video'); const wasPlaying = bg && !bg.paused; if (bg) bg.pause();
      const box = document.createElement('div');
      box.className = 'film'; box.setAttribute('role', 'dialog'); box.setAttribute('aria-modal', 'true'); box.setAttribute('aria-label', 'JWA film');
      box.innerHTML = `<div class="film-inner"><button type="button" class="film-x" aria-label="Close film">&times;</button><div class="film-frame"><iframe src="https://www.youtube-nocookie.com/embed/${a.dataset.film}?autoplay=1&rel=0&modestbranding=1" title="JWA Design &amp; Build film" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe></div></div>`;
      document.body.append(box); document.body.classList.add('film-open');
      requestAnimationFrame(() => box.classList.add('on'));
      const close = () => { box.classList.remove('on'); document.body.classList.remove('film-open'); document.removeEventListener('keydown', key); setTimeout(() => box.remove(), 350); if (bg && wasPlaying) bg.play(); a.focus(); };
      const key = ev => { if (ev.key === 'Escape') close(); };
      document.addEventListener('keydown', key);
      box.addEventListener('click', ev => { if (ev.target === box || ev.target.closest('.film-x')) close(); });
      box.querySelector('.film-x').focus();
    });
  });
}

/* Services ecosystem: hovering or focusing a service lights its path and shows its story */
function initEcosystem() {
  document.querySelectorAll('[data-eco]').forEach(eco => {
    const nodes = [...eco.querySelectorAll('.eco-node')];
    const panels = [...eco.querySelectorAll('.eco-panel')];
    const set = k => {
      eco.classList.toggle('lit', !!k);
      nodes.forEach(n => n.classList.toggle('on', n.dataset.k === k));
      panels.forEach(p => p.classList.toggle('on', p.dataset.k === (k || 'all')));
      eco.querySelectorAll('.eco-line').forEach(l => l.classList.toggle('on', l.dataset.k === k));
    };
    nodes.forEach(n => {
      n.addEventListener('mouseenter', () => set(n.dataset.k));
      n.addEventListener('focus', () => set(n.dataset.k));
      n.addEventListener('click', e => { if (n.tagName === 'BUTTON') { e.preventDefault(); set(n.dataset.k); } });
    });
    eco.querySelector('.eco-ring')?.addEventListener('mouseleave', () => set(null));
    set(null);
  });
}

/* Share buttons on news cards and articles */
function initShare() {
  document.querySelectorAll('[data-share]').forEach(box => {
    const rel = box.dataset.share || location.pathname.split('/').pop();
    const url = new URL(rel, location.href).href;
    const title = box.dataset.title || document.title;
    const u = encodeURIComponent(url), t = encodeURIComponent(title);
    box.innerHTML = `
      <span class="share-label">Share</span>
      <a href="https://wa.me/?text=${t}%20${u}" target="_blank" rel="noopener" aria-label="Share on WhatsApp">${ICON.wa}</a>
      <a href="https://www.facebook.com/sharer/sharer.php?u=${u}" target="_blank" rel="noopener" aria-label="Share on Facebook">${ICON.fb}</a>
      <a href="https://www.linkedin.com/sharing/share-offsite/?url=${u}" target="_blank" rel="noopener" aria-label="Share on LinkedIn">${ICON.li}</a>
      <button type="button" aria-label="Copy link">${ICON.link}</button>`;
    box.querySelector('button').addEventListener('click', async e => {
      e.preventDefault(); e.stopPropagation();
      const b = e.currentTarget;
      try {
        if (navigator.share && matchMedia('(pointer: coarse)').matches) { await navigator.share({ title, url }); return; }
        await navigator.clipboard.writeText(url); b.classList.add('done'); b.setAttribute('aria-label', 'Link copied');
      } catch { /* dismissed */ }
      setTimeout(() => { b.classList.remove('done'); b.setAttribute('aria-label', 'Copy link'); }, 1800);
    });
    box.addEventListener('click', e => e.stopPropagation());
  });
}

function initImgFallback() {
  document.addEventListener('error', e => {
    const t = e.target;
    if (t.tagName === 'IMG' && !t.dataset.failed) { t.dataset.failed = '1'; t.style.visibility = 'hidden'; }
  }, true);
}

/* ---------- Projects page: filterable grid, each card opens its own project page ---------- */
const projectUrl = p => `project.html?p=${p.slug}`;
function initProjects() {
  const grid = document.querySelector('[data-projects]');
  if (!grid || typeof PROJECTS === 'undefined') return;
  const bar = document.querySelector('[data-filters]');
  let current = location.hash.replace('#', '') || 'all';
  if (!SECTORS.some(s => s.key === current)) current = 'all';
  const count = k => k === 'all' ? PROJECTS.length : PROJECTS.filter(p => p.sector === k).length;
  bar.innerHTML = `<div class="filter-chips">${SECTORS.filter(s => count(s.key) > 0)
    .map(s => `<button type="button" data-k="${s.key}" aria-pressed="${s.key === current}">${s.label}<small>${count(s.key)}</small></button>`).join('')}</div>`;
  const BLURB = {
    all: ['Our work reflects our commitment to professional expertise, quality workmanship and efficient project delivery.', 'From corporate headquarters to industrial facilities and institutional developments, every project demonstrates our capabilities and the trust placed in us.'],
    corporate: ['Built for Business.', 'Quality commercial environments designed and constructed to support business performance, operational efficiency and long-term value.'],
    commercial: ['Built for Business.', 'Quality commercial environments designed and constructed to support business performance, operational efficiency and long-term value.'],
    government: ['Building for Progress.', 'Facilities and developments delivered with professionalism, accountability and a commitment to serving organisations and communities.'],
    industrial: ['Built for Performance.', 'Practical, durable and efficient construction solutions designed to support demanding operational requirements.'],
    hotels: ['Excellence in Every Detail.', 'High-quality interior and specialist construction works where design, functionality and precision come together.'],
    fnb: ['Excellence in Every Detail.', 'High-quality interior and specialist construction works where design, functionality and precision come together.'],
    residential: ['Excellence in Every Detail.', 'High-quality interior and specialist construction works where design, functionality and precision come together.']
  };
  const blurb = document.querySelector('[data-filter-blurb]');
  const more = document.querySelector('[data-more]');
  const STEP = 9;
  let shown = STEP;
  const card = p => `
      <a class="alb" href="${projectUrl(p)}">
        <img src="${p.images[0]}" alt="${p.name}" loading="lazy">
        ${p.ongoing ? '<span class="alb-tag">Under construction</span>' : ''}
        
        <span class="alb-cap"><small>${p.sectorLabel}</small><b>${p.name}</b><span>${[p.location, p.year].filter(Boolean).join(' · ')}</span></span>
      </a>`;
  const draw = () => {
    const list = PROJECTS.filter(p => current === 'all' || p.sector === current);
    grid.innerHTML = list.slice(0, shown).map(card).join('');
    if (blurb) { const t = BLURB[current] || BLURB.all; blurb.innerHTML = `<b>${t[0]}</b><span>${t[1]}</span>`; }
    if (more) { const left = list.length - shown; more.hidden = left <= 0; more.querySelector('span').textContent = `Show more projects (${Math.max(left, 0)} more)`; }
    initReveal();
  };
  if (more) more.querySelector('button').addEventListener('click', () => { shown += STEP; draw(); });
  bar.addEventListener('click', e => {
    const b = e.target.closest('button[data-k]'); if (!b) return;
    current = b.dataset.k;
    bar.querySelectorAll('button[data-k]').forEach(x => x.setAttribute('aria-pressed', x === b));
    history.replaceState(null, '', current === 'all' ? location.pathname : '#' + current);
    shown = STEP; draw();
  });
  draw();
}

/* ---------- Single project page ---------- */
function initProjectPage() {
  const root = document.querySelector('[data-project]');
  if (!root || typeof PROJECTS === 'undefined') return;
  const slug = new URLSearchParams(location.search).get('p');
  const i = Math.max(0, PROJECTS.findIndex(p => p.slug === slug));
  const p = PROJECTS[i];
  const next = PROJECTS[(i + 1) % PROJECTS.length], prev = PROJECTS[(i - 1 + PROJECTS.length) % PROJECTS.length];
  document.title = `${p.name} | Projects | JWA Design & Build`;
  const hero = document.querySelector('.phero');
  const himg = hero.querySelector('.phero-media img');
  himg.src = p.images[0]; himg.alt = p.name;
  hero.querySelector('[data-p-name]').textContent = p.name;
  hero.querySelector('[data-p-crumb]').textContent = p.name;
  hero.querySelector('[data-p-sector]').textContent = p.sectorLabel;
  hero.querySelector('[data-p-lead]').textContent = p.story || `${p.scope}${p.client && p.client !== 'Private client' ? ` for ${p.client}` : ''}, ${p.location}.`;
  const TBC = '<span class="tbc">To be confirmed</span>';
  document.querySelector('[data-p-facts]').innerHTML = `
    <div>${ICON.building}<dt>Client</dt><dd>${p.client || TBC}</dd></div>
    <div>${ICON.pin}<dt>Location</dt><dd>${p.location}</dd></div>
    <div>${ICON.years}<dt>Year</dt><dd>${p.year || TBC}</dd></div>
    <div>${ICON.value}<dt>Contract value</dt><dd>${p.value || TBC}</dd></div>
    <div>${ICON.crane}<dt>Status</dt><dd>${p.ongoing ? 'Under construction' : 'Completed'}</dd></div>
    <div>${ICON.plan}<dt>Scope</dt><dd>${p.scope}</dd></div>`;
  const gal = root.querySelector('[data-p-gallery]');
  gal.innerHTML = p.images.map((src, j) => `<button type="button" class="pg-item${j === 0 ? ' pg-item--wide' : ''}" data-i="${j}" aria-label="Open photo ${j + 1}"><img src="${src}" alt="${p.name}, photo ${j + 1}" loading="lazy"></button>`).join('');
  // Related: same sector first
  const rel = PROJECTS.filter(q => q !== p && q.sector === p.sector).concat(PROJECTS.filter(q => q !== p && q.sector !== p.sector)).slice(0, 3);
  const relEl = root.querySelector('[data-p-related]'); if (relEl) relEl.innerHTML = rel.map(q => `
    <a class="pcard" href="${projectUrl(q)}"><span class="pcard-media"><img src="${q.images[0]}" alt="${q.name}" loading="lazy"></span>
      <span class="pcard-body"><span class="pcard-sector">${q.sectorLabel}</span><b>${q.name}</b><span class="pcard-meta">${[q.location, q.year].filter(Boolean).join('<i aria-hidden="true">·</i>')}</span></span></a>`).join('');
  // Lightbox
  const lb = document.querySelector('.lightbox');
  const img = lb.querySelector('.lb-stage img'), cnt = lb.querySelector('.lb-count');
  let idx = 0, last = null;
  const show = () => { img.src = p.images[idx]; img.alt = `${p.name}, photo ${idx + 1}`; cnt.textContent = `${String(idx + 1).padStart(2, '0')} / ${String(p.images.length).padStart(2, '0')}`; };
  const close = () => { lb.hidden = true; document.body.style.overflow = ''; last?.focus(); };
  gal.addEventListener('click', e => { const b = e.target.closest('[data-i]'); if (!b) return; idx = +b.dataset.i; last = b; show(); lb.hidden = false; document.body.style.overflow = 'hidden'; lb.querySelector('.lb-close').focus(); });
  lb.querySelector('.lb-close').addEventListener('click', close);
  lb.querySelector('[data-lb-prev]').addEventListener('click', () => { idx = (idx - 1 + p.images.length) % p.images.length; show(); });
  lb.querySelector('[data-lb-next]').addEventListener('click', () => { idx = (idx + 1) % p.images.length; show(); });
  lb.addEventListener('click', e => { if (e.target === lb || e.target.classList.contains('lb-stage')) close(); });
  document.addEventListener('keydown', e => {
    if (lb.hidden) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowRight') lb.querySelector('[data-lb-next]').click();
    if (e.key === 'ArrowLeft') lb.querySelector('[data-lb-prev]').click();
  });
}

function initNewsletter() {
  const bar = document.querySelector('[data-post-filters]');
  if (!bar) return;
  const posts = [...document.querySelectorAll('[data-cat]')];
  bar.addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    bar.querySelectorAll('button').forEach(x => x.setAttribute('aria-pressed', x === b));
    posts.forEach(p => { p.hidden = b.dataset.k !== 'all' && p.dataset.cat !== b.dataset.k; });
    document.querySelectorAll('.cat-notes > [data-k]').forEach(n => { n.hidden = n.dataset.k !== b.dataset.k; });
    const empty = document.querySelector('[data-empty]'); if (empty) empty.hidden = posts.some(p => !p.hidden);
  });
}

function initCopy() {
  document.querySelectorAll('[data-copy]').forEach(btn => btn.addEventListener('click', async () => {
    try { await navigator.clipboard.writeText(btn.dataset.copy); btn.textContent = 'Copied'; }
    catch { const r = document.createRange(); r.selectNodeContents(btn.previousElementSibling); getSelection().removeAllRanges(); getSelection().addRange(r); btn.textContent = 'Selected'; }
    setTimeout(() => { btn.textContent = 'Copy'; }, 1800);
  }));
}

/* Contact form: only a name and ONE way to reach you are required */
function initForm() {
  const f = document.querySelector('[data-enquiry]');
  if (!f) return;
  const note = f.querySelector('.form-note');
  const reach = ['phone', 'email'].map(n => f.elements[n]).filter(Boolean);
  const check = () => {
    const any = reach.some(el => el.value.trim());
    reach.forEach(el => el.setCustomValidity(any ? '' : 'Please give us at least one way to reach you: phone or email.'));
    f.querySelector('.reach-hint')?.classList.toggle('ok', any);
  };
  reach.forEach(el => el.addEventListener('input', check));
  f.addEventListener('submit', e => {
    e.preventDefault();
    check();
    if (!f.checkValidity()) { f.reportValidity(); return; }
    const d = Object.fromEntries(new FormData(f));
    const subject = `${d.type || 'Enquiry'}${d.company ? ' — ' + d.company : ''}`;
    const body = [
      `Name: ${d.name}`, `Organisation: ${d.company || '-'}`, `Contact number: ${d.phone || '-'}`, `Email: ${d.email || '-'}`,
      `Nature of enquiry: ${d.type || '-'}`, `Project location: ${d.address || '-'}`, '', 'Project description:', d.message || ''
    ].join('\n');
    location.href = `mailto:inquiries@jwadesignbuild.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    note.innerHTML = 'Thank you. Your email app should now open with your message filled in. If it doesn’t, call us on <a href="tel:+6088335618">+6088 335 618</a> or WhatsApp <a href="https://wa.me/60128802432">+6012 880 2432</a>.';
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderHeader();
  renderFooter();
  initImgFallback();
  initHeroVideo();
  initRW(); initVkc(); initSvcStage(); initHeroPlay(); initFilm(); initCarousels();
  initProjects();
  initProjectPage();
  initEcosystem();
  initShare();
  initForm();
  initNewsletter();
  initCopy();
  initMarquee();
  initSlides();
  initReveal();
  initParallax();
  initCountUp();
  // spotlight removed (client feedback)
  initHeaderScroll(); initToTop();
  initPageTransitions();
  document.querySelectorAll('[data-icon]').forEach(el => {
    if (el.tagName === 'SPAN' && !el.className && !el.children.length && !el.textContent.trim()) el.outerHTML = ICON[el.dataset.icon];
    else el.insertAdjacentHTML('afterbegin', ICON[el.dataset.icon]);
  });
});

/* No lone words: the last three words of every text block stay together, so a line never ends on one or two words.
   Runs on load and again whenever the page builds new text (project cards, filters, news). */
(function () {
  const SKIP = /^(script|style|svg|textarea|select|option|code|pre|noscript|input|iframe|canvas)$/i;
  const WS = /[^\S ]/;
  const seen = new WeakMap();
  const tail = el => {
    const parts = [];
    const w = document.createTreeWalker(el, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, {
      acceptNode: n => n.nodeType === 3 ? NodeFilter.FILTER_ACCEPT
        : SKIP.test(n.localName) ? NodeFilter.FILTER_REJECT
        : n.localName === 'br' ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
    });
    let n;
    while ((n = w.nextNode())) { if (n.nodeType === 1) parts.length = 0; else parts.push(n); }
    return parts;
  };
  const glue = el => {
    const parts = tail(el);
    if (!parts.length) return;
    const has = parts.map(t => /\S/.test(t.nodeValue.replace(/\u00a0/g, ' ')));
    let need = 2, word = false;
    for (let i = parts.length - 1; i >= 0; i--) {
      const s = parts[i].nodeValue, out = [];
      const before = has.slice(0, i).some(Boolean);
      let j = s.length, cut = 0;
      while (j > 0) {
        const c = s[j - 1];
        if (WS.test(c)) {
          let k = j; while (k > 0 && WS.test(s[k - 1])) k--;
          const hasBefore = before || /\S/.test(s.slice(0, k));
          if (word && need > 0 && hasBefore) { out.push('\u00a0'); need--; word = false; if (need === 0) { cut = k; break; } }
          else out.push(s.slice(k, j));
          j = k;
        } else { out.push(c); word = true; j--; }
      }
      /* a hyphen is a break opportunity too: keep hyphenated words in one piece inside the last three words */
      const ns = s.slice(0, cut) + out.reverse().join('').replace(/-(?=[A-Za-z])/g, '-\u2060');
      if (ns !== s) parts[i].nodeValue = ns;
      if (need === 0) break;
    }
  };
  /* Headings whose words are animated as separate boxes: keep the last words together with a no-wrap wrapper */
  const unwrap = nb => { while (nb.firstChild) nb.parentNode.insertBefore(nb.firstChild, nb); nb.remove(); };
  const glueW = el => {
    let ws = [...el.querySelectorAll('.w')];
    const br = [...el.querySelectorAll('br')].pop();
    if (br) ws = ws.filter(w => br.compareDocumentPosition(w) & Node.DOCUMENT_POSITION_FOLLOWING);
    ws = ws.filter(w => !w.parentElement.classList.contains('nb'));
    if (ws.length < 2) return;
    const attempt = () => {
      for (const n of [3, 2]) {
        const g = ws.slice(-n); if (g.length < n) continue;
        if (!g.every(w => w.parentNode === g[0].parentNode)) continue;
        const nb = document.createElement('span'); nb.className = 'nb';
        g[0].parentNode.insertBefore(nb, g[0]);
        let x = g[0]; const move = [];
        while (x) { move.push(x); if (x === g[n - 1]) break; x = x.nextSibling; }
        move.forEach(m => nb.appendChild(m));
        if (el.scrollWidth <= el.clientWidth + 1) return true;
        unwrap(nb);
      }
      return false;
    };
    if (attempt()) return;
    /* a very long word on a phone: let the heading come down a little so the last words fit together */
    const base = parseFloat(getComputedStyle(el).fontSize);
    for (const k of [0.94, 0.88, 0.82, 0.76, 0.72]) {
      el.style.fontSize = (base * k) + 'px';
      if (attempt()) { el.dataset.shrunk = '1'; return; }
    }
    el.style.fontSize = '';
  };
  const run = () => {
    document.querySelectorAll('body *').forEach(el => {
      if (SKIP.test(el.localName) || el.closest('svg,script,style,textarea,select,noscript,.vkc,.ct-trio .h3')) return;
      const sig = el.textContent + '#' + el.getElementsByTagName('*').length; if (seen.get(el) === sig) return;
      const d = getComputedStyle(el).display; if (d === 'inline' || d === 'none' || d === 'contents') { return; }
      const own = [...el.childNodes].some(n => n.nodeType === 3 && /\S/.test(n.nodeValue));
      const inlineOnly = [...el.children].every(c => /^inline/.test(getComputedStyle(c).display) || c.localName === 'br');
      if (!own && !inlineOnly) return;
      /* a separator dot or dash stays with the word before it, never starting a line */
      [...el.childNodes].forEach(n => { if (n.nodeType === 3 && /\s[·•|–—](?=\s)/.test(n.nodeValue)) n.nodeValue = n.nodeValue.replace(/\s+([·•|–—])(?=\s)/g, '\u00a0$1'); });
      glue(el); if (el.querySelector('.w')) glueW(el); seen.set(el, el.textContent + '#' + el.getElementsByTagName('*').length);
    });
  };
  let t;
  const queue = () => { clearTimeout(t); t = setTimeout(run, 60); };
  const start = () => {
    run();
    new MutationObserver(queue).observe(document.body, { childList: true, subtree: true, characterData: true });
    addEventListener('load', run);
    let rt; addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(() => { document.querySelectorAll('.nb').forEach(unwrap); document.querySelectorAll('[data-shrunk]').forEach(e => { e.style.fontSize = ''; delete e.dataset.shrunk; }); document.querySelectorAll('body *').forEach(e => seen.delete(e)); run(); }, 250); });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(run);
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => setTimeout(start, 0)); else setTimeout(start, 0);
})();
