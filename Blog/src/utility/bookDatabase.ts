import mongoose,{ connect, Connection, Mongoose } from 'mongoose';
import autoIncrement from "mongoose-sequence";
async function run(){
  // Connect to MongoDB
  try{
   const connection = await connect('mongodb://localhost:27017/book');
   autoIncrement(connection);

  }catch(err)
  {
    console.log(err);
  }
}

export default run;