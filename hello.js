
function highestNumber(number){
    var highest = number[0]
    for(var i = 0; i < number.length; i++){
        var element = number[i];
        if(element > number){
            element = highest;
        }
    }
    return element;

}
var result = [203, 333, 564, 698]
var total = highestNumber(result);
console.log(total);