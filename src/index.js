import React from "react";
import ReactDOM from "react-dom/client";

const element = document.getElementById("root");

const root = ReactDOM.createRoot(element);

const App = () => {
  return (
    <div>
      <h1>hello world</h1>
    </div>
  );
};

root.render(<App />);
