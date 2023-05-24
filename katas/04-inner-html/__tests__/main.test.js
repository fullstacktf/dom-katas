import { getByText, prettyDOM } from "@testing-library/dom";
import { readRelativeIndex } from "../../../__test__/utils.js";

import { kata } from "../kata.js";

const html = readRelativeIndex(__dirname);

test("structure is ok", async () => {
  document.body.innerHTML = html;
  kata();

  expect(document.body).toMatchSnapshot();
});
