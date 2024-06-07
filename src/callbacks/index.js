//
function sum(a, b) {
  return a + b;
}

function calc(num1, num2, callback) {
  return callback(num1, num2);
}

console.log(calc(5, 8, sum));

//

setTimeout(() => {
  console.log("Hola desde un setTimeOut");
}, 3000);

//

function gretting(name) {
  console.log(`Hola ${name}`);
}

setTimeout(gretting, 5000, "Mao");
