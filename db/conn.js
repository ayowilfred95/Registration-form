const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://ayowilfred:metropolitan95@cluster0.uhwgu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
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

