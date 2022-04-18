const data = require('../data/zoo_data');

const { species } = data;
const todasEspecies = species.map((especie) => especie.name);
const qntPorEspecie = species.map((especie) => especie.residents.length);

function countAnimals(animal) {
  const objeto = {};
  if (!animal) {
    todasEspecies.forEach((each, i) => {
      objeto[each] = qntPorEspecie[i];
    });
    return objeto;
  } else if (animal.sex === "female") {
    const especies = species.find(
      (cadaEspecie) => animal.specie === cadaEspecie.name
    ).residents;
    return especies.filter((each) => each.sex === "female").length;
  } else if (animal.sex === "male") {
    const especies = species.find(
      (cadaEspecie) => animal.specie === cadaEspecie.name
    ).residents;
    return especies.filter((each) => each.sex === "male").length;
  } 
    const especies = species.find(
      (cadaEspecie) => animal.specie === cadaEspecie.name
    ).residents.length;
    return especies;
}

console.log(countAnimals({ specie: 'lions' }));

module.exports = countAnimals;
