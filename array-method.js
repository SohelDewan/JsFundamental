const products =[
    {name:'laptop', price: 32000, brand:'hp', color:'silver'},
    {name:'phone', price: 132000, brand:'iPhone', color:'silver'},
    {name:'watch', price: 3200, brand:'casio', color:'silver'},
    {name:'sunglass', price: 520, brand:'ribon', color:'black'},
    {name:'camera', price: 5520, brand:'canon', color:'black'}
]

const brand = products.map(product => product.brand);

// console.log(brand);
const price = products.map(product => product.price);//1. map
// console.log(price);
// products.forEach(product =>console.log(product));
products.forEach(product =>console.log(product.brand));//2. forEach

const cheap = products.filter(product =>product.price<=6000);//3. filter
// console.log(cheap);
const specificName = products.filter(p =>p.name.includes('n'));
// console.log(specificName);

const findName = products.find(product =>product.name.includes('n'));//4. find
console.log(findName);