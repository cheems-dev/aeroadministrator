import React from 'react';
import { AppBar, Box, Toolbar, IconButton } from '@mui/material';
import { Typography, Menu, Container, Button } from '@mui/material';
import { MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// Helper
import { pages, subPages } from './Navbar.helper';
// Styles
import { anchorOrigin } from './Navbar.styles';
import { BoxStyle, BoxStyleTwo } from './Navbar.styles';
import { ButtonStyle, Styles, sx } from './Navbar.styles';
import { sxTwo, transformOrigin, TypographyStyle } from './Navbar.styles';
import { StyledMenu } from './Navbar.material';

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  /* TODO: Descomentar cuando se tenga el endpoint de login */
  /* const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
 */
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <Styles>
      <AppBar position='static' className='background'>
        <Container maxWidth='xl'>
          <Toolbar disableGutters>
            <NavLink to='home' exact>
              <Typography
                variant='h6'
                noWrap
                component='div'
                sx={TypographyStyle}
              >
                FIAL 2023
              </Typography>
            </NavLink>

            <Box sx={BoxStyle}>
              <IconButton
                size='large'
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleOpenNavMenu}
                color='inherit'
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id='menu-appbar'
                anchorEl={anchorEl}
                anchorOrigin={anchorOrigin}
                keepMounted
                transformOrigin={transformOrigin}
                open={Boolean(anchorEl)}
                onClose={handleCloseNavMenu}
                sx={sx}
              >
                {subPages.map((subpage) => (
                  <MenuItem key={subpage.id} onClick={handleCloseNavMenu}>
                    <NavLink
                      key={subpage.id}
                      to={subpage.url}
                      exact
                      activeClassName='link'
                    >
                      <Typography textAlign='center'>{subpage.name}</Typography>
                    </NavLink>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography variant='h6' noWrap component='div' sx={sxTwo}>
              <NavLink to='home' exact activeClassName='link'>
                FIAL 2023
              </NavLink>
            </Typography>

            {/* Navbar desktop */}
            <Box sx={BoxStyleTwo}>
              {pages.map((page) => (
                <>
                  {page.url.length ? (
                    <Button
                      key={page.id}
                      onMouseEnter={handleCloseNavMenu}
                      sx={ButtonStyle}
                    >
                      <NavLink to={page.url} exact activeClassName='link'>
                        {page.name}
                      </NavLink>
                    </Button>
                  ) : (
                    <>
                      <Button
                        sx={ButtonStyle}
                        key={page.id}
                        id='demo-positioned-button'
                        aria-controls={
                          open ? 'demo-positioned-menu' : undefined
                        }
                        aria-haspopup='true'
                        aria-expanded={open ? 'true' : undefined}
                        onMouseEnter={handleClick}
                        endIcon={<KeyboardArrowDownIcon />}
                      >
                        {page.name}
                      </Button>
                      <StyledMenu
                        id='demo-customized-menu'
                        MenuListProps={{
                          'aria-labelledby': 'demo-customized-button',
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                      >
                        {page.submenus.map((submenu) => (
                          <MenuItem key={submenu.id} onMouseLeave={handleClose}>
                            <NavLink
                              key={submenu.id}
                              to={submenu.url}
                              exact
                              activeClassName='link'
                            >
                              {submenu.name}
                            </NavLink>
                          </MenuItem>
                        ))}
                      </StyledMenu>
                    </>
                  )}
                </>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              {/* TODO: Pendiente para cuando el usuario se loguee , no borrar por favor*/}
              {/* <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip> */}
              <NavLink to='/login' exact activeClassName='link'>
                <Button className='buttonMUI' variant='outlined'>
                  Entrar
                </Button>
              </NavLink>

              {/* TODO: Pendiente para cuando el usuario se loguee, no borrar por favor */}
              {/*  <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu> */}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Styles>
  );
}
