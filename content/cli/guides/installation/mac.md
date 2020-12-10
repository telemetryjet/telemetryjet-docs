---
title: "Install on MacOS"
weight: 3
menu:
  cli:
    parent: "cli_overview"
    identifier: "cli_installation_mac"
    title: "Install on MacOS"
---

<div class="bp3-callout">The CLI is in early alpha. Need help getting started, or found a bug? <a href="https://github.com/telemetryjet/telemetryjet-cli/issues/new">Open an Issue</a> on our GitHub repository. We appreciate your patience and early support.
</div>
<br />

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
# Pull the list of outdated software
brew update

# upgrade all software installed with Homebrew
brew upgrade

# update just the telemetryjet-cli formula
brew upgrade telemetryjet-cli
</pre>

### Uninstalling
To uninstall the CLI, run:
<pre>
brew remove telemetryjet-cli
</pre>

<br />

## Manual Installation
The TelemetryJet CLI can also be manually installed on MacOS. See [Manual Installation](/cli/guides/installation/manual_install/) for detailed instructions on how to manually install the CLI.