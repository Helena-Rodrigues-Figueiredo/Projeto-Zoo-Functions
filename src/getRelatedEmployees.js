const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  let resultado;
  employees.filter((empregado) => {
    empregado.managers.find((nome) => {
      if (nome !== id) {
        resultado = true;
      }
      return resultado;
    });
    return resultado;
  });
  return resultado;
}

function getRelatedEmployees(managerId) {
  // seu código aqui
}

module.exports = { isManager, getRelatedEmployees };
