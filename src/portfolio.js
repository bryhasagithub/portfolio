import emoji from "react-easy-emoji"

const greeting = {
  /* Summary And Greeting Section */
  title: "Bry Nguyen",
  subTitle: emoji(
    "An enthusiastic Senior Software Engineer having the experience of building Web and Mobile applications with technologies like AWS, GCP, React, Typescript, Node, SQL and many more!"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1mcIWL1FT1Z4ftokZrHBVDU6uIDgDGzu2/view?usp=sharing",
}

// Social Media Link

const socialMediaLinks = {
  github: "https://github.com/bryhasagithub",
  linkedin: "https://www.linkedin.com/in/bryhasalinked/",
  gmail: "brynguyen1331@gmail.com",
  instagram: "https://www.instagram.com/bryhasaninsta/",
}

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "Ambitious full stack engineer who loves building, teaching, and learning",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for web and mobile applications"
    ),
    emoji(
      "⚡ Build strong Back end foundations with solid and scalable infrastructures on AWS"
    ),
    emoji(
      "⚡ Join small start ups and businesses that need help pushing their product to the next level"
    ),
    emoji(
      "⚡ A strong desire to work with companies that emphasize on helping marginalized people, solving problems, or giving back to the community"
    ),
  ],

  /* Make Sure You include correct Font Awesome Classname to view icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "Reactjs",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "Nodejs",
      fontAwesomeClassname: "fab fa-node",
    },
    {
      skillName: "Expressjs",
      fontAwesomeClassname: "fab fa-node-js",
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws",
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fab fa-envira",
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python",
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker",
    },
    {
      skillName: "NPM",
      fontAwesomeClassname: "fab fa-npm",
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "Ruby",
      fontAwesomeClassname: "far fa-gem",
    },
    {
      skillName: "PS & XD",
      fontAwesomeClassname: "fab fa-adobe",
    },
    {
      skillName: "HTML-5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      skillName: "SASS",
      fontAwesomeClassname: "fab fa-sass",
    },
    {
      skillName: "CAD",
      fontAwesomeClassname: "fas fa-cube",
    },
    {
      skillName: "Squarespace",
      fontAwesomeClassname: "fab fa-squarespace",
    },
    {
      skillName: "Wordpress",
      fontAwesomeClassname: "fab fa-wordpress-simple",
    },
  ],
}

// top 3 work experiences

const workExperiences = {
  viewExperiences: true,
  experience: [
    {
      role: "Senior Software Engineer",
      company: "Glide Apps",
      companylogo: require("./assets/images/glide-icon.png"),
      date: "September 2020 – Current",
      desc: "Build an app from a Google Sheet in five minutes, for free. Glide turns spreadsheets into beautiful, easy-to-use apps.",
      descBullets: [
        "Build, modify, fix and collaborate with team members on building a high class code-less app.",
        "Stack consists of a CRA with Typescript, GCP, and much more.",
      ],
    },
    {
      role: "Software Engineer",
      company: "RaiseMe",
      companylogo: require("./assets/images/raiseme_logo.jpg"),
      date: "March 2020 – June 2020",
      desc: "A platform that helps highschool students earn micro-scholarships towards their college education.",
      descBullets: [
        "Investigated and executed on best AWS practices to reduce RaiseMe’s AWS costs.",
        "Helped refactor notification infrastructure to be stable and scalable with monitoring.",
      ],
    },
    {
      role: "Senior Software Engineer",
      company: "Wheelwell",
      companylogo: require("./assets/images/wheelwell_logo.jpg"),
      date: "May 2018 – February 2020",
      desc: "A community-backed platform for automotive commerce.",
      descBullets: [
        "Coordinated product direction and features with CEO and CTO through to execution.",
        "Built core roadmap features, created data pipeline tools, implemented search capabilities with Elasticsearch, and improved site performance/SEO.",
        "Wrote in-house tools to help data teams ingest and normalize from hundreds of vendors.",
      ],
    },
    {
      role: "Security Officer & Engineer",
      company: "Triangle / Fabrix health ",
      companylogo: require("./assets/images/fabrix_logo.png"),
      date: "February 2018 – May 2018",
      desc: "A Patient-Physician Communication solution to improve bottlenecks in patient appointment and presription pickup flow.",
      descBullets: [
        "Contracted to bring the application to meet HIPAA Compliance to be used in UCSF clinical trials which include architecting infrastructure, policies and training.",
        "Help develop the application by adding features, writing tests, and delegated all AWS related tasks. Developed on a MERN Stack hosted on AWS.",
      ],
    },
    {
      role: "Full Stack Engineer",
      company: "Sitka",
      companylogo: require("./assets/images/sitka_logo.png"),
      date: "August 2016 – January 2018",
      desc: "A HIPAA compliant telecommunication software for patients and physicians to review MRI scans from the comfort of their",
      descBullets: [
        "Designed and created an MVP telecommunication medical reviewing program to enable physicians to review their patients MRI scans in the initial phase.",
        "Developed front-end and back-end with MERN Stack - deployed with AWS.",
      ],
    },
    {
      role: "Developer & Designer",
      company: "FreeLance",
      companylogo: require("./assets/images/upwork_logo.png"),
      date: "February 2015 – Present",
      desc: "Work with multiple small businesses as a Freelancer.",
      descBullets: [
        "Maintain, refactor, and spin up websites for small businesses to improve the local economy.",
        "Worked with: Retromodern USA , Cool Lite, Tiffany’s Nail Salon, Live Love Santa Cruz, Moo Moo Milk Tea, Drop-In",
      ],
    },
    {
      role: "Health, Safety and Tech Coordinator",
      company: "iD Tech Camps @ Stanford University",
      companylogo: require("./assets/images/id_tech.jpg"),
      date: "June 2016 – August 2016",
      desc: "A summer computer camp specializing in providing computer technology education to children ages 7 through 19",
      descBullets: [
        "Manage and administer all medications to the campers.",
        "Teach and aid instructors/campers in C++, Java, Python, Photoshop, Illustrator, and web development.",
      ],
    },
    {
      role: "Medical Assistant",
      company: "Los Gatos Eye Care",
      companylogo: require("./assets/images/lgec.png"),
      date: "November 2013 – June 2016",
      desc: "An Optometrist office in Los Gatos providing eye care.",
      descBullets: [
        "Perform peripheral tests, OCT scans, AR screen, visual acuities, retinal photos, and review of medical health on patients.",
        "Scribing for doctors during examinations.",
      ],
    },
  ],
}

/* Open Source Section to View Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "bryhasagithub",
  showGithubProfile: "true",
}

// Creations Section Include Certification Talks and More

const creationSection = {
  title: emoji("Projects & Creations"),
  subtitle:
    "A handful of projects I've built, like software, woodworking, cars, etc.",

  achivementsCards: [
    {
      title: "Conway's Game of Life",
      subtitle: "A simple react-based cellular automaton.",
      image: require("./assets/images/gol.png"),
      footerLink: [
        { name: "Code", url: "https://github.com/bryhasagithub/conway-gol" },
        { name: "Website", url: "https://bryhasagithub.github.io/conway-gol/" },
      ],
    },
    {
      title: "Fabrix",
      subtitle: "A patient-physician communication platform pitchdeck",
      image: require("./assets/images/fabrix.png"),
      footerLink: [
        {
          name: "PitchDeck",
          url: "https://xd.adobe.com/view/9da32ef6-226a-425c-867b-9c4b6f35ef71/",
        },
      ],
    },
    {
      title: "Miata",
      subtitle:
        "A car build that I've been working on for the past 3 years, making a bunch of bespoke custom pieces.",
      image: require("./assets/images/miata.png"),
      footerLink: [
        { name: "Instagram", url: "https://www.instagram.com/bryhasamiata/" },
        {
          name: "Wheelwell Car Page",
          url: "https://wheelwell.com/bryhasawheelwell/2lok/1991-mazda-miata",
        },
      ],
    },
    {
      title: "Mustang Restoration",
      subtitle:
        "A car restoration that I restored myself - paint work, engine work, upholstery and more! ",
      image: require("./assets/images/mustang.png"),
      footerLink: [
        { name: "Instagram", url: "https://www.instagram.com/bryhasamiata/" },
        {
          name: "Wheelwell Car Page",
          url: "https://wheelwell.com/bryhasawheelwell/2syc/1966-ford-mustang",
        },
      ],
    },
    {
      title: "Doc Review",
      subtitle:
        "Web App that helps physicians screen patients and obtain chief complaints.",
      image: require("./assets/images/doc-review.png"),
      footerLink: [
        {
          name: "WireFrame",
          url: "https://xd.adobe.com/view/82a4ddcd-436c-4a9e-82df-2b168435e680/",
        },
      ],
    },
    {
      title: "Retromodern USA Website",
      subtitle:
        "A redesigned website for a small bespoke company that creates handcrafted car parts.",
      image: require("./assets/images/retromodern.png"),
      footerLink: [{ name: "Website", url: "https://retromodernusa.com/" }],
    },
    {
      title: "DropIn",
      subtitle: "A subscription - credit based multi gym Web App",
      image: require("./assets/images/dropin.png"),
      footerLink: [
        {
          name: "WireFrame",
          url: "https://xd.adobe.com/view/536f89ce-2a71-4019-981e-604cdc61cf27/screen/7b9fe10b-1751-44d9-8a7c-008b6a223e59",
        },
      ],
    },
    {
      title: "Car Maintenance Model",
      subtitle:
        "An interactive data visualization for when car parts should be maintained.",
      image: require("./assets/images/car-model.png"),
      footerLink: [
        {
          name: "Code",
          url: "https://github.com/bryhasagithub/CarMaintenanceModel",
        },
        {
          name: "Website",
          url: "https://bryhasagithub.github.io/CarMaintenanceModel/",
        },
      ],
    },
    {
      title: "Sectional Couch",
      subtitle:
        "My partner and I made a couch together! We did everything from sketches, CAD, woodworking to even upholstery.",
      image: require("./assets/images/couch-cad.png"),
      footerLink: [
        {
          name: "Photos Album",
          url: "https://photos.app.goo.gl/2fAre5gjGK35rznq6",
        },
      ],
    },
    {
      title: "3D Printed Retro Gauge Cluster",
      subtitle:
        "A 3D printable Gauge Cluster trim piece I designed, printed, and installed for miatas.",
      image: require("./assets/images/gauge-cluster.png"),
      footerLink: [
        {
          name: "Thingiverse",
          url: "https://www.thingiverse.com/thing:4039621",
        },
        {
          name: "Github Repo",
          url: "https://github.com/bryhasagithub/3D-printing/tree/master/miata-gauge-cluster",
        },
      ],
    },
  ],
}

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others",

  blogs: [
    {
      url: "https://www.raise.me/blog/team/celebrating-asian-american-pacific-islander-heritage-month/",
      title: "Celebrating Asian American and Pacific Islander Heritage Month",
      description:
        "RaiseMe is taking a step back during the month of May to explore and celebrate the diverse experiences amongst Asian American and Pacific Islanders.",
    },
    {
      url: "https://wheelwell.com/posts/8kp7/the-lemony-m42-swapped-1976-bmw-2002",
      title: "The Lemony M42 swapped 1976 BMW 2002",
      description:
        "The M42 swapped e10 that you see here is my previously owned Frankenstein of a car that I picked up from South SF out the of pure desire for owning a 2002 again...",
    },
    {
      url: "https://wheelwell.com/posts/8vof/3d-printed-retro-gauge-cluster",
      title: "Designing a 3D Printed Retro Gauge Cluster for a Miata",
      description:
        "I know I'm not the only one who's wanted the KG Works cluster but was sad that it's no longer in production. Today, we walk through how I made my own!",
    },
    {
      url: "https://wheelwell.com/posts/8t92/tutorial-how-to-make-a-leather-pull-strap",
      title: "Tutorial: How to make a leather pull strap",
      description:
        "A summarized breakdown with pictures and list of materials of how to make a leather door pull strap.",
    },
  ],
}

const contactInfo = {
  title: emoji("Contact Me"),
  subtitle: "Interested in building something with me? Send me a message!",
  email_address: "brynguyen1331@gmail.com",
}

export {
  greeting,
  socialMediaLinks,
  skillsSection,
  workExperiences,
  openSource,
  creationSection,
  blogSection,
  contactInfo,
}
