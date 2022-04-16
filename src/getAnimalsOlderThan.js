const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, age) {
  let resultado = false;
  species.forEach((specie) => {
    if (specie.name === animal) {
      specie.residents.every((idade) => {
        if (idade.age > age) {
          resultado = true;
        }
        return resultado;
      });
    }
  });
  return resultado;
}

module.exports = getAnimalsOlderThan;
