/* SPDX-FileCopyrightText: 2014-present Kriasoft */
/* SPDX-License-Identifier: MIT */

import getPort, { portNumbers } from "get-port";
import { listen } from "./index";

const port = await getPort({ port: 5180 });

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
