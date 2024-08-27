// import React from 'react';
// import { AppBar, Toolbar, Button } from '@mui/material';
// import { Link } from 'react-router-dom';

// const HorizontalMenu = () => (
//   <AppBar position="static">
//     <Toolbar>
//       {['Home', 'Services', 'Portfolio', 'Contact'].map((text) => (
//         <Button color="inherit" component={Link} to={`/${text.toLowerCase()}`} key={text}>
//           {text}
//         </Button>
//       ))}
//     </Toolbar>
//   </AppBar>
// );

// export default HorizontalMenu;

import React from 'react';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.jfif'; // Adjust the path as needed

const HorizontalMenu = () => (
  <AppBar position="static">
    <Toolbar>
      <img src={Logo} alt="Logo" style={{ height: '40px', marginRight: '20px' }} />
      {['Home', 'Services', 'Portfolio', 'Contact'].map((text) => (
        <Button color="inherit" component={Link} to={`/${text.toLowerCase()}`} key={text}>
          {text}
        </Button>
      ))}
    </Toolbar>
  </AppBar>
);

export default HorizontalMenu;


