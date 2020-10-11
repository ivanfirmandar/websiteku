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
        res.json({
            'status' : 'Success',
            'message' : 'Berhasil Login',
            'data' : {
                'userid' : req.body.userid,
                'password' : req.body.password,
            }
        })
    },
    checkAuth : (req,res,next)=>{
        if(req.session.userid){
            next();
        }else{
            res.sendFile(config.absoluteDir + '/views/404.html');
        }
    },
    deleteAuth : (req,res,next) =>{
        try {
            req.session.destroy()
            res.redirect('/')
        } catch (error) {
            res.json({
                'status' : 'Failed',
                'message' : 'Session Gagal Dihapus',
            })
        }
    }
}