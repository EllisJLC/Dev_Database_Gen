module.exports = function init() {
  const inquirer = require('inquirer');
  const menu = require('./menu');
  let employees = [];
  inquirer
    .prompt([
      {
        type: "input",
        name: "projectName",
        message: "Please input the project name: "
      }, {
        type: "input",
        name: "name",
        message: "Manager's name: ",
      }, {
        type: "input",
        name: "id",
        message: "Manager's employee ID: ",
      }, {
        type: "input",
        name: "email",
        message: "Manager's email: ",
      }, {
        type: "input",
        name: "officeNo",
        message: "Manager's office number: "
      }
    ]).then (answers => {
      const Manager = require('../lib/Manager');
      employees.push(new Manager(answers, "manager"));
      menu(employees);
    })
}