const { userid } = require('../../config');
const config = require('../../config');
module.exports = {
    showHome : (req,res)=>{
        res.sendFile(config.absoluteDir + '/views/index.html')
    },
    showAdmin : (req,res)=>{
        res.sendFile(config.absoluteDir + '/views/admin.html')
    },
    adminAuth : (req,res,next)=>{
        if (config.userid == req.body.userid) {
            
        }
    }
}