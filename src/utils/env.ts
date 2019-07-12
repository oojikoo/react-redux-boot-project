import * as dotenv from "dotenv";
import { resolve } from "path";

// dotenv.config();
dotenv.config({
    path:
        process.env.NODE_ENV === 'production'
            ? resolve(__dirname, "../../.env.production")
            : process.env.NODE_ENV === 'staging'
                ? resolve(__dirname, "../../.env.staging")
                : resolve(__dirname, "../../.env")
});


export const NODE_ENV = process.env.NODE_ENV;

