import {
  Box,
  Tooltip,
  IconButton,
  Menu as CollapsibleMenu,
  MenuItem,
  Typography
} from "@mui/material";
import { AccountCircleOutlined } from "@mui/icons-material";

interface ICollapsibleUserMenu{
    handleOpenUserMenu: (event:React.MouseEvent<HTMLElement>)=>void, 
    handleCloseUserMenu: (event:React.MouseEvent<HTMLElement>)=>void, 
    anchorUser: null | HTMLElement, 
    settings: string[],
}

export default function CollapsibleUserMenu({handleOpenUserMenu, handleCloseUserMenu, anchorUser, settings}: ICollapsibleUserMenu) {
  return (
    <>
      <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
        <Tooltip title="Open user settings">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <AccountCircleOutlined />
          </IconButton>
        </Tooltip>
        <CollapsibleMenu
          sx={{ mt: "45px" }}
          id="pufi-user-menu"
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
      </Box>
    </>
  );
}
