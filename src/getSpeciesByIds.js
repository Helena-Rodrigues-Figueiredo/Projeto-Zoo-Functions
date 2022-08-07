const data = require('../data/zoo_data');

const { species } = data;

function getSpeciesByIds(...ids) {
  if (ids.length === 0) return [];
  const getSpecies = species.filter((specie) => ids.some((item) => item === specie.id));
  return getSpecies;
}

module.exports = getSpeciesByIds;
