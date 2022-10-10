
module.exports = function menu (devs) {
  const inquirer = require('inquirer');
  const addDev = require('./addDev');
  const html_maker = require('./html_maker');
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'select',
        message: 'Please select an option to continue.',
        choices: ['Create new developer', 'Print HTML document'],
      },
    ])
    .then(answers => {
      if (answers.select === 'Create new developer') {
        addDev(devs)
      } else {
        html_maker(devs)
      }
    });
}