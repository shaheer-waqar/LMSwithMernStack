import mongoose from "mongoose";


export const DbConnection = ()=>{
    mongoose.connect(process.env.DB_URI)
    .then(res=>{
        console.log("mongodb connected");
    })
    .catch(err =>{
        console.error("Failed to connect to mongodb",err);
    });
}
