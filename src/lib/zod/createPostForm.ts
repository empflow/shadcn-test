import { z } from "zod";

const createPostFormSchema = z.object({
  title: z.string(),
  content: z.string(),
});

export type CreatePostFormSchema = z.infer<typeof createPostFormSchema>;
export default createPostFormSchema;
