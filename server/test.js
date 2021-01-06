var models = require('./server.js').models;

models.Profile.findOrCreate({name:'sammy'},(err,profile) =>{
    console.log("data?",err,profile);
})