export function kata() {
  const div = document.createElement("div");
  div.id = "square";
  const p = document.createElement("p");
  p.id = "text";
  p.textContent = "Hello World";

  div.appendChild(p);

  document.body.appendChild(div);
}
