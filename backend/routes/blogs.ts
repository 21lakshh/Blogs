import { Hono } from 'hono'
import { verify } from 'hono/jwt'
import { BlogSchema } from '@laksh21/zodschemas'
import { UpdateBlogSchema } from '@laksh21/zodschemas'
import prisma from '../client/client'

export const blogRoute = new Hono<{
  Bindings: { // these are the bindings or the environmental variables 
    DATABASE_URL: string,
    JWT_SECRET: string
  },
  Variables: {
    userId: string
  }
}>();

blogRoute.onError((err, c) => {
  console.error('Unhandled Error:', err)
  return c.json({ msg: 'Internal Server Error', error: err.message }, 500)
})

blogRoute.use(async (c, next) => {

  const bearer = c.req.header('Authorization');
  if (!bearer) {
    return c.json({ msg: "Invalid user request Not authorized" }, 401);
  }
  const words = bearer.split(" ");
  const jwtToken = words[1];

  const decodedvalue = await verify(jwtToken, c.env.JWT_SECRET) as { id: string };
  if (!decodedvalue.id) {
    return c.json({ msg: "Invalid user request not authorized" }, 401);
  } else {
    c.set('userId', decodedvalue.id);
    await next();
  }
});

blogRoute.post('/add', async (c) => {

  const body = await c.req.json()

  const parsed = BlogSchema.safeParse(body);
  if (!parsed.success) {
    return c.json({ msg: "Invalid input" }, 400);
  }
  const { title, content } = parsed.data;
  const result = await prisma.post.create({
    data: {
      title,
      content,
      authorId: c.get('userId')
    },
    select: {
      title: true,
      content: true,
      authorId: true,
      id: true
    }
  })

  return c.json({
    msg: "Blog created successfully!",
    blog: result
  })
})

blogRoute.put('/', async (c) => {
    const Updatedbody = await c.req.json()

    const Updatedparsedinputs = UpdateBlogSchema.safeParse(Updatedbody)
    if (!Updatedparsedinputs.success) {
        return c.json({ msg: "Invalid input" }, 400);
    }

    const {id, title, content} = Updatedparsedinputs.data

  const result = await prisma.post.update({
    where: {id: id,
            authorId: c.get('userId')
    },
    data: {
        title,
        content
    },
    select: {
        title: true,
        content: true,
        id: true,
        authorId: true
    }
  })

  return c.json({
    msg: "Updated blog successfully",
    updated: result
  })
})

blogRoute.get('/bulk', async (c) => {
  console.log("Hitting bulk route...");
  
  const posts = await prisma.post.findMany({
    select: {
        id: true,
        title: true,
        content: true,
        author: {
           select: {
            name: true
           }
        }
    }
  });

  console.log("Fetched posts: ", posts);

  return c.json(posts);
})

blogRoute.get('/:id', async (c) => {
  const Blogid =  c.req.param('id')
  const result = await prisma.post.findFirst({
    where: {id: Blogid},
    select: {
        title: true,
        content: true,
        author: {
          select: {
            name: true
          }
        }
    }
  })

  return c.json(result)
})