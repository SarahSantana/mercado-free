import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { Typography } from "@mui/material";

import { texts } from "../../texts";

const NotFoundProduct: React.FC = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        paddingTop: 100,
        paddingBottom: 100,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <SentimentVeryDissatisfiedIcon fontSize="large" color="action" />
      <Typography>{texts.ptBR.productDetail.notFoundMessage}</Typography>
    </div>
  );
};

export default NotFoundProduct;
