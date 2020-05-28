import dsbotHome from "./images/dsbot_home.png"
import mlbh2hSearch from "./images/mlbh2h_search.png"
import redsquirrelHome from "./images/redsquirrel_home.png"
import cathay22 from "./images/cathay22_hero.png"
import outrspaceHome from "./images/outrspace_home.png"

const projects = [
  {
    name: "DSbot",
    description:
      "Built with HTML, CSS, and vanilla JavaScript, DSbot is your personal drill sergeant! Using the wger Workout Manager API, you can generate a random exercise to target a specific muscle group and save your favorites to localstorage.",
    image: dsbotHome,
    githubURL: "https://github.com/joseferreira5/DSbot",
    deployedURL: "http://dsbot.surge.sh/",
  },
  {
    name: "MLB H2H",
    description:
      "MLB Head to Head Player Comparison app built with React (Hooks).",
    image: mlbh2hSearch,
    githubURL: "https://github.com/joseferreira5/mlb-h2h",
    deployedURL: "https://mlb-h2h.netlify.app/",
  },
  {
    name: "Red Squirrel",
    description:
      "An inventory management web application built with the MERN stack.",
    image: redsquirrelHome,
    githubURL: "https://github.com/joseferreira5/red-squirrel",
    deployedURL: "http://www.red-squirrel.surge.sh/",
  },
  {
    name: "Cathay22",
    description:
      "Cathay 22 was designed by a team of UX designers for a family owned restaurant in New Jersey. Built with React, in collaboration with a team of three software engineers.",
    image: cathay22,
    githubURL: "https://github.com/joseferreira5/cathay-22",
    deployedURL: "https://cathay-22.netlify.app/",
  },
  {
    name: "Outr Space",
    description:
      "Outr Space is a message board and a full-stack web application built with React and Ruby on Rails.",
    image: outrspaceHome,
    githubURL: "https://github.com/joseferreira5/outr-space",
    deployedURL: "https://outrspace.netlify.app/",
  },
  // {
  //   name: "Sum",
  //   description:
  //     "Unit conversion app built with Next.js.",
  //   image: "",
  //   githubURL: "",
  //   deployedURL: "https://sum-sigma.now.sh/",
  // },
]

export default projects
