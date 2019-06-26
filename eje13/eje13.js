function allOnes(matrix) {
    // convert the matrix into a long string
    var converted = matrix.map(rowArr => rowArr.join('')).join('');
    // return true if there is no '0'
    return converted.indexOf('0') === -1;
}

// scan the matrix for a match with an window of a given size
function scan(matrix, windowSize) {
    for (var i = 0; i <= matrix.length - windowSize; i++) {
        for (var j = 0; j <= matrix[0].length - windowSize; j++) {
            var subMatrix = matrix.slice(i, i + windowSize).map(rowArr => rowArr.slice(j, j + windowSize));
            if (allOnes(subMatrix)) return true;
        }
    }
    return false;
}

function MaximalSquare(strArr) { 
    var matrix = strArr.map(line => line.split(''));

    for (windowSize = matrix.length; windowSize > 0; windowSize--) {
        if (scan(matrix, windowSize)) {
            return windowSize * windowSize;
        }
    }
}
   
// keep this function call here 
console.log(MaximalSquare(["0111", "1111", "1111", "1111"]));