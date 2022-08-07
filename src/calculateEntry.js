const data = require('../data/zoo_data');

const { prices } = data;

function countEntrants(entrants) {
  const childAge = entrants.filter((person) => person.age < 18).length;
  const adultAge = entrants.filter((person) => person.age >= 18 && person.age < 50).length;
  const seniorAge = entrants.filter((person) => person.age >= 50).length;
  return { child: childAge, adult: adultAge, senior: seniorAge };
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const entrantsAges = countEntrants(entrants);
  const { child, adult, senior } = entrantsAges;
  return (child * prices.child) + (adult * prices.adult) + (senior * prices.senior);
}

module.exports = { calculateEntry, countEntrants };
