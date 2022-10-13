const Employee = require("./Employee");

class Manager extends Employee {
  constructor (answers, role) {
    super(answers, role);
    this.name = answers.name;
    this.id = answers.id;
    this.email = answers.email;
    this.role = role;
    this.officeNo = answers.officeNo;
    this.projectName = answers.projectName;
  }
  getRole() {
    return this.role;
  }
}

module.exports = Manager;