var sql = require('./BaseModel');

var Task = function (task) {
    this.task = task.task;
};

Task.getDepartmentBy = function getDepartmentBy() {
    return new Promise(function (resolve, reject) {
        var str = "SELECT * FROM tb_department";

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
Task.getDepartmentByDepartmentCode = function getDepartmentByDepartmentCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT * FROM tb_department WHERE department_id = '" + data.department_id + "' ";

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
Task.insertDepartment = function insertDepartment(data, last_code) {
    return new Promise(function (resolve, reject) {
        var str = "INSERT INTO tb_department (department_id, department_name)"
            + " VALUES ('" + last_code + "', "
            + " '" + data.department_name + "') ";
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
Task.updateDepartmmentByDepartmentCode = function updateDepartmmentByDepartmentCode(data) {
    return new Promise(function (resolve, reject) {
        var str = " UPDATE tb_department "
            + " SET department_name = '" + data.department_name + "'"
            + " WHERE department_id = '" + data.department_id + "'";

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

Task.deleteDepartmentByDepartmentCode = function deleteDepartmentByDepartmentCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "DELETE FROM tb_department WHERE department_id = '" + data.department_id + "' ";

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
        var str = "SELECT IFNULL(CONCAT('D',LPAD( SUBSTRING(max(department_id), 2, 5)+1,4,'0')), 'D0001') AS last_code  FROM tb_department ";

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