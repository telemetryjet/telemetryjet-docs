---
title: "Install on MacOS"
weight: 3
menu:
  cli:
    parent: "cli_overview"
    identifier: "cli_installation_mac"
    title: "Install on MacOS"
---

## Recommended Installation
The TelemetryJet CLI uses [Homebrew](https://brew.sh/) to manage installations on MacOS. These steps assume that you have Homebrew installed on your computer.

### Custom Homebrew Tap
The CLI is distributed using a third-party Homebrew tap. Use the following command to install the tap:
<pre>
brew tap telemetryjet/tap
</pre>

### Installing
To install the CLI, run:
<pre>
brew install telemetryjet-cli
</pre>

### Upgrading
To upgrade to the latest version, use Homebrew's `update` and `upgrade` commands:
<pre>
brew update                   # Pull the list of outdated software
brew upgrade                  # upgrade all software installed with Homebrew
brew upgrade telemetryjet-cli # update just the telemetryjet-cli formula
</pre>

### Uninstalling
To uninstall the CLI, run:
<pre>
brew remove telemetryjet-cli
</pre>

<br />

## Manual Installation
The TelemetryJet CLI can also be manually installed on MacOS. See [Manual Installation](/cli/guides/installation/manual_install/) for detailed instructions on how to manually install the CLI.