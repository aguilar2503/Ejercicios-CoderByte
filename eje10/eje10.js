function AlphabetSoup(str) { 
  
    var chars = str.split("");
    var newString = chars.sort();
    
  
    
    return newString.join(""); 
           
  }
     
  // keep this function call here 
  //AlphabetSoup(readline());       
  console.log(AlphabetSoup("hola"));                
  
  