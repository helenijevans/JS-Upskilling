let country = "Malaysia";
const continent = "Asia";
let population = 32370000;
// console.log(country);
// console.log(continent);
// console.log(population);
let isIsland = true;
let language;
// console.log(isIsland)
// console.log(population)
// console.log(country)
// console.log(language)

language = "English"
// console.log(language)
// continent = "Europe"

// let populationHalved = population / 2
// console.log("New population if halved is: " + populationHalved)
// console.log(population + 1)
// let finlandPopulation = 6000000
// let greaterThanFinland = population > finlandPopulation
// console.log('Population greater than Finland: ' + greaterThanFinland)
// let averagePopulation = 33000000
// let greaterThanAverage = population > averagePopulation
// console.log('Population greater than average: ' + greaterThanAverage)

// const description = `${country} is in ${continent} and its ${population} people speak ${language}.`;

// console.log(description);

// if (population > 33000000) {
//     console.log(`${country}'s population is above average.`)
// } else {
//     console.log(`${country}'s population is below average.`)
// }

// population = 13;

// if (population > 33000000) {
//     console.log(`${country}'s population is above average.`)
// } else {
//     console.log(`${country}'s population is below average.`)
// }

// population = 32370000;

// const numNeighbours = Number(prompt("How many neighbour countries does your country have?"));

// console.log(numNeighbours);

// if (numNeighbours === 1) {
//     console.log("Only one border!")
// } else if (numNeighbours > 1) {
//     console.log("More than 1 border")
// } else {
//     console.log("No borders")
// }

// if (!isIsland && language === "English" && population < 50000000) {
//     console.log(`You should live in ${country} :)`)
// } else {
//     console.log(`${country} does not meet your criteria :(`)
// }

// switch (language) {
//     case ("Chinese"):
//     case ("Mandarin"):
//         console.log("MOST number of native speakers")
//         break;
//     case ("Spanish"):
//         console.log('2nd place in number of native speakers')
//     case ("English"):
//         console.log("3rd place")
//         break;
//     case ("Hindi"):
//         console.log("Number 4")
//         break;
//     case ("Arabic"):
//         console.log("5th most spoken language")
//         break;
//     default:
//         console.log('Great language too :D')
// }

console.log(`${country}'s population is ${population > 33000000 ? "above" : "below"} average.`)