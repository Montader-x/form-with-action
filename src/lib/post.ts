"use server";

import { createSafeActionClient } from "next-safe-action";
import { revalidatePath } from "next/cache";

import { db } from "./db";
import { formSchema } from "./form-schema";
import { wait } from "./utils";

const action = createSafeActionClient();

interface PostProps {
  title: string;
  content: string;
}

export const fetchPosts = async () => {
  const posts = await db.post.findMany();
  if (!posts) return null;

  return posts;
};

export const createPost = action(
  formSchema,
  async ({ title, content }: PostProps) => {
    try {
      const post = await db.post.create({
        data: {
          title,
          content,
        },
      });

      revalidatePath("/");

      return post;
    } catch (error) {
      console.log(error, "Error creating post");
    }
  }
);
