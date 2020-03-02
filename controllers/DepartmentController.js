var DepartmentModel = require('../models/DepartmentModel');

var Task = function (task) {
    this.task = task.task;
};

Task.getDepartmentBy = async function getDepartmentBy(data, result) {
    var departmentList = await DepartmentModel.getDepartmentBy(data);
    result(departmentList);
}
Task.getDepartmentByDepartmentCode = async function getDepartmentByDepartmentCode(data, result) {
    var department = await DepartmentModel.getDepartmentByDepartmentCode(data);
    result(department);
}
Task.insertDepartment = async function insertDepartment(data, result) {
    var last_code = await DepartmentModel.getLastCode();
    var response = await DepartmentModel.insertDepartment(data,last_code);
    response.position_id = last_code;
    result(response);
}
Task.updateDepartmmentByDepartmentCode = async function updateDepartmmentByDepartmentCode(data, result) {
    var response = await DepartmentModel.updateDepartmmentByDepartmentCode(data);
    result(response);
}

Task.deleteDepartmentByDepartmentCode = async function deleteDepartmentByDepartmentCode(data, result) {
    var response = await DepartmentModel.deleteDepartmentByDepartmentCode(data);
    result(response);
}

module.exports = Task;