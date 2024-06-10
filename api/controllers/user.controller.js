import express from 'express';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
import User from '../models/user.model.js'
import Listing from '../models/listing.model.js';
export const test=(req,res)=>{
    res.json({
        message:"hello ansistors",
    });
};

export const updateUser=async(req,res,next)=>{
      //req.user.id is verified user
                       //re.params is the user id that is to be updated
                       //it is present in the header req of updateuser in router
    if(req.user.id !== req.params.id) return next(errorHandler(401,
        "you can update your own data"))
    try{
        //now the vedified user can perform the operations below 
        //present in the try block 
        //case1 : update passs:
        //step to read the passowrd given from user body and sunchash it encrypt it
        if(req.body.password){
            req.body.password =bcryptjs.hashSync(req.body.password,10)
        }
        const updateUser = await User.findByIdAndUpdate(req.params.id,{
            $set:{//probability :user doesnt update everyting > so the previous default info will be same as it is 
                username :req.body.username,
                email:req.body.email,
                password :req.body.password,
                avatar: req.body.avatar,
            } 
        },{new:true}) 
        const {password, ...rest}= updateUser._doc

        res.status(200).json(rest);
    }
    catch(err){
        next(err)
    }

}

export const deleteUser= async(req,res,next)=>{
    if(req.user.id !== req.params.id) return next(errorHandler(401,"you can only delete your account"));

    try{
        await User.findByIdAndDelete(req.params.id);
        res.clearCookie('access_token');
        res.status(200).json("user deleted successfully");
    }
    catch(error){
        next(error)
    }
};

export const getUserListings = async (req, res, next) => {
    if (req.user.id === req.params.id) {
      try {
        const listings = await Listing.find({ userRef: req.params.id });
        res.status(200).json(listings);
      } catch (error) {
        next(error);
      }
    } else {
      return next(errorHandler(401, 'You can only view your own listings!'));
    }
  };

  export const getUser = async (req, res, next) => {
    try {
  
      const user = await User.findById(req.params.id);
  
      if (!user) return next(errorHandler(404, 'User not found!'));
  
      const { password: pass, ...rest } = user._doc;
  
      res.status(200).json(rest);
    } catch (error) {
      next(error);
    }
  };