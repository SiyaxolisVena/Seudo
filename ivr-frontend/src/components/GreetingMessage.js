import React from 'react';
import uploadIcon from "../assets/Icon-material-cloud-upload.svg";
import deleteIcon from "../assets/delete-icon.svg";

const GreetingMessage = ({ greetingMessage, setGreetingMessage }) => {
  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setGreetingMessage(file.name);
    }
  };

  return (
    <div className='card-style greeting-message'>
      <h3 className='card-title'>Greeting Message</h3>
      <p className='intro-text'>The greeting message is an intro text to explain or introduce the steps to follow.</p>
      {greetingMessage ? (
        <>
        <div className='audio-file'>
          <p>{greetingMessage}</p>
          <button className='delete-button' onClick={() => setGreetingMessage('')}>
           <img src={deleteIcon} alt='Delete Icon'/>
          </button>
        </div>
        <input type="file" id='uploadMessage' hidden onChange={handleUpload} />
        <label className='upload-new-file' htmlFor='uploadMessage'>
        UPLOAD A NEW FILE
      </label>
        </>
      ) : (
        
       <div>
          <input type="file" id='uploadMessage' hidden onChange={handleUpload} />
          <label  htmlFor='uploadMessage'>
            <img src={uploadIcon} alt='Upload icon'/>
          <p><span>Drag and drop</span> files to upload, or <span>click to select</span></p>
          </label>
       </div>
      )}
    </div>
  );
};

export default GreetingMessage;
