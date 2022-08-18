const data = require('../data/zoo_data');

const { species, hours } = data;

const animais = species.map((each) => each.name);
const dias = species.map((each) => each.availability);
const diasAnimais = {};
animais.forEach((each, index) => {
  diasAnimais[each] = dias[index];
});
const diasDaSemana = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const nomeDasAnimais = ['lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes',
  'frogs', 'otters', 'snakes'];

function qualDia(day) {
  const obj = {};
  const entradas = Object.entries(hours);
  entradas.forEach((each, index) => {
    if (each[0] === day) {
      obj[each[0]] = {
        officeHour: `Open from ${each[1].open}am until ${each[1].close}pm`,
        exhibition: species.filter((animal) => animal.availability.includes(each[0]))
          .map((elemento) => elemento.name),
      };
    }
  });
  return obj;
}

function parametroVazio() {
  const objeto = {};
  const entradas = Object.entries(hours);
  entradas.forEach((each, index) => {
    if (each[0] === 'Monday') {
      objeto[each[0]] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
    }
    if (each[0] !== 'Monday') {
      objeto[each[0]] = {
        officeHour: `Open from ${each[1].open}am until ${each[1].close}pm`,
        exhibition: species.filter((animal) => animal.availability.includes(each[0]))
          .map((elemento) => elemento.name),
      };
    }
  });
  return objeto;
}

function nomeDoBicho(bicho) {
  const nomeDoAnimal = species.find((animal) => animal.name === bicho);
  const animaisDays = nomeDoAnimal.availability;
  return animaisDays;
}

function getSchedule(scheduleTarget) {
  if (!scheduleTarget) {
    return parametroVazio();
  }
  if (scheduleTarget === nomeDasAnimais.find((animal) => animal === scheduleTarget)) {
    return nomeDoBicho(scheduleTarget);
  }
  if (scheduleTarget === 'Monday') {
    return { Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } };
  }
  if (scheduleTarget === diasDaSemana.find((dia) => dia === scheduleTarget)) {
    return qualDia(scheduleTarget);
  }
  return parametroVazio();
}

module.exports = getSchedule;
