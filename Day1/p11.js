const fs = require("fs");

fs.rmdir("./mydir", (err) => {
    if (err) {
        console.log(`Error deleting directory: ${err}`);
        return;
    } else {
        console.log("Directory deleted successfully"); 
    }
});
