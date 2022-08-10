// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.

// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.

let dataOneMarkWeight = 78
let dataOneMarkHeight = 1.69
let dataOneJohnWeight = 92
let dataOneJohnHeight = 1.95

let dataTwoMarkWeight = 95
let dataTwoMarkHeight = 1.88
let dataTwoJohnWeight = 85
let dataTwoJohnHeight = 1.76

let dataOneMarkBMI = dataOneMarkWeight / dataOneMarkHeight ** 2
let dataOneJohnBMI = dataOneJohnWeight / dataOneJohnHeight ** 2

let markHigherBMI = dataOneMarkBMI > dataOneJohnBMI
console.log(dataOneMarkBMI, dataOneJohnBMI, markHigherBMI)

let dataTwoMarkBMI = dataTwoMarkWeight / dataTwoMarkHeight ** 2
let dataTwoJohnBMI = dataTwoJohnWeight / dataTwoJohnHeight ** 2

markHigherBMI = dataTwoMarkBMI > dataTwoJohnBMI
console.log(dataTwoMarkBMI, dataTwoJohnBMI, markHigherBMI)

// REFLECTION: Need to use constants more as default