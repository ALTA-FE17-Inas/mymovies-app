import React from 'react';
import { 
    AppBar, 
    Toolbar, 
    Typography, 
    Tab, 
    Button,
    useTheme,
    useMediaQuery, } from '@mui/material';
import { NavbarWrapper } from '../styles/Styles.modules';
// import DrawerContainer from './DrawerContainer';

const menuItems = [
    {name: "Home"},
    {name: "Now Playing"},
    {name: "Popular"},
    {name: "TV Shows"},
]
const Header = () => {
    const themes = useTheme();
    const isMatching = useMediaQuery(themes.breakpoints.down("md"));
    <NavbarWrapper>
        <AppBar sx={{padding:"10px", backgroundColor:"#063970"}}>
            <Toolbar>
                <Typography className="logo">Movies Apps</Typography>
                    <div className="navLinks">
                    {menuItems.map((nav, index) => (
                        <Tab className="links" label={nav.name} key={index} />
                    ))}
                    </div>
                    <Button className="loginButton" variant="contained" color="info">Login</Button>
            </Toolbar>
        </AppBar>
    </NavbarWrapper>;
  return (
    <></>
  );
};

export default Header;