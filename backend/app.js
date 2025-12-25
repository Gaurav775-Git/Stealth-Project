const express=require('express')
const app=express()
const cors=require('cors')
const path=require('path')
app.use(express.json())
app.use(cors(
  {
    origin:'http://localhost:5173',
    methods:['GET','POST','PUT','DELETE'],
    credentials:true
  }
))

app.get('/:semester/:subject/:unit',(req,res)=>{
  const {semester,subject,unit}=req.params
  const  filepath=path.join(__dirname,"upload",semester,subject,`${unit}.pdf`)
console.log(filepath)
  res.download(filepath,`${semester}-${subject}-${unit}.pdf`,(err)=>{
    if(err){
      console.log("error",err)
      res.status(404).send("file not found")
    }
    else{
      console.log("file downloaded")
    }
  })
})

app.listen(5000,()=>{
  console.log('server is running on port 5000')
})