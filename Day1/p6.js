const fs = require("fs");

const data = " I am new Data";

const append = () => {
    fs.appendFile("./data.txt", data, (err) => {
        if (err) throw err;
        console.log("Data appended successfully");
    });
};

append();
