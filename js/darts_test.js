function runTests() {
  haveFiveHundredAndOne();
  subtractFiftyFromFiveHundredAndOne();
  console.log('hello');
}

function haveFiveHundredAndOne(){
  var result = start;

    if (result === 501) {
      console.log('awesome!');
    } else {
      console.error('boo! test failed');
    }
};

function subtractFiftyFromFiveHundredAndOne(){
  var result = dartboard.subtract(50,501);

    if (result === 451) {
      console.log('yay');
    } else {
      console.error('the test failed');
    }
};