import "reflect-metadata";
import "./lib/env";
import "./config/database";

import routes from "./routes";
import express from "express";

const app = express();
const PORT = process.env.PORT || 3333;

app.use(express.json());
app.use(routes);

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
