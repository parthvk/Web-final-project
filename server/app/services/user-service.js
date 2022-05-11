const User =require('../models/user.js')
const {ObjectId} = require("mongodb");

/**
 * Returns a promise for search results.
 *
 * @param search param.
 */

exports.searchById=async(mail)=>{
    const data=await User.find({"Mail":mail});
    console.log("user is",data);
    return data;
}

exports.createUser=async(content)=>{
    const newUser=new User(content);
    newUser.save();
    return newUser;
}

exports.updateUser=async(id,body)=>{
    const data=await User.findOneAndUpdate({_id:ObjectId(id)},{$set:body},{returnOriginal:false});
    return data;
}

exports.deleteUser=async(id)=>{
    await User.remove(User.findById(id));
}
