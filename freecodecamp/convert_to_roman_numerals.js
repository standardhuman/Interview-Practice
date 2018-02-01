function convertToRoman(num) {
   
    var roman = [
        "I",
        "IV",
        "V",
        "IX",
        "X",
        "XL",
        "L",
        "XC",
        "C",
        "CD",
        "D",
        "CM",
        "M"
    ];

    var decimal = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
    var v = decimal[i];
    var n = roman[i];
    var i = decimal.length - 1;
    var x = num;
    var answer = [];

    // recursive case
    // 1. find the highest decimal that is <= num
    // 2. store the decimal value v and the corresponding roman n
    // 3. x = x - v
    // base case 
    // 4. repeat 1 - 3 until x = 0

    function romanize(x) {
        console.log("x: ", x);
        console.log("i: ", i);
        console.log("v: ", v);
        console.log("decimal[i]: ", decimal[i]);
        // base case
        if (x === 0) {
            console.log("answer.join: ", answer.join(""));
            return answer.join("");
        }
        // terminal condition
        if (i < 0) {
            console.log("runaway train");
            return;
        }
        // recursive case
        if (decimal[i] <= x) {
            console.log("Hello")
            if (decimal[i] < x) {
                console.log("decimal[i] is < x")
                v = decimal[i];
                console.log("v: ", v)
                n = roman[i];
                i--;
            } else if (decimal[i] === x) {
                v = decimal[i];
                n = roman[i];
                i--;
            }
            console.log("n: ", n);
            answer.push(n);
            console.log("answer: ", answer);
            x = x - v;
            console.log("x - v = ", x);
            i = decimal.length - 1;
            return romanize(x);
        }else{
            i--;
            return romanize(x);
        }
    }
    return romanize(x);
}
    console.log(convertToRoman(-5));


// starting to write the converter to convert from roman numerals to arabic numerals
    // var decimals = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000]
    // var newDecimals = [];
    
    // // newDecimals.backwards = decimals.reverse(decimals.slice(0, decimals.length + 1));

    // var decReverse = (decimals.reverse())

    // for(var i = 0; i < decimals.length; i++){
    //     newDecimals.push(decimals[i] * -1)  

    // }
    // var newNewArray = [];
    // for(var i = newDecimals.length; i => 0; i--){
    //     decReverse.push(newDecimals[i])
        
    // }
    // console.log(decimals);


