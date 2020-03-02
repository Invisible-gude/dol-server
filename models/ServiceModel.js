var sql = require('./BaseModel');

var Task = function (task) {
    this.task = task.task;
};

Task.getServiceBy = function getServiceBy() {
    return new Promise(function (resolve, reject) {
        var str = "SELECT * FROM tb_service";

        sql.query(str, function (err, res) {
            if (err) {
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                };
                resolve(require);
            } else {
                const require = {
                    data: res,
                    error: [],
                    query_result: true,
                };
                resolve(require);
            }
        });
    });
}
Task.getServiceByServiceCode = function getServiceByServiceCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT * FROM tb_service WHERE service_id = '" + data.service_id + "' ";

        sql.query(str, function (err, res) {
            if (err) {
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                };
                resolve(require);
            } else {
                const require = {
                    data: res,
                    error: [],
                    query_result: true,
                };
                resolve(require);
            }
        });
    });
}
Task.insertService = function insertService(data, last_code) {
    return new Promise(function (resolve, reject) {
        var str = "INSERT INTO tb_service (service_id, service_type_id, service_name)"
            + " VALUES ('" + last_code + "', "
            + " '" + data.service_type_id + "', "
            + " '" + data.service_name + "') ";

        sql.query(str, function (err, res) {
            if (err) {
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                };
                resolve(require);
            } else {
                const require = {
                    data: res,
                    error: [],
                    query_result: true,
                };
                resolve(require);
            }
        });
    });
}
Task.updateServiceByServiceCode = function updateServiceByServiceCode(data) {
    return new Promise(function (resolve, reject) {
        var str = " UPDATE tb_service "
            + " SET service_name = '" + data.service_name + "'"
            + " WHERE service_id = '" + data.service_id + "'";

        sql.query(str, function (err, res) {
            if (err) {
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                };
                resolve(require);
            } else {
                const require = {
                    data: res,
                    error: [],
                    query_result: true,
                };
                resolve(require);
            }
        });
    });
}

Task.deleteServiceByServiceCode = function deleteServiceByServiceCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "DELETE FROM tb_service WHERE service_id = '" + data.service_id + "' ";

        sql.query(str, function (err, res) {
            if (err) {
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                };
                resolve(require);
            } else {
                const require = {
                    data: res,
                    error: [],
                    query_result: true,
                };
                resolve(require);
            }
        });
    });
}

Task.getLastCode = function getLastCode() {
    return new Promise(function (resolve, reject) {
        var str = "SELECT IFNULL(CONCAT('S',LPAD( SUBSTRING(max(service_id), 2, 5)+1,4,'0')), 'S0001') AS last_code  FROM tb_service ";

        sql.query(str, function (err, res) {
            if (err) {
                resolve(err);
            } else {
                resolve(res[0].last_code);
            }
        });
    });
}

module.exports = Task;