import { useState } from "react";

import "./App.css";
import "./index.css";

function App() {
  const [color, setColor] = useState("Olive");

  return (
    <div
      className="w-full h-screen duration-400"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex-wrap justify-center inset-x-110 inset-y-170  bottom-12 px-2 ">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("red")}    //callback that calls setColor function and passes "red"
            className="outline-none px-4 py-1 rounded-2xl shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>

          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-2xl shadow-lg"
            style={{ backgroundColor: "green" }}
          >
            green
          </button>

          <button
            onClick={() => setColor("yellow")}
            className="outline-none px-4 py-1 rounded-2xl shadow-lg"
            style={{ backgroundColor: "yellow" }}
          >
            yellow
          </button>

          <button
            onClick={() => setColor("violet")}
            className="outline-none px-4 py-1 rounded-2xl shadow-lg"
            style={{ backgroundColor: "violet" }}
          >
            violet
          </button>

          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-2xl shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            blue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
