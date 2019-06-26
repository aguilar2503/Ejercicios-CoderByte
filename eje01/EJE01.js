function LongestWord(sen) { 


    var arr = sen.match(/[a-z0-9]+/gi);
 
    var sorted = arr.sort(function(a, b) {
      return b.length - a.length;
    });

    return sorted[0];
           
  }
     
  //LongestWord("the $$$longest# word is coderbyte");  
  console.log(LongestWord("cual es la palabra mas larga"));