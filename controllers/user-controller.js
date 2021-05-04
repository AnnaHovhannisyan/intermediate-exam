const User = require('../models/users');
const Bcrypt = require('../managers/bcrypt');
const AppError = require('../managers/app-error');
class UserController{

    async add(data) {
        const {email, password} = data;
        if (await User.exists({email: email})) {
            throw new Error('USER exists');
        } else {
            const hash = await Bcrypt.hash(password);
            const user = new User({
                password: hash
            });
            user.email = email;

            return user.save();
        }

    }

}

module.exports= new UserController();