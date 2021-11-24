
function bigNumber(numbers){
    var larger = numbers[0]
    for(var i = 0; i < numbers.length; i++){
       var element = numbers[i];
        if(element > larger){
            larger = element;
        }
    }
    return larger;
}

var numberArray = [586, 98, 696, 878, 205, 698]
var result = bigNumber(numberArray)
console.log(result);

