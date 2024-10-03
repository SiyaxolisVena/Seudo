import React, { useState } from 'react';
import IVRName from './components/IVRName';
import GreetingMessage from './components/GreetingMessage';
import MenuOption from './components/MenuOption';
import MenuTree from './components/MenuTree';
import {Grid2, Paper, Button } from '@mui/material';
import CloseIcon from './assets/close-icon.svg'

const App = () => {
  const [ivrName, setIvrName] = useState('');
  const [greetingMessage, setGreetingMessage] = useState('');
  const [menuOptions, setMenuOptions] = useState([
    { label: '', targetNumbers: [] },
    { label: '', targetNumbers: [] },
  ]);


  return (
    <div>
      <h1 class="header"><span>Interactive Voice Recording (IVR)</span> <img src={CloseIcon} alt='Close Icon'/></h1>     
      <Grid2 container spacing={2}>
        <Grid2 size={{xs:6, md:4}}>
          <div elevation={3} style={{ padding: '20px' }}>
            <IVRName ivrName={ivrName} setIvrName={setIvrName} />
            <GreetingMessage greetingMessage={greetingMessage} setGreetingMessage={setGreetingMessage} />
            <div className='menu-design'>
              <h3>Menu Design</h3>
              <p>Let’s design your menu options! Here, you can specify what options the caller will have to choose from, and where each menu option will lead.</p>
            </div>
            {menuOptions.map((menu, index) => (
              <MenuOption
                key={index}
                index={index}
                menu={menu}
                menuOptions={menuOptions}
                setMenuOptions={setMenuOptions}
              />
            ))}
          </div>
        </Grid2>
        <Grid2 size={{xs:6, md:8}}>
          <MenuTree ivrName={ivrName} greetingMessage={greetingMessage} menuOptions={menuOptions} />
        </Grid2>
      </Grid2>
    </div>
  );
};

export default App;
