import React from 'react';
import SideBar from "./components/SideBar";
import { makeStyles, CssBaseline, createMuiTheme, ThemeProvider } from '@material-ui/core';
import Header from "./components/Header";
import VendorData from './pages/VendorData';


const theme = createMuiTheme({
  overrides: {
    MuiAppBar: {
      root: {
        transform: 'translateZ(0)'
      }
    }
  },
  props: {
    MuiIconButton: {
      disableRipple: true
    }
  }
})


const useStyles = makeStyles({
  appMain: {
    paddingLeft: '320px',
    width: '100%'
  }
})

function App() {
  const classes = useStyles();

  return (

    <ThemeProvider theme={theme}>
      <SideBar />
      <div className={classes.appMain}>
        <div>
          <Header />
          <VendorData />
        </div>
        <CssBaseline />

      </div>
    </ThemeProvider>

  );
}

export default App;
