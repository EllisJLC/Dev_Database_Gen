const inquirer = require('inquirer');
const Manager = require('../lib/manager');

describe('Intern', () => {
  const manager = {
    name: "steve",
    id: 140,
    email: "steve.stronge@gmail.com",
    officeNo: 512
  }
  let managerTest = new Manager (manager,"Manager");
  let school = managerTest.officeNo;
  let role = managerTest.getRole();

  it('should return the school of the intern', () => {
    expect(school).toEqual(512);
  })

  it('should return the role of the intern', () => {
    expect(role).toEqual("Manager");
  })

})