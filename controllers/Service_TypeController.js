var Service_TypeModel = require('../models/Service_TypeModel');

var Task = function (task) {
    this.task = task.task;
};

Task.getService_TypeBy = async function getService_TypeBy(data, result) {
    var service_typeList = await Service_TypeModel.getService_TypeBy(data);
    result(service_typeList);
}
Task.getService_TypeByService_TypeCode = async function getService_TypeByService_TypeCode(data, result) {
    var service_type = await Service_TypeModel.getService_TypeByService_TypeCode(data);
    result(service_type);
}
Task.insertService_Type = async function insertService_Type(data, result) {
    var last_code = await Service_TypeModel.getLastCode();
    var response = await Service_TypeModel.insertService_Type(data,last_code);
    response.service_type_id = service_type_id;
    result(response);
}
Task.updateService_TypeByService_TypeCode = async function updateService_TypeByService_TypeCode(data, result) {
    var response = await Service_TypeModel.updateService_TypeByService_TypeCode(data);
    result(response);
}

Task.deleteService_TypeByService_TypeCode = async function deleteService_TypeByService_TypeCode(data, result) {
    var response = await Service_TypeModel.deleteService_TypeByService_TypeCode(data);
    result(response);
}

module.exports = Task;