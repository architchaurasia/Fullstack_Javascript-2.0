let a = 1;

function num1(){
   let b = 2;
   console.log(a)
   function num2(){
    console.log(b);  //console.log(b) is inside a lexical environment or a() is lexical parent
   }
   num2()
}

num1();