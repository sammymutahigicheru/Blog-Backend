var models = require('./server.js').models;

models.Profile.findOrCreate({name:'sammy'},(err,profile) =>{
    if (err){
        console.log("There was an error",err);
    }else if(profile){
        profile.updateAttribute({
            email:"sammymutahi21@gmail.com"
        },(updateError,updated) =>{
            console.log("saved?",updateError, updated);
        })
    }
})