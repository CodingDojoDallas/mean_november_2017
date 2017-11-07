module.exports = function(app){
	//5a01ca32eae23f34a044c552
	var Packs = require("./models/pack")
	ObjectId = require('mongoose').Types.ObjectId
	
	
	app.get('/', dashboard)
	
	app.post('/packs', create_pack)
	
	app.get('/packs/new', new_pack)
	
	app.get('/packs/edit/:id', edit_pack)
	
	app.post('/packs/destroy/:id', destroy_pack)
	
	app.get('/packs/:id', show_pack)
	//here --v
	app.post('/packs/:id', update_pack)
	
	function dashboard (req, res) {
		Packs.find({},(err, packs)=>{
			if (err){
				console.log("error")
			}
			
			res.render("index",{packs: packs})
		})
	}
	
	function show_pack (req, res){
		
		Packs.find({_id: req.params.id},(err,pack) =>{
			if (err)
				console.log(err);
			else{
				res.render("show", {pack: pack[0]});
			}
		})
	}

	function new_pack (req, res) {
		var errors = req.session.errors;
		delete req.session.errors
		res.render("new", {errors: errors});
	}
	
	function create_pack (req, res){
		pack = new Packs(pack_params(req))
		pack.save((err) => {
			if (err){
				console.log("errors")
				req.session.errors = pack.errors
				res.redirect('/packs/new')
			}
			else{
				res.redirect('/packs/'+ pack._id)
			}
		});
	}
	
	function edit_pack (req, res){
		Packs.find({_id: req.params.id},(err,pack) =>{
			if (err)
				console.log(err);
			else{
				console.log(pack[0]);
				errors = req.session.errors
				delete req.session.errors
				res.render("edit", {pack: pack[0], errors: errors});
			}
		})
		
	}
	
	function update_pack (req, res){
		Packs.findOne({_id: req.params.id},(err, pack) =>{
			pack.pack_name= req.body.pack_name;
			pack.animal= req.body.animal;
			pack.pack_size= req.body.pack_size;
			pack.save((err) =>{
				if (err){
					console.log("errors")
					req.session.errors = pack.errors
					res.redirect('/packs/edit/'+ req.params.id )
				}
				else{
					return res.redirect("/packs/"+req.params.id)
				}
			})
		}) 
	}
	
	function destroy_pack (req, res){
		Packs.remove({_id: req.params.id}, (err) =>{
			if (err){
				console.log(err);
			}
			res.redirect('/')
		});
	}
	
	//helpers
	function pack_params(req){
		return {
			animal: req.body.animal,
			pack_size: req.body.pack_size,
			pack_name: req.body.pack_name
		}
	}
/*	function auth_pack_exists(success,nope){
		console.log("authorized")
		if (true)
			return success();
		else
			return nope();
	} */
	
}