// ScrollToTopButton.js
import React, { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,

      behavior: "smooth", // Smooth scroll animation
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button onClick={scrollToTop} style={styles.button}>
          ^
        </button>
      )}
    </div>
  );
};

const styles = {
  button: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    width: "50px", // Set width
    height: "50px", // Set height
    borderRadius: "50%", // Make it circular
    backgroundColor: "#1C1D24",
    color: "#fff",
    border: "none",
    fontSize: "24px", // Increase font size for the arrow
    cursor: "pointer",
    zIndex: 1000,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)", // Optional shadow for better visibility
    transition: "background-color 0.3s", // Smooth transition for hover effect
  },
};

export default ScrollToTopButton;
