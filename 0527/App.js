import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { ButtonGroup } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import {FormControlLabel} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { orange,green } from '@material-ui/core/colors';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
const useStyles=makeStyles({
  root:{
    background:'linear-gradient(45deg,#333,#999)',
    border:0,
    borderRadius:15,
    color:'White',
    padding:'5px 30px',
    marginBottom:10,
  },
});
const outerTheme=createMuiTheme({
  palette:{
    primary:{
      main:orange[400],
    },
    secondary:{
      main:green[400],
    }
  },
});  
function ButtonStyled(){
  const classes=useStyles();
    return(
    <Button className={classes.root}>
      我是自帶樣式的按鈕
    </Button>
    )
}
function CheckboxExample(){
  const [checked, setChecked]=React.useState(true);
  return(
    <FormControlLabel
      control={<Checkbox 
        checked={checked} 
        onChange={(e)=>setChecked(e.target.checked)} 
        inputProps={{'aria-label':'primary checkbox'}}
        />}
        label="Checkbox 測試"
    />
  )
}
function App(){
  const [anchorEl, setAnchorEl]=React.useState(null);

  const handleClick=(event)=>{
    setAnchorEl(event.currentTarget);
  };
  const handleClose=()=>{
    setAnchorEl(null);
  };
  return(
    <ThemeProvider theme={outerTheme}>
    <div className="App">
      <header className="App-header">
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}/>
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}>
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
          <Typography variant="h6" >
            News
          </Typography>
          <Button color="secondary">Login</Button>
        </Toolbar>
      </AppBar>
      <Typography variant="h3">
        WELCOME TO MUI
      </Typography>
      <Typography variant="h4">
        Material UI
      </Typography>
      <ButtonStyled/>
      <TextField label="Text" variant="filled" color="primary" type="email" placeholder="C108156112@nkust.edu.tw"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
      />
      <TextField label="date" variant="outlined" type="date"/>
        <CheckboxExample />
        <ButtonGroup>
        <Button
        onClick={() => {alert('我被按下了~~~')}}
        variant="contained"
        startIcon={<SaveIcon />} 
        size="large" 
        color="primary">
        Save
        </Button>
        <Button
        variant="contained"
        color="secondary"
        startIcon={<CloudUploadIcon />}>
        Upload
        </Button>
        </ButtonGroup>
        <img src={logo} className="App-logo" alt="logo" />        
      </header>
    </div>
    </ThemeProvider>
  );
}
export default App;
