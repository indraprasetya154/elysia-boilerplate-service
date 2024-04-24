import Elysia from "elysia";

export default new Elysia({ prefix: '/talents'})
    .get('/', () => 'Hello Get Talents')