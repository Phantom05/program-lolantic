import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { color, font,positionCenterCenter } from 'styles/_utils';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import Popover from '@material-ui/core/Popover';
import cx from 'classnames';
import { useImmer } from 'use-immer';
import LanguageIcon from '@material-ui/icons/Language';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


const PlainHeaderState = {
  searchFocus: false
}
function PlainHeader(props) {
  const [values, setValues] = useImmer(PlainHeaderState);
  const { grade = "basic" } = props;

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;



  const handleFocus = config => {
    const { type } = config;
    if (type === 'search') {
      setValues(draft => {
        draft.searchFocus = true;
      })
    }
  }

  const isFocus = values.searchFocus;

  return (
    <Styled.PlainHeader>
      <span>Dashboard Kit</span>
      <span className="grade_icon">{grade}</span>

      {/* <input
        type="text"
        placeholder="search"
        className={cx("main__search", { focus: isFocus })}
        onFocus={() => handleFocus({ type: "search" })}
      /> */}

      {/* <span
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <LanguageIcon />
        <span>EN</span>
      </span>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>EN</MenuItem>
        <MenuItem onClick={handleClose}>KO</MenuItem>
      </Menu> */}



      {/* <span
        aria-controls="profile-menu"
        aria-haspopup="true"
        onClick={handleClick}
        className="profile__icon"
      >
        <span className="profile__txt">L</span>
      </span>
      <Menu
        id="profile-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu> */}


    </Styled.PlainHeader>
  );
}

export default PlainHeader;


const Styled = {
  PlainHeader: styled.header`
   &{
    background:${color.blue};
    color:${color.white};
    padding:5px;
    .grade_icon{
      display:inline-block;
      border-radius:5px;
      padding:3px 5px;
      background:${color.green_bg};
      ${font(11, color.white)};
      text-transform:uppercase;
      margin-left:5px;
    }
    .main__search{
      display:inline-block;
      padding:5px;
      border:0;
      transition:.5s;
      border-radius:3px;
      &.focus{
        /* width:300px; */
      }
    }
    .profile__icon{
      position: relative;
      display:inline-block;
      width:30px;
      height:30px;
      border:2px solid green;
      border-radius:100%;
      cursor: pointer;
      background:white;
      color:black;
      font-weight:bold;
    }
    .profile__txt{
      ${positionCenterCenter};
    }
   }
  `
}