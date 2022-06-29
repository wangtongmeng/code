const fs = require("fs").promises;
const path = require("path");
const readdirSorted = require("readdir-sorted");

(async () => {
  const data = await fs.readdir(path.resolve(__dirname));
  console.log("data1", data.sort());
})();
