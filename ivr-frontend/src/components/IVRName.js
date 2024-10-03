import React from 'react';
import { TextField } from '@mui/material';

const IVRName = ({ ivrName, setIvrName }) => {
  return (
    <div className='card-style'>
      <h3 className='card-title'>IVR Name</h3>
      <p className='intro-text'>Please give your IVR a name to ensure you can identify it.</p>
      <TextField
        fullWidth
        value={ivrName}
        size='small'
        placeholder='Please give your IVR a name'
        onChange={(e) => setIvrName(e.target.value)}
      />
    </div>
  );
};

export default IVRName;
