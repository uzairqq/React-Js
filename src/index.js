import React from "react";
import ReactDOM from "react-dom/client";

const element = document.getElementById("root");

const root = ReactDOM.createRoot(element);

const App = () => {
  const type = "number";
  const maxVal = 5;
  const min = -4;

  return <input type={type} max={maxVal} min={min} />;
};

root.render(<App />);
