// 1. array destricturing
const number = [34,65];
// const x = number[0];
// const y = number[1];
const [x,y] = number;
// const [x,y] = [34,65];

// const [first, second] =[23, 22];
const [first, second] = boxify(45, 54);

// console.log(first, second);
function boxify(x,y) {
    const num = [x,y];
    return num;
}
// console.log(boxify(45,54));
// console.log(x, y);
const student = {
    name: 'SOHEL DEWAN',
    age: 23,
    gender: 'Male',
    course: ['ielts', 'development']
}
const [firstCourse, secondCourse] = ['ielts', 'development']
// const [firstCourse, secondCourse] = student.course;
// console.log(firstCourse, secondCourse); 

// console.log(student.course);
// object destructuring
const {name, age} = {name: 'Sohel', age:45, salary: 34000};
// console.log(name, age);
const employee = {
    name2: 'Sohel',
    age: 45,
    salary: 64000,
    department: 'HR',
    position: 'Manager',
    specifications: {
        experience: 10,
        height : 66,
        weight: 70,
        address: 'sylhet',
        drink:false,
        hobbies: ['reading','swimming'],
        watch:{
            color: 'black',
            price: 2900,
            brand: 'Naviforce'
        }
    }
}
const {brand} = employee?.specifications?.watch; // optional chaining ?
// console.log(brand);
const {name2, position} = employee;

// console.log(name2, position);
const {weight, address} = employee.specifications;

console.log(weight, address);