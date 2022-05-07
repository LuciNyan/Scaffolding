import React from "react";

export default function App() {
  const haha = [1,2]
  const a = haha.filter(x => x === 1)
  return <div className="App">hello world button { a } </div>;
}
