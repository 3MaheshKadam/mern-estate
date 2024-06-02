import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import {errorHandler} from '../utils/error.js'
import jwt from 'jsonwebtoken';

export const signup = async (req, res, next) => {
    console.log(req.body);
    const { username, email, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password,10);
    const newUser = new User({ username, email, password:hashedPassword });

    try {
        await newUser.save();
        res.status(201).json('User created successfully');
    } catch (error) {
        console.error('Error in Signup controller:', error);
        next(error);
    }
};

export const signin= async(req,res,next)=>{
    const{email,password}=req.body;
    try{
    const validateuser = await User.findOne({email});
    if(!validateuser) return next(errorHandler(404 ,"user not found"));
    const validatepassword = bcryptjs.compareSync(password , validateuser.password);
    if(!validatepassword)return next(errorHandler(401,"wrong password"));
    
    const token = jwt.sign({id:validateuser._id},process.env.JWT_SECRET);

    const {password:pass,...rest}=validateuser._doc;
    res.cookie('access_token',token ,{httpOnly:true})
        .status(200)
        .json(rest)
}
catch(error){
    next(error)
}
}