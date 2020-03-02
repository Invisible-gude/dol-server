var ServiceModel = require('../models/ServiceModel');

var Task = function (task) {
    this.task = task.task;
};

Task.getServiceBy = async function getServiceBy(data, result) {
    var serviceList = await ServiceModel.getServiceBy(data);
    result(serviceList);
}
Task.getServiceByServiceCode = async function getServiceByServiceCode(data, result) {
    var service = await ServiceModel.getServiceByServiceCode(data);
    result(service);
}
Task.insertService = async function insertService(data, result) {
    var last_code = await ServiceModel.getLastCode();
    var response = await ServiceModel.insertService(data,last_code);
    response.service_id = service_id;
    result(response);
}
Task.updateServiceByServiceCode = async function updateServiceByServiceCode(data, result) {
    var response = await ServiceModel.updateServiceByServiceCode(data);
    result(response);
}

Task.deleteServiceByServiceCode = async function deleteServiceByServiceCode(data, result) {
    var response = await ServiceModel.deleteServiceByServiceCode(data);
    result(response);
}

module.exports = Task;