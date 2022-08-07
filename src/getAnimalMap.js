const data = require('../data/zoo_data');

const { species } = data;

function getAnimalMap(options) {
  if (!options || (Object.keys(options).length <= 2 && (options.sex || options.sorted))) {
    return species.reduce((acc, animal) => {
      acc[animal.location].push(animal.name);
      return acc;
    }, { NE: [], NW: [], SE: [], SW: [] });
  }
}

module.exports = getAnimalMap;
