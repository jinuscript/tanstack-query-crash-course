import { useQuery } from "@tanstack/react-query";

const fetchPosts = async (id) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  if (!response.ok) throw new Error("Error fetching Posts");

  return await response.json();
};

function PostsById({ id }) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["posts", id],
    queryFn: () => fetchPosts(id),
  });

  if (isLoading) {
    return <p>로딩 중...</p>;
  }

  if (error) {
    return <p>에러 발생: {error.message}</p>;
  }

  return <>{data.title}</>;
}

export default PostsById;
