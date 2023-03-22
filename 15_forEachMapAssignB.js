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

  let mapEmployees = new Map();
  mapEmployees.set(22,emp_anil);
  mapEmployees.set(33,emp_radha);
  mapEmployees.set(44,emp_rishi);
  mapEmployees.set(55,emp_sonali);
  mapEmployees.set(66,emp_monika);
  mapEmployees.set(77,emp_vinayak);
  mapEmployees.set(88,emp_mahesh);

  mapEmployees.forEach((value, key)=>
 {
     console.log(`${key} ===> Name: ${value.emp_name}, Department: ${value.emp_dept}, Company: ${value.emp_company}, & Salary: ${value.emp_salary}`);
     //console.log(key , value);
 });
