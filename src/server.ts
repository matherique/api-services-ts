import "reflect-metadata";
import "./lib/env";

import { createTypeormConnection } from "./config/database";
import app from "./app";

(async () => {
  await createTypeormConnection();
  const PORT = process.env.PORT || 3333;

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
  });
})();
