import axios from "axios";
const apiUrl = "http://localhost:5000/combos/";

//get all Combo from database
export function getAllCombo() {
  return axios.get(apiUrl);
}

//get certain Combo from database
export function getCombo(_id) {
  return axios.get(apiUrl + _id);
}

//add one new Combo
export function addNewCombo(Combo) {
  return axios.post(apiUrl, Combo);
}

//update one of the Combos
export function updateCombo(_id, Combo) {
  return axios.put(apiUrl + _id, Combo);
}

//delete one of the Combos
export function deleteCombo(_id) {
  return axios.delete(apiUrl + _id);
}
