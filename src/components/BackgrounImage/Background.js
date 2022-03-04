import React from "react";
import Image from "next/image";
import { Box } from "@mui/material";

const Background = () => {
  return (
    <div className="imageWrap">
      <Image
        className='imageWrap'
        alt='Mountains'
        src='/image4.jpg'
        layout='fill'
        objectFit='cover'
        // quality={100}
      />
    </div>
  );
};

export default Background;
