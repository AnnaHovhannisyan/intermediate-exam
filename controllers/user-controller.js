const User = require('../models/users');
const Bcrypt = require('../managers/bcrypt');
const AppError = require('../managers/app-error');
const fs = require('fs');
class UserController{

    async add(data) {
        const {email, password} = data;
        if (await User.exists({email: data.email})) {
            throw new Error('USER exists');
        } else {
            const hash = await Bcrypt.hash(data.password);
            const user = new User({
                password: hash
            });
            user.email = data.email;

            return user.save();
        }

    }
}

module.exports= new UserController();