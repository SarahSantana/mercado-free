import { theme } from "@/theme/theme";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Box, IconButton, Typography } from "@mui/material";

import { texts } from "../texts";

const Footer: React.FC = () => {
  return (
    <div
      style={{
        backgroundColor: theme.palette.footer.main,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box flex={1} maxWidth="lg" sx={{ mb: 8, mt: 6, px: 6 }}>
        <Box
          display="flex"
          sx={{
            borderBottom: "1px solid",
            justifyContent: "space-between",
            borderColor: theme.palette.footer.dark,
            paddingBottom: 3,
          }}
        >
          <Typography variant="h6">{texts.ptBR.pageName}</Typography>
          <Box
            display="flex"
            gap={1}
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              variant="body1"
              sx={{ color: theme.palette.text.primary, fontWeight: "bold" }}
            >
              {texts.ptBR.footer.networks.description}
            </Typography>
            <IconButton aria-label="youtube" color="inherit">
              <YouTubeIcon sx={{ color: theme.palette.text.primary }} />
            </IconButton>
            <IconButton aria-label="facebook" color="inherit">
              <FacebookIcon sx={{ color: theme.palette.text.primary }} />
            </IconButton>
            <IconButton aria-label="instagram" color="inherit">
              <InstagramIcon sx={{ color: theme.palette.text.primary }} />
            </IconButton>
          </Box>
        </Box>
        <Typography
          variant="body2"
          sx={{ color: theme.palette.text.primary, marginTop: 2 }}
        >
          {texts.ptBR.footer.credits}
        </Typography>
      </Box>
    </div>
  );
};

export default Footer;
