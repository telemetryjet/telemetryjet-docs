---
title: "MPack.h"
weight: 2
menu:
  arduino_sdk:
    parent: "arduino_sdk_api"
---

TelemetryJet uses MessagePack as the underlying protocol for encoding/decoding data for transmission over the serial connection. The SDK comes bundled with MPack: An open-source C implementation of the MessagePack specification.

If you wish to use MPack directly for advanced usage, you can include and use MPack.h.

Full documentation is available for MPack and MessagePack at:
- [The MPack Github Repository](https://github.com/ludocode/mpack)
- [The MPack Documentation Site](http://ludocode.github.io/mpack/index.html)
- [MessagePack Homepage](https://msgpack.org/index.html)