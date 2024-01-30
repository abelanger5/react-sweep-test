/* SPDX-FileCopyrightText: 2014-present Kriasoft */
/* SPDX-License-Identifier: MIT */

import getPort, { portNumbers } from "get-port";
import { listen } from "./index";
const preferredPorts = portNumbers(10001, {start: 1024, end: 65535});

const port = await getPort({ port: preferredPorts });

let dispose = listen(port);

if (import.meta.hot) {
  import.meta.hot.accept("/index.ts", () => {
    dispose(() => {
      import("./index").then(({ listen }) => {
        dispose = listen(port);
      });
    });
  });
}

function cleanUp() {
  dispose(() => process.exit());
}

process.on("SIGINT", cleanUp);
process.on("SIGTERM", cleanUp);
