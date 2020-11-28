---
title: "Install on Windows"
weight: 2
menu:
  cli:
    parent: "cli_overview"
    identifier: "cli_installation_windows"
    title: "Install on Windows"
---

## Recommended Installation

The recommended installation method on Windows is to download the latest installer from the [TelemetryJet Download Server](https://downloads.telemetryjet.com/builds/). The installer will set up everything required to run the TelemetryJet CLI.

#### 1. Download the Installer
Download and extract the latest Windows installer from the [TelemetryJet Download Server](https://downloads.telemetryjet.com/builds/cli/windows/). Installer files end in `.msi` on the download server.

#### 2. Installing the CLI
The installer will ask for an installation directory, which will hold the TelemetryJet CLI and your data. Most users should choose the default directory.

#### 3. Upgrading the CLI
To upgrade the CLI, download and run the latest installer and select the same installation directory as your previous installation. The installer will update the CLI to the latest version.

#### 3. Uninstalling the CLI
To uninstall, find and remove `TelemetryJet CLI` through the Windows Control Panel. The uninstaller will remove all configuration and data from your computer.

<br />

## Manual Installation

The CLI binaries are also available as static files for manual installation. Using this method, you are responsible for downloading the archive and adding the root folder to the path.

#### 1. Download an Archive

Download and extract the desired archive from the [TelemetryJet Download Server](https://downloads.telemetryjet.com/builds/cli/windows/). Archives end in `.zip` on the download server.

The static archive contains a single subfolder, `TelemetryJet CLI`. Copy this folder into an installation directory, for example, `C:\Program Files\`. 

#### 2. Add to PATH

Add the folder you copied from the previous step to your `PATH` environment variable. For example, if you copied the folder into Program Files, add `C:\Program Files\TelemetryJet CLI\`.

Once the folder is on the path, the executable within the installation folder, `jet`, is available in a shell anywhere.

#### 3. Test Installation

To test the installation, run `jet --version` from your shell. This should output the version of the CLI you have installed: 
<pre>
TelemetryJet CLI, version 0.1.0_build_1
</pre>

#### 4. Updating
To update a manual installation, download the new version and overwrite the folder containing the old version. Your configuration data will be preserved.