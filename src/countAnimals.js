const data = require('../data/zoo_data');

const { species } = data;
const todasEspecies = species.map((especie) => especie.name);
const qntPorEspecie = species.map((especie) => especie.residents.length);

function countAnimals(animal) {
  const objeto = {};
  let retornoNumerico;
  if (!animal) {
    todasEspecies.forEach((each, i) => {
      objeto[each] = qntPorEspecie[i];
    });
    return objeto;
  }
  species.find((cadaEspecie) => {
    if (animal.specie === cadaEspecie.name) {
      retornoNumerico = cadaEspecie.residents.length;
    }
    return retornoNumerico;
  });
}

console.log(countAnimals());

module.exports = countAnimals;
