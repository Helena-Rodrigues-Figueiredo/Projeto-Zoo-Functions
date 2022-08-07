const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  if (!animal) {
    return species.reduce((acc, specie) => {
      const quantity = specie.residents.length;
      acc[specie.name] = quantity;
      return acc;
    }, {});
  }
  if (animal.sex && animal.specie) {
    const specieQuantity = species.find((specie) => specie.name === animal.specie).residents
      .filter((element) => element.sex === animal.sex).length;
    return specieQuantity;
  }
  return species.find((specie) => specie.name === animal.specie).residents.length;
}

module.exports = countAnimals;
