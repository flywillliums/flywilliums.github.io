//problem 1
const company = {
    companyName: 'Tech Stars',
    website: 'www.techstars.com',
    employees: [
        bill = {
            name: 'Bill',
            department: 'HR',
            designation: 'Executive',
            salary: 21200,
            raise: false,
        },
        mary = {
            name: 'Mary',
            department: 'Finance',
            designation: 'Trainee',
            salary: 18500,
            raise: true,
        },
        sam = {
            name: 'Sam',
            department: 'Tech',
            designation: 'Manager',
            salary: 40000,
            raise: true,
        }
    ]
}

console.log('Problem 1', sam, mary, bill)

//problem 2
console.log('Problem 2', company)

//problem 3
anna = {
    name: 'Anna',
    department: 'Tech',
    designation: 'Executive',
    salary: 25600,
    raise: false,
};
company.employees.push(anna);
console.log('Problem 3', company)

//problem 4
var sum = 0;
for(var i = 0; i < company.employees.length; i++){
    sum += company.employees[i].salary;
}
console.log('Problem 4', sum);

//problem 5
for(var i = 0; i < company.employees.length; i++){
    if(company.employees[i].raise){
        company.employees[i].salary *= 1.1;
        company.employees[i].raise = false;
    }
}

console.log('Problem 5', company);

//problem 6
const WFH =  ['Anna', 'Sam'];
for(var i = 0; i < company.employees.length; i++){
    company.employees[i].wfh = WFH.includes(company.employees[i].name)
}
console.log('Problem 6', company);