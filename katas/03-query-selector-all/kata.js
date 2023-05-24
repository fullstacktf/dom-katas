export function kata() {
  const titles = document.querySelectorAll("section > h2");

  for (const title of titles) {
    title.classList.add("title");
  }
}
