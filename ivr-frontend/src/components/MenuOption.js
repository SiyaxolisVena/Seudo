import React from 'react';
import { TextField, Button, InputAdornment } from '@mui/material';
import AddIcon from "../assets/plus-icon.svg";

const MenuOption = ({ index, menu, menuOptions, setMenuOptions }) => {
  const updateMenuLabel = (e) => {
    const newOptions = [...menuOptions];
    newOptions[index].label = e.target.value;
    setMenuOptions(newOptions);
  };

  const addTargetNumber = () => {
    const newOptions = [...menuOptions];
    if (newOptions[index].targetNumbers.length < 5) {
      newOptions[index].targetNumbers.push('');
      setMenuOptions(newOptions);
    }
  };

  const updateTargetNumber = (numIndex, value) => {
    const newOptions = [...menuOptions];
    newOptions[index].targetNumbers[numIndex] = value;
    setMenuOptions(newOptions);
  };

  return (
    <div className='card-style'>
      <h3 className='card-title' >Menu Option {index + 1}</h3>
      <p className='input-label'>Label</p>
      <TextField
        fullWidth
        value={menu.label}
        size='small'
        placeholder='This is for you to identify the menu option. Eg, Sales Menu'
        onChange={updateMenuLabel}
      />

      <h5 className='sub-title'>Target Numbers</h5>
      <p className='intro-text'>What number should this menu option ring to?</p>
      {menu.targetNumbers.map((number, numIndex) => (
        <TextField
          key={numIndex}
          fullWidth
          value={number}
          size='small'
          style={{backgroundColor:"#F5F5F5", marginBottom:"5px"}}
          placeholder='-'
          slotProps={{
            input: {
            startAdornment: <InputAdornment position="start" ><img src={AddIcon} alt='Add Icon '/></InputAdornment>,
            },
          }}
          onChange={(e) => updateTargetNumber(numIndex, e.target.value)}
        />
      ))}
      {menu.targetNumbers.length < 5 && (
        <Button variant="text" onClick={addTargetNumber}>
          Add Target Number
        </Button>
      )}
    </div>
  );
};

export default MenuOption;
