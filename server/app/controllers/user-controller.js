const userService = require('../services/user-service');
const mongoose = require('mongoose');


/** fetch user by id
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.findById=async (req,res)=>{
    try{
        const task=await userService.searchById(req.params.id);
        res.status(200).send(task);
    }catch(err){
        res.status(500).json({error: err.message});
    }
}

/** add user to database
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.addUser=async (req,res)=>{
    try{
        const task={...req.body};
        const newTask=await userService.createUser(task);
        res.status(200).send(newTask);
    }catch(err){
        res.status(500).json({error: err.message});
    }
}

/** update user based on _id
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.updateUser=async (req,res)=>{
    try{
        const task=await userService.updateUser(req.params.id,req.body);
        res.status(200).send(task);
    }catch(err){
        res.status(500).json({error: err.message});
    }
}

/** delete user based on _id
 *
 */

exports.deleteUser=async (req,res)=>{
    try{
        const task=await userService.deleteUser(req.params.id);
        res.status(200).json({msg: 'successfully delete'});
    }catch(err){
        res.status(500).json({error: err.message});
    }
}

