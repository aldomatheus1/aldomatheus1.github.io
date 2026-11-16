# Aldo Matheus — Engineering e-Portfolio

A bilingual **English / French** e-portfolio made for GitHub Pages, structured around the **six sections recommended by Toulouse INP–ENSEEIHT (CAM / PPP 2026–2027)**.

## What is included

- `index.html` — responsive portfolio with six sections and an integrated **Career Development / PPP** section
- `styles.css` — self-contained visual design, mobile styles, keyboard focus and reduced-motion support
- `script.js` — English / French language switch, responsive navigation and section highlighting
- `assets/aldo-portrait.jpg` — portrait extracted from Aldo's submitted CV
- `assets/CV_Aldo_English.pdf` and `assets/CV_Aldo_Francais.pdf` — one-page CVs based on the supplied Brazilian CV and Lattes (plus documented academic mobility and coursework)
- `docs/PPP_presentation_notes_EN.md` — draft outline for the future jury presentation
- `docs/mentor_interview_template.md` — blank interview documentation template
- `docs/PPP_elevator_pitch_draft_EN.md` — initial video pitch script with explicit prompts where further evidence is required
- `CHECKLIST_BEFORE_PUBLICATION.md` — items to check before making the site public

## Publish at `<username>.github.io`

1. On [GitHub](https://github.com/), create a **public** repository with the exact name `<your-username>.github.io`, replacing the placeholder with your actual GitHub username.
2. Upload the **contents** of this directory (`index.html`, `styles.css`, `script.js`, `assets/`, `docs/`, `.nojekyll`, etc.) to the repository root. **Do not upload the ZIP as a single file.**
3. Commit the files to the `main` branch.
4. In the repository, open **Settings → Pages → Build and deployment**. Choose **Deploy from a branch**, then `main` and `/(root)`, and save.
5. Open `https://<your-username>.github.io/`. GitHub Pages may take a short time to deploy. The site URL is also visible in repository **Settings → Pages**.

If you instead create a repository named `eportfolio`, the address will be `https://<your-username>.github.io/eportfolio/` (with the same Pages settings). All website links are relative and work with either option.

GitHub documentation: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Local preview

Open `index.html` in a browser. No build, dependencies, server, account or external assets are required.

## Editing and maintenance

- Text for each language lives in `data-en` and `data-fr` attributes in `index.html`. Update **both** to keep the bilingual version consistent.
- Change the portrait in `assets/aldo-portrait.jpg` (keep the same name), or remove it and change the website markup.
- Replace the email, if desired, in `index.html` and both CV PDFs. PDF editing is easiest from the draft generation source (not included in the public website folder).
- Add your own project evidence (e.g., repository links, reports, demos) to the project cards after reviewing confidentiality and intellectual property.
- Add your mentor interviews **only when held**, the 2–3-minute elevator-pitch video **only when recorded**, and the completed 6–8-slide jury presentation once ready.
- **Your school email:** the CAM course suggests a `@etu.toulouse-inp.fr` email on the CV. As its exact address was not supplied, these PDFs presently use your existing email from the uploaded CV. Before submitting the PPP, replace it with your confirmed school email if required by your teacher.
- The three career directions and international mobility paths in Career Development are **explicit hypotheses** for future exploration; they are **not** claimed as validated mentor findings, applications or offers.
- The portfolio does not include Google Analytics, external trackers, forms or marketing cookies. It stores only an optional local language preference in the browser.

## ENSEEIHT six-section framework

1. Welcome
2. Engineering course — projects & evidence
3. International Mobility
4. Sustainability & Civic Engagement
5. Sport & Other Activities
6. Career Development / PPP

The current academic guidance further calls for three analysed professional role models, three linked mobility projects, a video pitch, English/French CVs and a jury presentation. The repository provides factual content and transparent preparations; unknown or uncompleted deliverables are marked as such rather than invented.

## Source and content integrity

Personal background: user-supplied *CV_Portugues_comFoto.pdf* and *CurriculoLattes.pdf*, supplemented by the engineering work and international mobility already discussed with the portfolio owner. Structure: Toulouse INP–ENSEEIHT CAM/PPP slide decks provided for this assignment. Slides and the original curriculum files are not redistributed in this public site.

© 2026 Aldo Matheus Aquino de França. Personal content; contact the owner before reuse.