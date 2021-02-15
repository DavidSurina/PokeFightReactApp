import axios from "axios";

const endpoint = "https://pokeapi.co/api/v2/pokemon";
const Api = {
  getPokemonDetails: async (PokeNumber) => {
    // console.log('api call for getPokemonDetails')
    try {
      const response = await axios.get(`${endpoint}/${PokeNumber}`);
      if (response) {
        return response;
      } else {
        // console.log("no poke data");
        return [];
      }
    } catch (error) {
      console.error(error);
      return [];
    }
  },
};

export default Api;