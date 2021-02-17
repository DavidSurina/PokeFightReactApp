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
  }
};

export default Api;