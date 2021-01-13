---
title: "NMEA-0183 File Input"
menu:
  cli:
    parent: "cli_input_data_sources"
    title: "NMEA-0183 File"
---

## Overview
`nmea-0183-file-input` reads a text log file containing NMEA 0183 stream data. Data points will be written as fast as the file can be read. Each data point will have a timestamp from the GPS time recorded in the file.
## Options
- `filename` *(Required)*: A string path to a file. If this is a relative path, it will be evaluated according to the directory Jet is run from.

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

## Example Definition
<pre>
{
  "id": "nmea-0183-file-input-example",
  "type": "nmea-0183-file-input",
  "option": {
    "filename": "NMEA_0183_log.txt"
  }
}
</pre>
