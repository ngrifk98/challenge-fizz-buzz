// Write your solution below this line:
// Nicholas Kingston

for (let num = 1; num <= 50; num++) {
    if (num % 3 === 0 && num % 5 === 0) {
        console.log("fizzbuzz");
    } else if (num % 3 === 0) {
        console.log("fizz");
    } else if (num % 5 === 0) {
        console.log("buzz");
    } else {
        console.log(num);
    }
}
