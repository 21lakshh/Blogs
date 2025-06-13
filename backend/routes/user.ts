import { Hono } from 'hono'
import {sign} from 'hono/jwt'
import bcrypt from "bcryptjs"
import { SigninSchema } from '@laksh21/zodschemas'
import { SingupSchema } from '@laksh21/zodschemas'
import prisma from '../client/client'

export const userRoute = new Hono<{
  Bindings: { // these are the bindings or the environmental variables 
    DATABASE_URL: string,
    JWT_SECRET: string
  },
  Variables: {
    userId: string
  }
}>();

userRoute.onError((err, c) => {
  console.error('Unhandled Error:', err)
  return c.json({ msg: 'Internal Server Error', error: err.message }, 500)
})

userRoute.post('/signup', async (c) => {

  const body = await c.req.json()
  const parsedinputs = SingupSchema.safeParse(body)

  if (!parsedinputs.success) {
    return c.json({ msg: "Invalid Inputs please check again" }, 404)
  }
  const { email, name, password } = parsedinputs.data
  const hashedPassword = await bcrypt.hash(password, 10)

  const result = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      name
    },
    select: {
      email: true,
      name: true,
      id: true
    }
  })

  const jwtToken = await sign({ id: result.id }, c.env.JWT_SECRET)

  return c.json({
    msg: "Signup done successfully!",
    user: result,
    token: jwtToken
  })
})

userRoute.post('/signin', async (c) => {

  const body = await c.req.json()
  const parsedinputs = SigninSchema.safeParse(body)

  if (!parsedinputs.success) {
    return c.json({ msg: "Invalid input format" }, 404)
  }

  const { email, password } = parsedinputs.data

  const user = await prisma.user.findUnique({
    where: { email: email },
    select: {
      password: true,
      id: true,
      name: true,
      email: true
    }
  })

  if (!user) {
    return c.json({ msg: "User not found please use a valid mail" }, 404)
  }

  const validpassword = await bcrypt.compare(password, user.password)

  if (!validpassword) {
    return c.json({ msg: "Invalid password please check and try again" }, 404)
  }

  const jwtToken = await sign({ id: user.id }, c.env.JWT_SECRET)
  return c.json({
    msg: "Login Successful!",
    token: jwtToken,
    user: {
      id: user.id,
      name: user.name,
      email: user.email
    }
  }, 200)
})