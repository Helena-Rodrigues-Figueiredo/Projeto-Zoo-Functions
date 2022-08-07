const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, age) {
  const findAnimal = species.find((specie) => specie.name === animal);
  const getAnimalAge = findAnimal.residents.every((animalAge) => animalAge.age >= age);
  return getAnimalAge;
}

module.exports = getAnimalsOlderThan;
