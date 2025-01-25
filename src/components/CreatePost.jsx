import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

const createPost = async (newPost) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newPost),
  });

  return response.json();
};

export default function CreatePost() {
  const [title, setTitle] = useState("");

  const { mutate } = useMutation({ mutationFn: createPost });

  const handleSubmit = (e) => {
    e.preventDefault();

    // 데이터 뮤테이션
    mutate({ title, body: "새로운 게시글입니다" });
  };

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="제목"
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={handleSubmit}>게시글 만들기</button>
      </form>
    </>
  );
}
