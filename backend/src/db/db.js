const mongoose = require('mongoose');



function connectDB() {
    if (!process.env.MONGODB_URI) {
        console.error("MONGODB_URI is not defined in .env file");
        process.exit(1);
    }
    return mongoose.connect(process.env.MONGODB_URI)
        .then(() => {
            console.log("MongoDB connected");
        })
        .catch((err) => {
            console.log("MongoDB connection error:", err);
            process.exit(1);
        })
}

module.exports = connectDB;