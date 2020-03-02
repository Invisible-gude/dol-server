var EmployeeModel = require('../models/EmployeeModel');

var Task = function (task) {
    this.task = task.task;
};

Task.getLogin = async function getLogin(data, result) {
    var employee = await EmployeeModel.getLogin(data);
    result(employee);
}
Task.getEmployeeBy = async function getEmployeeBy(data, result) {
    var employeeList = await EmployeeModel.getEmployeeBy(data);
    result(employeeList);
}
Task.getEmployeeByEmployeeCode = async function getEmployeeByEmployeeCode(data, result) {
    var employee = await EmployeeModel.getEmployeeByEmployeeCode(data);
    result(employee);
}
Task.insertEmployee = async function insertEmployee(data, result) {
    var last_code = await EmployeeModel.getLastCode();
    var response = await EmployeeModel.insertEmployee(data,last_code);
    response.employee_id = last_code;
    result(response);
}
Task.updateEmployeeByEmployeeCode = async function updateEmployeeByEmployeeCode(data, result) {
    var response = await EmployeeModel.updateEmployeeByEmployeeCode(data);
    result(response);
}

Task.deleteEmployeeByEmployeeCode = async function deleteEmployeeByEmployeeCode(data, result) {
    var response = await EmployeeModel.deleteEmployeeByEmployeeCode(data);
    result(response);
}

module.exports = Task;