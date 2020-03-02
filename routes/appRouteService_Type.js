var Service_TypeController = require('../controllers/Service_TypeController');

module.exports = function (app) {
    app.post('/service_type/getServiceBy', function (req, res) {
        Service_TypeController.getService_TypeBy(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/service_type/getService_TypeByService_TypeCode', function (req, res) {
        Service_TypeController.getService_TypeByService_TypeCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/service_type/insertService_Type', function (req, res) {
        Service_TypeController.insertService_Type(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/service_type/updateService_TypeByService_TypeCode', function (req, res) {
        Service_TypeController.updateService_TypeByService_TypeCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })

    app.post('/service_type/deleteService_TypeByService_TypeCode', function (req, res) {
        Service_TypeController.deleteService_TypeByService_TypeCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
}