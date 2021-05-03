const http = require('http');
const express = require('express');
const mongoose = require('mongoose');
const router = require('./router');
const {mongodb}=require('./config');
const cors = require('cors');
const app = express();


let corsOptions = {
    origin: 'http://127.0.0.1:3000',
    optionsSuccessStatus: 200 // For legacy browser support
};


app.use(cors(corsOptions));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use('/uploads', express.static('uploads'));
global.__homedir = __dirname;


router(app);

let url=mongodb.link;
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(() => {
    const server = http.createServer(app);
    server.listen(3000);

});
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('connected', ()=>console.log('connected'));
