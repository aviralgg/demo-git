const fs = require("fs");


// This function is asynchronous in nature
const read = () => {
  fs.readFile("./data.txt", "utf8", (err, data) => {

    if (err) console.log(err);
    else console.log(data);

  });
};

console.log("I am before reading");
read();
console.log("I am after reading");