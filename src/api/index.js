import axios from "axios";

/* TODO: needs to be replaced w/ the heroku deployed app URL */
/* const endpoint = "http://localhost:4000/"; */
const endpoint = "https://evening-falls-69897.herokuapp.com/";
const Api = {
  getAllPokemons: async () => {
    try {
      const response = await axios.get(`${endpoint}pokemons`);
      if (response.data.data) {
        return response.data.data;
      } else {
        console.log("no poke data");
        return [];
      }
    } catch (error) {
      console.error(error);
      return [];
    }
  },
};

export default Api;