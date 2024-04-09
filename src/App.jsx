import { useState } from "react";

import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div></div>
      <h1 className="bg-blue-500 text-white p-4">Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
