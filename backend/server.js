// start server
require('dotenv').config();
const app = require('./src/app');
const connectDB = require('./src/db/db');

connectDB()
    .then(() => {
        app.listen(4400, () => {
            console.log("Server is running on port 4400");
        });
    })
    .catch(err => {
        console.error("Failed to connect to database:", err);
    });