// Dummy data
const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 }
];

// Display all employee
function displayAllEmployee() {
    const allEmployees = employees.map((emp, index) => {
        return `<p>${emp.id}: ${emp.name} - ${emp.department} - $${emp.salary}</p>`;
    }).join('');
    document.getElementById('employee-info').innerHTML = allEmployees;
}

// Total salaries
function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((total, emp) => {
        return total + emp.salary
    }, 0);
    document.getElementById('employee-info').innerHTML = `<p>Total salaries : ${totalSalaries}</p>`;
}

// HR employee
function displayHREmployee() {
    const hrEmployees = employees.filter(emp => emp.department === 'HR');
    const hrEmployeesDisplay = hrEmployees.map((emp) => {
        return `<p>${emp.id}: ${emp.name} - ${emp.department} - $${emp.salary}</p>`;
    }).join('');
    document.getElementById('employee-info').innerHTML = hrEmployeesDisplay;
}

// Find by ID
function findEmployeeById() {
    const empID = parseInt(prompt('Enter employee ID - '));
    console.log(empID);
    const foundEmployee = employees.find((emp) => {
        return emp.id == empID;
    });
    if (foundEmployee) {
        document.getElementById('employee-info').innerHTML = `<p>${foundEmployee.id}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    } else {
        document.getElementById('employee-info').innerHTML = `<p>Employee not found wiht ID : ${empID}</p>`;
    }
}