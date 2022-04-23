import PropTypes from 'prop-types';
import { AppBar, CssBaseline, FormControlLabel, Toolbar, Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useState } from 'react';
import { Box } from '@mui/system';
import { DARK_THEME, LIGHT_THEME } from '../../constants';
import LightDarkSwitch from './LightDarkSwitch';

/**
 * Enables the light/dark theme functionality throughout the program.
 */
export default function Theme(props) {
  // Set dark theme by default
  const [currentTheme, setCurrentTheme] = useState(DARK_THEME);
  // provide theme fundamental color base
  const theme = createTheme({
    palette: {
      mode: currentTheme,
      primary: {
        light: '#757ce8',
        main: '#3f50b5',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Celsius Fahrenheit Conversion Utility
          </Typography>
          <FormControlLabel
            control={
                <LightDarkSwitch
                    onChange={() => setCurrentTheme(
                        prevTheme => prevTheme === DARK_THEME ? LIGHT_THEME : DARK_THEME
                    )}
                />
            }
          />
        </Toolbar>
      </AppBar>
      </Box>
      {props.children}
  </ThemeProvider>
  )
}

Theme.propTypes = {
  children: PropTypes.object
};