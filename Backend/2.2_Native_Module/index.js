const { isUtf8 } = require("buffer");
const fs = require("fs");
// fs.writeFile("Message.txt","Hello from nodejs",(err) =>{
//     if(err) throw err;
//     console.log("the file hae been saved");
// });

fs.readFile("./Message.txt","Utf8", (err, data) =>{
    if(err) throw err;
    console.log(data);
});
