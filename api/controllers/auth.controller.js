import express from 'express';
import User from '../models/user.model.js'
export const Signup=async(req,res)=>{
    // console.log(req.body);
    const{username , email, password}=req.body;
    const newUser = new User({username,email,password});
    try{
    await newUser.save();
    res.status(201).json('user created successfully'); 
    }catch(error){
        next(error)
    }
}