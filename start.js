import fs from "fs";

const katas = fs.readdirSync("./katas");

const empty = `export function kata() {
  // TODO!
}
`;

for (const kata of katas) {
  fs.writeFileSync(`./katas/${kata}/kata.js`, empty);
}
