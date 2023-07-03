// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/codeial_development');

// const db = mongoose.connection;

// db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


// db.once('open', function(){
//     console.log('Connected to Database :: MongoDB');
// });


// module.exports = db;
const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/codeial22',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    family:4
});
const db=mongoose.connection
db.on('Error',console.error.bind(console,'Error connecting to the db'))
db.once('open',()=>{
    console.log('connected to the db')
})
module.exports=db;