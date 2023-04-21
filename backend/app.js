const mongoose = require('mongoose');
const PORT = "8555" // || process.env.PORT;
const MongoDb = "mongodb+srv://abhishekalwala090601:Abhi%40090601@cluster0.p8d5jft.mongodb.net/?retryWrites=true&w=majorit"
mongoose.set('strictQuery', true);
const app =require("./index");



 function main() {
     mongoose.connect(MongoDb, (err) => {
        if(err) console.log(err);
        else console.log("database connected");
    })
     app.listen(PORT, (err) => {
        if(err) console.log(err);
        else console.log("Server running");
    })
} main()