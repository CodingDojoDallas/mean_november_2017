var Note = require('../models/note');


module.exports = {
    index: (req,res) => {
        Note.find({},(err, notes) => {
            if (err) {
                return res.json(err.errors);
            }

            return res.json(notes);
        });
    },

    create: (req,res) => {
        let note = new Note(req.body);

        note.save((err) =>{
            if (err) {
                return res.json(err.errors);
            }
            return res.json(note);
        });
    }
}