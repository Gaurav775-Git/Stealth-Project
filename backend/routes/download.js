const express= require('express')
const path=require('path')
const router=express.Router()

router.get('/:semester/:subject/:unit',(req,res)=>{
  const {semester,subject,unit}=req.params
  const  filepath=path.join(__dirname,'..',"upload",semester,subject,`${unit}.pdf`)

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
 
module.exports=router