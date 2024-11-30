// Using an example, explain the difference between block,global and function scope in variables.


let name="Atena";     ////"This is a global scope."
console.log(name);         ///Result => Atena



{

let name ="Sara";          ////"This is a block  scope."      
console.log(name);               ///Result => Sara

}



function firstName(para) {           ////"This is a function scope."           
   var fName= "Reza";                   ///Result => Reza
  
console.log(fName);


}

firstName();