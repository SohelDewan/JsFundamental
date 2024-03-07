const student = {
    name: 'SOHEL DEWAN',
    age: 23,
    gender: 'Male',
    course: ['ielts', 'development']
}
const studentJson = JSON.stringify(student)

console.log(studentJson);
const studentObject = JSON.parse(studentJson)
// console.log(studentObject);
// keys and values are
const keys = Object.keys(student)
const values = Object.values(student)

// console.log(values);
// fetch('url')
//     .then((res)=> res.json())
//     .then((data)=> console.log(data)) 
    // data may object, array, or object-property

    const numbers = [1,2,3,4,5,6,7,8];
    // numbers.forEach(item=> console.log(item)); //if do not return
    numbers.map(item=> console.log(item * 2))// it will return the number automatically
    // (for of) used Array and (for in) used in objects
    // add or remove from an array
    const products =[
        {name:'laptop', price: 32000, brand:'hp', color:'silver'},
        {name:'phone', price: 132000, brand:'iPhone', color:'silver'},
        {name:'watch', price: 3200, brand:'casio', color:'silver'},
        {name:'sunglass', price: 520, brand:'ribon', color:'black'},
        {name:'camera', price: 5520, brand:'canon', color:'black'}
    ];
    const newItem = {name:'webcam', price:1500, brand:'janina'}
    const newProducts =[...products, newItem];
    // console.log(newProducts);
    const remaining = products.filter(p=> p.name !== 'phone')
    console.log(remaining);