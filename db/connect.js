import mongoose from "mongoose";
const connectDB =async(DATABASE_URL)=>
{
    try{
        const DB_OPTIONS ={
            //database name 
            dbName:'schooldb',
            // id ,pass
            user:'mayank',
            pass:'1234',
            authSource:'schooldb'

        }
    await mongoose.connect(DATABASE_URL,DB_OPTIONS);
        console.log('connected succesfully');
        }
    catch(err){
        console.log(err);
    }

}

export {connectDB}