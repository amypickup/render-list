import React, { useState } from "react";
import Window from "./components/Window";
import WindowMemo from "./components/WindowMemo";
import WindowMemoExample from "./components/WindowMemoExample";
import Paginate from "./components/Paginate";
import LargeList from "./components/LargeList";
import ViewPort from "./components/ViewPort";
import "./App.css";

const listTypeButtons = [
  { text: "LargeList" },
  { text: "Window" },
  { text: "WindowMemo" },
  { text: "WindowMemoExample" },
  { text: "Paginate" },
  { text: "ViewPort" },
];

function App() {
  const [view, setView] = useState("WindowMemoExample");

  return (
    <div className="App">
      <header className="App-header">
        <div className="btn-group">
          {listTypeButtons.map((listType, index) => (
            <button
              key={index}
              onClick={() => setView(listType.text)}
              className="button"
            >
              {listType.text}
            </button>
          ))}
        </div>
      </header>
      {view === "LargeList" ? <LargeList /> : null}
      {view === "ViewPort" ? <ViewPort /> : null}
      {view === "Paginate" ? <Paginate /> : null}
      {view === "Window" ? <Window /> : null}
      {view === "WindowMemo" ? <WindowMemo /> : null}
      {view === "WindowMemoExample" ? <WindowMemoExample /> : null}
    </div>
  );
}

export default App;
