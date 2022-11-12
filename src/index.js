import React from "react";
import ReactDOM from "react-dom";
import { faker } from "@faker-js/faker";

const App = () => {
  return (
    <div className="ui container comments">
      <div class="comment">
        <a class="avatar">
          <img alt="avatar" src={faker.image.image()} />
        </a>
        <div class="content">
          <a href="/" class="author">
            Matt
          </a>
          <div class="metadata">
            <span class="date">Today at 5:42PM</span>
          </div>
          <div class="text">Dude, this is awesome. Thanks so much</div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
