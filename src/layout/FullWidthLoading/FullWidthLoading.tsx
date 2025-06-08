import { CircularProgress } from "@mui/material";

const FullWidthLoading: React.FC = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        paddingTop: 200,
        paddingBottom: 200,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress />
    </div>
  );
};

export default FullWidthLoading;
