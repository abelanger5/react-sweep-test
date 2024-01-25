# README.md

## Server Configuration

To configure the port number for the server, set the `PORT` environment variable.
For Unix-based systems, you can use:

```
export PORT=5000
```

For Windows, use the following command:

```
set PORT=5000
```

If the `PORT` environment variable is not set, you will need to configure the server to use a default port number.

## Starting the Server

To start the server, use the following command:

```bash
yarn workspace server start
```

# Application Server

Node.js application server for web and mobile clients using [tRPC](https://trpc.io/) with HTTP and WebSocket transports.

## Scripts

- `yarn workspace server start` — Start the server in development mode.
- `yarn workspace server build` — Build the server for production.
- `yarn workspace server test` — Run tests.
