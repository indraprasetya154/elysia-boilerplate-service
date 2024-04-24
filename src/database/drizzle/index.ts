import { neon } from '@neondatabase/serverless'
import { drizzle } from 'drizzle-orm/neon-http'
import config from '../../config/config'

const dbConnection = async () => {
    try {
        const sql = neon(config.db.url!)
        const db = drizzle(sql)

        console.log('💚 Drizzle orm connected to neon serverless')
        return db
    } catch (error) {
        console.log('error connection db')
    }
}

export default dbConnection
