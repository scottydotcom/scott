how to call my order list as an array
```jsx
  const techStack =[
    { name: "Javascript", icon: <SiJavascript /> },
    { name: "React", icon: <SiReact /> },
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "SQL", icon: <SiMysql /> },
    { name: "Python", icon: <SiPython /> },
    { name: "Tableau", icon: <SiTableau /> }
  ]
  
{
  [
    techStack.map((tech, index) => (
      <li key={index}>
        {tech.icon} {tech.name}
      </li>
    )),
  ];
}
```

how to call my paragrapghs
```jsx
  const one = (
    <p>
      I am a Software Engineer crafting user-centric applications with strategies that unify viability and
      sophistication, balancing intricacy and simplicity for seamless experiences.
    </p>
  );
  const two = (
    <p>
      Outside of work, I watch anime, read books, play video games, and explore architectural design concepts. I
      prioritize a healthy diet and fitness life style. As a self-proclaimed homebody, I appreciate the comfort of my
      space and love playing pool as well as seeking ways to enhance everyday life.
    </p>
  );

  {[one]}
  {[two]}

  .experience-card {
  display: flex;
  align-items: center;
  border: 1px solid var(--light-slate);
  border-radius: 8px;
  padding: 16px;
  max-width: 425px;
  background-color: var(--ash-black);
  transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease; /* Add transition for smooth effect */
}

.experience-card:hover {
  transform: scale(1.1);
  background-color: var(--ash-grey); /* Change to a lighter color for the glow effect */
  /* box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2); Add shadow for depth */
}

.company-image {
  width: 150px;
  height: auto;
  border-radius: 8px;
  margin-right: 16px;
}

.experienceCard-content {
  display: flex;
  flex-direction: column;
}

.experienceCard-header {
   display: flex; /* Use flexbox for alignment */
  justify-content: space-between; /* Space between title and icon */
  align-items: center; /* Center vertically */
  font-size: 1.5rem;
  margin-bottom: 8px;
  color: var(--cornflower-blue);
}

.pexperienceCard-header a {
  color: var(--light-slate);
  margin-left: 8px; /* Add some space between the title and the icon */
  display: flex; /* Ensure the icon is centered */
  align-items: center; /* Center the icon vertically */
}

.experience-iconContainer {
  display: flex;
  align-items: center;
  margin-left: 8px;
}

.experience-button-icon {
  color: var(--light-slate);
  margin-left: 4px;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
}



.experienceCard-body {
  font-size: 1rem;
  margin-bottom: 12px;
  color: var(--light-slate);
}

.experienceCard-footer {
  color: var(--slate);
  font-size: 0.875rem;
}
