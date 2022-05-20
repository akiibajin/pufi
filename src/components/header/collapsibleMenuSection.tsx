import {
  IconButton,
  Box,
  Typography,
  Menu as CollapsibleMenu,
  List,
  ListItem,
} from "@mui/material";
import IconTextButton, { IProps } from "../global/iconTextButton";
import { Menu } from "@mui/icons-material";

interface ICollapsibleSection {
  handleOpenLayoutMenu: (event:React.MouseEvent<HTMLElement>)=>void;
  handleCloseLayoutMenu: (event:React.MouseEvent<HTMLElement>)=>void;
  anchorLayout: null | HTMLElement;
  pages: IProps[];
}

export default function CollapsibleMenuSection({
  handleOpenLayoutMenu,
  handleCloseLayoutMenu,
  anchorLayout,
  pages,
}: ICollapsibleSection) {
  return (
    <>
      <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
        <IconButton
          size="large"
          aria-label="PUFI options"
          aria-controls="menu-pufi"
          aria-haspopup="true"
          onClick={handleOpenLayoutMenu}
          color="inherit"
        >
          <Menu />
        </IconButton>
        <CollapsibleMenu
          id="menu-pufi"
          anchorEl={anchorLayout}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorLayout)}
          onClose={handleCloseLayoutMenu}
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          <List>
            {pages.map((page) => (
              <ListItem key={page.content} onClick={handleCloseLayoutMenu}>
                <IconTextButton
                  Icon={page.Icon}
                  content={page.content}
                  buttonClass="menu-items"
                />
              </ListItem>
            ))}
          </List>
        </CollapsibleMenu>
      </Box>
    </>
  );
}
