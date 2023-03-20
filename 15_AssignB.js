class Employee
{
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company)
    {
        this.emp_id = emp_id;
        this.emp_name= emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary =emp_salary;
        this.emp_company= emp_company;
    }

}
const emp_anil =new Employee(22,"Anil","IT",50000,"TCS");
const emp_radha =new Employee(33,"Radha","HR", 74000,"Wipro");
const emp_rishi =new Employee(55,"Rishi","Finance", 47000,"TCS");
const emp_sonali =new Employee(66,"Sonali","Finance",45000 ,"Infy");
const emp_monika =new Employee(77,"Monika","IT", 40000,"Wipro");
const emp_vinayak =new Employee(88,"Vinayak","IT", 75000,"TCS"); 
const emp_mahesh =new Employee(99,"Mahesh","HR", 85000,"Infy");

const emp =[emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_vinayak, emp_mahesh];
console.error("---------------------------------------------------------------------------------------------");
console.error("finding the employees who is working in the TCS");
for (const  emps of emp) {     
 
     if(emps.emp_company === "TCS")
     {
         console.log(`Emp Name: ${emps.emp_name} & Company: ${emps.emp_company}`);
     }
}
console.error("---------------------------------------------------------------------------------------------");
console.error("Finding the finance department employee");
for (const  emps of emp) {     
  
        if(emps.emp_dept === "Finance")
        {
            console.log(`Emp Name: ${emps.emp_name} & Company: ${emps.emp_company}`);
        }
       
   }
console.error("---------------------------------------------------------------------------------------------");
console.error("Task: Finding the employee whose name start with 'R' ");
for (const  emps of emp) {     

        if(emps.emp_name.startsWith("R"))
        {
            console.log(`Emp Name: ${emps.emp_name} & Company: ${emps.emp_company}`);
        }
       
   }

console.error("---------------------------------------------------------------------------------------------");
console.error("Task: Finding the employee whose salary > 75000");
   for (const  emps of emp) {     
        if(emps.emp_salary > 75000)
        {
            console.log(`Emp Name: ${emps.emp_name}, Company: ${emps.emp_company} & salary ${emps.emp_salary} `);
        }
   }
console.error("---------------------------------------------------------------------------------------------");
console.error("Task : Finding the employee whose salary is > 50000 & working in IT department");
   for (const  emps of emp) {     
        if(emps.emp_salary >= 50000 && emps.emp_dept === "IT")
        {
            //console.log(`Emp Name: ${emps.emp_name}, Company: ${emps.emp_company} & salary ${emps.emp_salary} `);
            console.log(emps);
        }
    }
console.error("---------------------------------------------------------------------------------------------");
console.error("Task: finding the employee working in the 'Infy' company");
    for (const  emps of emp) {     
        if(emps.emp_company === "Infy")
        {
            console.log(emps);
        }
    }
console.error("---------------------------------------------------------------------------------------------");