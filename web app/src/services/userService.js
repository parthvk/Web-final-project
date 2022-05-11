import axios from "axios";
const apiUrl = "http://localhost:5000/users/";

//get user from database
export function getUser(_id) {
  return axios.get(apiUrl + _id);
}

//add one new user
export function addNewUser(user) {
  return axios.post(apiUrl, user);
}

//update one of the users
export function updateUser(_id, user) {
  return axios.put(apiUrl + _id, user);
}

//delete one of the users
export function deleteUser(_id) {
  return axios.delete(apiUrl + _id);
}
