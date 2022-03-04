import React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";

const Projects = () => {
  return (
    <Box>
      <Typography
        sx={{
          fontSize: { xs: "24px", sm: "30px", md: "36px" },
          zIndex: 1,
          color: "#fff",
          textAlign: "center",
          pt: {xs:6, sm:6, md:6},
          mb: {xs:2, sm:3, md:4},
        }}
      >
        Projects
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          
        }}
      >
        <Link
          href='https://github.com/ankush357159/ecom-dashboard'
          passHref={true}
        >
          <Box
            sx={{
              width: "25%",
              height: "100px",
              backgroundColor: "#e6e8eb",
              textAlign: "center",
              borderRadius: 3,
              cursor: "pointer",
              mb: 3,
              backgroundImage: "linear-gradient(to right top, #051b37, #003757, #00556a, #00726c, #098e5f)"
            }}
          >
            <Typography sx={{ pt: "15%", color:"#fff" }}>Ecommerce Django-react</Typography>
          </Box>
        </Link>
        <Link href='https://github.com/ankush357159/Food-App-Frontend' passHref={true}>
          <Box
            sx={{
              width: "25%",
              height: "100px",
              backgroundColor: "#e6e8eb",
              textAlign: "center",
              borderRadius: 3,
              cursor: "pointer",
              mb: 3,
              backgroundImage: "linear-gradient(to right top, #051b37, #003757, #00556a, #00726c, #098e5f)"
            }}
          >
            <Typography sx={{ pt: "15%", color:"#fff"  }}>Food Ordering App</Typography>
          </Box>
        </Link>
        <Link href='https://github.com/ankush357159/tesla-clone' passHref={true}>
          <Box
            sx={{
              width: "25%",
              height: "100px",
              backgroundColor: "#e6e8eb",
              textAlign: "center",
              borderRadius: 3,
              cursor: "pointer",
              mb: 3,
              backgroundImage: "linear-gradient(to right top, #051b37, #003757, #00556a, #00726c, #098e5f)"
            }}
          >
            <Typography sx={{ pt: "15%", color:"#fff"  }}>Tesla-clone</Typography>
          </Box>
        </Link>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <Link
          href='https://github.com/ankush357159/airbnb'
          passHref={true}
        >
          <Box
            sx={{
              width: "25%",
              height: "100px",
              backgroundColor: "#e6e8eb",
              textAlign: "center",
              borderRadius: 3,
              cursor: "pointer",
              mb: {xs:4, sm:6, md:8},
              backgroundImage: "linear-gradient(to right top, #051b37, #003757, #00556a, #00726c, #098e5f)"
            }}
          >
            <Typography sx={{ pt: "15%", color:"#fff"  }}>Airbnb-clone-react</Typography>
          </Box>
        </Link>
        <Link href='https://github.com/ankush357159/weather-app' passHref={true}>
          <Box
            sx={{
              width: "25%",
              height: "100px",
              backgroundColor: "#e6e8eb",
              textAlign: "center",
              borderRadius: 3,
              cursor: "pointer",
              mb: 10,
              backgroundImage: "linear-gradient(to right top, #051b37, #003757, #00556a, #00726c, #098e5f)"
            }}
          >
            <Typography sx={{ pt: "15%", color:"#fff"  }}>Weather Forecast App</Typography>
          </Box>
        </Link>
        <Link href='https://github.com/ankush357159/flipcart-clone' passHref={true}>
          <Box
            sx={{
              width: "25%",
              height: "100px",
              backgroundColor: "#e6e8eb",
              textAlign: "center",
              borderRadius: 3,
              cursor: "pointer",
              mb: 10,
              backgroundImage: "linear-gradient(to right top, #051b37, #003757, #00556a, #00726c, #098e5f)"
            }}
          >
            <Typography sx={{ pt: "15%", color:"#fff"  }}>Flipcart-clone</Typography>
          </Box>
        </Link>
      </Box>
    </Box>
  );
};

export default Projects;
