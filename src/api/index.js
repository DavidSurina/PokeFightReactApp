import axios from "axios";

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
    } catch (err) {
      console.error("getAllPokemons: ", err);
      return [];
    }
  }, 
  getImage: async (urlStr, setImgStrVar) => {
    try{
      const response = await axios.get(urlStr)
      if (response.data) {
        setImgStrVar(urlStr)
      }
    } catch (err) {
      console.log("getImage: ", err)
    }
  },
  requestpokemonDetails: async (PokeNumber, setPokemonDetails, setPokemonDescription) => {
        let details = "https://pokeapi.co/api/v2/pokemon/"
        let description = "https://pokeapi.co/api/v2/pokemon-species/"

        const URLdetails = axios.get(details+PokeNumber);
        const URLDescription = axios.get(description+PokeNumber);

        axios.all([URLdetails, URLDescription]).then(axios.spread((...responses) => {
              const resDetails = responses[0]
              const resDescription = responses[1]
              setPokemonDetails(resDetails);
              setPokemonDescription(resDescription);
        }))
        .catch(err => {
              console.error("requestpokemonDetails: ", err);
        })
  },
  getFightHistory: async () => {
    try {
      // gets the 5 latest fights
      const response = await axios.get(`${endpoint}fights?limit=5`);
      if (response.data.data) {
        return response.data.data;
      } else {
        console.log("no fight history");
        return [];
      }
    } catch (err) {
      console.log("getFightHistory: ", err);
      return [];
    }
  },
/*   saveFight: async (winner_id, looser_id) => {
    try {
      await axios.post(
        `${endpoint}fights/crate`, 
        {winner_id, looser_id}
      );
    } catch (err) {
      console.log("saveFight: ", err);
    }
  }, */
};

export default Api;