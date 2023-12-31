//we need to write the logic to connect mongodb

const mongoose = require('mongoose')

const connectDb = async () => {
    //1. read the environment file variable = mongo_uri
    await mongoose.connect(process.env.MONGO_URI)
        .then(res => {
            console.log('mongodb connected successfully')
        }).catch(err => console.log(err))
}


/*
    1. mongoose.connect method is promise request method
    2. promise constructor has 4 states
        fullfilled - can be handle by .then() method
        rejected - can be handled by .catch() method
        pending - before fullfilled or rejected
        settled - we can't able observe the state because it excutes after fullfilled or rejected
*/


module.exports = connectDb

