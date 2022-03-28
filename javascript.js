




//  Print odd numbers in an array

(function(){
var total =0;
var value = [1,2,3,4,5,6,7,8,9,10,11,13,15,12,14,16];
for(var i =0;i<value.length;i++){
    if(value[i]%2!==0){
        total=value[i];

        console.log(`Odd Numbers is ${total}`);
    }
}
})()






//Return all the prime numbers in an array

const primenumber =(function(){
function checkPrime(number) {
    	  if (number <= 1) {
    	    return false;
    	  } else {
    	    for (let i = 2; i < number; i++) {
    	      if (number % i == 0) {
    	        return false;
    	      }
    	    }
    	    return true;
    	  }
    	}
    	console.log(checkPrime(4));
    })();






//  Return all the palindromes in an array

 const palindrome=(arr)=>{
    
    for(let i=0;i<arr.length/2;i++){
        if(arr[i]!==arr[arr.length-i-1]){
            return false;

        }
    }
    return true;
}
console.log(palindrome["malayalam",12321,"tamil","madam"]);


// Sum of all numbers in an array

let total =(function(){
    var array =[1,2,3,4,5,6,7,8];
    var sum = array.reduce(function(a,b){
        return a+b;

    },0);
    console.log(sum);
})();





//  Remove duplicates from an array


    var cites =["salem","chennai","chennai","tirupur","coimbatore"];
   
var find =()=>{
    return unique = cites.filter(function(item,index){
        return cites.indexOf(item)==index
    })
}
console.log(find());


//   Convert all the strings to title caps in a string array

const str = "welcome back";
const newStr = str.split(' ')
   .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
   .join(' ');
console.log(newStr);




// let foo = function caps(str){
//     const word = str.toLowercase();
//     return str.charAt(0).toUppercase() + word.slice(1);
// }
// console.log(caps("guvi"));

// function caps(str){
//     return str.split('')
//     .map((value)=>value[0].touppercase()+value.slice(1).tolowercase())
//     .join('');
    
// }

// console.log(caps("guvi"));






















