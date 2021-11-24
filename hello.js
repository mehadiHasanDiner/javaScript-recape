function highestMark(numbers){
    var larger = numbers[0]
    for(var i = 0; i < numbers.length; i++){
        var element = numbers[i];
        if(larger < element){
            larger = element
        }
    }
    return larger
}

 var big = highestMark([252, 586, 587, 6, 87]);
 console.log(big)
