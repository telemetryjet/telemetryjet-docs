---
title: "Common Options"
weight: 3
menu:
  cli:
    parent: "cli_guides"
---

There are several common option groups that can be provided to data sources of any types.

## Filtering
Data sources can be configured to filter data points that they process. If a filter is specified on a data source, it will only process input & output data sources with a dimension name matching a filter string.

TODO

## Caching
Some data sources that use hardware devices or internet connections may not always be available. The cache ensures that all data sent to a data source will eventually be delivered, by caching any data points sent to an offline data source in a temporary file. When the data source returns to an online status, the cache will be output.

TODO