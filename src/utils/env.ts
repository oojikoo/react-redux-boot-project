import * as dotenv from "dotenv";

dotenv.config({
    path:
        process.env.NODE_ENV === 'production'
            ? '.env.production'
            : process.env.NODE_ENV === 'staging'
                ? '.env.staging'
                : '.env',
});

const {
    BASE_URL,
} = process.env;

export default {
    BASE_URL
};
