console.log("working");
//Q1
function counter(){
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}

var counter = counter();
alert(counter());
alert(counter());
alert(counter());
alert(counter());

//Q2
let count = 0;
(function immediate() {
  if (count === 0) {
    let count = 1;
    console.log(count); // What is logged?
  }
  console.log(count); // What is logged?
})();
//output 1
//output 0


//Q3
for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); // What is logged?
    }, 1000);
  }
//3

  //Q4 calculate area of rectangle
  const outerFunction = function(length){
    innerFunction = function(breadth){
        console.log(`the area of ractangle is ${length*breadth}`);
    }
}
outerFunction(30);
innerFunction(60);
//the area of ractangle is 1800

//Q5 create an inner function to increase the counter every time it is called

let outer = function(){
    variableCount = 0;
    inner = function(){
        console.log(`the count is ${variableCount+=1}`)
    }
}

outer();
inner();
inner();
inner();
//count is 1
//count is 2
//count is 3

//Q5
var a = 12;
(function () {
  alert(a);
})();


//Q6
var a = 10;
var x = (function () {
  var a = 12;
  return function () {
    alert(a);
  };
})();
x();


//Q7
var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
        "outerArg = " + "outerArg" + "\n" +
        "innerArg = " + "innerArg" + "\n" +
        "outerVar = " + "outerVar" + "\n" +
        "innerVar = " + "innerVar" + "\n" +
        "globalVar = " + "globalVar");
    
    })(456);
})(123);
// outerArg = outerArg
// innerArg = innerArg
// outerVar = outerVar
// innerVar = innerVar
// globalVar = globalVar