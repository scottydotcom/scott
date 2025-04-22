import * as React from "react";
import { Box, Typography } from "@mui/material";
import FadeAnimation from "../FadeAnimation/FadeAnimation";


const Intro = () => {
  return (
    <FadeAnimation>
    <Box className="introContainer"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Full viewport height
        flexDirection: { xs: "column", md: "row" }, // Stack on small screens, row on medium and up
        padding: 75,
      

      }}
    >
      <Box
        sx={{
          flex: 1,
          textAlign: "center",
          padding: 2,
        }}
      >
        <Typography variant="h1" component="h1" gutterBottom sx={{ marginBottom: 1 }}>
          hi, <span className="introName"> scott </span> here.
        </Typography>
        <Typography variant="h4" className="introPhrase" sx={{ marginBottom: 1 }}>
          I bring ideas to life.
        </Typography>
        {/* <Typography variant="body1" paragraph sx={{ marginBottom: 1 }}>
          I'm a software engineer, creator, problem solver, and innovator
        </Typography> */}
        <Typography variant="h4" className="introPhrase" sx={{ marginBottom: 1 }}>
          I'm a <strong className="highlight">ux strategist</strong>, <strong className="highlight">creator</strong>
          , <strong className="highlight">problem solver</strong>, and <strong className="highlight">innovator</strong>.
        </Typography>
      </Box>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 2,
        }}
      >
        <img
          src="src/assets/imgs/scottFigure1.png" // Replace with your image path
          alt="Description of the image"
          // style={{ width: 512, height: 768 }} // Responsive image
        />
      </Box>
    </Box>
        </FadeAnimation >
  );
};

export default Intro;
