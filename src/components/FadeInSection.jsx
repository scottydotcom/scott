// import React from "react";

// export default function FadeInSection(props) {
//   const [isVisible, setVisible] = React.useState(false);
//   const domRef = React.useRef();
//   React.useEffect(() => {
//     const observer = new IntersectionObserver(entries => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           setVisible(entry.isIntersecting);
//         }
//       });
//     });
//     observer.observe(domRef.current);
//     return () => observer.unobserve(domRef.current);
//   }, []);
//   return (
//     <div
//       className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
//       style={{ transitionDelay: `${props.delay}` }}
//       ref={domRef}
//     >
//       {props.children}
//     </div>
//   );
// }

import React, { useEffect, useRef, useState } from "react";

const FadeInSection = (props) => {
  const [isVisible, setVisible] = useState(false);

  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true); // Set visibility to true when the element is in view

          entry.target.classList.add("fade-in"); // Add fade-in class
        }
      });
    });

    const element = domRef.current;

    if (element) {
      observer.observe(element); // Observe the element
    }

    // Cleanup function

    return () => {
      if (element) {
        observer.unobserve(element); // Unobserve the element on cleanup
      }
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

  return (
    <div
      ref={domRef}
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      style={{ transitionDelay: `${props.delay}` }} // Use the delay prop for transition
    >
      {props.children}
    </div>
  );
};

export default FadeInSection;
