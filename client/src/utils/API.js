import axios from "axios";

export default {
  // Gets all books
  getSpecials: function() {
    return axios.get("/api/specials");
  },
  // Gets the book with the given id
  getSpecial: function(id) {
    return axios.get("/api/specials/" + id);
  },
  // Deletes the book with the given id
  deleteSpecial: function(id) {
    return axios.delete("/api/specials/" + id);
  }
};
