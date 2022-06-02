const mongoose = require('mongoose');
mongoose.connect("mongodb_url",{
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

