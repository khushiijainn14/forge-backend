// we will write the logic how we will connect the server with the database 
const mongoose=require("mongoose");

//async is a fuction which makes sure that function is returning a promise 
async function connectDB() {

    // await will make sure that we can not move forward until a promise is resolved 
    await mongoose.connect("mongodb+srv://khushicareer7_db_user:%3Cdb_password%3E@forge-backend.khxq0yi.mongodb.net/forgedb")
    console.log("Connected to database");
}


module.exports=connectDB