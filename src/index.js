import React from "react";
import ReactDOM from "react-dom/client";

const element = document.getElementById("root");

const root = ReactDOM.createRoot(element);

const App = () => {
  let message = "Bye There";
  if (Math.random() > 0.5) {
    message = "Hi There";
  }
  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
};

root.render(<App />);
