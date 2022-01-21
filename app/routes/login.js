module.exports = function(application){
    application.get('/login', function(req, res){
        res.status(200).json({code: 200, message: "Logar com o usuario"})
    })
    
    application.post('/logar', function(req, res){
        res.status(200).json({code: 200, message: "E isso"})
    })
}