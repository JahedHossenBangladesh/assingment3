

function feetToMile(feet) {
var mile = feet/5280;

return mile;


}

var dhakaToChittagongMile = feetToMile(691680);
console.log(dhakaToChittagongMile);
//1st question ans is done


//this is the 2nd question ans
function woodCalculator(chair,table,khat){
    var chairNeed = chair * 1;
    var tableNeed =table * 3;
    var khatNeed = khat * 5;
    var total = chairNeed + tableNeed + khatNeed;

    return total;
}
var needFurniture = woodCalculator(1,1,1);
console.log(needFurniture);
// this is the 2nd question ans in qubike feet

// the 3rd question is 

function brickCalculator(floor){

if( floor <= 10){
    var result1 = floor * 15 * 1000;
    return result1;
}
else if ( floor >= 11 && floor <= 20){
    var extra = floor -10;
    var added = 10;
    var result2 = extra * 12 * 1000;
    var addedResult = (10 * 15 * 1000) + result2;
    return addedResult;
}
else{
   var extra = floor - 20;
   var old = (10 * 15 * 1000) + (10 * 12 * 1000);
   var extraPrice = extra * 10 * 1000;
   var addedResult = old + extraPrice;
   return addedResult;
}
}
var total = brickCalculator(40);
console.log(total);

// above three is done by thinking by myself
// the fourth number is 
// taking help from stockoverflow and google 
function tinyFriend(name) {
    var sm = name[0].length;
    var smallest;
    for( var i = 0; i < name.length; i++){
        if( name[i].length < sm){
            var sm = name[i].length;
            smallest = name[i];
        }
    }
    return smallest;
}
var smallestName = tinyFriend(["ami","tumi","sa","tara","p"]);
console.log(smallestName);