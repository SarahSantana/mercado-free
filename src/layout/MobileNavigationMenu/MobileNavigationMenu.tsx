"use client";

import Link from "next/link";
import React from "react";

import { theme } from "@/theme/theme";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

import { IMenuItem } from "../types";
import useMobileNavigationMenu from "./useMobileNavigationMenu";

const MobileNavigationMenu: React.FC<{ menuItems: IMenuItem[] }> = ({
  menuItems,
}) => {
  const { toggleDrawer, drawerOpen } = useMobileNavigationMenu();

  return (
    <React.Fragment>
      <IconButton onClick={toggleDrawer(true)}>
        <MenuIcon sx={{ color: theme.palette.text.secondary }} />
      </IconButton>
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250, p: 2 }} role="presentation">
          <List>
            {menuItems.map((item, index) => (
              <ListItem key={index} component={Link} href={item.link}>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </React.Fragment>
  );
};

export default MobileNavigationMenu;
