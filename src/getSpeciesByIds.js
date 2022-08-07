const data = require('../data/zoo_data');

const { species } = data;

function getSpeciesByIds(...ids) {
  return ids ? species.filter((specie) => ids.some((item) => item === specie.id)) : [];
}

module.exports = getSpeciesByIds;
