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
  console.log("Task: find the TCS employees");
  const emps = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_vinayak,emp_mahesh];
  
  let tcsEmployees = emps.filter(emp =>emp.emp_company == "TCS")
  tcsEmployees.forEach(emp=>console.log(emp));
  print();
  console.log("Task: find the average of the salary Wipro's employees  ");
   let sum =0, cnt=0;
  let wiproSalary = emps.filter(emp =>{if(emp.emp_company== "Wipro"){
     cnt++;
    return sum += emp.emp_salary;
  }});

console.log("Average salary of the wipro employees: ",sum / cnt);
print();
console.log("Task: find the average of the salary Wipro's and Infy employees  ");
  sum =0, cnt=0;
  let wiproInfySalary = emps.filter(emp =>{if(emp.emp_company== "Wipro" || emp.emp_company== "Infy"){
     cnt++;
    return sum += emp.emp_salary;
  }});
  console.log("Average salary of the wipro & Infy employees: ",sum / cnt);
  print();