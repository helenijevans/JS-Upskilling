// There are two gymnastics teams, Dolphins and Koalas.They compete against each other 3 times.The winner with the highest average score wins a trophy!

// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well(draw means they have the same average score)
// 3. Bonus1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a score of at least 100 points.Hint: Use a logical operator to test for minimum score, as well as multiple else -if blocks 😉
// 4. Bonus2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points.Otherwise, no team wins the trophy

// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123 § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

const dolphins1 = 96;
const dolphins2 = 108;
const dolphins3 = 89;
const koalas1 = 97;
const koalas2 = 112;
const koalas3 = 101;
let dolphinMin;
let koalaMin;

const dolphinsAverage = dolphins1 + dolphins2 + dolphins3 / 3;
const koalasAverage = koalas1 + koalas2 + koalas3 / 3;

if (dolphins3 > dolphins2) {
  if (dolphins2 > dolphins1) {
    dolphinMin = dolphins1;
  } else {
    dolphinMin = dolphins2;
  }
} else {
  if (dolphins3 > dolphins1) {
    dolphinMin = dolphins1;
  } else {
    dolphinMin = dolphins3;
  }
}

if (koalas3 > koalas2) {
  if (koalas2 > koalas1) {
    koalaMin = koalas1;
  } else {
    koalaMin = koalas2;
  }
} else {
  if (koalas3 > koalas1) {
    koalaMin = koalas1;
  } else {
    koalaMin = koalas3;
  }
}
console.log(dolphinMin, koalaMin);

if (dolphinsAverage > koalasAverage && dolphinMin >= 100) {
  console.log("Dolphins Win!");
} else if (dolphinsAverage < koalasAverage && koalaMin >= 100) {
  console.log("Koalas Win!");
} else if (
  dolphinsAverage === koalasAverage &&
  koalaMin >= 100 &&
  dolphinMin >= 100
) {
  console.log("Dolphins and Koalas Draw!");
} else {
  console.log("No one wins, you are bad at this");
}
