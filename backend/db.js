const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://react:react@cluster0.mecit.mongodb.net/safenote?retryWrites=true&w=majority";
const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("connected to monogo");
    })
}
module.exports = connectToMongo;