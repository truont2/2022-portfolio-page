import neighbors from "./images/neighbors.jpg";
import plane from "./images/airplane.jpg";
import anime from "./images/anime.jpg";
import user from "./images/me.jpg";

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "chetan",
  headerTagline: [
    //Line 1 For Header
    "Building digital",
    //Line 2 For Header
    "products, brands,",
    //Line 3 For Header
    "and experience",
  ],
  //   Header Paragraph
  headerParagraph:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",

  //Contact Email
  contactEmail: "hello@chetanverma.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "FTCHr", //Project Title - Add Your Project Title Here
      para: "Pet Social Media Application", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      tools:
        "Tools used - React, Sequelize, Socket.io, CSS, Axios, Material UI, React Leaflet, Mapbox, Cloudinary",
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
      para: "Image analysis application",
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
      para: "Team Wesbite Generator", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      tools:
        "Tools used - JavaScript, Node.js, MySQL, Express.js, Materialize, Chart.js, Axios",
      imageSrc: anime,
      //Project URL - Add Your Project Url Here
      github: "https://github.com/truont2/Team-Profile-Page-Generator",
    },
    {
      title: "Ecommerce Back-End", //Project Title - Add Your Project Title Here
      para: "Back-end features of a ecommerce site",
      //Project Image - Add Your Project Image Here
      tools:
        "Tools used - JavaScript, Node.js, MySQL, Express.js, Materialize, Chart.js, Axios",
      imageSrc:
        "https://images.unsplash.com/photo-1534239143101-1b1c627395c5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzZ8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
      //Project URL - Add Your Project Url Here
      github: "https://github.com/truont2/mini-shopify",
    },
    {
      title: "Discord Bot", //Project Title - Add Your Project Title Here
      para: "Discord Bot", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      tools:
        "Tools used - JavaScript, Node.js, MySQL, Express.js, Materialize, Chart.js, Axios",
      imageSrc:
        "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTAyfHxwYXN0ZWx8ZW58MHx8MHw%3D&auto=format&fit=crop&w=400&q=60",
      //Project URL - Add Your Project Url Here
      url: "https://andrewtranmsw.github.io/whatsThatAnime/",
      github: "https://github.com/AndrewTranMSW/whatsThatAnime",
    },

    /*
    If You Want To Add More Project just Copy and Paste This At The End
    ,{
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "Aspiring Full-Stack Developer. Recent graduate from the University of Washington majoring in Biochemistry. Motivated to take on new challenges and to become a software developer in the future and develop exciting and innovative applications for users.",
  aboutParaTwo:
    "In my spare time, I like to play tennis, exercise, play computer games, and build Gundam models.",
  aboutImage: user,

  //   End About Section ---------------------

  // Education Section
  education: [
    {
      schoolName: "Web Development",
      descBullets: [
        "Relavent courses: CSE 142(Intro to Java) and CSE 160 (Data Programming: Python)",
      ],
    },
    {
      schoolName: "Fun Facts",
      descBullets: [
        "Relavent courses: CSE 142(Intro to Java) and CSE 160 (Data Programming: Python)",
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
      para: "SQL-database",
      fontAwesomeClassname: "vscode-icons:file-type-sql",
    },
    {
      para: "MongoDB",
      fontAwesomeClassname: "vscode-icons:file-type-mongo",
    },
    {
      para: "AWS",
      fontAwesomeClassname: "logos:aws",
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
    "Develop Highly interactive and appealing web applications",
  skillTwo:
    "Well-versed in various web development tools such as HTML/CSS, Javascript, MySQL, Express.js, and React.",
  skillThree: "Currently learning AWS",
  aboutImage: user,

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "Heading",
  promotionPara:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Let's create your next experience together",
  // social: [
  //   // Add Or Remove The Link Accordingly
  //   { img: githubIcon, url: "https://github.com/chetanverma16" },
  //   {
  //     img: codepenIcon,
  //     url: "https://www.codepen.com/",
  //   },
  //   {
  //     img: dribbbleIcon,
  //     url: "https://dribbble.com/chetanverma",
  //   },
  //   {
  //     img: instagramIcon,
  //     url: "https://www.instagram.com/",
  //   },
  // ],

  // End Contact Section ---------------
};
