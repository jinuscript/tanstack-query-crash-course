import { useQuery } from "@tanstack/react-query";
import "./App.css";

const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!response.ok) throw new Error("Error fetching Posts");

  return await response.json();
};

function App() {
  const { data } = useQuery({ queryKey: ["posts"], queryFn: fetchPosts });

  return (
    <>
      {data?.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </>
  );
}

export default App;
