const bcrypt= require('bcrypt');
const UserModel = require('../models/user_model');
const registration = async (req, res) => {

    try {
        const {name,username,email,password } = req.body;

        if (!name || !username || !email || !password) {
            return res.status(400).send({ message: "All Fields are Mandatory" })
        }
        let user = await UserModel.findOne({ email });
        if (user) {
            return res.status(400).send({ message: "Email Id Alrady Registered" })
        }
        user = await UserModel.findOne({ username });
        if (user) {
            return res.status(400).send({ message: "UserName Alrady Registered" })
        }
        const hashPassword= await bcrypt.hash(password,12);
        const newUser = new UserModel({ name, username, email, password:hashPassword });
        const resp = await newUser.save();

        return res.status(201).send({ message: "registered successfully", resp })
    } catch (error) {
        console.log(error);
        return res.status(500).send({message:"Something went Wrong"})
    }

}

const login=async(req,res)=>{
    res.send("Login triggered....")
}

module.exports = { registration,login };