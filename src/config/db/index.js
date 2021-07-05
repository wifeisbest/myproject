const mongoose = require('mongoose');
// const mongooseUri = 'mongodb+srv://duongnguyen:Q-4EArJqJXxWSeR@cluster0.3e920.mongodb.net/f8_edu?retryWrites=true&w=majority'
async function connect (){

    try {
        await mongoose.connect(
            process.env.DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log('Connect success')            
    } catch (error) {
        console.log(error)

    }

}

module.exports = {connect};