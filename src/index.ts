import config from './config/config'
import http from './transports/http'
import talents from './modules/talents'
import dbConnection from './database/drizzle'

const main = async () => {
    dbConnection()
    const app = http
        .get('/', () => 'Hello Elysia')
        .use(talents)
        .listen(config.app.port)

    console.log(
        `🦊 ${config.app.name} is running at ${app.server?.hostname}:${app.server?.port}`
    )

    return app
}

export default main()
