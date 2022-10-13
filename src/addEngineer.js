module.exports = function addEngineer(employees) {
  const inquirer = require('inquirer');
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Engineer name: ",
      }, {
        type: "input",
        name: "id",
        message: "Engineer ID: ",
      }, {
        type: "input",
        name: "email",
        message: "Engineer email: ",
      }, {
        type: "input",
        name: "github",
        message: "Github username: ",
      }
    ])
    .then ((answers) => { 
      const Engineer = require("../lib/Engineer");
      const menu = require("./menu");
      employees.push(new Engineer(answers,"Engineer"));
      console.log("New engineer has been added.");
      menu(employees);
    })
}