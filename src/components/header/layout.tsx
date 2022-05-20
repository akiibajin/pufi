import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Divider,
  Menu as CollapsibleMenu,
  MenuItem,
  Tooltip,
  List,
  ListItem,
} from "@mui/material";

import {
  BeachAccessOutlined,
  LocalMallOutlined,
  WeekendOutlined,
  FavoriteOutlined,
  AccountCircleOutlined,
  ArrowDropDown,
  Menu,
} from "@mui/icons-material";

import "../../styles/components/layout.scss";
import CollapsibleMenuSection from "./collapsibleMenuSection";
import IconTextButton, { IProps } from "../global/iconTextButton";
import Logo from "./logo";
import { Container } from "@mui/system";
import CollapsibleUserMenu from "./collapsibleUserSection";

const pages: IProps[] = [
  { Icon: WeekendOutlined, content: "PUFI PUFF" },
  { Icon: BeachAccessOutlined, content: "PUFI RAIN" },
  { Icon: LocalMallOutlined, content: "PUFI CART" },
  { Icon: FavoriteOutlined, content: "PUFI NAP" },
];
const settings: string[] = ["Perfil", "Registrarse", "Salir", "Mi Compra"];

const Layout = () => {
  const [anchorLayout, setAnchorLayout] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorUser, setAnchorUser] = React.useState<null | HTMLElement>(null);

  const handleOpenLayoutMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorLayout(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorUser(event.currentTarget);
  };

  const handleCloseLayoutMenu = () => {
    setAnchorLayout(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorUser(null);
  };

  return (
    <React.Fragment>
      <AppBar
        position="sticky"
        color="transparent"
        sx={{
          border: 0,
          boxShadow: 0,
        }}
        className="header-container"
      >
        <Container maxWidth="xl" sx={{ alignItems: "baseline" }}>
          <Toolbar disableGutters>
            <Logo />
            <CollapsibleMenuSection
              anchorLayout={anchorLayout}
              handleCloseLayoutMenu={handleCloseLayoutMenu}
              handleOpenLayoutMenu={handleOpenLayoutMenu}
              pages={pages}
              key={String(React.useId())}
            />
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page, index) => (
                <IconTextButton
                  Icon={page.Icon}
                  content={page.content}
                  key={page.content}
                  isDivider={index < pages.length - 1}
                />
              ))}
            </Box>
            <CollapsibleUserMenu
              settings={settings}
              anchorUser={anchorUser}
              handleCloseUserMenu={handleCloseUserMenu}
              handleOpenUserMenu={handleOpenUserMenu}
            />
            <Box
              sx={{
                flexGrow: 0.2,
                display: { xs: "none", md: "flex" },
                justifyContent: "space-between",
              }}
            >
              <IconButton
                color="inherit"
                aria-controls="open-user-menu"
                aria-haspopup="true"
                onClick={handleOpenUserMenu}
              >
                <Typography
                  noWrap
                  sx={{
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  Mi Cuenta
                </Typography>
                <ArrowDropDown />
              </IconButton>
              <CollapsibleMenu
                sx={{ mt: "45px" }}
                id="open-user-menu"
                anchorEl={anchorUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </CollapsibleMenu>
              <Divider orientation="vertical" flexItem variant="middle" />
              <Typography
                noWrap
                sx={{
                  paddingTop: "8px",
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Mi Compra
              </Typography>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </React.Fragment>
  );
};
export default Layout;
