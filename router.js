module.exports = (app) => {
    app.use('/register', require('./routes/register'));
    app.use('/users', require('./routes/users'));
    app.use('/', require('./routes/index'));
};