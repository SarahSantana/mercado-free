import { theme } from "@/theme/theme";
import { Card, CardContent, Typography } from "@mui/material";

const TextCard: React.FC<{ title: string; description: string }> = ({
  title,
  description,
}) => {
  return (
    <Card
      variant="outlined"
      sx={{ borderRadius: "16px", borderColor: theme.palette.card.main }}
    >
      <CardContent sx={{ padding: "16px 30px" }}>
        <Typography
          variant="body1"
          sx={{ color: theme.palette.text.secondary, fontWeight: "bold" }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: theme.palette.text.secondary }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TextCard;
