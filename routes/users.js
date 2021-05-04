const express = require('express');
const router = express.Router();
const responseManager = require('../middlewares/response-handler');
const validationResult = require('../middlewares/validation-result');
const User=require('../models/users');
const Bcrypt = require('../managers/bcrypt');
router.get('/',

    responseManager,
    validationResult,
    async (req, res) => {
        try {

            const user = await User.find();

            res.onSuccess(user);
        } catch (e) {
            res.onError(e);
        }
    }
);

router.route('/:email').get(
    responseManager,
    validationResult,
    async (req, res) => {

    try {

         const user = await User.findOne({email:req.params.email});

        res.onSuccess(user);
    } catch (e) {
        res.onError(e);
    }

}).put(
    responseManager,
    validationResult,
    async (req, res) => {
    try {
        const user = await User.findOne({email:req.params.email});

        if (user) {
            const hash = await Bcrypt.hash(req.body.password);
            user.email = req.body.email;
            user.password = hash;

            await user.save();


        }
        res.onSuccess(user);
    } catch (e) {
        res.onError(e);
    }

}).delete(
    responseManager,
    validationResult,
    async (req, res) => {
    try {
        const user = await User.findOne({email:req.params.email});
        if (user) {
            await user.remove();
        }
        res.onSuccess(user);
    } catch (e) {
        res.onError(e);
    }
});

module.exports = router;