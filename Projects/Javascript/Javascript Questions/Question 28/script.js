// // 28. Write a program to print the given patterns using the loops-
// 	a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output
// 	   *
// 	   **
// 	   ***


// let rows = 3;
function triangle(rows){
let star = "";

for (let i = 1; i <= rows; i++) {
  
  for (let k = 1; k <= i; k++) {
    star += "*";
  }
  star += "\n";
}
console.log(star);
}

triangle(3)

// 	b. Print a square pattern, if the input is 3 then the output should be similar to the given output
// 	   ***
// 	   ***
// 	   ***



function square(rows){
    let star = "";
    
    for (let i = 1; i <= rows; i++) {
      
      for (let k = 1; k <= rows; k++) {
        star += "*";
      }
      star += "\n";
    }
    console.log(star);
    }
    
    square(3)
// 	c. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
// 	     *
// 	    ***
//     *****


function pyramid(rows){
    let star ="";

    for(let i = 1; i <= rows; i++){
        
        for(let j = 1; j <= rows - i; j++){
            star += " ";
        }


        for(let k = 1; k <= 2 * i - 1; k++){
            star += "*";
        }
        star += "\n";
    }
    console.log(star);
}

pyramid(3)