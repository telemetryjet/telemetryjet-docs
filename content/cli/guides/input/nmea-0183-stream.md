---
title: "NMEA-0183 Stream"
menu:
  cli:
    parent: "cli_input_data_sources"
---

## Overview
`nmea-0183-file-stream` reads a NMEA-0183 GPS stream from a serial device such as a [USB GPS Module](https://www.amazon.com/s?k=usb+gps+module&ref=nb_sb_noss_2).

Data points will be written every time data is received from the device. Most USB GPS units update at 1Hz. Each data point will have a timestamp from the local computer time when the GPS data was received.

## Options

## Dimensions

The NMEA 0183 parser will output data points for the following dimensions:
- almanac.averageSNR
- almanac.minSNR
- almanac.maxSNR
- status
- type
- quality
- dilution
- horizontalDilution
- verticalDilution
- altitude
- latitude
- longitude
- speed
- travelAngle
- trackingSatellites
- visibleSatellites
- locked
- horizontalAccuracy
- verticalAccuracy
- hasEstimate
