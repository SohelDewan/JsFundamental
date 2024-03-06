const student = {
    name: 'SOHEL DEWAN',
    age: 23,
    gender: 'Male',
    course: ['ielts', 'development']
}
const array = [23, 43, 44, 45,];

const about = `My name is ${student.name}, My age is ${student.age} and has a number ${array[3]} also like ${student.course[1]}`;//1. tamplate string

// console.log(about);

const getFiftyFive = () => 55;// 2.arrow function
const addFiftyFive = (num) => num + 55;
const isEven = (num) => num % 2 == 0;
const addThree = (x, y, z ) => x + y + z;
const doMath = (num1, num2)=>{
    const sum = num1 + num2;
    return sum;
}
// 3. spread operator
// const newNumber = array;
const newNumber = [...array, 55];
array.push(99);
console.log(newNumber);
