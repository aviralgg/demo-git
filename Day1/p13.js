const fs = require("fs/promises");

const write = async () => {
  const data = await fs.writeFile("./data.txt", "hello world", (err) => {
    if (err) console.log("Error writing data to file");
    else console.log("File updated successfully");
  });
};

write();
