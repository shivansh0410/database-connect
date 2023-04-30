const UserModel = require("../models/users");

const getUser = async(req,res)=>{
    console.log("Welcome to get User");
    
    const myData = await UserModel.find();

    res.json({myData});

}

const postUser = async(req,res)=>{
    console.log("Welcome to post User");
}

const getHomepage = async(req,res)=>{
    console.log("Welcome to homepage");
}


module.exports = {getUser,postUser,getHomepage}