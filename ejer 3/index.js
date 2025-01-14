 "use strict"
let numbers = [0,2,4,8];

for(let i = 0; i < numbers.length; i++){
 for (let j=i+1; j< numbers.length; j++){
    alert(numbers[i]+ "" +numbers[j])
   }
}