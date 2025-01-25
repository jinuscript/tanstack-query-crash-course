import { useState } from "react";

export default function CreatePost() {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // 데이터 뮤테이션
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
