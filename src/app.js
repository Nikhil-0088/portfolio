const express=require('express');
const path=require('path');
const app=express();
require('./db/conn');
const msg=require('./models/getmsg');
const port=process.env.PORT || 3000;
const static_path=path.join(__dirname,"../public")
app.use(express.static(static_path))
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.set('view engine','ejs')
app.get('/',(req,res)=>{
    res.render('index')
})
app.get('/projects',(req,res)=>{
    res.render('projects')
})
app.get('/aboutme',(req,res)=>{
    res.render('about')
})
app.get('/contact',(req,res)=>{
     res.render('contact',{sucess:""})
})
app.get('*',(req,res)=>{
    res.send("The page your looking for does not exist")
})
app.post('/contact',async(req,res)=>{
    if(!(req.body.name==""||req.body.email==""||req.body.phone==""|| req.body.message==""||req.body.phone.length!=10)){
        try {
           const sendMessage=new msg({
             fullname:req.body.name,
             email:req.body.email,
             phone:req.body.phone,
             message:req.body.message,
             seen:false
           })
         const send=await sendMessage.save();
         res.status(200).render('contact',{sucess:"I recived your message we will get in touch as soon as possible!!!"})
        } catch (error) {
         res.status(400).render('contact',{sucess:"The message was not delivered due to some issue....please try after some time"})
            console.log(error)
        }
     }
     else{
         res.status(400).render('contact',{sucess:"Message was not sent because the data in the form is invalid please enter a valid data."})   
     }
})
app.listen(port,()=>{
   console.log(`app is listening to port ${port}....`)
})
