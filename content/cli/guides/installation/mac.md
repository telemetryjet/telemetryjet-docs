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

#### 1. Add the TelemetryJet Homebrew Tap
The CLI is distributed using a third-party Homebrew tap. Use the following command to install the tap:
<pre>
brew tap telemetryjet/tap
</pre>

#### 2. Installing the CLI
To install the CLI, run:
<pre>
brew install telemetryjet-cli
</pre>

#### 3. Upgrading the CLI
To upgrade to the latest version, use Homebrew's `update` and `upgrade` commands:
<pre>
brew update                   # Pull the list of outdated software
brew upgrade                  # upgrade all software installed with Homebrew
brew upgrade telemetryjet-cli # update just the telemetryjet-cli formula
</pre>

#### 4. Uninstalling
To uninstall the CLI, run:
<pre>
brew remove telemetryjet-cli
</pre>


<br />
## Manual Installation

The CLI binaries are also available as static files for manual installation. Using this method, you are responsible for downloading the archive and adding the folder to your system path.

#### 1. Download an Archive

Download and extract the latest release for MacOS from the [TelemetryJet Download Server](https://downloads.telemetryjet.com/builds/cli/macos/). Copy the contents of the folder into an installation directory.

#### 2. Add to PATH

Add the installation directory from the previous step to your system path. This must be the folder that contains the `jet` executable.

#### 3. Updating
To update a manual installation, download the new version and overwrite the folder containing the old version. Your configuration data will be preserved.

#### 4. Uninstalling
To uninstall a manual installation of the CLI, remove the installation directory from your system path and delete the folder from your computer.