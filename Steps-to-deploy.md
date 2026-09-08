# Publish my portfolio

GitHub Pages serves this repository from the root of `master`. I maintain the source on `main`.

1. Use the Node version in `.nvmrc` and install the locked dependencies with `yarn install --frozen-lockfile`.
2. Run `yarn build`, then `yarn serve` to review the production site at `http://localhost:9000`.
3. Check the desktop and mobile layouts, experience navigation, project links, resume download, and WhatsApp contact link.
4. Review `git diff`, commit the intended source changes on `main`, and run `git push origin main`.
5. Run `yarn deploy` to build and publish the site to `master`.
6. Wait for GitHub Pages to finish its deployment, then verify [my live portfolio](https://danyalaliasghar.github.io/) and download the live resume to confirm the latest file is available.

Use the local Gatsby CLI through the Yarn scripts; a global Gatsby installation is unnecessary. Avoid running `npm install` alongside Yarn, since `yarn.lock` defines this project's dependency versions.
