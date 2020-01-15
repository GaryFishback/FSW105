function Employee(name,jobTitle, salary, status){
    this.name = name
    this.jobTitle = jobTitle
    this.salary = salary
    this.status = status

}

var employees = [
    ["Dan", "Janitor", "35k", "fulltime"],
    ["Steve", "President", "100k", "fulltime"],
    ["Suzy", "Bookeeper", "45k" , "fulltime"]
]
var employee = []

for(i=0; i < employees.length ; ++i){
    employee.push = new Employee(employees[i])

}
console.log(employee.length)