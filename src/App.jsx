import { useState } from "react";
import Posts from "./components/Posts";
import "./App.css";

function App() {
  const [isMounted, setIsMounted] = useState(false);

  return (
    <>
      <button onClick={() => setIsMounted((prev) => !prev)}>토글</button>
      {isMounted && <Posts />}
    </>
  );
}

export default App;
