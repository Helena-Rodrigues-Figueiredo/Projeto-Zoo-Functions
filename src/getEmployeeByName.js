const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  };
  const teste = species.filter((element) => {
    if(element.firstName === employeeName || element.lastName === employeeName) {
      return element;
    };
  )};
};

module.exports = getEmployeeByName;
