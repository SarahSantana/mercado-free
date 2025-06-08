import { ReactNode } from "react";

import { Box } from "@mui/material";

const PageContainer: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <Box sx={{ px: 0, mt: 6, mb: 0 }}>{children}</Box>;
};

export default PageContainer;
