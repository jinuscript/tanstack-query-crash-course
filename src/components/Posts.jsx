import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!response.ok) throw new Error("Error fetching Posts");

  return await response.json();
};

function Posts() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 10000,
  });

  if (isLoading) {
    return <p>로딩 중...</p>;
  }

  if (error) {
    return <p>에러 발생: {error.message}</p>;
  }

  return (
    <>
      {data?.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </>
  );
}

export default Posts;
