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
  
  print();
  const emps = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_vinayak,emp_mahesh];

  console.log("Task : Sorting the employee array by id");
  let employeeId =emps.sort((emp1,emp2) => emp1.emp_id - emp2.emp_id) ;
  employeeId.forEach(id => console.log(`Emp Id: ${id.emp_id}, Emp Name: ${id.emp_name}, & Emp Dept: ${id.emp_dept}`));
  print();

  console.log("Task : Sorting the employee array by department");
  let empDept = emps.sort((emp1,emp2) => emp1.emp_dept.localeCompare(emp2.emp_dept));
  empDept.forEach(id => console.log(`Emp Id: ${id.emp_id}, Emp Name: ${id.emp_name}, & Emp Dept: ${id.emp_dept}`));
  
  print();
  console.log("Task : Sorting the employee array by salary");
  let salary =emps.sort((emp1,emp2) => emp1.emp_salary - emp2.emp_salary) ;
  salary.forEach(id => console.log(`Emp Id: ${id.emp_id}, Emp Name: ${id.emp_name},  Emp Dept: ${id.emp_dept}, & Emp Salary: ${id.emp_salary}`));

  