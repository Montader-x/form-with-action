import { PostForm } from "@/components/post-form";
import { Posts } from "@/components/posts";
import { Label } from "@/components/ui/label";

export default function Home() {
  return (
    <div className="w-full">
      <div className="mt-5 flex flex-col items-center justify-center p-4">
        <Label className="mb-3 text-lg">Create new post</Label>
        <PostForm />
        <div className="mt-10 flex flex-col items-center justify-center gap-2">
          <Label className="text-2xl">All Posts</Label>
          <Posts />
        </div>
      </div>
    </div>
  );
}
