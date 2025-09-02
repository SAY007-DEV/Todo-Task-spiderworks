import express from 'express';

const Register = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Basic validation
    if (!username ) {
      return res.status(400).json({ message: 'Username and password are required' });
    }


    return res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error during registration:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}