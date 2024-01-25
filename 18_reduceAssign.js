class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}

const emp_anil =new Employee(22,'Anil', 'IT', 50000, 'TCS');
const emp_radha = new Employee(33,'Radha', 'HR', 74000, 'Wipro');
const emp_rishi =new Employee(55, 'Rishi', 'Finance', 47000, 'TCS');
const emp_sonali = new Employee(66, 'Sonali', 'Finance', 45000, 'Infy');
const emp_monika =new Employee(77, 'monika', 'IT', 40000, 'Wipro');
const emp_viny =new Employee(88, 'Vinayak', 'IT', 75000, 'TCS');
const emp_mahi =new Employee(99 , 'Mahesh', 'HR', 85000,'Infy');


let arrayEmps = [emp_anil, emp_radha, emp_rishi, emp_sonali , emp_monika, emp_viny, emp_mahi];
console.log('-------------------Wipro Employees ------------------');
let wipro_emp =arrayEmps.filter((emp)=>{
    return emp.emp_company == 'Wipro';

})
console.log(wipro_emp);

console.log('-------------------IT & HR Employees ------------------');
let it_hr_emp = arrayEmps.filter(emp=>{
return emp.emp_dept == 'IT' || emp.emp_dept == 'HR';
})
console.log(it_hr_emp);

console.log('-------------------Employee Id > 50 ------------------');
let emp_50 = arrayEmps.filter(emp=>{
return emp.emp_id > 50;
})
console.log(emp_50);

console.log('-------------------Employee name startwith A V M ------------------');
let name_AVM = arrayEmps.filter(emp =>{
    return emp.emp_name.startsWith('A') || emp.emp_name.startsWith('V') || emp.emp_name.startsWith('M')
})
console.log(name_AVM);

console.log('-------------------Avrage of the all deparatment ------------------');
let dept_avg =  arrayEmps.reduce((startWith , emp)=>
{

    return startWith +=emp.emp_salary;

}, 0);

console.log(dept_avg/ arrayEmps.length);

console.log('-------------------Avrage of the IT deparatment ------------------');
let IT_avg  = arrayEmps.filter(emp => emp.emp_dept == 'IT');
let avg = IT_avg.reduce(startemp =>{
    return
})