const inquirer = require('inquirer');
const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
  const engineer = {
    name: "steve",
    id: 140,
    email: "steve.stronge@gmail.com",
    github: "steveStronge"
  }
  let engineerTest = new Engineer (engineer,"Engineer");
  let github = engineerTest.github;
  let github2 = engineerTest.getGithub();
  let role = engineerTest.getRole();

  it('should return the Github username of the engineer', () => {
    expect(github).toEqual("steveStronge");
  })

  it('should return the Github username of the engineer', () => {
    expect(github2).toEqual("steveStronge");
  })

  it('should return the role of the engineer', () => {
    expect(role).toEqual("Engineer");
  })

})