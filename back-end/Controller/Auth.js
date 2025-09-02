import express from 'express';
import User from '../Database/Model.js';

const Register = async (req, res) => {
  const { email, password } = req.body;
  try {

const existingUser = await User.findOne({ email });
    if (existingUser ) {
      return res.status(400).json({ message: 'User already exists ,please login ' });
    }
 const newUser = new User({ email, password });
        await newUser.save();
        return res.status(201).json({ message: 'New user created successfully' });

   
  } catch (error) {
    console.error('Error during registration:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}


const Login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
     if (!existingUser ) {
      return res.status(400).json({ message: 'User not exists ,please Register ' });
    }
    
  } catch (error) {
    
  }
}

export {Register,Login}