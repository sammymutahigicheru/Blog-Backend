var models = require('./server.js').models;

// var toSave = [
//     {name:'sammy',email:"sammymutahi12@gmail.com"},
//     {name:'sammy1',email:"sammymutahi121@gmail.com"},
//     {name:'sammy2',email:"sammymutahi122@gmail.com"},
//     {name:'sammy3',email:"sammymutahi123@gmail.com"},
//     {name:'sammy4',email:"sammymutahi123@gmail.com"},
//     {name:'sammy5',email:"sammymutahi125@gmail.com"},
//     {name:'sammy6',email:"sammymutahi126@gmail.com"},
//     {name:'sammy7',email:"sammymutahi127@gmail.com"},
//     {name:'sammy8',email:"sammymutahi128@gmail.com"},
//     {name:'sammy9',email:"sammymutahi129@gmail.com"},
//     {name:'sammy0',email:"sammymutahi120@gmail.com"},
// ];

// toSave.map(obj =>{
//     models.Profile.create(obj, (err,result) =>{
//         console.log("Created?",result);
//     })
// })

/**
 * var filter = {
    where: {
        name: {like: 'sammy'}
    },
    order: 'id ASC',
    fields: {
        email: true
    }
}
 * 
 */


models.Profile.findById('5ff559b80b093a32a8f25c07',(err,found) =>{
    console.log("Found?",err,found);
    found.destroy();
})