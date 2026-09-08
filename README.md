# My portfolio

I use this website to share my experience, projects, and the way I approach software engineering. The site is an expanded companion to my resume at [danyalaliasghar.github.io](https://danyalaliasghar.github.io/).

## Run locally

This Gatsby 2 project uses Node.js 16.20.2 and Yarn Classic. The version in `.nvmrc` matches the existing dependency lockfile.

```sh
nvm install
nvm use
npm install --global yarn@1.22.22
yarn install --frozen-lockfile
yarn develop
```

The development site is available at `http://localhost:8000`. All Gatsby commands use the project's local CLI.

## Build and preview

```sh
yarn build
yarn serve
```

The production preview is available at `http://localhost:9000`. Generated files go into `public/`, which is excluded from the source branch.

## Update content

- My introduction, skills, experience, projects, training, and contact copy live in `content/`.
- The page layouts live in `src/components/sections/`; contact links and site metadata live in `src/config.js`.
- My downloadable resume lives at `static/resume.pdf`. Keep any legacy resume download paths aligned with this file.
- My page titles, search descriptions, and social metadata live in `gatsby-config.js` and `src/components/head.js`.
- My sharing image is `src/images/og.png`, rendered at 1200 × 630 from `src/images/social-card.svg`.
- Template blog examples are retained as drafts and are excluded from published posts and tags.

## Publish

I keep the source on `main`. GitHub Pages serves the generated website from the root of `master`.

After reviewing and committing the source changes:

```sh
git push origin main
yarn deploy
```

The deploy command builds the site and publishes `public/` to `master`. See [Steps-to-deploy.md](Steps-to-deploy.md) for the release checks.

## Credits

I adapted the original portfolio design by [Brittany Chiang](https://brittanychiang.com). The original attribution and MIT license remain in this repository.
