// query utilities:
import {
  getByLabelText,
  getByText,
  getByTestId,
  queryByTestId,
  // Tip: all queries are also exposed on an object
  // called "queries" which you could import here as well
  waitFor,
} from "@testing-library/dom";

import { kata } from "../kata.js";

function getExampleDOM() {
  // This is just a raw example of setting up some DOM
  // that we can interact with. Swap this with your UI
  // framework of choice 😉
  const div = document.createElement("div");
  div.innerHTML = `
      <label for="username">Username</label>
      <input id="username" />
      <button>Print Username</button>
    `;
  const button = div.querySelector("button");
  const input = div.querySelector("input");
  button.addEventListener("click", () => {
    // let's pretend this is making a server request, so it's async
    // (you'd want to mock this imaginary request in your unit tests)...
    setTimeout(() => {
      const printedUsernameContainer = document.createElement("div");
      printedUsernameContainer.innerHTML = `
          <div data-testid="printed-username">${input.value}</div>
        `;
      div.appendChild(printedUsernameContainer);
    }, Math.floor(Math.random() * 200));
  });
  return div;
}

test("has hello world string", async () => {
  const root = kata();

  getByText(root, "Hello World");
});

test("structure is ok", async () => {
  const root = kata();

  expect(root).toMatchSnapshot();
});
