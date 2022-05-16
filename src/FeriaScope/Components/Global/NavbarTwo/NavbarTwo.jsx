import React from "react";
import { AppBar, Box, Toolbar, IconButton, Badge } from "@mui/material";
import { Tooltip, Avatar, Typography } from "@mui/material";
import { Menu, Container, Button } from "@mui/material";
import { MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { FolderOutlined, ShoppingCartOutlined } from "@mui/icons-material";

// Assets
import image from "../../../../assets/img/Feria/Components/Logo.webp";
// Helper
import { pages, settings } from "./NavbarTwo.helper";
// Styles
import { anchorOrigin, BoxStyle, BoxStyleTwo } from "./NavbarTwo.styles";
import { ButtonStyle, Styles, sx, TypographyStyle } from "./NavbarTwo.styles";
import { sxTwo, transformOrigin } from "./NavbarTwo.styles";
import { Search, SearchIconWrapper } from "./NavbarTwo.material";
import { StyledInputBase } from "./NavbarTwo.material";

export default function NavbarTwo() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Styles>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={TypographyStyle}
            >
              <img src={image} alt="Logo de aeronautica" />
            </Typography>

            <Box sx={BoxStyle}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={anchorOrigin}
                keepMounted
                transformOrigin={transformOrigin}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={sx}
              >
                {pages.map((page) => (
                  <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                    <Typography>{page.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography variant="h6" noWrap component="div" sx={sxTwo}>
              <img src={image} alt="Logo de aeronautica" />
            </Typography>
            <Box sx={BoxStyleTwo}>
              {pages.map((page) => (
                <Button
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  sx={ButtonStyle}
                >
                  {page.name}
                </Button>
              ))}
            </Box>

            <Box className="search">
              <Search>
                <SearchIconWrapper>
                  <SearchIcon className="icon" />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="¿Qué quieres aprender hoy?"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
              <IconButton size="large" color="inherit">
                <Badge>
                  <FolderOutlined />
                </Badge>
              </IconButton>
              <IconButton size="large" color="inherit">
                <Badge>
                  <ShoppingCartOutlined />
                </Badge>
              </IconButton>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
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
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Styles>
  );
}
