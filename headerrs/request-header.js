const header=(req,res)=>{
//getting req headerr
res.json({
    reqheader:req.headers
})
}
module.exports={header}