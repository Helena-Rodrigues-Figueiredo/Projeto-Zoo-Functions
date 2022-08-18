const data = require('../data/zoo_data');

const { species } = data;

function noParams() {
  return species.reduce((acc, animal) => {
    acc[animal.location].push(animal.name);
    return acc;
  }, { NE: [], NW: [], SE: [], SW: [] });
}

function withParams(sex, specie) {
  if (sex !== undefined) {
    return specie.residents.reduce((result, resident) => {
      if (resident.sex === sex) {
        result.push(resident.name);
      }
      return result;
    }, []);
  }
  return specie.residents.map((resident) => resident.name);
}

function includeNamesParam(options) {
  const { sex, sorted } = options;
  const result = { NE: [], NW: [], SE: [], SW: [] };
  species.forEach((specie) => {
    let animals = [];
    if (sorted === true) {
      animals = withParams(sex, specie).sort();
    } else {
      animals = withParams(sex, specie);
    }
    result[specie.location].push({ [specie.name]: animals });
    animals = [];
  });
  return result;
}

function getAnimalMap(options) {
  if (!options || !options.includeNames) {
    const result = noParams();
    return result;
  }
  const result = includeNamesParam(options);
  return result;
}

module.exports = getAnimalMap;
