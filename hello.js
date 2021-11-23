
function lowestNumber(number){
    var highest = number[0]
    for(var i = 0; i < number.length; i++){
        var element = number[i];
        if(element > number){
            number = highest;
        }
    }
    return highest;

}
var result = [98, 10, 102, 203, 333, 564]
var total = lowestNumber(result);
console.log(total);