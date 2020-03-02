var DepartmentController = require('../controllers/DepartmentController');

module.exports = function (app) {
    app.post('/department/getDepartmentBy', function (req, res) {
        DepartmentController.getDepartmentBy(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/department/getDepartmentByDepartmentCode', function (req, res) {
        DepartmentController.getDepartmentByDepartmentCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/department/insertDepartment', function (req, res) {
        DepartmentController.insertDepartment(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/department/updateDepartmmentByDepartmentCode', function (req, res) {
        DepartmentController.updateDepartmmentByDepartmentCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })

    app.post('/department/deleteDepartmentByDepartmentCode', function (req, res) {
        DepartmentController.deleteDepartmentByDepartmentCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
}