import mongoose from 'mongoose'

const DbConnect = async ()=>{

    try {
        const DBURL ='mongodb://localhost:27017/TodoTask'
        await mongoose.connect(DBURL)
        console.log("MongoDb connected");
    } catch (error) {
        console.log('Mongodb Connection error' , error);
        
    }
}
export default DbConnect;