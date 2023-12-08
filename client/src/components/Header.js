// Import necessary dependencies from React and Material-UI 
import React from 'react'; 
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

// Difind a functional component named Header 
const Header = () => {
    return (
        // JSX code for the header component
        <AppBar position='static'>
            <Toolbar>
                {/* Typography component displaying the title of the header */}
                <Typography variant="h6" component='div'
                My Blog
                </Typography>
                {/* Add navigation links or other components here */}
            </Toolbar> 
        </AppBar> 
    );
// Export the Header component to make it available for other parts of the applicaiton 

export default class Header;
