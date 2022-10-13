module.exports = function addIntern(employees) {
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
      const Intern = require("../lib/Intern");
      const menu = require("./menu");
      employees.push(new Intern(answers,"Intern"));
      menu(employees);
    })
}

