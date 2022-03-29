import neighbors from './images/neighbors.jpg';
import plane from './images/airplane.jpg';
import anime from './images/anime.jpg';
import user from './images/me.jpg'

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
      para:
        "Social Media application that allows pet owners to meet up and set up playdates for their pets by creating posts that dynamically render the location of the user on a map or direct messaging", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      tools: "Tools used - React, Sequelize, Socket.io, CSS, Axios, Material UI, React Leaflet, Mapbox, Cloudinary",
      imageSrc: neighbors,
      //Project URL - Add Your Project Url Here
      url: "https://ftchrapp.herokuapp.com/",
      github:"https://github.com/amiramonte/FTCHr-Project-3"
    },
    {
      title: "SkyFall Travel", //Project Title - Add Your Project Title Here
      para:
        "Planner application that allows users to plan and budget their future trips", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      tools: "Tools used - JavaScript, Node.js, MySQL, Express.js, Materialize, Chart.js, Axios",
      imageSrc: plane,
      //Project URL - Add Your Project Url Here
      url: "https://skyfall-travel.herokuapp.com/",
      github: "https://github.com/hcweigand10/SkyFall-Travel"
    },
    {
      title: "What's that Anime?", //Project Title - Add Your Project Title Here
      para:
        "Image analysis application for users to determine what anime a provided image originates from", 
      tools: "Tools Used - HTML, CSS, JavaScript, Foundation",
        // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: anime,
      //Project URL - Add Your Project Url Here
      url: "https://andrewtranmsw.github.io/whatsThatAnime/",
      github: "https://github.com/AndrewTranMSW/whatsThatAnime"
    },
    // {
    //   title: "Project Four", //Project Title - Add Your Project Title Here
    //   para:
    //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
    //   //Project Image - Add Your Project Image Here
    //   imageSrc:anime,
    //   //Project URL - Add Your Project Url Here
    //   url: "http://chetanverma.com/",
    // },
    // {
    //   title: "Project Five", //Project Title - Add Your Project Title Here
    //   para:
    //     "Allows pet owners to meet up and set up playdates for their pets by creating posts that dynamically render the location of the user on a map or direct messaging", 
    //   //Project Image - Add Your Project Image Here
    //   imageSrc:
    //     "https://images.unsplash.com/photo-1534239143101-1b1c627395c5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzZ8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
    //   //Project URL - Add Your Project Url Here
    //   url: "http://chetanverma.com/",
    // },
    // {
    //   title: "Project Six", //Project Title - Add Your Project Title Here
    //   para:
    //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
    //   //Project Image - Add Your Project Image Here
    //   imageSrc:
    //     "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTAyfHxwYXN0ZWx8ZW58MHx8MHw%3D&auto=format&fit=crop&w=400&q=60",
    //   //Project URL - Add Your Project Url Here
    //   url: "http://chetanverma.com/",
    // },

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
    "Well-versed in various web development tools such as HTML/CSS, Javascript, MySQL, Express.js, and React.",
  aboutParaThree:
    "Currently looking for a fulltime software development role!",
  aboutImage:user,

  //   End About Section ---------------------

  // Education Section
  education: [
    {
      schoolName: "University of Washington",
      subHeader: "Full Stack Coding Bootcamp",
      duration: "December 2021 - March 2022",
      desc: "Areas of Study Include: Front-End UI design and creation using HTML, CSS and Bootstrap, Javascript, Jquery, React.js, Back-End app creation with Node.js, Express.js, MERN Stack, MySQL/Sequelize and MongoDB/Mongoose, Git, Github, Heroku",
    },
    {
      schoolName: "University of Washington",
      subHeader: "Bachelor's of Science in Biochemistry",
      duration: "September 2017 - June 2021",
      desc: "Earned a Bachelor's of Science in Biochemistry and a minor in chemistry",
      descBullets: [
        "Relavent courses: CSE 142(Intro to Java) and CSE 160 (Data Programming: Python)",
      ],
    }
  ],

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
		{
			para: "html-5",
			fontAwesomeClassname: "vscode-icons:file-type-html",
		},
		{
			para: "css3",
			fontAwesomeClassname: "vscode-icons:file-type-css",
		},
		{
			para: "JavaScript",
			fontAwesomeClassname: "logos:javascript",
		},
		{
			para: "reactjs",
			fontAwesomeClassname: "vscode-icons:file-type-reactjs",
		},
		{
			para: "nodejs",
			fontAwesomeClassname: "logos:nodejs-icon",
		},
		{
			para: "sql-database",
			fontAwesomeClassname: "vscode-icons:file-type-sql",
		},
		{
			para: "mongoDB",
			fontAwesomeClassname: "vscode-icons:file-type-mongo",
		},
		{
			para: "aws",
			fontAwesomeClassname: "logos:aws",
		},
		{
			para: "Java",
			fontAwesomeClassname: "logos:java",
		},
		{
			para: "python",
			fontAwesomeClassname: "logos:python",
		},
		{
			para: "git",
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
}
