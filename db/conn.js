const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/login",{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log("Db Connection Successful");
})
.catch((err)=>{
    console.log(err);
});

