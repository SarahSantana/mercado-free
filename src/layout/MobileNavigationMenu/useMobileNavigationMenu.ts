import { useState } from "react";

const useMobileNavigationMenu = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  return { toggleDrawer, drawerOpen };
};

export default useMobileNavigationMenu;
