function LetterCapitalize(str) {  
  var newString = str.split(' ');
  
  
  for (var i = 0; i<= newString.length -1; i++){
      newString[i] = newString[i].substring(0,1).toUpperCase() + newString[i].substring(1);
  }
  // code goes here  
  return newString.join(" "); 
         
}
   
// keep this function call here 
console.log(LetterCapitalize("roberto antonio aguilar martinez"));                            
