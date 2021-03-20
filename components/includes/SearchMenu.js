import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const californiaStationsList = [
    {stationNumber:9410170, Name:"San Diego, San Diego Bay, CA"},
    {stationNumber:9410230, Name:"La Jolla, CA"},
    {stationNumber:9410660, Name:"Los Angeles, CA"},
    {stationNumber:9410840, Name:"Santa Monica, CA"},
    {stationNumber:9411340, Name: "Santa Barbara, CA"},
    {stationNumber:9411406, Name:"Oil Platform Harvest, CA"},
    {stationNumber:9412110, Name:"Port San Luis, CA"},
    {stationNumber:9413450, Name:"Monterey, CA"},
    {stationNumber:9414523, Name:"Redwood City, CA"},
    {stationNumber:9414750, Name:"Alameda, CA"},
    {stationNumber:9414290, Name:"San Francisco, CA"},
    {stationNumber:9414863, Name:"Richmond, CA"},
    {stationNumber:9415102, Name:"Martinez-Amorco Pier, CA"},
    {stationNumber:9415144, Name:"Port Chicago, CA"},
    {stationNumber:9415020, Name:"Point Reyes, CA"},
    {stationNumber:9416841, Name:"Arena Cove, CA"},
    {stationNumber:9418767, Name:"North Spit, CA"},
    {stationNumber:9419750, Name:"Crescent City, CA"}
]

const ITEM_HEIGHT = 48;

export default function LongMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    console.log(event.target);
    if (event.target.className !== "MuiButtonBase-root MuiListItem-root MuiMenuItem-root menuItem MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"){
        setAnchorEl(null);
        return null;
    }
    const textContent = event.target.textContent
    
    props.onSelect(textContent);
    setAnchorEl(null);
  };

  





  return (
    <div className="searchMenu">
        <span style={{fontSize:"1.4rem"}}>Select Station:</span>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        
        <ExpandMoreIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '30ch',
          },
        }}
      >
        {props.list.map((option, index) => {
            
            return (<MenuItem key={option.stationNumber} onClick={handleClose} className="menuItem">
                {option.Name}
            
            </MenuItem>)
        })}
      </Menu>
    </div>
  );
}

    

