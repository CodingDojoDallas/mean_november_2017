var fs = require('fs')

function getBears(filepath, done){  //done is the callback function here
    fs.readFile(filepath), function (err, bears) {
        if (err) return done(err)

        fs.readFile('bears.dictionary.txt' , function(err,dict){
            if (err) return done(err)

            compareBears(bears, dict)       
        })  
    })

    function compareBears(bears, Dict){
        dict = dict.toString().split('\n')
        bears = bears.toString().split('\n').filter(function(bear){
            return dict.indexOf(bear) !== -1
        })
        done(null,bears)
    }
}

getBears