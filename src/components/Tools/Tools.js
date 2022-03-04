import { Typography, Divider } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import React from "react";

const Tools = () => {
  return (
    <Box
      sx={{
        mx: { xs: 5, sm: 10, md: 15, lg: 16 },
        mt: { xs: 4, sm: 6, md: 7 },
        position: "relative",
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "24px", sm: "30px", md: "36px" },
          zIndex: 1,
          color: "#fff",
          textAlign: "center",
        }}
      >
        🚀 Languages and Tools:
      </Typography>
      <Divider light={true} sx={{ mb: 1, ml: "20%", mr: "20%", backgroundColor:"#9fa1a1" }} />

      <Typography
        sx={{
          fontSize: { xs: "16px", sm: "20px", md: "24px" },
          zIndex: 1,
          color: "#fff",
          pt: 2,
          textAlign: "center",
        }}
      >
        Frontend Development Technologies
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            border: "1px solid #9fa1a1",
            p: 1,
          }}
        >
          <Typography sx={{ textAlign: "center", color: "#fff" }}>
            React.js
          </Typography>
          <Image alt='ReactJs' src='/ReactIcon.png' width={75} height={60} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            border: "1px solid #9fa1a1",
            p: 1,
          }}
        >
          <Typography sx={{ textAlign: "center", color: "#fff" }}>
            Javascript
          </Typography>
          <Image alt='ReactJs' src='/javascript.png' width={75} height={60} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            border: "1px solid #9fa1a1",
            p: 1,
          }}
        >
          <Typography sx={{ textAlign: "center", color: "#fff" }}>
            Redux
          </Typography>
          <Image alt='ReactJs' src='/redux.png' width={75} height={60} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            border: "1px solid #9fa1a1",
            p: 1,
          }}
        >
          <Typography sx={{ textAlign: "center", color: "#fff" }}>
            MaerialUI
          </Typography>
          <Image alt='ReactJs' src='/mui.png' width={75} height={60} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            border: "1px solid #9fa1a1",
            p: 1,
          }}
        >
          <Typography sx={{ textAlign: "center", color: "#fff" }}>
            Bootstrap
          </Typography>
          <Image alt='ReactJs' src='/bootstrap.png' width={75} height={60} />
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          justifyContent: "space-evenly",
          mt: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            border: "1px solid #9fa1a1",
            p: 1,
          }}
        >
          <Typography sx={{ textAlign: "center", fontSize: "12px" }}>
            Tailwind CSS
          </Typography>
          <Image alt='ReactJs' src='/tailwind.jpg' width={75} height={60} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            border: "1px solid #9fa1a1",
            p: 1,
          }}
        >
          <Typography sx={{ textAlign: "center", color: "#fff" }}>
            NextJs
          </Typography>
          <Image alt='ReactJs' src='/nextjs.png' width={75} height={60} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            border: "1px solid #9fa1a1",
            p: 1,
          }}
        >
          <Typography sx={{ textAlign: "center", color: "#fff" }}>
            HTML5
          </Typography>
          <Image alt='ReactJs' src='/html5.png' width={75} height={60} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            border: "1px solid #9fa1a1",
            p: 1,
          }}
        >
          <Typography sx={{ textAlign: "center", color: "#fff" }}>
            Angular
          </Typography>
          <Image alt='ReactJs' src='/Angular.svg' width={75} height={60} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            border: "1px solid #9fa1a1",
            p: 1,
          }}
        >
          <Typography sx={{ textAlign: "center", color: "#fff" }}>
            SASS
          </Typography>
          <Image alt='ReactJs' src='/sass.png' width={75} height={60} />
        </Box>
      </Box>

      <Typography
        sx={{
          fontSize: { xs: "16px", sm: "20px", md: "24px" },
          zIndex: 1,
          color: "#fff",
          pt: 6,
          textAlign: "center",
        }}
      >
        Backend Development Technologies
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            border: "1px solid #9fa1a1",
            p: 1,
          }}
        >
          <Typography sx={{ textAlign: "center", color: "#fff" }}>
            Django
          </Typography>
          <Image alt='ReactJs' src='/django.png' width={75} height={60} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            border: "1px solid #9fa1a1",
            p: 1,
          }}
        >
          <Typography sx={{ textAlign: "center", color: "#fff" }}>
            Express.js
          </Typography>
          <Image alt='ReactJs' src='/Expressjs.png' width={75} height={60} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            border: "1px solid #9fa1a1",
            p: 1,
          }}
        >
          <Typography sx={{ textAlign: "center", color: "#fff" }}>
            NodeJs
          </Typography>
          <Image alt='ReactJs' src='/node.png' width={75} height={60} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            border: "1px solid #9fa1a1",
            p: 1,
          }}
        >
          <Typography sx={{ textAlign: "center", color: "#fff" }}>
            Laravel
          </Typography>
          <Image alt='ReactJs' src='/laravel.png' width={75} height={60} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            border: "1px solid #9fa1a1",
            p: 1,
          }}
        >
          <Typography sx={{ textAlign: "center", color: "#fff" }}>
            MySQL
          </Typography>
          <Image alt='ReactJs' src='/mysql.png' width={75} height={60} />
        </Box>
      </Box>

      <Typography
        sx={{
          fontSize: { xs: "16px", sm: "20px", md: "24px" },
          zIndex: 1,
          color: "#fff",
          pt: 6,
          textAlign: "center",
        }}
      >
        Other Technologies
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            border: "1px solid #9fa1a1",
            p: 1,
          }}
        >
          <Typography sx={{ textAlign: "center", color: "#fff" }}>
            Docker
          </Typography>
          <Image alt='ReactJs' src='/docker.png' width={75} height={60} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            border: "1px solid #9fa1a1",
            p: 1,
          }}
        >
          <Typography sx={{ textAlign: "center", color: "#fff" }}>
            Bash
          </Typography>
          <Image alt='ReactJs' src='/bash.jpg' width={75} height={60} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            border: "1px solid #9fa1a1",
            p: 1,
          }}
        >
          <Typography sx={{ textAlign: "center", color: "#fff" }}>
            Git
          </Typography>
          <Image alt='ReactJs' src='/github.png' width={75} height={60} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            border: "1px solid #9fa1a1",
            p: 1,
          }}
        >
          <Typography sx={{ textAlign: "center", color: "#fff" }}>
            Postman
          </Typography>
          <Image alt='ReactJs' src='/postman.png' width={75} height={60} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            border: "1px solid #9fa1a1",
            p: 1,
          }}
        >
          <Typography sx={{ textAlign: "center", color: "#fff" }}>
            AWS
          </Typography>
          <Image alt='ReactJs' src='/aws.png' width={75} height={60} />
        </Box>
      </Box>
    </Box>
  );
};

export default Tools;
