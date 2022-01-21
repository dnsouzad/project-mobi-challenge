module.exports = function(application){
    application.get('/cadastro', function(req, res){
        res.status(200).json({code: 200, message: "Cadastrar um novo usuário"})
    })
    
    application.post('/cadastrar', function(req, res){
        res.status(200).json({code: 200, message: "É isso 2"})
    })
}