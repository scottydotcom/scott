import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FadeInSection from "./FadeInSection";

const isHorizontal = window.innerWidth < 600;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  if (isHorizontal) {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  } else {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  if (isHorizontal) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`
    };
  } else {
    return {
      id: `vertical-tab-${index}`
    };
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "theme.palette.background.paper",
    display: "flex",
    height: 300
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}));

const JobList = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const experienceItems = {
    LinkedIn: {
      jobTitle: "Data Analytics Engineer Intern @",
      duration: "JUL 2024 - JAN 2025",
      desc: [
        "Led project to integrate Git with organization’s web-based IDE to improve developer experience and productivity.",
        "Created a centralized folder structure for all projects to improve organization and accessibility, allowing developers to easily find and access their projects and collaborate more effectively.",
        "Refactored SQL, Python, and Bash scripts optimizing performance and maintainability for code migrations.",
        "Managed data pipelines for regional planning and forecasting, ensuring data accuracy and reliability that support stakeholders management resulting in a streamlined process."
      ]
    },
    "Code with Craig": {
      jobTitle: "Front-end developer apprentice @",
      duration: "May 2024 - Current",
      desc: [
        "Actively contributing to the development and enhancement of my Bootcamp instructor's website, focusing on creating clear and engaging examples of JavaScript, HTML, and CSS.",
        "Coordinated with the instructor to create a seamless and visually appealing site layout, improving user experience and navigation.",
        "Collaborated on redesigning and enhancing user interfaces for the Bootcamp instructor's website, ensuring improved accessibility and responsiveness.",
        "Coordinated with the instructor to create a seamless and visually appealing site layout, improving user experience and navigation."
      ]
    },
    // "open source": {
    //   jobTitle: "Front-end developer apprentice @",
    //   duration: "Place Holder 2025 - Place Holder 2025",
    //   desc: [
    //     "place holder",
    //     " place holder"
    //   ]
    // },
    // "Place Holder1": {
    //   jobTitle: "Place Holder @",
    //   duration: "Place Holder 20XX - Place Holder 20XX",
    //   desc: [
    //     "Place Holder",
    //     "Place Holder",
    //     "Place Holder"
    //   ]
    // },
    // "Place Holder2": {
    //   jobTitle: "Place Holder @",
    //   duration: "Place Holder 20XX - Place Holder 20XX",
    //   desc: [
    //     "Place Holder",
    //     "Place Holder",
    //     "Place Holder"
    //   ]
    // }
    
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation={!isHorizontal ? "vertical" : null}
        variant={isHorizontal ? "fullWidth" : "scrollable"}
        value={value}
        onChange={handleChange}
        className={classes.tabs}
      >
        {Object.keys(experienceItems).map((key, i) => (
          <Tab label={isHorizontal ? `0${i}.` : key} {...a11yProps(i)} />
        ))}
      </Tabs>
      {Object.keys(experienceItems).map((key, i) => (
        <TabPanel value={value} index={i}>
          <span className="joblist-job-title">
            {experienceItems[key]["jobTitle"] + " "}
          </span>
          <span className="joblist-job-company">{key}</span>
          <div className="joblist-duration">
            {experienceItems[key]["duration"]}
          </div>
          <ul className="job-description">
            {experienceItems[key]["desc"].map(function (descItem, i) {
              return (
                <FadeInSection delay={`${i + 1}00ms`}>
                  <li key={i}>{descItem}</li>
                </FadeInSection>
              );
            })}
          </ul>
        </TabPanel>
      ))}
    </div>
  );
};

export default JobList;
