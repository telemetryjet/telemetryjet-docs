---
title: "Installation"
weight: 1
menu:
  arduino_sdk:
    parent: "arduino_sdk_guides"
    identifier: "arduino_sdk_installation"
    title: "Installation"
---

The TelemetryJet Arduino SDK can be installed in several ways. Our preferred method is via the Arduino Library
Manager, which will allow you to easily update the SDK when we release new features.

## 1. Library Manager

If you are using the Arduino IDE, the TelemetryJet Arduino SDK is available on the Library Manager.

Navigate to **Tools** > **Manage Libraries...**, and search for `TelemetryJet` or `telemetryjet-arduino-sdk`.
Select the latest version, and click **Install**. 

After a short download, the library is now ready to include in your project! 

### 1.1 Updating
To update the SDK version, repeat the instructions above to install the library. Select the newest version, and click **Install**. The Arduino Library Manager will update the library to the latest version.


## 2. Manual Installation

You can also download the Arduino SDK directly from the Git repository, and manually include the .ZIP library into your project. 

Navigate to [github.com/telemetryjet/tjet-arduino-sdk](https://github.com/telemetryjet/tjet-arduino-sdk) and download a .ZIP archive of the latest release or the version you are targetting.

In the Arduino IDE, navigate to **Sketch** > **Include Library** > **Add .ZIP Library...**. Your library is now ready to use. 

### 2.1 Updating
With a manual installation, you will need to replace the SDK each time an update is released. When a new version of the SDK is released, follow the manual installation steps again with the new file. 

## Usage

To start using the library in your project, add the following include statement to your source code:

<pre>
#include &lt;TelemetryJet.h&gt;
</pre>