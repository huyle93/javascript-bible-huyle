const employee = {
    firstname: "Mike",
    lastname: "Gildersleeve",
    username: "user",
    mailhost: "example.com",
    get email() {
        return `${this.username}@${this.mailhost}`;
    },
    set email(addr) {
        var components = String(addr).split("@");
        this.username = components[0] || "user";
        this.mailhost = components[1] || "example.com";
    }
}
console.log(employee.email);
employee.email = "amgilder@cs.unh.edu";
console.log(employee.email);
console.log(employee.username);