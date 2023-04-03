import { Box, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const SelectPokeVariety = ({pokeVarietyName, pokeVarieties, changePokeImg,pokeName}:any) => {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="poke-variety-select"> Poke forms </InputLabel>
        <Select
          labelId="poke-variety-select"
          id="poke-variety-select"
          value={pokeVarietyName}
          label="Poke Variety"
          onChange={(event) => changePokeImg(event.target.value)}
        >
          {pokeVarieties.map((variety:any) => (
            <MenuItem key={variety.pokemon.name} value={variety.pokemon.name}>
              {variety.pokemon.name[0].toUpperCase() +
                variety.pokemon.name.substring(1)}
            </MenuItem>
          ))}
          <MenuItem value={`Shiny ${pokeName}`}>
            Shiny {pokeName[0].toUpperCase() + pokeName.substring(1)}
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectPokeVariety;
