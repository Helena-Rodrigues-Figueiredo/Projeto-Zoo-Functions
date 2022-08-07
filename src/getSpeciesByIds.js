const data = require('../data/zoo_data');

const { species } = data;

function getSpeciesByIds(...ids) {
  if (ids.length === 0) return [];
  const filter = species.filter((specie) => ids.some((item) => item === specie.id));
  return filter;
}

module.exports = getSpeciesByIds;
