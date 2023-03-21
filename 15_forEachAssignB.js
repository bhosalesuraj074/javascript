function print() {
  console.error(
    "---------------------------------------------------------------------------------------------"
  );
}
class Employee {
  constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
    this.emp_id = emp_id;
    this.emp_name = emp_name;
    this.emp_dept = emp_dept;
    this.emp_salary = emp_salary;
    this.emp_company = emp_company;
  }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_vinayak = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahesh = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const emp = [
  emp_anil,
  emp_radha,
  emp_rishi,
  emp_sonali,
  emp_monika,
  emp_vinayak,
  emp_mahesh,
];
print();
console.log("Task: finding the employees who is working in the TCS");
emp.forEach((emps) => {
  if (emps.emp_company === "TCS") {
    console.log(`Emp Name: ${emps.emp_name} & Company: ${emps.emp_company}`);
  }
});
print();
console.log("Task : Finding the employee whose salary is >= 50000");
emp.forEach((emps) => {
  if (emps.emp_salary >= 50000) {
    //console.log(`Emp Name: ${emps.emp_name}, Company: ${emps.emp_company} & salary ${emps.emp_salary} `);
    console.log(emps);
  }
});

print();
console.log("Task : Finding the sum of salary of all employees ");
let salarySum = 0;
emp.forEach((emps) => {
  salarySum += emps.emp_salary;
});
console.log("Sum of the employees salary: " + salarySum);
print();
console.log("Average of the employees salary: ", salarySum / emp.length);
print();
console.log(
  "Task the employees who working in 'IT' and 'HR' department and salary >= 75000"
);
emp.forEach((emps) => {
  if (
    emps.emp_salary >= 75000 &&
    (emps.emp_dept === "IT" || emps.emp_dept === "HR")
  ) {
    console.log(emps);
  }
});
print();
