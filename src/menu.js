module.exports = function menu (employees) {
  const inquirer = require('inquirer');
  const addEngineer = require('./addEngineer');
  const addIntern = require('./addIntern')
  const html_maker = require('./html_maker');
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'select',
        message: 'Please select an option to continue.',
        choices: ['Add new engineer', 'Add new intern', 'Print HTML document'],
      },
    ])
    .then(answers => {
      if (answers.select === 'Add new engineer') {
        addEngineer(employees);
      } else if (answers.select === 'Add new intern'){
        addIntern(employees);
      } else {
        html_maker(employees);
      }
    });
}