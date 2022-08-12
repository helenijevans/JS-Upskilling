'use strict';

// function describeCountry(country, population, capitalCity) {
//     return `${country} has ${population} people and its capital city is ${capitalCity}`
// }


// describeCountry("Finland", "6 million", "Helsinki")
// const malaysia = describeCountry("Malaysia", "33 million", "Kuala Lumpur")
// const norway = describeCountry("Norway", "12 million", "Oslo")
// const brazil = describeCountry("Brazil", "50 million", "Brasilia")
// console.log(`
// ${malaysia}
// ${norway}
// ${brazil}
// `)

function percentageOfWorld1(population) {
    return (population / 7900000000) * 100
}

// console.log(percentageOfWorld1(33000000))
// console.log(percentageOfWorld1(57000000))
// console.log(percentageOfWorld1(100000000))

// const percentageOfWorld2 = function (population) {
//     return (population / 7900000000) * 100
// }

// console.log(percentageOfWorld2(33000000))
// console.log(percentageOfWorld2(57000000))
// console.log(percentageOfWorld2(100000000))

// const percentageOfWorld3 = population => (population / 7900000000) * 100

// console.log(percentageOfWorld3(33000000))
// console.log(percentageOfWorld3(57000000))
// console.log(percentageOfWorld3(100000000))

// function describePopulation(country, population) {
//     return `${country} has ${population} people, which is about ${percentageOfWorld1(population)}% of the world`
// }
// console.log(describePopulation('Malaysia', 33000000))
// console.log(describePopulation('Norway', 57000000))
// console.log(describePopulation('Brazil', 100000000))

// const populations = [33000000, 57000000, 100000000, 22000000]
// console.log(populations.length === 4)
// const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])]

// console.log(percentages);

const neighbours = ["Thailand", "Indonesia", "Singapore"]
neighbours.push("Utopia")
console.log(neighbours)
neighbours.pop()
console.log(neighbours)
if (!neighbours.includes("Germany")) {
    console.log('Probably not a central European country :D')
}
const index = neighbours.indexOf("Indonesia")
neighbours[index] = "Malaysia's Inferior ;)"
console.log(neighbours)