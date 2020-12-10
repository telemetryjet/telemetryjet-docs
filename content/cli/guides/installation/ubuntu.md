---
title: "Install on Ubuntu"
weight: 4
menu:
  cli:
    parent: "cli_overview"
    identifier: "cli_installation_ubuntu"
    title: "Install on Ubuntu"
---

<div class="bp3-callout">The CLI is in early alpha. Need help getting started, or found a bug? <a href="https://github.com/telemetryjet/telemetryjet-cli/issues/new">Open an Issue</a> on our GitHub repository. We appreciate your patience and early support.
</div>
<br />

The TelemetryJet CLI uses [apt](https://en.wikipedia.org/wiki/APT_(software)) to manage installations on Linux-based environments. The CLI is distributed using our own third-party repository. These instructions are for Ubuntu and other amd64-based Linux environments.

### Import GPG Key
Releases on our repository are signed to verify authenticity. Run the following command to add the GPG key for the TelemetryJet releases:
<pre>
curl -fsSL https://downloads.telemetryjet.com/builds/cli/linux/amd64/repo/KEY.gpg | sudo apt-key add -
</pre>

### Add APT Repository
Add the TelemetryJet repository, which will allow apt to install TelemetryJet software from our download server:
<pre>
sudo sh -c "echo 'deb https://downloads.telemetryjet.com/builds/cli/linux/amd64/repo/ /' > /etc/apt/sources.list.d/telemetryjet.list"
sudo apt update
</pre>

### Installing
To install the CLI, run:
<pre>
sudo apt install telemetryjet-cli
</pre>

### Upgrading
To upgrade to the latest version, use apt's `update` and `upgrade` commands:
<pre>
# Pull the list of outdated software and update the CLI
sudo apt update
sudo apt upgrade telemetryjet-cli
</pre>

### Uninstalling
To uninstall the CLI, run:
<pre>
sudo apt remove telemetryjet-cli
</pre>

<br />

## Manual Installation
The TelemetryJet CLI can also be manually installed on Ubuntu. See [Manual Installation](/cli/guides/installation/manual_install/) for detailed instructions on how to manually install the CLI.