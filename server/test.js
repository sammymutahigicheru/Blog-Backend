var models = require('./server.js').models;

models.Profile.findOrCreate({name:'sammy'},(err,profile) =>{
    if (err){
        console.log("There was an error",err);
    }else if(profile){
        profile.updateAttributes({
            email:"sammymutahi12@gmail.com"
        },(updateError,updated) =>{
            console.log("saved?",updateError, updated);
        })
    }
})