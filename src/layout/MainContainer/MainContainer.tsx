import { ReactNode } from "react";

import { Container } from "@mui/material";

const MainContainer: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Container maxWidth="lg" sx={{ px: 6, mt: 3, mb: 6 }}>
      {children}
    </Container>
  );
};

export default MainContainer;
