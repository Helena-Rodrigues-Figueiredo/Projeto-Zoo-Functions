const data = require('../data/zoo_data');

const { species } = data;
const todasEspecies = species.map((especie) => especie.name);
const qntPorEspecie = species.map((especie) => especie.residents.length);

function countAnimals(animal) {
  const objeto = {};
  if (animal === undefined) {
    todasEspecies.forEach((each, i) => {
      objeto[each] = qntPorEspecie[i];
    });
    return objeto;
  }
  species.find((cadaEspecie) => {
    if (animal.specie === cadaEspecie.name) {
      return cadaEspecie.residents.length;
    }
    return cadaEspecie.residents.length;
  });
}

console.log(countAnimals({ specie: 'penguins' }));

module.exports = countAnimals;
