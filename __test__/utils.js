import fs from "fs";

export function readRelativeIndex(dirname) {
  const html = fs.readFileSync(dirname + "/../index.html", "utf8");

  const body = html.split(/<body .*>/)[1];

  const bodyContent = body.split("</body>")[0];

  const data = bodyContent.replace(/<script .*>.*<\/script>/, "");

  return data;
}
