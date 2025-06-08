import { theme } from "@/theme/theme";
import { Button, Typography } from "@mui/material";
import Link from "next/link";

const ActionButton: React.FC<{ href: string; description: string }> = ({
  href,
  description,
}) => {
  return (
    <Button
      component={Link}
      {...{ href }}
      color="inherit"
      sx={{
        textTransform: "none",
        backgroundColor: "transparent",
        border: "1px solid ",
        borderColor: theme.palette.button.main,
        borderRadius: "16px",
        width: "100%",
        padding: "14px",
        "&:hover": {
          backgroundColor: theme.palette.button.main,
        },
      }}
    >
      <Typography
        variant="body1"
        sx={{ color: theme.palette.text.secondary, fontWeight: "bold" }}
      >
        {description}
      </Typography>
    </Button>
  );
};

export default ActionButton;
