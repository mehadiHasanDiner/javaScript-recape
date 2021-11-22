
function largestNumber(number){
    var highest = number[0]
    for(var i = 0; i < number.length; i++){
        var element = number[i];
        if(element > number){
            number = highest;
        }
    }
    return highest;

}
var result = [12, 45, 36, 58, 98]
var total = largestNumber(result);
console.log(total);