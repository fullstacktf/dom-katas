import { getByText, prettyDOM } from "@testing-library/dom";
import { readRelativeIndex } from "../../../__test__/utils.js";

import { kata } from "../kata.js";

const html = readRelativeIndex(__dirname);

test("titles has class title", async () => {
  const titles = [
    "4 Things You Should Avoid When The Schedule's Slipping",
    "PrivateGPT: A Free ChatGPT Alternative to Interact with Your Documents Offline",
    "Different Ways of Viewing the Goldbach Conjecture",
    "Breaking Barriers: Antelope IBC Revolutionizes Inter-Blockchain Communication on WAX",
    "Ten Years of AI in Review",
  ];

  document.body.innerHTML = html;
  kata();

  for (const title of titles) {
    const element = getByText(document.body, title);

    expect(element.classList.contains("title")).toBe(true);
  }
});

test("structure is ok", async () => {
  document.body.innerHTML = html;
  kata();

  expect(document.body).toMatchSnapshot();
});
