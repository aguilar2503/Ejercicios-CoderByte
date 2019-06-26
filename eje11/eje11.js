function KaprekarsConstant(num) {
    const KAP = 6174;
    var count = 0;
    while (true) {
        var num = evaluator(num)
        if (num === true) {
            return count;
        }
    }

    function evaluator(num) {
        count++
        console.log('ciclo', count);
        var minNumArr = num.toString().split('').sort();
        var maxNumArr = minNumArr.slice(0).reverse();
        var littleNum = parseInt(minNumArr.join(''), 10);
        var bigNum = parseInt(maxNumArr.join(''), 10);
        while (bigNum < 1000) {
            bigNum = bigNum * 10;
        }

        return bigNum - littleNum === KAP ? true : bigNum - littleNum;
    }
}
   
// keep this function call here 
//KaprekarsConstant(readline());
console.log(KaprekarsConstant(3524));