import { useState } from "react";
import Posts from "./components/Posts";
import PostsById from "./components/PostsById";
import "./App.css";

function App() {
  const [isMounted, setIsMounted] = useState(false);

  return (
    <>
      <button onClick={() => setIsMounted((prev) => !prev)}>토글</button>
      {isMounted && <Posts />}

      <PostsById id={3} />
    </>
  );
}

export default App;
