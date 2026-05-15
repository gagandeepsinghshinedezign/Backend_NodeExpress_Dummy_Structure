const mongoose = require('mongoose')
const config = require('./config.js')
mongoose.set('debug', config.env.database.debug);

const connectionOptions = {
    autoIndex: true,
    maxPoolSize: 10,
    minPoolSize: 5,
};

const uri = `mongodb+srv://${config.env.database.userName}:${config.env.database.password}@cluster0.ek9cipf.mongodb.net/${config.env.database.name}?retryWrites=true&w=majority&appName=Cluster0`;

class DB {
    static async connectDB() {
        try {
            let connection = await mongoose.connect(uri, connectionOptions);
            console.log("Successfully connected to MongoDB Atlas via Mongoose!", config.env.database.name);
            return connection
        } catch (error) {
            console.error("Connection error:", error);
        }
    }
}

module.exports = DB