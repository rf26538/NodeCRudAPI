const mongoose = require("mongoose");

const connectDb = async () => {
    try {
        const connect = await mongoose.connect("mongodb+srv://rf26538:rf26538@cluster0.ig1phbq.mongodb.net/mycontact-backend?retryWrites=true&w=majority&appName=Cluster0");
        console.log("Database conencted:", connect.connection.host, connect.connection.name);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDb;