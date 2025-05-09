import {generateTokenAndSetCookie} from '../lib/utils/generateToken.js';
import User from '../models/user.model.js';
import bcrypt from "bcrypt";

export const signup = async (req,res) => {
    try{
        const {fullName, username, password} = req.body;

        const emailRegex =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({error: "Invalid email format"});
        }

        const existingUser = awaitUser.findOne({ username});
        if(existingUser){
            return res.status(400).json({ error: "Username is already taken"});
        }

        const existingEmail = awaitUser.findOne({ username});
        if(existingUser){
            return res.status(400).json({ error: "Email is already taken"});
        }



        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            fullName: fullName,
            username: username,
            email: email,
            password: hashedPassword
        });

        if(newUser){
            generateTokenAndSetCookie(newUser._id,res)
            await newUser.save();  
            
            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                email: newUser.email,
                followers: newUser.followers,
                following: newUser.following,
                profileImg: newUser.profileImg,
                coverImg: newUser.coverImg,
            });
        }else{
            res.status(500).json({error: "Internal Server Error"});
        }
    } catch (error){
        console.log("Error in signup controller", error.message);

        res.status(500).json({error: "Internal Server Error"});

    }
    
};

export const login = async (req,res) => {
    res.json({
        data:"You hit the login endpoint,"
    });
};

export const logout = async (req,res) => {
    res.json({
        data:"You hit the logout endpoint,"
    });
};

