// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement


let MarkWeight = 78
let MarkHeight = 1.69
let JohnWeight = 92
let JohnHeight = 1.95

let MarkBMI = MarkWeight / MarkHeight ** 2
let JohnBMI = JohnWeight / JohnHeight ** 2

let markHigherBMI = MarkBMI > JohnBMI
if (markHigherBMI) {
    console.log("Mark's BMI is higher than John's")
} else {
    console.log("John's BMI is higher than Mark's")
}

MarkWeight = 95
MarkHeight = 1.88
JohnWeight = 85
JohnHeight = 1.76

MarkBMI = MarkWeight / MarkHeight ** 2
JohnBMI = JohnWeight / JohnHeight ** 2

markHigherBMI = MarkBMI > JohnBMI
if (markHigherBMI) {
    console.log("Mark's BMI is higher than John's")
} else {
    console.log("John's BMI is higher than Mark's")
}