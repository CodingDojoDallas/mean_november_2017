var mongoose = require('mongoose')
var Bat = mongoose.model('bat')


module.exports = {
  index: (req, res) => {
    let bats = Bat.find({}, (err, bats) => {
         if (err) {
              console.log(err);
              return res.render('/');
         }
         return res.render('index', {bats: bats});

    });
  },
  new: (req, res) =>{
       console.log('******************');
       return res.render('new');
  },
  create: (req, res) =>{
       //take the data from the form
       //form data is always available in the req.body
      let bat = new Bat(req.body);
      bat.save((error) => {
        if (error){
          console.log(bat.errors);
          return res.redirect('new');
        }
        else {
          console.log(bat);
        }
        return res.redirect('/');
      });
  },
  edit: (req, res) =>{
       var bat = Bat.findOne({_id: req.params.id}, (err, bat) => {
            if (err) {
                 console.log(err);
            }
            return res.render('edit', {bat: bat});
       });
  },
  update: (req, res) =>{
       Bat.update({_id: req.params.id},
            req.body, (err, result) =>{
                 if (err) {console.log(err); }
            return res.redirect('/')
       });
  },
  show: (req, res) =>{
       var bat = Bat.findOne({_id: req.params.id}, (err, bat) => {
            if (err) {
                 console.log(err);
            }
            return res.render('show', {bat: bat});
       });

  },
  destroy: (req, res) =>{
       Bat.remove({_id: req.params.id},
            (err, result) =>{
                 if (err) {console.log(err); }
            return res.redirect('/')
       });
  }
}
