// 1. how to declare a variable

const variable = 'variable';
let season = 'Rainy';
season = 'Winter';
//2. 6 basic conditions > < === !== <= >= 
// multiple conditions && ||

if(variable === variable || season === 'Rainy'){

}else{

}
//3. array > index length push
const array = [23, 43, 44, 45,];
array[0] = 42;
//4. for loop
for(let i = 1; i <array.length; i++){
    const number = array[i];
    console.log(number);
}
//5. function
function multiple(n1,n2){
    const result = n1 * n2;
    return result;
}
const output = multiple(13,15)
console.log(output);

//6. object > access property by 3 ways
const student = {
    name: 'SOHEL DEWAN',
    age: 23,
    gender: 'Male'
}

console.log(student.name);
console.log(student["age"]);
const myName = 'name';
console.log(student[myName]);