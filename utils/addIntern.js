module.exports = function addDev(devs,interns) {
  console.log(devs)
  const inquirer = require('inquirer');
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Intern name: ",
      }, {
        type: "input",
        name: "id",
        message: "Intern ID: ",
      }, {
        type: "input",
        name: "email",
        message: "Intern email: ",
      }, {
        type: "input",
        name: "school",
        message: "Intern school: ",
      }
    ])
    .then ((answers) => {
      intern.push(answers)
      const menu = require("./menu");
      menu(devs,interns)
    })
}