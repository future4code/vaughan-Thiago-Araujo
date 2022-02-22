import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { StyledToolbar } from "./styled"
import { goToFeed, goToLogin } from "../../routes/coordinator"
import { useNavigate } from "react-router-dom"

function Header() {
  
  const Navigate = useNavigate()

  return (
    <div>
      <AppBar position="static">
        <StyledToolbar>
          <Button onClick={() => goToFeed(Navigate)} color="inherit">Bling-Bling Bot</Button>
          <Button onClick={() => goToLogin(Navigate)} color="inherit">Login</Button>
        </StyledToolbar>
      </AppBar>
    </div>
  );
}

export default Header;