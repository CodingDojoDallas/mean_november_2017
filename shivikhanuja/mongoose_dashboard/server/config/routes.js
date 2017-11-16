var mongoose = require('mongoose');
var Puppy = mongoose.model('Puppy')
module.exports = function(app) {

    app.get('/index/:id',function(request,response){
        Puppy.findOne({ _id: request.params.id }, function(error,puppy){
            response.render('index', { puppy : puppy });
        });
    });

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
    });
    app.get('/:id/edit/', function(request, response){
        Puppy.find({ _id: request.params.id }, function(error, puppy) {
        if (error) { console.log(error); }
        response.render('edit', { puppy: puppy[0] });
        })
    });

    // Update
    app.post('/:id', function(request, response){
    Puppy.update({ _id: request.params.id }, request.body, function(error, result){
        if (error) { console.log(error); 
        response.redirect('/');
        }
        else{
        response.redirect('/show')
        }
    })
});
    app.get('/',function(request,response){
        console.log(request.session.errors);
        response.render('new',{errors: request.session.errors});
    });

    app.get('/show',function(request,response){
        Puppy.find({}, function(error,puppys){
            response.render('show', { puppys : puppys });
        });
    });
}