const express=require('express');
const route=express.Router();
const user=require('../controllers/user.js');

route.get('/getuser',user.getUsers);
route.post('/adduser',user.addNewUser);
route.delete('/deleteuser',user.deleteUser)
route.patch('/updateuser/:id',user.updateUser)

module.exports=route