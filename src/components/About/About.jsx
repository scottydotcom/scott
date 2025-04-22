import * as React from "react";
import { Box, Typography } from "@mui/material";
import FadeAnimation from "../FadeAnimation/FadeAnimation";
import "./aboutStyles.css";

const About = () => {
  const hobbyStack = ["Anime", "Gaming", "Reading", "Fitness", "Building PC's", "Designing"];

  return (
    <div id="about">
      <FadeAnimation>
        <Box
          className="aboutContainer"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" }, // Stack on small screens, row on medium and up
            padding: 5, // Adjust padding as needed
            height: "100vh", // Full viewport height
            padding: 75,
          }}
        >
          <Box
            className="about-description"
            sx={{
              flex: 1,
              textAlign: "left", // Change to left alignment
              padding: 2,
            }}
          >
            <Typography
              className="section-header"
              variant="h1"
              component="h1"
              gutterBottom
              sx={{ marginBottom: 1, textAlign: "left" }}
            >
              / about me
            </Typography>
            <Typography variant="body1" paragraph sx={{ marginBottom: 1 }}>
              I am a <b>Software Engineer</b> who indulges in creating user-centric applications, designing and
              developing unique strategies that unify viability with sophistication that balances intricacy and
              simplicity.
            </Typography>
            <Typography variant="body1" paragraph sx={{ marginBottom: 1 }}>
              Outside of work, these are some of my hobbies:
            </Typography>
            <ul className="hobby-stack" style={{ paddingLeft: "0px" }}>
              {hobbyStack.map((hobby, i) => (
                <FadeAnimation key={i} delay={`${i + 1}00ms`}>
                  <li>
                    <Typography variant="body1" sx={{ textAlign: "left" }}>
                      {hobby}
                    </Typography>
                  </li>
                </FadeAnimation>
              ))}
            </ul>
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
              alt="it me scott"
              src="src/assets/imgs/scottFigure1.png" // Replace with your image path
              style={{ maxWidth: "100%", height: "auto" }} // Responsive image
            />
          </Box>
        </Box>
      </FadeAnimation>
    </div>
  );
};

export default About;