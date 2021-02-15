// API COMPONENT
import axios from "axios";

  // Question:
  // Situation: relocating the API Request requires to pass the props down to the API Component
  // passing  props caused unexpected issues with the StateVar still beeing undefined
  // is there a better Best Practice  for this?

  // {/* API COMPONENT TESTWISE TO BE DISCUSSED    <Api setPokemonDetails={setPokemonDetails} setPokemonDescription={setPokemonDescription} />*/}


const Api = ( {setPokemonDetails, setPokemonDescription} ) => {

  // const endpoint = "https://pokeapi.co/api/v2/pokemon";


  // getPokemonDetails: async (PokeNumber) => {
  //   // console.log('api call for getPokemonDetails')
  //   try {
  //     const response = await axios.get(`${endpoint}/${PokeNumber}`);
  //     if (response) {
  //       return response;
  //     } else {
  //       // console.log("no poke data");
  //       return [];
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     return [];
  //   }
  // },


  //  const requestpokemonDetails = (PokeNumber) => {
  //       // console.log('test PokeNumber: ' , PokeNumber)
  //       let one = "https://pokeapi.co/api/v2/pokemon/"
  //       let two = "https://pokeapi.co/api/v2/pokemon-species/"

  //       // console.log(' requestOne STRING: ' , one+PokeNumber)
  //       // console.log(' requestTwo STRING: ' , two+PokeNumber)

  //       const requestOne = axios.get(one+PokeNumber);
  //       const requestTwo = axios.get(two+PokeNumber);

  //       // console.log(' requestOne: ' , requestOne)
  //       // console.log(' requestTwo: ' , requestTwo)

  //       axios.all([requestOne, requestTwo]).then(axios.spread((...responses) => {
  //         const responseOne = responses[0]
  //         const responseTwo = responses[1]
  //         // use/access the results
  //             console.log('responseOne RETURNED : ', responseOne )
  //             setPokemonDetails(responseOne);
  //             console.log('responseTwo RETURNED : ', responseTwo )
  //             setPokemonDescription(responseTwo);
  //       }))
  //       // .catch(errors => {
  //       //       console.error(error);
  //       // })
  // }

  return (
    <>
      <div>API-Component</div>
    </>
  )
};

export default Api;