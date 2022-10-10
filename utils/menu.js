
module.exports = function menu (devs, interns) {
  const inquirer = require('inquirer');
  const addDev = require('./addDev');
  const addIntern = require('./addIntern')
  const html_maker = require('./html_maker');
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'select',
        message: 'Please select an option to continue.',
        choices: ['Add new developer', 'Add new intern', 'Print HTML document'],
      },
    ])
    .then(answers => {
      if (answers.select === 'Add new developer') {
        addDev(devs, interns);
      } else if (answers.select === 'Add new intern'){
        addIntern(devs,interns);
      } else {
        html_maker(devs, interns);
      }
    });
}