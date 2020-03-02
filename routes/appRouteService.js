var ServiceController = require('../controllers/ServiceController');

module.exports = function (app) {
    app.post('/service/getServiceBy', function (req, res) {
        ServiceController.getServiceBy(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/service/getServiceByServiceCode', function (req, res) {
        ServiceController.getServiceByServiceCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/service/insertService', function (req, res) {
        ServiceController.insertService(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/service/updateServiceByServiceCode', function (req, res) {
        ServiceController.updateServiceByServiceCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })

    app.post('/service/deleteServiceByServiceCode', function (req, res) {
        ServiceController.deleteServiceByServiceCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
}