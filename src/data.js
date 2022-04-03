import neighbors from "./images/ftchr.png";
import plane from "./images/skyfall.PNG";
import anime from "./images/anime.png";
import user from "./images/me.jpg";
import social from "./images/socialmedia.jpg"
import ecommerce from "./images/ecommerce.jpg"

export default {

  // Work Section ------------------------
  projects: [
    {
      title: "FTCHr", //Project Title - Add Your Project Title Here
      para: "Pet Social Media Application", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      tools:
        "Tools used - React, Sequelize, Socket.IO, CSS, Axios, Material UI, React Leaflet, Mapbox, Cloudinary",
      imageSrc: neighbors,
      //Project URL - Add Your Project Url Here
      url: "https://ftchrapp.herokuapp.com/",
      github: "https://github.com/amiramonte/FTCHr-Project-3",
    },
    {
      title: "SkyFall Travel", //Project Title - Add Your Project Title Here
      para: "Planner application", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      tools:
        "Tools used - JavaScript, Node.js, MySQL, Express.js, Materialize, Chart.js, Axios",
      imageSrc: plane,
      //Project URL - Add Your Project Url Here
      url: "https://skyfall-travel.herokuapp.com/",
      github: "https://github.com/hcweigand10/SkyFall-Travel",
    },
    {
      title: "What's that Anime?", //Project Title - Add Your Project Title Here
      para: "Anime image analyzer application",
      tools: "Tools Used - HTML, CSS, JavaScript, Foundation",
      // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: anime,
      //Project URL - Add Your Project Url Here
      url: "https://andrewtranmsw.github.io/whatsThatAnime/",
      github: "https://github.com/AndrewTranMSW/whatsThatAnime",
    },
    {
      title: "Team Profile Generator", //Project Title - Add Your Project Title Here
      para: "Generate a HTML website of your team members", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      tools:
        "Tools used - JavaScript, Node.js, Express.js, Inquirer",
      imageSrc: anime,
      //Project URL - Add Your Project Url Here
      github: "https://github.com/truont2/Team-Profile-Page-Generator",
    },
    {
      title: "Ecommerce Back-End", //Project Title - Add Your Project Title Here
      para: "Back-end features of a ecommerce site",
      //Project Image - Add Your Project Image Here
      tools:
        "Tools used - JavaScript, Node.js, MySQL, Express.js",
      imageSrc: ecommerce,
      //Project URL - Add Your Project Url Here
      github: "https://github.com/truont2/mini-shopify",
    },
    {
      title: "Social Media API", //Project Title - Add Your Project Title Here
      para: "Social media back end features", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      tools:
        "Tools used - JavaScript, Node.js, MongoDB, Express.js, Mongoose",
      imageSrc: social,
      //Project URL - Add Your Project Url Here
      github: "https://github.com/truont2/Social-Media-API",
    },
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "Full Stack Developer with a background in Biochemistry. Motivated to take on new challenges and develop exciting and innovative applications for users.",
  aboutParaTwo:
    "In my spare time, I like to play tennis, play computer games, and build Gundam models.",
  aboutImage: user,

  //   End About Section ---------------------

  // Education Section
  education: [
    {
      schoolName: "Web Development",
      descBullets: [
        "Strong Foundation in JavaScript, HTML, and CSS",
        "RESTful API",
        "Backend experience working with databases such as SQL and MongoDB",
        "Experience with ReactJS",
        "Beginner level Java and Python",
        "Passionate, quick-learner, and likes to work on challenging problems",
      ],
    },
  ],

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      para: "HTML-5",
      fontAwesomeClassname: "vscode-icons:file-type-html",
    },
    {
      para: "CSS3",
      fontAwesomeClassname: "vscode-icons:file-type-css",
    },
    {
      para: "JavaScript",
      fontAwesomeClassname: "logos:javascript",
    },
    {
      para: "React.js",
      fontAwesomeClassname: "vscode-icons:file-type-reactjs",
    },
    {
      para: "Node.js",
      fontAwesomeClassname: "logos:nodejs-icon",
    },
    {
      para: "SQL",
      fontAwesomeClassname: "vscode-icons:file-type-sql",
    },
    {
      para: "MongoDB",
      fontAwesomeClassname: "vscode-icons:file-type-mongo",
    },
    {
      para: "Java",
      fontAwesomeClassname: "logos:java",
    },
    {
      para: "Python",
      fontAwesomeClassname: "logos:python",
    },
    {
      para: "Git",
      fontAwesomeClassname: "logos:git-icon",
    },
    {
      para: "Express",
      fontAwesomeClassname: "logos:express",
    },
    {
      para: "Sequelize",
      fontAwesomeClassname: "logos:sequelize",
    },
  ],

  skillOne:
    "Experience building web applications with Front-End and Back-End technologies such as JavaScript, Reactjs, Nodejs, SQL and more.",
  skillTwo:
    "Passionate, quick-learner, and likes to work on challenging problems",
  skillThree: "Currently learning AWS",
  aboutImage: user,

  // End Skills Section --------------------------

};
