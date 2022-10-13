const inquirer = require('inquirer');
const Intern = require('../lib/Intern');

describe('Intern', () => {
  const intern = {
    name: "steve",
    id: 140,
    email: "steve.stronge@gmail.com",
    school: "University of Toronto"
  }
  let internTest = new Intern (intern,"Intern");
  let school = internTest.school;
  let school2 = internTest.getSchool();
  let role = internTest.getRole();

  it('should return the school of the intern', () => {
    expect(school).toEqual("University of Toronto");
  })

  it('should return the school of the intern', () => {
    expect(school2).toEqual("University of Toronto");
  })

  it('should return the role of the intern', () => {
    expect(role).toEqual("Intern");
  })

})