import z from "zod"

export const SingupSchema = z.object({
  email: z.string().email(),
  name: z.string(),
  password: z.string(),
})

export const SigninSchema = z.object({
    email: z.string().email(),
    password: z.string()
})

export const BlogSchema = z.object({
  title: z.string().min(1),
  content: z.string().min(1),
});

export const UpdateBlogSchema = z.object({
  id: z.string(),
  title: z.string().min(1),
  content: z.string().min(1),
});

export type SignupInput = z.infer<typeof SingupSchema>
export type SigninInput = z.infer<typeof SigninSchema>
export type BlogInput = z.infer<typeof BlogSchema>
export type UpdatedBlogInput = z.infer<typeof UpdateBlogSchema>
