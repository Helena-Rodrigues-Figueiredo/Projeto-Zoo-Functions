const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, age) {
  const verificarIdade = species.find((element) => {
    if (element.residents.age <= age) {
      return false;
    }
  });
  return true;
}

module.exports = getAnimalsOlderThan;
