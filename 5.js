/*

Loop through an object and print the key-value pairs with their types

Input:

let myObject = {

name: 'John Doe',
age: 25,
city: 'Example City',
isStudent: true
};

Output:


key: name | type:  string
key: age | type:  number
key: city | type:  string
key: isStudent | type:  boolean 

*/

let myObject = {

    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
    };
    const obj=[];

for(const x in myObject){

    const key=`key :${x}`

const valueType=`type: ${typeof myObject[x]}`;

const output=key.concat(' | ').concat(valueType);
console.log(output)
}  
