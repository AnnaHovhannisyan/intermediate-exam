const AppError = require('../managers/app-error');
const UserController= require('../controllers/user-controller');
const email = require('../managers/email-manager');
class RegisterController{
async register(data) {
    let user = await UserController.add(data);

    return user;
};

}

module.exports= new RegisterController();


