import { Box, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#13505C",
        // backgroundImage:
        //   "linear-gradient(to bottom, #168851, #296638, #274625, #1d2917, #0b0d08);",
        height: "10rem",
      }}
    >
      <Box
        sx={{
          pt: 5,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <Typography
          sx={{
            color: "#FFF",
            cursor: "pointer",
            "&:hover": { color: "#fc6f03" },
          }}
        >
          About Me
        </Typography>
        <Typography
          sx={{
            color: "#FFF",
            cursor: "pointer",
            "&:hover": { color: "#fc6f03" },
          }}
        >
          Contact Me
        </Typography>
      </Box>

      <Typography
        sx={{ color: "#FFF", textAlign: "center", pt: 8, fontSize: 10 }}
      >
        Copyright 2016-2022 by Elegent Web Solutions. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
