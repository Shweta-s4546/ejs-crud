//import the model inn controller
const userModel = require('../model/userModel')

const userController = {
    index: (req,res) => {
        res.render('index.ejs')
    },
    new: (req,res) => {
        res.render('create.ejs')
    },
    edit: (req,res) => {
        res.render('edit.ejs')
    },

    //we cfeate a new controller to handle the incoming data form the front end
    newUser:(req,res) => {
        try {
            
        } catch (err) {
            console.log(err) // exception handling
        }
    },
    pnf: (req,res) => {
        res.render('pnf.ejs')
    }
}

module.exports = userController