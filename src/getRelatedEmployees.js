const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  return employees.some((gerente) => gerente.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const funcionarios = employees.filter((element) => element.managers.includes(managerId));
  const lista = funcionarios.map((nome) => `${nome.firstName} ${nome.lastName}`);
  return lista;
}

console.log(isManager('5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = { isManager, getRelatedEmployees };
