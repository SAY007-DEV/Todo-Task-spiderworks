import express from 'express'
import cors from 'cors'
import DbConnect from './Database/Connection.js';
import router from './Routes/AuthRoues/Route.js';

const app = express();

app.use(cors());

const Port =8080;

// routes

app.use('Auth/api/',router)



app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});



app.listen(Port, ()=>{
    console.log(`Server is running on port ${Port}`);
    
})

DbConnect();