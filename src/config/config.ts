import { Config } from "./config.interface";
import env from "./config.schema"

const config: Config = {
    app: {
        name: env.APP_NAME,
        env: env.APP_ENV,
        log: env.APP_LOG,
        port: env.APP_PORT_HTTP,
    },
    db: {
        host: env.PG_HOST,
        username: env.PG_USERNAME,
        password: env.PG_PASSWORD,
        database: env.PG_DATABASE,
        url: env.PG_DATABASE_URL
    }
}

export default config