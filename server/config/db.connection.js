import mongoose from "mongoose";


const DbConnection = ()=>{
    mongoose.connect(process.env.DB_URI)
    .then(res=>{
        console.log("mongodb connected");
    })
    .catch(err =>{
        console.error("Failed to connect to mongodb",err);
    });
}

export default DbConnection;
