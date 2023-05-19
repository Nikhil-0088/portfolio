const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://nikhil_0088:Jayasri0088@cluster0.bmke4qv.mongodb.net/",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("Connection sucessfull!!")
}).catch((err)=>{
    console.log(err)
})
