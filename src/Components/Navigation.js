import React from 'react';
import {Menu} from '@mui/icons-material';

function Navigation() {
  return (
    <div style={{backgroundColor:"#007bff", color:"white", marginBottom:"2rem", fontFamily:"fantasy", fontWeight:"lighter", display:"flex", alignItems:"center"}}>
        <Menu style={{marginRight:"1rem"}}/>
        <p>Redux Toolkit Demo</p>
    </div>
  );
}

export default Navigation;