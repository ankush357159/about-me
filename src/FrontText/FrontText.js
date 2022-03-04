import React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";

const TextWrapper = styled("div")(({ theme }) => ({
  zIndex: 1,
  color: "#fff",
}));

const FrontText = () => {
  return (
    <Box
      sx={{
        mx: { xs: 5, sm: 10, md: 15, lg: 16 },
        mt: { xs: 4, sm: 6, md: 7 },
        position: "relative",
      }}
    >
      <style jsx>
        {`
          .heading {
            font-family: "Smooch Sans", sans-serif;
          }
        `}
      </style>
      <Typography
        className='heading'
        sx={{
          fontSize: { xs: "30px", sm: "40px", md: "64px" },
          zIndex: 1,
          color: "#fff",
        }}
      >
        Ankush
      </Typography>

      <TextWrapper>
        {/* <Typography
          sx={{ fontSize: { xs: "20px", sm: "22px", m: "30px" }, mt: 1 }}
        >
          I am a{" "}
          <Box component='span' sx={{ color: "#e37d34" }}>
            Mechanical Engineer
          </Box>{" "}
          with over 15 years of experience.
        </Typography> */}

        <Typography
          sx={{ fontSize: { xs: "20px", sm: "22px", m: "30px" }, mt: 1 }}
        >
          I specialize in{" "}
          <Box component='span' sx={{ color: "#e37d34" }}>
            Full-Stack Web Development
          </Box>{" "}
          using{" "}
          <Box component='span' sx={{ color: "#e37d34" }}>
            ReactJS, Django and NodeJs
          </Box>
          .
        </Typography>
        <Typography
          sx={{ fontSize: { xs: "20px", sm: "22px", m: "30px" }, mt: 1 }}
        >
          I am an active advocate of{" "}
          <Box component='span' sx={{ color: "#e37d34" }}>
            minimalism
          </Box>{" "}
          in design and always strive to create beautifully looking work, also
          maintaing quality User Experience.
        </Typography>

        <Typography
          sx={{ fontSize: { xs: "20px", sm: "22px", m: "30px" }, mt: 1 }}
        >
          I bring a{" "}
          <Box component='span' sx={{ color: "#e37d34" }}>
            strong sense of aesthetics
          </Box>
          , attention to detail and a perfectionist attitude towards my work.
        </Typography>
        <Typography
          sx={{ fontSize: { xs: "20px", sm: "22px", m: "30px" }, mt: 1 }}
        >
          I am an efficient learner with an{" "}
          <Box component='span' sx={{ color: "#e37d34" }}>
            open-mind{" "}
          </Box>
          for new technologies and passion to innovate.
        </Typography>
      </TextWrapper>
    </Box>
  );
};

export default FrontText;
