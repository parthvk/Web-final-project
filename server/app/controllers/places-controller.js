const placesService= require('../services/places-services');
//To get all the todos
const get = (req,res) => {
    const promise = placesService.getAll();
    promise.then((val)=>{
        res.status(200);
        res.json(val);
    }).catch((e)=>{
        res.status(400);
        res.json(e.message)
    })
}
//To add a new todo
const add = (req,res) => {
    const placesItem = {...req.body};
    const promise = placesService.addNewPlace(placesItem);
    promise.then((val)=>{
        res.status(200);
        res.json(val);
    }).catch((e)=>{
        res.status(400);
        res.json(e.message)
    })
}
//To update a todo
const update = (req,res) => {
    const id = req.params.id;
    const placesItem = {...req.body};
    console.log(placesItem)
    const promise = placesService.updatePlace(id,placesItem);
    promise.then((val)=>{
        res.status(200);
        res.json(val);
    }).catch((e)=>{
        res.status(400);
        res.json(e.message)
    })
}
//To delete a todo
const remove = (req,res) => {
    const id = req.params.id;
    const promise = placesService.deletePlace(id);
    promise.then((val)=>{
        res.status(200);
        res.json(val);
    }).catch((e)=>{
        res.status(400);
        res.json(e.message)
    })
}

module.exports = {
    get:get, 
    add:add,
    update:update,
    remove:remove
}