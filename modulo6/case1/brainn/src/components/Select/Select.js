import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useNavigate } from "react-router-dom";
import { goToDia, goToLotoFa, goToLotoMa, goToMega, goToQuina, goToTime } from "../../routes/coordinator";

export default function BasicSelect() {

  const [select, setSelect] = React.useState('');
  let Navigate = useNavigate();

  const handleChange = (event) => {
    setSelect(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
      <InputLabel id="demo-select-small">Selecione</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={select}
          label="Select"
          onChange={handleChange}
        >
          <MenuItem value={10} onClick={() => goToMega(Navigate)}>Mega-Sena</MenuItem>
          <MenuItem value={20} onClick={() => goToQuina(Navigate)}>Quina</MenuItem>
          <MenuItem value={30} onClick={() => goToLotoFa(Navigate)}>Lotofácil</MenuItem>
          <MenuItem value={40} onClick={() => goToLotoMa(Navigate)}>Lotomania</MenuItem>
          <MenuItem value={50} onClick={() => goToTime(Navigate)}>Timemania</MenuItem>
          <MenuItem value={60} onClick={() => goToDia(Navigate)}>Dia de sorte</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
