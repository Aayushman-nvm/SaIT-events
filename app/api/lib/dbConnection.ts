import mongoose from "mongoose";

type ConnectionObject={
    isConnected?:number;
}

const connection:ConnectionObject={};//store connection info

async function connectDB():Promise<void> {
    if(connection.isConnected){
        //check if already a connection exist... use it instead of building new connection
        console.log("DB connection already exists");
        return;
    }
    try {
        const db=await mongoose.connect(process.env.MONGO_URI || "");
        connection.isConnected=db.connections[0].readyState;//store connection info
        console.log("DB connected successfully");
    } catch (error) {
        console.log("DB connection failed, error: ", error);
        process.exit(1);//safe exit
    }
}
export default connectDB;