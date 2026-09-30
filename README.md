# JWA Design & Build website (redesign template)

Static HTML/CSS/JS. Open `index.html` in a browser with an internet connection. Photos and the hero video still load from the staging site.

## Pages
- `index.html` Home: hero video, key figures, about, featured project (SESB HQ, RM41.8M), Proudly Sabahan, services, the 24 clients from the company profile, testimonials, credentials, call to action
- `about.html` About Us: Leadership, Key Senior Management, Awards & Recognition (plus media features), Our Story and milestones (to 2026), Vision / Mission / Values, Sustainability & Community
- `services.html` Our Business: capacity figures, what we offer, why JWA, 6-stage process, and JWA Group (nine businesses, photos in `assets/img/group/`)
- `projects.html` Projects: 28 projects with year and contract value from the Sept 2026 company profile, Ongoing and Flagship tags, sector and location filters, and a gallery. Data is in `assets/js/data.js`
- `careers.html` Careers: why join, disciplines, and two equal cards for Register your interest and Internships
- `newsletter.html` plus six `news-*.html` article pages. Each is a real story with its source listed, and nothing links to the old website
- `contact.html` Contact: the enquiry form opens a pre-filled email to inquiries@jwadesignbuild.com
- `privacy.html` PDPA privacy notice, `404.html` page-not-found
- `sitemap.xml`, `robots.txt`, and share image `assets/img/og-image.jpg`

## Design system
- Logo: `assets/img/jwa-logo.png` is the full lockup (mark plus JWA DESIGN & BUILD, SDN BHD) for light backgrounds, taken from the revision deck. The favicon is `assets/img/favicon.png`. Replace both with the master files from the brand pack if you have them.
- Fonts: Satoshi for headings (Fontshare), Geist for body text (Google Fonts)
- Colours: white `#ffffff`, paper grey `#f4f4f2`, ink `#151515`, red `#c8102e` to `#7d0a1b`
- Background pattern: a faint drafting grid on grey bands and the footer, and a light diagonal hatch fading in on white sections. Tune it with `--grid-minor`, `--grid-major` and `--hatch` in `style.css`.
- One slant for every diagonal: `--slant: 20deg` (and `--tan`) in `style.css`. White angled panels, red corners, hatch lines and button sweeps all follow it. Red corners are sized by height, and their width follows the slant automatically.
- Sharp corners everywhere. There is no dark mode.
- Motion (in `main.js` and at the end of `style.css`):
  - Photos wipe in along the slant and list items reveal in turn. Numbers count up.
  - Full-bleed photos and the red corners have gentle parallax.
  - The header compacts on scroll and shows a red progress line.
  - Button fills sweep in on the slant. The services list cycles on its own.
  - The project strip can be dragged. The hero video has a progress line.
  - Pages fade between each other.
  - Everything turns off when the visitor has reduced motion enabled.
- Each fact appears once on the site. Company Profile is in the header (and in the mobile menu). Contact details and credentials are in the footer.
- Header and footer are injected by `assets/js/main.js`, so edit them in one place

## Before launch
1. **Company profile.** `assets/JWA-Company-Profile.pdf` is the September 2026 portrait edition (36 pages, 12.6 MB). Replace it with the print-approved final if anything changes.
2. **Remote assets.** Most project photos, award images, team photos and the hero video still load from the staging site's storage (Vercel Blob, Convex and `jwa.sampletest.website/images/...`). Before launch, download them, resize them to about 1600 px, save them into `assets/img/`, and update the URLs. Photos taken from the company profile are already local in `assets/img/projects/`. The hero video is `/images/hero/0112.mp4`.
3. **To confirm with JWA:**
   - Figures: RM200M+ completed, RM300M capacity, RM50M revenue, RM20M financing line, 800+ jobs, 90% local.
   - Office hours (Mon–Fri, 8.30am–5.30pm) and the careers email (`hr@jwadesignbuild.com`).
4. **Project TBCs.** Year or value is missing for SESB Keningau, the two JKR projects, KK Hyatt, Forest Solution, JWA HQ, Toyota, Ranau One and K Avenue, and the client for ibis Styles and Kundasang. Fill these in `assets/js/data.js`.
5. **F&B projects.** Dragon Palace, Brown Fox Cafe and Kudat Golf & Marina Resort appear under the Restaurants & Cafes filter, before Residential.
6. **Clients.** These are shown as names in the profile's order. Colour logo files from JWA can replace them later.
7. **Content from JWA:** Datin Annie's profile, the exact company name for the Government & Infrastructure arm ("Prestasi Bina" was read from the logo), and PUKONSA/Bumiputera status if applicable.
8. **Privacy notice.** `privacy.html` is a standard PDPA notice. Ask JWA (or their lawyer) to review it.
9. **Enquiry form.** It opens the visitor's email app. To send directly from the page, connect it to a form service or API route (`initForm()` in `main.js`).
10. **Hosting.** Serve `404.html` for missing pages, and point the old website's URLs to the new pages with 301 redirects.
