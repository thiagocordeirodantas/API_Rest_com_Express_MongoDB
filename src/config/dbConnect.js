import mongoose from "mongoose";

mongoose.connect("mongodb+srv://thiagocordeirodantas:123@thiago.uuapubx.mongodb.net/thiago-node")


let db = mongoose.connection;

export default db