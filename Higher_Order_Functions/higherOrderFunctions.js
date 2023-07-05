/*Using Map(creates an new array by doing some caluclation which presents inside an function to each and every element of the array)*/
// let num=[10,20,30,40];

// function sum(num)
// {
//     return num+2;
// }

// let result=num.map(sum)

// console.log(result);

// let num=[10,20,30,40];
// let result=num.map(function (num)
// {
//     return num+2;
// }
// )
// let result=num.map(numb => numb+10)
// console.log(result);

/*using Filter(Creates an array which appends the values of an array which retuens true)*/

// let num=[10,20,30,40];

// function sum(numb)
// {
//     return numb>=25;
// }

// let result=num.filter(sum)

// console.log(result);

/*using Reduce(Accumulate a new value by performing the operation on each and every value of the array elements)*/

// let num=[10,20,30,40];

// function sum(a,c)
// {
//     return a+=c;;
// }

// let result=num.reduce(sum)

// console.log(result);

// let num=[1,2,3,45];
// let res=num.reduce((a,c)=> (a+c));
// console.log(res);

/*using find(Finds The First Matched element in an array)*/

// let num=[1,2,3,4,1,2,100];

// let res=num.find(a=> a>99)
//  console.log(res);

/*using findIndex(Finds The First Matched element "index" in an array)*/
let num=[1,2,3,4,1,2,100];

let res=num.findIndex(a=> a>0)
 console.log(res+1);
