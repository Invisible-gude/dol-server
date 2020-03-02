var sql = require('./BaseModel');

var Task = function (task) {
    this.task = task.task;
};

Task.getLogin = function getLogin(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT * FROM tb_employee "
            + " WHERE employee_username = " + sql.escape(data.employee_username)
            + " AND employee_password = " + sql.escape(data.employee_password);

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
Task.getEmployeeBy = function getEmployeeBy() {
    return new Promise(function (resolve, reject) {
        var str = "SELECT * FROM tb_employee";

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
Task.getEmployeeByEmployeeCode = function getEmployeeByEmployeeCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT * FROM tb_employee WHERE employee_id = '" + data.employee_id + "' ";

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
Task.insertEmployee = function insertEmployee(data, last_code) {
    return new Promise(function (resolve, reject) {
        var str = "INSERT INTO tb_employee (employee_id, department_id, employee_name, employee_lastname, employee_email, employee_tel, employee_username, employee_password)"
            + " VALUES ('" + last_code + "', "
            + " '" + data.department_id + "', "
            + " '" + data.employee_name + "', "
            + " '" + data.employee_lastname + "', "
            + " '" + data.employee_email + "', "
            + " '" + data.employee_tel + "', "
            + " '" + data.employee_username + "', "
            + " '" + data.employee_password + "') ";

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
Task.updateEmployeeByEmployeeCode = function updateEmployeeByEmployeeCode(data) {
    return new Promise(function (resolve, reject) {
        var str = " UPDATE tb_employee "
            + " SET employee_name = '" + data.employee_name + "',"
            + " employee_lastname = '" + data.employee_lastname + "',"
            + " employee_email = '" + data.employee_email + "',"
            + " employee_tel = '" + data.employee_tel + "',"
            + " employee_username = '" + data.employee_username + "',"
            + " employee_password = '" + data.employee_password + "'"
            + " WHERE employee_id = '" + data.employee_id + "'";

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


Task.deleteEmployeeByEmployeeCode = function deleteEmployeeByEmployeeCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "DELETE FROM tb_employee WHERE employee_id = '" + data.employee_id + "' ";

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
        var str = "SELECT IFNULL(CONCAT('E',LPAD( SUBSTRING(max(employee_id), 2, 5)+1,4,'0')), 'E0001') AS last_code  FROM tb_employee ";

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