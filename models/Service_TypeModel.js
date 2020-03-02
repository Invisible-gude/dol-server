var sql = require('./BaseModel');

var Task = function (task) {
    this.task = task.task;
};

Task.getService_TypeBy = function getService_TypeBy() {
    return new Promise(function (resolve, reject) {
        var str = "SELECT * FROM tb_service_type";

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
Task.getService_TypeByService_TypeCode = function getService_TypeByService_TypeCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT * FROM tb_service_type WHERE service_type_id = '" + data.service_type_id + "' ";

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
Task.insertService_Type = function insertService_Type(data, last_code) {
    return new Promise(function (resolve, reject) {
        var str = "INSERT INTO tb_service_type (service_type_id, service_group_id, service_type_name)"
            + " VALUES ('" + last_code + "', "
            + " '" + data.service_group_id + "', "
            + " '" + data.service_type_name + "') ";

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
Task.updateService_TypeByService_TypeCode = function updateService_TypeByService_TypeCode(data) {
    return new Promise(function (resolve, reject) {
        var str = " UPDATE tb_service_type "
            + " SET service_type_name = '" + data.service_type_name + "'"
            + " WHERE service_type_id = '" + data.service_type_id + "'";

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

Task.deleteService_TypeByService_TypeCode = function deleteService_TypeByService_TypeCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "DELETE FROM tb_service_type WHERE service_type_id = '" + data.service_type_id + "' ";

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
        var str = "SELECT IFNULL(CONCAT('ST',LPAD( SUBSTRING(max(service_type_id), 2, 5)+1,4,'0')), 'ST001') AS last_code  FROM tb_service_type ";

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