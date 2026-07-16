
//  Skills logos.....

import htmlLogo from './assets/techLogo/html.png';
import cssLogo from './assets/techLogo/css.png';
import javascript from "./assets/techLogo/javascript.png";
import reactLogo from './assets/techLogo/reactjs.png';
import reduxLogo from './assets/techLogo/redux.png';
import tailwindLogo from './assets/techLogo/tailwindcss.png';
import reactRouterLogo from './assets/techLogo/react_router.png'

// Backend logos....

import firebaseLogo from './assets/techLogo/firebase.png';
import appwriteLogo from './assets/techLogo/appwrite.png';

//  Languages logos.....

import cLogo from './assets/techLogo/c.png';
import cppLogo from './assets/techLogo/cpp.png';

// Tools logos.....

import gitLogo from './assets/techLogo/git.png';
import githubLogo from './assets/techLogo/github.png';
import vsCodeLogo from './assets/techLogo/vscode.png';
import vercelLogo from './assets/techLogo/vercel.png';
import netlifyLogo from './assets/techLogo/netlify.png';
import figmaLogo from './assets/techLogo/figma.png';

// profile Img

import ProfileImg from './assets/Profile.png'

export default ProfileImg;


// Projects Images

import Spotify from './assets/spotify.png'
import NoteTodo from './assets/NoteTodo.png'
import Ecommerce from './assets/ecommerse.png'
import AmazonClone from './assets/amazon.png'



// College & School logo

import SchoolLogo from './assets/school.jpeg'
import CollegeLogo from './assets/college.jpeg'





// Skills information array

export const SkillsInfo = [
    {
        title: 'Frontend',
        skills: [
            { name: 'React JS', logo: reactLogo },
            { name: 'Redux-toolkit', logo: reduxLogo },
            { name: 'React-router', logo: reactRouterLogo },
            { name: 'JavaScript', logo: javascript },
            { name: 'Tailwind CSS', logo: tailwindLogo },
            { name: 'HTML', logo: htmlLogo },
            { name: 'CSS', logo: cssLogo },
        ],
    },
    {
        title: 'Backend',
        skills: [
            { name: 'Firebase', logo: firebaseLogo },
            { name: 'Appwrite', logo: appwriteLogo },
        ],
    },
    {
        title: 'Languages',
        skills: [
            { name: 'C', logo: cLogo },
            { name: 'C++', logo: cppLogo },
            { name: 'JavaScript', logo: javascript },
        ],
    },
    {
        title: 'Tools',
        skills: [
            { name: 'Git', logo: gitLogo },
            { name: 'GitHub', logo: githubLogo },
            { name: 'VS Code', logo: vsCodeLogo },
            { name: 'Vercel', logo: vercelLogo },
            { name: 'Netlify', logo: netlifyLogo },
            { name: 'Figma', logo: figmaLogo },
        ],
    },
];



// ........................................



export const projects = [
    {
        id: 0,
        title: "📝 Note-Todo Combine.",
        description: 'OwnDocs is a local-first productivity app combining a Note Manager and Task Tracker — built with React.js and Tailwind CSS. Features include pin/unpin, soft-delete with Recycle Bin, debounced search, folder navigation, and offline persistence via LocalStorage. No backend. No login. Just a clean, responsive, animation-smooth experience.',
        image: NoteTodo,
        tags: ['React.Js', 'Tailwind Css', 'React icons', 'LocalStorage'],
        github: "https://github.com/eclipse-dev3/Note-Task-manager",
        webapp: "https://owndocs.vercel.app",
    },
    {
        id: 1,
        title: "🎵 Music APP (Spotify Clone)",
        description: 'MusicX is a Spotify-inspired music player built with pure HTML, CSS, and Vanilla JavaScript — no frameworks, no backend. Features real-time seekbar interaction, next/previous navigation, dynamic playlist rendering via DOM manipulation, and auto-play on track completion. Pixel-perfect dark UI, fully responsive from mobile to desktop.',
        image: Spotify,
        tags: ["HTML", "CSS", "JavaScript", "API"],
        github: "https://github.com/eclipse-dev3/MusicX-Player",
        webapp: "https://ownmusicx.vercel.app",
    },
    {
        id: 2,
        title: "🛒 Gaurav Store — E-Commerce Website",
        description: "A fully responsive e-commerce storefront with dynamic product catalog, real-time cart management (LocalStorage-powered), quantity controls, discount pricing, and a contact page with map integration. Built entirely with vanilla JavaScript — no framework dependencies.",
        image: Ecommerce,
        tags: ["HTML", "CSS", "JavaScript", "LocalStorage"],
        github: "https://github.com/eclipse-dev3/Gaurav-Store",
        webapp: "https://gauravstore.vercel.app",
    },
    {
        id: 3,
        title: "🛒  Amazon UI Clone",
        description: "A polished, front-end recreation of an Amazon-inspired e-commerce landing page — built with pure HTML and CSS. Features a fully styled navbar with search and cart sections, an intuitive category panel, multiple product showcase cards, and a clean, responsive layout that mirrors a real e-commerce interface.",
        image: AmazonClone,
        tags: ["HTML", "CSS", "Font Awesome"],
        github: "https://github.com/eclipse-dev3/Amazon-UI",
        webapp: "https://amazonui3.vercel.app",
    },
]



// Education section...............

export const education = [

    {
        id: 1,
        img: CollegeLogo,
        school: "IP PG College, Campus 2, BSR",
        date: "2021 – 2024",
        grade: "67.2%",
        desc: "I pursued my BCA from IP PG College where I built a solid foundation in computer science and software development. During these years, I learned programming languages like C, C++, and JavaScript, along with database management and web technologies. I also worked on several academic and personal projects, such as a Spotify Clone and my portfolio website, which helped me strengthen my frontend development skills in React, HTML, CSS, and Tailwind CSS.",
        degree: "🎓 Bachelor of Computer Applications(BCA)",
    },
    {
        id: 2,
        img: SchoolLogo,
        school: "Vivekanand Saraswati Vidya Mandir Inter College, BSR",
        date: "2019 - 2021",
        grade: "70%",
        desc: "Vivekanand Saraswati Vidya Mandir Inter College, BSR | 2019 – 2021 I completed my 12th in the science stream with a focus on Mathematics and Physics, which helped me develop strong analytical and logical thinking skills.",
        degree: "UP Board(XII) - PCM with Computer Science ",
    },
    {
        id: 3,
        img: SchoolLogo,
        school: "Vivekanand Saraswati Vidya Mandir Inter College, BSR",
        date: "2018 – 2019",
        grade: "83%",
        desc: "Vivekanand Saraswati Vidya Mandir Inter College, BSR | 2018 – 2019 I finished my 10th from the same school, which gave me a strong academic base and discipline to move forward in higher education.",
        degree: "UP Board(X) - Science & Mathematics",
    },
];

