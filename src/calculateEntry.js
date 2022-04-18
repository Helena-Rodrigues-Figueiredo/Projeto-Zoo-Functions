// const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const { prices } = data;

function countEntrants(entrants) {
  const obj = { child: 0, adult: 0, senior: 0 };
  entrants.forEach((dado) => {
    if (dado.age < 18) {
      obj.child += 1;
    } else if (dado.age >= 18 && dado.age < 50) {
      obj.adult += 1;
    } else {
      obj.senior += 1;
    }
  });
  return obj;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const crianca = countEntrants(entrants).child * prices.child;
  const adulto = countEntrants(entrants).adult * prices.adult;
  const idoso = countEntrants(entrants).senior * prices.senior;
  const soma = crianca + adulto + idoso;
  return soma;
}

module.exports = { calculateEntry, countEntrants };
