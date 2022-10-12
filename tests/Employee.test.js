const inquirer = require('inquirer');
// const { describe } = require('node:test');
const Employee = require('../lib/Employee');

describe('Employee', () => {

  const employee = {
    name: "steve",
    id: 140,
    email: "steve.stronge@gmail.com",
  }
  let employeeTest = new Employee (employee,"Employee");
  let name = employeeTest.name;
  let id = employeeTest.id;
  let email = employeeTest.email;
  let name2 = employeeTest.getName();
  let id2 = employeeTest.getId();
  let email2 = employeeTest.getEmail();
  let role = employeeTest.getRole();

  it('should return the name of the employee', () => {
    expect(name).toEqual("steve");
  })

  it('should return the id of the employee', () => {
    expect(id).toEqual(140);
  })

  it('should return the email of the employee', () => {
    expect(email).toEqual("steve.stronge@gmail.com");
  })

  it('should return the name of the employee', () => {
    expect(name2).toEqual("steve");
  })

  it('should return the id of the employee', () => {
    expect(id2).toEqual(140);
  })

  it('should return the email of the employee', () => {
    expect(email2).toEqual("steve.stronge@gmail.com");
  })

  it('should return the role of the employee, as an employee', () => {
    expect(role).toEqual("Employee");
  })
})