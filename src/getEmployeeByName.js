const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {
  let retorno = {};
  employees.filter((empregado) => {
    if (employeeName === empregado.firstName || employeeName === empregado.lastName) {
      retorno = empregado;
    }
    return retorno;
  });
  return retorno;
}

module.exports = getEmployeeByName;
