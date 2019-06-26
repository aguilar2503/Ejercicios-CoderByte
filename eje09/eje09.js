function TimeConvert(num) { 
    
  
    var horas = Math.floor(num/60);
    
    var minutos = num % 60;
    return horas + ":" + minutos;
           
  }
     
  // keep this function call here 
  //TimeConvert(readline());    
  console.log(TimeConvert(126));                        
  