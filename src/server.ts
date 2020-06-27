import "reflect-metadata";
import "./lib/env";
import "./config/database";
import app from "./app";

const PORT = process.env.PORT || 3333;

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);