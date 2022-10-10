module.exports = function addDev(devs) {
  console.log(devs)
  const inquirer = require('inquirer');
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Developer name: ",
      }, {
        type: "input",
        name: "id",
        message: "Developer ID: ",
      }, {
        type: "input",
        name: "email",
        message: "Developer email: ",
      }, {
        type: "input",
        name: "github",
        message: "Github username",
      }
    ])
    .then ((answers) => {
      devs.push(answers)
      const menu = require("./menu");
      console.log(devs)
      menu(devs)
    })
}