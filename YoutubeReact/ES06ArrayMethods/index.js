const details = [
    {
        name: 'p1',
        country: 'Sl',
        age: 20
    },
    {
        name: 'p2',
        country: 'IN',
        age: 20
    },
    {
        name: 'p3',
        country: 'USA',
        age: 30

    },
    {
        name: 'p4',
        country: 'CHINA',
        age: 25
    }

]

// MAP 

let names = details.map((detail,index) =>  {
   return { ...detail, age: index*10} 
});

console.log(names);

// FIND -> only first object statisdied condition
// FILTER -> whole objects which statisfied the condition

let age = details.filter( (detail) => {
  return detail.age < 20
})

 console.log(age);

 // SOME -> return true if one elements represnt
//  EVERY -> return true if all objects in array only satisfied the conditon
const number = [1, 2, 3, 4, 5];

const allPositive = number.every(number => number > 0);
console.log(allPositive);  // Output: true

const numbers = [1, -2, 3, 4, 5];

const anyNegative = numbers.some(number => number < 0);
console.log(anyNegative);  // Output: true

// find index of person by using query
// if the perticular query fail this will return -1
const indexOfPerson = details.findIndex((detail) => {
    return detail.country === "Sl";
})

console.log(indexOfPerson);

// spread operator
// To get sum of array
// Spread use when the # of arguments is not countable for function

function sum(...numArray){
    return numArray.reduce((total, num)=>   total + num);
}

console.log(sum(1,2,3,4,5,10));

// to get api async await

let getListOfProduct = document.querySelector('.list-of-products');

function renderProducts(getProducts) {
    getListOfProduct.innerHTML = getProducts.map( (singleProductsItem) => 
        `<p>
            ${singleProductsItem.title}
        </p>`).join(' ');
}

async function fetListOfProject(){
    try {
        const apiResponse = await fetch("https://dummyjson.com/product", {
            method: 'GET',
        })

        const result = await apiResponse.json();

        console.log(result);
        
        if(result?.products?.length > 0) renderProducts(result?.products)

    }catch(e) {
        console.log(e);
    }
}

fetListOfProject();