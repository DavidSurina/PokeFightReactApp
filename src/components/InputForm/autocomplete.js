// https://material-ui.com/api/autocomplete/
/* eslint-disable no-use-before-define */

import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const ComboBox = ( {pokemonList, input, setInput })  => {

  const PokeNames =  pokemonList ?
						 pokemonList.map((pokemonName, index) => {
					          return    pokemonName.name.english   ;
					     })
   					:
   						['pokemonList has no data'];

  return (
    <Autocomplete
      id="combo-box-demo"
        inputValue={input}
        onInputChange={(event, newInputValue) => {
          setInput(newInputValue);
        }}
      options={PokeNames}
      getOptionLabel={(option) => option}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Search Pokemon" variant="outlined" />}
    />
  );
}

export default ComboBox;