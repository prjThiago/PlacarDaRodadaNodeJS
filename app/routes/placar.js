module.exports = function(app){
    app.get('/placar', function(req, res){
       res.render('placar/form'); 
    });
    
    app.post('/placar', function(req, res){
        var gol = req.body;
        
        app.get('io').emit('gol', gol);
        
        res.redirect('/placar');
    });
};