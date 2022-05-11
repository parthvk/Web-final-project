const PlacesSchema = require('../models/places-model');
//To get all todo items in the items list.
const getAll = () => {
    const promise = PlacesSchema.find().exec();
    return promise;
}
//To add todo items in the items list.
const addNewPlace = (newplace) => {
    const places = new PlacesSchema(newplace);
    const promise = places.save();
    return promise;
}
//To update todo items in the items list.
const updatePlace = (id,places) => {
    const promise = PlacesSchema.findOneAndUpdate({_id:id},{
        path:places.path,
        title:places.title,
        rating:places.rating,
        status:places.status,
        lastModifiedDate:new Date()
    }).exec();
    return promise;
}
//To delete todo items in the items list.
const deletePlace = (id) => {
    const promise = PlacesSchema.findOneAndDelete({_id:id}).exec();
    return promise;
}
module.exports = {
    getAll : getAll,
    addNewPlace : addNewPlace,
    updatePlace : updatePlace,
    deletePlace : deletePlace
}

