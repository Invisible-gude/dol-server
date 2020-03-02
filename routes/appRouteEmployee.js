var EmployeeController = require('../controllers/EmployeeController');

module.exports = function (app) {
    app.post('/employee/getLogin', function (req, res) {    //  Not Controller
        EmployeeController.getLogin(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/employee/getEmployeeBy', function (req, res) {
        EmployeeController.getEmployeeBy(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/employee/getEmployeeByEmployeeCode', function (req, res) {
        EmployeeController.getEmployeeByEmployeeCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/employee/insertEmployee', function (req, res) {
        EmployeeController.insertEmployee(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    
    app.post('/employee/updateEmployeeByEmployeeCode', function (req, res) {
        EmployeeController.updateEmployeeByEmployeeCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })

    app.post('/employee/deleteEmployeeByEmployeeCode', function (req, res) {
        EmployeeController.deleteEmployeeByEmployeeCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
}