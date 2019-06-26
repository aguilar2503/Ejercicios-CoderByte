function FirstReverse(str) { 

    var nuevoString = "";
    
    for (var i = str.length - 1; i>=0; i--){
        nuevoString= nuevoString + str.charAt(i);
    }
    
  // code goes here  
  return nuevoString; 
         
}
   
// keep this function call here 
console.log(FirstReverse("hola"));     