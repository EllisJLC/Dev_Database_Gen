module.exports = function html_maker (employees) {
  const textGen = require("./htmlText");
  const fs = require('fs');
  let text = textGen(employees);
  console.log(text)
  fs.writeFile("index.html",text, (error) => {
    error ? console.log(error) : console.log("File Saved!")
  })
}