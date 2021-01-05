---
title: "Authentication"
weight: 1
menu:
  server:
    parent: "server_api"
    identifier: "server_authentication_api"
---

## Overview 
The REST API uses the OpenID specification to manage authentication. Each request must be sent with an `Authorization` header, containing an access token.

## Requesting a Token
To request a token, make a request to the access token endpoint with your credentials:

You will receive a token string.

## Authenticating Requests
All requests to the API should include the access token from the previous step in a header:

<pre>
Authorization: Bearer &lt;token string&gt;
</pre>

## Token Renewal
Access tokens currently cannot be renewed, and last 24 hours. When your token expires, you will need to request a new token.