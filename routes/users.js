const express = require('express');
const router = express.Router();
const responseManager = require('../middlewares/response-handler');
const validationResult = require('../middlewares/validation-result');
const fs = require('fs').promises;
const User=require('../models/users');
//const UsersCtrl=require('../controllers/user-controller');
router.get('/',

    responseManager,
    validationResult,
    async (req, res) => {
        try {

           // const user = await User.findOne({email:req.body.email});
            const user = await User.find();

            res.onSuccess(user);
        } catch (e) {
            res.onError(e);
        }
    }
);

module.exports = router;