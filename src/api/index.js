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
    } catch (error) {
      console.error(error);
      return [];
    }
  }, getImage: async (urlStr, setImgStrVar) => {
    try{
      const response = await axios.get(urlStr)
      if (response.data) {
        setImgStrVar(urlStr)
      }
    } catch (err) {
      console.log(err)
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
        .catch(errors => {
              console.error(errors);
        })
    }


};

export default Api;