// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email, role) {
    this.id = id;
    this.name = name;
    this.role = role;
    this.email = email;
}

getName() {
    console.log(this.name);
    return `${this.name}`;
}

getID() {
    console.log(this.id);
    return `${this.name}`;
}

getEmail() {
    console.log(this.email);
    return `${this.email}`;
}

getRole() {
    console.log ("Employee");
    return `Employee`;
}

printInfo() {
    console.log(`This Employee has ${this.role}`)
}

}

module.exports = Employee;

