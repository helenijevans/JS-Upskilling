/// CODING CHALLENGE

// Given an array of forecasted maximum temperatures,
// the thermometer displays a string with these temperatures.Given

// Example: [17, 21, 23] will print "17°C in 1 days ...21°C in 2 days ... 23°C in 3 days ..."

// Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console

// TEST DATA 1: [17,21,23]
// TEST DATA 2: [12, 5, -5, 0, 4]

function printForecast(arr) {
  for (let i in arr) {
    console.log(
      `${arr[i]}°C in ${Number(i) + 1} ${i > 0 ? "days" : "day"} ...`
    );
  }
}
console.log(printForecast([17, 21, 23]));
