const express = require('express');
const showHandler = require('./handler/show');
const adminHandler = require('./handler/admin')
const session = require('express-session')
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())
app.use(session({secret : 'secret',resave:true,saveUninitialized:false}))
app.use('/', express.static('../views'));

app.get('/', showHandler.showHome);
app.post('/login', adminHandler.createAuth)
app.get('/logout',adminHandler.deleteAuth)
app.get('/admin', adminHandler.checkAuth ,showHandler.showAdmin)
app.listen(3000,()=>{
    console.log('Listening to port 3000');
})