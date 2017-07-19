function rand(number){
var randomDecimalNumber = Math.random() * number;
console.log(randomDecimalNumber);

var wholeIntergerNumber = Math.round(randomDecimalNumber);

return wholeIntergerNumber;




}console.log(rand(6));