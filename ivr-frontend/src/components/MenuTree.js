import React, { useState } from 'react';
import './MenuTree.css'; 
import PhoneIcon from '../assets/call-icon.svg'; 
import DialPad from '../assets/dial-pad-icon.svg'

const MenuTree = ({ greetingMessage, menuOptions }) => {
    const [menuLength, setMenuLength] = useState(0)
  return (
    <div className="menu-tree">
      {greetingMessage && 
      <div className="tree-node greeting-node">
        <img src ={PhoneIcon} alt='Phone icon' />
        <span>Greeting message after initial call</span>
      </div>}
      {menuOptions.some(menu => menu.label) && (
        <>
        {menuOptions.every(option => option.label !== "") && (
            <>
                <div className="connector connector-bottom"></div>
                <div className="connector connector-horizontal"></div>
            </>
        )

        }
        
          <div className="tree-branches">
            <div className="menu-container">
              {menuOptions.map((menu, index) => (
                
                menu.label && (
                    <div className='node-container'>
                  <div key={index} className="tree-node menu">
                    <div className="menu-header">
                      <img src={DialPad} />
                      <h3>{menu.label}</h3>
                      <p>& target numbes</p>
                    </div>
                  </div>
                  <div className="menu-targets">
                  {menu.targetNumbers.map((number, i) => (
                      <div key={i} className="target-number">
                        <img src={PhoneIcon}/>
                        <p>{number}</p>
                      </div>
                    ))}    
                </div>
                </div>
                )
              ))}
            </div>
          </div>
        </>
      )}
      {/* <button className="save-button">SAVE</button> */}
    </div>
  );
};

export default MenuTree;