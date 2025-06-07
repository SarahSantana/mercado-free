"use client";

import React from "react";

import { AppBar, Toolbar, Typography } from "@mui/material";

import MobileNavigationMenu from "../MobileNavigationMenu/MobileNavigationMenu";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import useMainHeader from "./useMainHeader";
import { texts } from "../texts";

const MainHeader: React.FC = () => {
  const { isMobile, menuItems } = useMainHeader();

  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{
        bgcolor: "background.paper",
        borderRadius: "50px",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", px: 2 }}>
        <Typography variant="h6">{texts.ptBR.pageName}</Typography>
        {isMobile ? (
          <MobileNavigationMenu {...{ menuItems }} />
        ) : (
          <NavigationMenu {...{ menuItems }} />
        )}
      </Toolbar>
    </AppBar>
  );
};

export default MainHeader;
