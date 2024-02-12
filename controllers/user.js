const user=require('../models/db.js');
const mongoose=require('mongoose');

//creating the schema
const userModel=mongoose.model('users',user.usermodel);

const getUsers= async(req,res)=>{
const user= await userModel.find();
console.log(user);
return res.json({
    success:true,
    message:'All User',
    users:user
})
}

const getUserById=async (req,res)=>{
    console.log('query params****',req.query.id)
    const id=req.query.id;
    const user=await userModel.find({_id:id});
    if(!user){
        return res.json({
            success:false,message:'No User Found'
        })
    }
    else{
        return res.status(200).json({
            success:true,message:'User found successfully',user:user
        })
    }
}

const addNewUser= async(req,res)=>{
    //existence of the user
    const {firstname,lastname,email,jobtitle,gender}=req.body;
    const user= await userModel.find({email:email});
    if(user.length>0){
        return res.json({
            success:false,
            message:'User is already Exists',
            user:null
        })
    }
    else{
        const newuser= await userModel.create({
            fistname:firstname,
            lastname:lastname,
            email:email,
            jobtitle:jobtitle,
            gender:gender
        });
        return res.status(201).json({
            success:true,
            message:'New user has been created successfully',
            user:newuser
        })
    }
}

const deleteUser=async (req,res)=>{
    const id=req.query.id;
    console.log(id);
    const user=await userModel.findOne({_id:id});
    if(!user){
        return res.json({
            success:false,
            message:'No User Found'
        })
    }
    else{
        const user=await userModel.deleteOne({_id:id});
        return res.json({
            success:true,
            message:'User deleted succesfully'
        })
    }
}

const updateUser=async (req,res)=>{
    const id=req.params.id;
    const {firstname,lastname,email,jobtitle,gender}=req.body;
    console.log(req.body);
    const user=await userModel.findOne({_id:id});
    if(!user){
        return res.status(401).json({
            success:false,message:'No user found'
        })
    }
    else{
        const user=await userModel.findByIdAndUpdate(id,{
          firstname:firstname,
          lastname:lastname,
          email:email,
          jobtitle:jobtitle,
          gender:gender
        });
        return res.json({
            success:true,
            message:'User has been updated',
            user:user
        })
    }
}

module.exports={getUsers,addNewUser,getUserById,deleteUser,updateUser}
