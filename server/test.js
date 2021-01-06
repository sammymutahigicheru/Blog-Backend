var models = require('./server.js').models;

models.Profile.create({name:'sammy'},(err,profile) =>{
    console.log("data?",err,profile);
})