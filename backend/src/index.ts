import { Hono } from 'hono'
import { userRoute } from '../routes/user';
import { blogRoute } from '../routes/blogs';
import { cors } from 'hono/cors';

export const app = new Hono()

app.use('/*', cors())
app.route('/api/v1/user', userRoute)
app.route('/api/v1/blog', blogRoute)


export default app