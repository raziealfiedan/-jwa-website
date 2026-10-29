# JWA Design & Build website, v35

Static HTML, CSS and JavaScript. Open `index.html` in a browser with an internet connection. Some photos and the hero film still load from the staging site's storage.

## How the site reads
The homepage opens with the film, then JWA's vision in four words (Transform Sabah, Excellence, One ecosystem, Local talent), then a short summary of each page, in the same order as the menu:
01 About us, 02 Services, 03 Projects, 04 Careers, 05 Newsletter, 06 Contact us.
Each chapter opens with a quiet marker (number, name, a thin line) and links to its full page.

The five steps from JWA's office wall (The problem, One-stop, Fast, Strong team, Reliable) are on `services.html`, followed by the eight services, capacity and the JWA Group.

## Pages
- `index.html` homepage summaries
- `about.html` team photo slideshow, the team that runs every project, then the founders, journey 2010 to 2026, vision, people, office, management and organisation chart, certifications, awards, JWA Group
- `services.html` five steps, services map (hover a service), each service in detail (`services.html#construction` etc.), capacity, JWA Group
- `projects.html` all projects with filters, clients and partners, testimonials
- `project.html?p=<slug>` one page per project, filled from `assets/js/data.js`
- `careers.html`, `newsletter.html` (share buttons), six `news-*.html` articles, `contact.html`, `privacy.html`, `404.html`

## Design rules
- Every page opens with its photograph (or the film on the homepage), then the words underneath. Nothing sits on top of the hero image.
- The signature is one soft curved corner on photographs (bottom right), replacing the 20° triangle.
- Glass header and glass footer. The background is a soft paper tone (not pure white) with faint light washes and contour lines. Sections alternate paper, stone and night.
- One red gradient ribbon (`assets/img/ribbon-red.svg`) sweeps across the top right corner of the services photograph on the homepage. Use it sparingly: once per page at most.
- Dark sections and the footer are floating panels with the soft corner; patterns fade into the background instead of ending on a line.
- The header is real glass: light over light sections, smoked over dark ones.
- Motion is quiet: headlines rise word by word, photographs open like a curtain and drift slightly on scroll, figures count up, client logos glide past, a soft light follows the pointer on dark panels, the Proudly Sabahan stamp turns slowly. Everything is switched off for visitors who ask their device for reduced motion.
- Certifications use the real logos (`assets/img/certs/`): CIDB, Ministry of Finance, ACS (ISO 9001), LAM, PAM and MIID.
- Satoshi Bold for headlines (from fontshare.com), Geist for body text (from Google Fonts). Red `#c8102e` for links, numbers in markers and icons only.
- Contact form: a name and one way to reach you are enough.

## Still to confirm with JWA
- More testimonials with a named person.
- Datin Annie's profile.
- Client, year or value for projects marked "To be confirmed".
- That 300 local jobs and 30+ trained professionals are the figures to publish.
