 
var employees = []

function Employee(name,jobTitle, salary, status){
    this.name = name
    this.jobTitle = jobTitle
    this.salary = salary
    this.status = status
    this.changeStatus = function(statusChange){
        this.status = statusChange
    }
    this.printEmployeeForm = function(person){
        console.log("Name: " + person.name + " Job Title: " + person.jobTitle + " Salary: $" + person.salary + " Satus: " + person.status)
    }
}
var employee1 = new Employee("Dan", "Janitor", "35k", "Fulltime")
var employee2 = new Employee("Steve", "President", "100k", "Fulltime")
var employee3 = new Employee("Suzy", "Bookeeper", "45k" , "Fulltime")
//Override the status attribute of one of them to either "Part Time" or "Contract"
employee2.changeStatus("Part-Time")
employee1.printEmployeeForm(employee1)
employee2.printEmployeeForm(employee2)
employee3.printEmployeeForm(employee3)

function addEmployee(passEmployee){
    employees.push(passEmployee)
}
addEmployee(employee1)
addEmployee(employee2)
addEmployee(employee3)
console.log(employees)