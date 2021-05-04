const express = require('express');
const responseManager = require('../middlewares/response-handler');
const validationResult = require('../middlewares/validation-result');
const RegisterController = require('../controllers/register-controller');
const {body} = require('express-validator');
const router = express.Router();

router.post('/',

    body('password').exists(),
    body('email').exists(),
    responseManager,
    validationResult,
    async (req, res) => {
        try {

            const user = await RegisterController.register({
               email:req.body.email,
                password:req.body.password
            });

            res.onSuccess(user);
        } catch (e) {
            res.onError(e);
        }
    }
);
module.exports = router;