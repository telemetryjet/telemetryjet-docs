---
title: "REST API"
weight: 3
menu:
  server:
    parent: "server_api"
    title: "Rest API"
---

The REST API is used to interact with all configuration in a TelemetryJet system. The REST API can also export summary statistics and historical values for data points.

### Postman Collection
The REST API is available as a Postman Collection here: [rest_api.postman_collection.json](https://raw.githubusercontent.com/telemetryjet/tjet-server/develop/rest_api.postman_collection.json)


To use the API, you must configure an environment with variable `server` set to the address of the TelemetryJet server, which is usually located at `http://localhost:9000`.

## Authentication

### Cloud Server
The Cloud Server uses an OpenAuth password grant to provide access to the API.


### Local Server
The local server does not require authentication via the API. All endpoints for the local server are public.


## Cloud-Only API

- Create Account
- Log Out

- OpenAuth Get Token
- OpenAuth Refresh Token
- OpenAuth Get User Information

## Endpoints

### Informational

- Healthcheck: `GET /v1/info/health`
- List Supported Protocols: `GET /v1/info/protocols`

### Systems

- List All Systems: `GET /v1/systems`
- Create System: `POST /v1/system`
- Get System: `GET /v1/system/:id`
- Delete System: `DELETE /v1/system/:id`
- Modify System: `PATCH /v1/system/:id`
- Set Active System: `POST /v1/system/active`
- Get Active System: `GET /v1/system/active`
- Get System State: `GET /v1/system/state`
- Set System State: `POST /v1/system/state`

### Devices
- Create Device: `POST /v1/device`
- Delete Device: `DELETE /v1/device/:id`
- Modify Device: `PUT /v1/device/:id`
- Get Device: `GET /v1/device/:id`
- List All Devices: `GET /v1/devices`

### Dashboards
- Create Dashboard: `POST /v1/dashboard`
- Delete Dashboard: `DELETE /v1/dashboard/:id`
- Modify Dashboard: `PUT /v1/dashboard/:id`
- Get Dashboard: `GET /v1/dashboard/:id`
- List All Dashboards: `GET /v1/dashboards`

### Logs

- Get Log: `GET /v1/log/:id`
- Get All Logs: `GET /v1/logs`
- Delete Log: `DELETE /v1/log/:id`
- Delete All Logs `DELETE /v1/logs`

### Data Points
- Create Data Point: `POST /v1/data_point`
- Modify Data Point: `PUT /v1/data_point/:id`
- Delete Data Point: `DELETE /v1/data_point/:id`
- Delete All Data Points: `DELETE /v1/data_points`
- Get Data Point: `GET /v1/data_point/:id`
- Get Data Points: `GET /v1/data_points`

### Data Frames
- Get Data Frame: `GET /v1/data_frame/:id`
- Get Data Frames: `GET /v1/data_frames`