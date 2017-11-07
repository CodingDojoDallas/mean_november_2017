var People = require('./model')
module.exports = {
	index: (req, res) => {
		People.find({}, (err, people) => {
			
			
		res.json(people);
		})
	},
	createName: (req,res) => {
		var name = new People({name: req.params.name})
		name.save((err) => {
			if (err) console.log(err);
			res.redirect('/');
		})
	},
	destroyName: (req,res) => {
		People.remove({name: req.params.name},(err,person)=>{
			if (err) console.log(err);
			res.redirect('/');
		})
	},
	showName: (req,res) => {
		People.find({name: req.params.name}, (err, people) => {
			res.json(people)
		})
	}
	
}