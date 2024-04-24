import config from './config/config'
import http from './transports/http'
import talents from './modules/talents'

const main = async () => {
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
