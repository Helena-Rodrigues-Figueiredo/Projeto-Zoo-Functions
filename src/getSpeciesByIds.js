const data = require("../data/zoo_data");

const { species } = data;

function getSpeciesByIds(...ids) {
  const encontraEspecie = species.filter((especie) =>
    ids.find((item) => {
      if (ids === []) return [];
      if (item === especie.id) return especie;
    }),
  );
  return encontraEspecie;
}

module.exports = getSpeciesByIds;
