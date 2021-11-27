const mongoose = require('mongoose');
const connectToDB = () => {
    //const URL = mongodb://{username}:{password}@{server-address}:{port}/{db};
    const username = process.env.DB_USER
    const password = process.env.DB_PASSWORD
    const database_name = process.env.DB_NAME
    const URL = `mongodb+srv://${username}:${password}@vaccination.filmi.mongodb.net/${database_name}?retryWrites=true&w=majority`
    mongoose.connect(URL);
    const db = mongoose.connection;
    db.on('connected', function () {
        console.log("Connected to the Database", URL);
    });
    db.on('error', function (error) {
        console.error("MongoDB connection errored", error.message);
    });
}
module.exports = connectToDB;
