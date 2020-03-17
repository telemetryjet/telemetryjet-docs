---
title: "REST API"
---

The REST API is used to interact with all configuration in a TelemetryJet system. The REST API can also export summary statistics and historical values for data points.

### Postman Collection
The REST API is available as a Postman Collection here: [rest_api.postman_collection.json](https://raw.githubusercontent.com/telemetryjet/tjet-server/develop/rest_api.postman_collection.json)


To use the API, you must configure an environment with variable `server` set to the address of the TelemetryJet server, which is usually located at `http://localhost:9000`.

### Systems
Notes: Exactly one system will be active at each time. The database will always have at least one system. When changing the active system, this will update the server to control the new system, which will persist through a server restart. 

- `GET /systems` - List all the systems
    - Output: array of `System` objects
- `POST /system` - Create a new system
    - Input: `SystemInput` object
    - Output: `System` object
- `GET /system/:id` - Get a system object
    - Output: `System` object
- `DELETE /system/:id` - Delete a system object (Cannot be the active system)
- `PATCH /system/:id` - Update information for a system
    - Input: `SystemInput` object
    - Output: `System` object
- `POST /system/active/:id` - Set the active system. 
- `GET /system/active` - Get the active system information
    - Output: `System` object

### Devices
- Create Device Configuration
- Delete Device Configuration
- Modify Device Configuration
- Get Device Configuration
- Get Devices Configurations
- Get Raw Devices
- Get Raw Device
- Add Raw Device to Blacklist
- Remove Raw Device from Blacklist
- Get Blacklist
- Set Blacklist
- Clear Blacklist

### Dashboards
- Create Dashboard
- Delete Dashboard
- Modify Dashboard
- Get Dashboard
- Get Dashboards

### Data Points
- Get Data Points
    (filter by: timestamp range, id range, data frame range, etc)
- Get Data Point
    (by: id, name)
- Set Data Point
- Clear Data Point

### Data Frames
- Get Data Frames
- Get Data Frame