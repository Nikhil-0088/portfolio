const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://nikhil_0088:<password>@cluster0.bmke4qv.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("Connection sucessfull!!")
}).catch((err)=>{
    console.log(err)
})
