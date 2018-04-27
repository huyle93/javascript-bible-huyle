const Employee = function () {
    let _username = "user";
    let _mailhost = "example.com";
    this.firstname = "";
    this.lastname = "";
    Object.defineProperty(this, "email", {
        get: function () {
            return `${_username}@${_mailhost}`;
        },
        set: function (addr) {
            var components = String(addr).split("@");
            _username = components[0] || "user";
            _mailhost = components[1] || "example.com";
        }
    });
};
const employee = new Employee();
console.log(employee.email);
employee.email = "amgilder@cs.unh.edu";
console.log(employee.email);
console.log(employee._username);