import Work1 from "../../assets/work1.jpg";
import Work2 from "../../assets/work2.jpg";
import Work3 from "../../assets/work3.jpg";
import Work4 from "../../assets/work4.jpg";
import report1 from "../../assets/_Reports/french_songs_report.pdf";
import report2 from "../../assets/_Reports/rio_airbnb_report.pdf";

export const projectsData = [
  {
    id: 1,
    image: Work1,
    title: "French songs report",
    category: "data",
    quick_description: "A data analysis about french songs, including some descriptive text analysis and a predictive model about wether a song is a rap or pop one",
    description: "In this project, you can find an EDA of the dataset containing rap songs, about the lyrics mainly. Then, you can find a focus on one specific rapper, about the way he writes music. Finally, I created a predictive model that aims to guess if a song is a pop or a rap one.",
    github_link: "https://github.com/dauczer/french-rap",
    report: report1,
  },
  {
    id: 2,
    image: Work2,
    title: "Airbnb project",
    category: "data",
    quick_description: "A data analysis about Airbnb in Rio, including a predictive model about the price of renting for an apartement",
    description: "This project was one of the projects I had to do during my last year of master. The goal was to analyse datas from the apartements in the website Airbnb in Rio de Janeiro, and to estimate the price of a new one, based on some characteristics.",
    github_link: "https://github.com/dauczer/airbnb-project",
    report: report2,
  },
  {
    id: 3,
    image: Work3,
    title: "Portfolio website",
    category: "web",
    quick_description: "The website you currently in !",
    description: "I wanted to have something better than a basic CV, so I decided to create my own website.",
    website_link: "https://dauczer.github.io/portfolio-app/",
  },
  {
    id: 4,
    image: Work4,
    title: "Work projects",
    category: "job",
    quick_description: "These are some projects I did at my current job, but I can't show them in detail for confidentiality issues... However, you can ask about it during a job interview !",
    description: "Here a non exhaustive list of projects I had at my job :",
  },
  
];

// projects
export const projectsNav = [
  {
    name: "all",
  },
  {
    name: "data",
  },
  {
    name: "web",
  },
  {
    name: "job",
  }
]
