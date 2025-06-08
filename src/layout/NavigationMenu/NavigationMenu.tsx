"use client";

import Link from "next/link";
import React from "react";

import { theme } from "@/theme/theme";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Box, Button, IconButton } from "@mui/material";

import { IMenuItem } from "../types";

const NavigationMenu: React.FC<{ menuItems: IMenuItem[] }> = ({
  menuItems,
}) => {
  return (
    <React.Fragment>
      <Box display="flex" gap={2}>
        {menuItems.map((item, index) => (
          <Button
            key={index}
            component={Link}
            href={item.link}
            color="inherit"
            sx={{
              textTransform: "none",
              "&:hover": {
                backgroundColor: "transparent",
                color: theme.palette.menuHover.main,
              },
            }}
          >
            {item.text}
          </Button>
        ))}
      </Box>

      <Box display="flex" gap={1}>
        <IconButton aria-label="user" color="inherit">
          <PersonOutlineOutlinedIcon
            sx={{ color: theme.palette.text.secondary }}
          />
        </IconButton>
        <IconButton aria-label="shoppingCart" color="inherit">
          <ShoppingCartIcon sx={{ color: theme.palette.text.secondary }} />
        </IconButton>
      </Box>
    </React.Fragment>
  );
};

export default NavigationMenu;
