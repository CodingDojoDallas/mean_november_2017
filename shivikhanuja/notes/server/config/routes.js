var notes = require('../controllers/notes'),
    path  = require('path');


module.exports = (app) => {
    app.get('/notes', notes.index);
    app.post('/notes', notes.create);

    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./client/dist/index.html"))
    });

};