const data = require('../data/zoo_data');

const { species } = data;

function getSpeciesByIds(...ids) {
  if (ids.length === 0) {
    return [];
  }
  const especiesSolicitadas = species.filter((element) =>
    ids.find((value) => {
      if (element.id === value) {
        return true;
      }
      return false;
    }));
  return especiesSolicitadas;
}

console.log(getSpeciesByIds('0e7b460e-acf4-4e17-bcb3-ee472265db83'));

module.exports = getSpeciesByIds;
