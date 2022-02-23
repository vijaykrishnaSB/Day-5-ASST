// Question:- 1)Do the below programs in anonymous function & IIFE


// 1.a)print odd numbers in array.


// IIFE Function

(function (arr) {
        let odd = [];
        for (let i in arr) {
            if (arr[i] % 2 !== 0) {
                odd.push(arr[i]);
            }
        }
        console.log(odd);
    })([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);


// Anonymous Function

let odd = function (arr) {
    let odd = [];
    for (let i in arr) {
        if (arr[i] % 2 !== 0) {
            return odd.push(arr[i]);
        }
//     }

};
odd();






// 1.b)Convert all the strings to title caps in a string array


// Anonymous Function

function titleCase() {
    let str=("hello world".toLowerCase().split(" "));
 
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  }
  console.log(str.join(" "));
}
titleCase();


// IIFE Function

(function(){
    let str=("hello guvi team".toLowerCase().split(" "));
 
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  }
  console.log(str.join(" "));
 })();






// 1.c)Sum of all numbers in an array

// anonymous function

function sum() {
    let str=[50,45,78];
    let sum=0;
  for (let i = 0; i < str.length; i++) {
    sum +=str[i];
  }
 console.log(sum);
}
sum();


// IIFE Function

(function(){
    let str=[50,45,78];
   let sum=0;
 for (let i = 0; i < str.length; i++) {
   sum +=str[i];
 }
console.log(sum);
})();
