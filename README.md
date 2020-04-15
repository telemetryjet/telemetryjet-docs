# TelemetryJet Documentation

This repository contains code and content for the TelemetryJet documentation website. The master branch of the repository is automatically deployed to https://docs.telemetryjet.com/ via Netlify. 

## How to Contribute

- If you have a request for expanded documentation or question that is not answered in the docs, please open an issue!
- For bug reports or feature requests for the TelemetryJet platform, please refer to the main `tjet-server` repository.
- PRs or issues are welcome for any expanded documentation, spelling/grammar issues, or factual errors.

## Getting Started

The documentation site uses [Hugo](https://gohugo.io/) to generate static HTML from markdown files. These instructions assume that you have [installed Hugo](https://gohugo.io/getting-started/quick-start/) and are familiar with its basic usage.

### Run Dev Server
To run a development server, use `hugo server -D`. This will serve and live update all pages.

### Build Documentation
To build the documentation locally, use `hugo`. This will build the documentation into the `public` folder. 

### Add or Update Pages
The `content/` folder contains markdown files which are rendered into the documentation. Each directory represents a documentation section. Markdown files within a directory will be rendered as pages within that section. New pages can be added by creating a `.md` file in the proper section subdirectory.

To get a new page to show in the sidebar menu, add a title and weight to the page front matter at the top of the `.md` file:

```
---
title: "Example Page"
weight: 1
---
```