const router = require('express-promise-router')();
const coesController = require('../controllers/coes.controller');


router.post('/clients', coesController.createClient);
router.post('/patients', coesController.createPatient);

router.get('/clients', coesController.listAllClients);
router.get('/patients', coesController.listAllPatients);

router.get('/clients/:id', coesController.findClientById)
router.get('/patients/:id', coesController.findPatientById)

router.put('/clients/:id', coesController.updateClientById)
router.put('/patients/:id', coesController.updatePatientById)

router.delete('/clients/:id', coesController.deleteClientById);
router.delete('/patients/:id', coesController.deletPatientById);

module.exports = router;