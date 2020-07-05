import routes from "./routes";
import express from "express";

import { auth, logger } from "./middleware";

const app = express();

app.use(express.json());
app.use(logger);
app.use(auth);
app.use(routes);

export default app;
