// Employee Salary
class Employee{
    name = ''
    status = '' 
    position = ''
    workingHour = 0
    totalSalary = 0

    constructor(name, status, position, workingHour, totalSalary){
        this.name = name,
        this.status = status, 
        this.position = position, 
        this.workingHour = workingHour,
        this.totalSalary = totalSalary
    }
}

class FullTimeEmployee extends Employee{
    salary = 100000
    overTimeSalary = 75000

    addWorkingHour(h){
        this.workingHour = h 
        this.countTotalSalary()
    }

    countTotalSalary(){
        let total = 0
        if(this.workingHour <= 6){
            total = this.workingHour * this.salary
        }else{
            total = (6*this.salary) + (this.workingHour - 6) * this.overTimeSalary
        }
        this.totalSalary = total
    }
}

let employee1 = new FullTimeEmployee('Defryan', 'FT', 'Lecture')
employee1.addWorkingHour(10)
console.log(employee1)