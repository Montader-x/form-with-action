import { fetchPosts } from "@/lib/post";
import { PostCard } from "./post-card";

export const Posts = async () => {
  const posts = await fetchPosts();

  return (
    <div className="flex items-center justify-center">
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        {posts?.map((post) => (
          <PostCard
            key={post.id}
            title={post.title}
            content={post.content}
          />
        ))}
      </div>
      {!posts?.length && (
        <div className="mt-4 font-semibold">No Posts Currently</div>
      )}
    </div>
  );
};
