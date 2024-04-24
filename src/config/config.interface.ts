export interface Config {
    app: {
        name: string
        env: string
        port: number
        log: string
    }
    db: {
        host: string
        database: string
        username: string
        password: string
        url: string
    }
}
