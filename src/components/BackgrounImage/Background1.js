import React from "react";
import Image from "next/image";
import { Box, CardMedia } from "@mui/material";

const Background1 = () => {
  return (
    <CardMedia
      component='img'
      height='100%'
      image='/image4.jpg'
      alt='ImageBackground'
      sx={{ zIndex: -10, position:"absolute" }}
    />
  );
};

export default Background1;
