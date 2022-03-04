import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const IconWrapper = styled("div")(({ theme }) => ({
  fontSize: { xs: "24px", sm: "30px" },
  p: 2,
  cursor: "pointer",
}));

export default function Header() {
  return (
    <Box>
      <AppBar sx={{ backgroundColor: "#13505C", position:"sticky" }}>
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            position:"sticky"
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "24px", sm: "30px", md: "40px" },
              color: "#e48257",
              fontWeight: 600,
              cursor: "pointer",
              "&:hover": { color: "#fff", transition: "1s" },
            }}
          >
            Ankush
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              pr: 2,
            }}
          >
            <Typography
              sx={{
                fontWeight: 600,
                cursor: "pointer",
                display:{xs:"none", sm:"block"},
                "&:hover": { color: "#e48257", transition: "1s" },
                mr:1
              }}
            >
              ankush357159@gmail.com
            </Typography>
            <IconWrapper>
              <Box component='span' sx={{ mr: 2 }}>
                <LinkedInIcon
                  sx={{
                    "&:hover": { color: "#e48257", transition: "1s" },
                  }}
                />
              </Box>

              <Box component='span' sx={{ mr: 2 }}>
                <GitHubIcon
                  sx={{
                    "&:hover": { color: "#e48257", transition: "1s" },
                  }}
                />
              </Box>
            </IconWrapper>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
