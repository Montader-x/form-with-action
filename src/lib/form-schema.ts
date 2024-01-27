import { z } from "zod";

export const formSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  content: z.string().min(5, {
    message: "Content must be at least 5 characters.",
  }),
});
