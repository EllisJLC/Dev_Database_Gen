const Employee = require("./Employee");

class Manager extends Employee {
  constructor (answers, role) {
    super(answers, role);
    this.name = answers.name;
    this.id = answers.id;
    this.email = answers.email;
    this.role = role;
    this.officeNo = answers.officeNo;
  }
  getRole() {
    return this.role;
  }
}

module.exports = Manager;