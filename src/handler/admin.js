const config = require('../../config')
module.exports = {
    createAuth : (req,res,next) => {
        if (req.body.userid !== config.userid) {
            return res.send('User ID Anda Salah')
        }else{
            if (req.body.password !== config.password) {
                return res.send('Password Anda Salah')
            }
        }
        req.session.userid = req.body.userid;
        req.session.password = req.body.password;
        res.redirect('/admin');
    },
    checkAuth : (req,res,next)=>{
        if(req.session.userid){
            next();
        }else{
            res.send("No Authentication");
        }
    }
}