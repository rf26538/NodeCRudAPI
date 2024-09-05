const mongoose = require("mongooes");

const connectDb = async () => {
    try {
        const connect = await mongoose.connect(process.env.CONNECTION_STING);
        console.log("Database conencted:", connect.connection.host);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDb;