import { resolve } from "path";
import dotenv from "dotenv";

const envfile = process.env.NODE_ENV === "test" ? ".env.test" : ".env"

dotenv.config({ path: resolve(__dirname, `../../${envfile}`) })
