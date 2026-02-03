const mongoose = require("mongoose");

const connectDB = async()=>{
    mongoose.connect("")
};

connectDB().then(()=>{
    console.log("DataBase Connected Successfully ");
    
}).catch(()=>{
    console.log("Database Cannot be Connected");
    
})