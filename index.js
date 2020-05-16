console.log("---------------");

function* generatorBro() {
  yield "John";
  yield "Robosvaldo";
  yield "Lennon";
  return "Mahamudrem";
}
const bro = generatorBro();

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
array.forEach(() => {
  const { value, done } = bro.next();
  if (value) {
    console.log("My bro is", value);
  }
  if (done) {
    console.log("no more bros");
  }
});

console.log("---------------");

function* square(n) {
  while (n < 10) {
    n++;
    yield n * n;
  }
  return "Finish"
}

const squareRun = square(0);
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.forEach(() => console.log(squareRun.next().value));

console.log("---------------");

function* passParamaterToNext() {
  console.log("start");
  const waitInThisLineForNextValue = yield {
    name: "John Snow",
    age: 20
  };
  console.log(waitInThisLineForNextValue)
  const waitInThisLineForNextValueAgain = yield {
    name: "Rafael",
    age: 27
  }
  console.log(waitInThisLineForNextValueAgain);

  return {
    name: "Khal Drogo",
    age: 30
  };
}

const iter = passParamaterToNext();
console.log(iter.next('This will never print'));
console.log(iter.next('This will print Rafael'));
console.log(iter.next('This will print Khal Drogo'));
