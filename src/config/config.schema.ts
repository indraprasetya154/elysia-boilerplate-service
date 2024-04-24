import { z } from 'zod'

const envSchema = z.object({
  APP_NAME: z.string().min(1),
  APP_ENV: z.string().optional().default('local').refine(value => ['local', 'staging', 'production'].includes(value)),
  APP_PORT_HTTP: z.coerce.number(),
  APP_LOG: z.string().refine(value => ['info', 'error', 'warn', 'debug'].includes(value)),
  PG_HOST: z.string(),
  PG_USERNAME: z.string(),
  PG_PASSWORD: z.string(),
  PG_DATABASE: z.string(),
  PG_DATABASE_URL: z.string(),
});

const env = envSchema.parse(Bun.env)

export default env
