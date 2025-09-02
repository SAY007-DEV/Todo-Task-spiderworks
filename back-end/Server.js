import express from 'express'
import cors from 'cors'

const app = express();

app.use(cors());

const Port =8080;

app.listen(Port, ()=>{
    console.log(`Server is running on port ${Port}`);
    
})