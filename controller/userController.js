//import the model in controller
const User = require('../model/userModel')

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
    newUser: async (req,res) => {
        try {
            const newUser = req.body

            //emial exists or not
            const extEmail = await User.findOne({ email:newUser.email })
            if(extEmail)
                 res.status(401).json({ msg : `${newUser.email} already exits.`})

            //mobile exists or not
            const extMobile = await User.findOne({ mobile: newUser.mobile})
            if(extMobile)
                 res.status(401).json({ msg : `${newUser.mobile} already exists`})
                
            await User.create(newUser) //to create new user data

                return res.status(200).json({msg:`user created successfully` , newUser })
        } catch (err) {
            console.log(err) // exception handling
        }
    },
    pnf: (req,res) => {
        res.render('pnf.ejs')
    }
}

module.exports = userController