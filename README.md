![Telemetryjet Documentation Website](/site-image.png)

This is the source code that runs the [TelemetryJet documentation website](https://docs.telemetryjet.com/). If you are looking for the repository for the TelemetryJet server, then head over to [telemetryjet/telemetryjet](https://github.com/telemetryjet/telemetryjet).

## How to Contribute

- If you have a request for expanded documentation or question that is not answered in the docs, please open an issue!
- For bug reports or feature requests for the TelemetryJet platform, please refer to the main [telemetryjet/telemetryjet](https://github.com/telemetryjet/telemetryjet) repository.
- PRs or issues are welcome for any expanded documentation, spelling/grammar issues, or factual errors.

---

## Developer's Guide

This repository uses Hugo to generate a static site from markdown files. The project also includes a custom theme, specifically designed for the documentation site. The theme sets up sidebar menus, headers and footers, etc.

The site is deployed using Netlify; The `master` branch is deployed to the production site and the `develop`
branch is deployed to the development site.

### Deploy Status

|Branch|Deploy Status|Target|
|------|-------------|------|
|`develop`|![Netlify Status](https://api.netlify.com/api/v1/badges/a63b2138-c1ff-4dd6-a46c-a0b880eabf29/deploy-status)|https://docs.dev.telemetryjet.com/|
|`master`|![Netlify Status](https://api.netlify.com/api/v1/badges/892ce996-8989-42d4-8773-22784354e48a/deploy-status)|https://docs.telemetryjet.com/|

### Development

Please install [Hugo](https://gohugo.io/).

To run a development server, use: 
```
hugo serve
```

To build and export the site to static HTML, use:
```
hugo
````

This will build the static site to the `public/` directory as HTML. These files should not be uploaded to git; they are ignored and will be built by Netlify during the automated deployment.