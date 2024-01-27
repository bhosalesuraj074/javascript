const arrayNum = [ 5, 1, 6, 8,  2, 3]; 
const sum = arrayNum.reduce( (runningTotal, value) => {
    return runningTotal * value;
});
console.log(sum);

class Student {
    // Data member or properties
    // Constructor
    constructor(id, name, city, marks ){
        this.id = id;
        this.name = name;
        this.city = city;
        this.marks = marks;
    }
    // Member Functions or methods
    getDetails(){
       console.log(`ID: ${this.id}, Name: ${this.name}, City: ${this.city}, Marks: ${this.marks}`);
    } 
}

const jenny = new Student(11, 'Jenny', 'Pune', 54);
const bill = new Student(43, 'Bill', 'Mumbai', 67);
const elon = new Student(32, 'Elon', 'Hyd', 83);
const stew = new Student(22, 'Stew', 'Pune', 74);
const ratan = new Student(65, 'Ratan', 'Mumbai', 90);

const arrayStudents = [jenny, bill, elon, ratan, stew];

const totalMarks = arrayStudents.reduce( (runningTotal, element) => {
    return runningTotal + element.marks;
}, 0);
console.log(totalMarks);

const oddStudent = arrayStudents.filter((element)=>{
    return element.id % 2  != 0;
})
const marks= oddStudent.reduce((total , value)=>{
    return total + value.marks;
}, 0);

oddStudent.forEach(element => {
    
});
console.log('marks average', marks / oddStudent.length);