import express from 'express'
import cors from 'cors'
import DbConnect from './Database/Connection.js';
import router from './Routes/AuthRoues/Route.js';

const app = express();

app.use(cors());
app.use(express.json());

const Port =8080;

// routes

app.use('/Auth/api/', router)



// app.use((req, res) => {
//     res.status(200).json({ message: 'Welcome' });
// });



app.listen(Port, ()=>{
    console.log(`Server is running on port ${Port}`);
    
})

DbConnect();