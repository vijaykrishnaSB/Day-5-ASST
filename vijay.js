// 3) Do programs in arrow function ?



// 3.a)print odd numbers in an array

const odd=() =>{
    let number=[1,2,3,4,5,6,7,8,9,10];
        for(i=0;i<number.length;i++){
             if(number[i]%2!==0){
           console.log(number[i]);
        } 
        }
    };
      odd();


// 3.b)Convert all the strings to ttitle caps in a string array


const tittlecaps=()=>{
    let str=("hello world".toLowerCase().split(" "));
 
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  }
  console.log(str.join(" "));
 }; 
 tittlecaps();



// 3.c) Sum of all numbers in array

const sum=()=>{
    let str=[50,45,78];
       let sum=0;
     for (let i = 0; i < str.length; i++) {
       sum +=str[i];
     }
    console.log(sum);
    };
    sum();


