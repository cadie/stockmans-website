import axios from "axios";

export default {
  // Gets all specials
  getSpecials: function() {
    return axios.get("/api/specials");
  },
  // Gets all tackexchange
  getTackExchange: function() {
    return axios.get("/api/tack-exchange");
  },
  // Deletes the special with the given id
  deleteSpecials: function(id) {
    return axios.delete("/api/specials/" + id);
  },
  // Deletes the tack exchange listing with the given id
  deleteTackExchange: function(id) {
    return axios.delete("/api/tack-exchange/" + id);
  },
  // Saves a special to the database
  saveSpecials: function(specialData) {
    return axios.post("/api/specials", specialData);
  },
  // Saves a tack exchange listing to the database
  saveTackExchange: function(tackExchangeData) {
    return axios.post("/api/tack-exchange", tackExchangeData);
  }
};
