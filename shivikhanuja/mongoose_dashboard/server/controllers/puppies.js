var mongoose = require('mongoose');
var Puppy = mongoose.model('Puppy')
module.exports = {
    show: function(request,response) {
        Puppy.findOne({ _id: request.params.id }, function(error,puppy){
            response.render('index', { puppy : puppy });
        });
    },
    create: function(request,response){
        app.post('/result',function(request,response){
            var puppy = new Puppy(request.body)
            puppy.save(function(error){
                if(error){
                    request.session.errors = puppy.errors;
                    response.redirect('/')
                }
                else{
                response.redirect('/show')
                }        
            });
    },
    
    update: function(request,response){
        Puppy.update({ _id: request.params.id }, request.body, function(error, result){
            if (error) { console.log(error); 
            response.redirect('/');
            }
            else{
            response.redirect('/show')
            }
        });
    }
}