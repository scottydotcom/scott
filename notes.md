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