import pro1 from '../assets/moviesproject.webp';
import pro2 from '../assets/travbot.webp';
import pro3 from '../assets/Minecraft.jpg';
import pro4 from '../assets/portimg.webp';


const ProjectCardData = [
    {
        imgsrc: pro1,
        title: "AniViews:Full-Stack Anime/Shows/Movies List/Review App",
        text: "This is sophisticated web application that allows users to discover, track, and review their favorite anime, movies, and TV shows in an elegant, user-friendly interface. Built with a modern tech stack including Java Spring Boot backend, React frontend, and MongoDB for data persistence, the platform enables seamless content curation and community engagement through personalized watchlists and review capabilities. Currently in early development",
        view: "https://youtu.be/q3wN_rN20Sk",
        source: "https://github.com/Iwas1512/Tv-App-Official",
        technologies: ["Java", "React", "CSS", "SpringBoot", "MongoDB"]
    },
    {
        imgsrc: pro2,
        title: "TravBot:AI-Travel-Planner",
        text: "TravBot harnesses AI to create personalized travel itineraries based on your destination, trip duration, budget, and travel companions. Using Google's Gemini 2.0 AI, it quickly generates comprehensive travel plans with hotel recommendations, detailed daily schedules, and attraction information with optimal visiting times. The app saves you hours of research by intelligently organizing your trip according to your specific preferences and constraints. While deployed on Vercel, TravBot remains private due to the high costs of Google API usage at scale, but interested users can request access or create their own version using the GitHub source code with personal API keys or simply contacting me as I will send you a link to the deployed private site.",
        view: "https://youtu.be/I3TibSA7qTo",
        source: "https://github.com/Iwas1512/TravBot--The-AI-Travel-Planner",
        technologies: ["React", "Firebase", "tailwindCSS","Vite", "GeminiAPI", "GoogleAPI"]
    },
    {
        imgsrc: pro3,
        title: "Minecraft-Plugin, coolTools",
        text: "coolTools-plugin is a custom Minecraft server plugin I developed using Java and the Bukkit/Spigot API, designed to enhance gameplay with special equipment. The plugin features three unique items: a Super Pickaxe that mines in a 3x3 area for efficient resource gathering, Flash Boots that grant extraordinary speed and jump height, and a Winged Helmet that enables creative-mode flight. This project showcases my proficiency in Java development, event-driven programming, command implementation, and scheduled task management within the Minecraft ecosystem, all built using IntelliJ IDEA and Gradle for seamless compilation and deployment.",
        view: "https://www.youtube.com/watch?v=qbRyaSbcVTs",
        source: "https://github.com/Iwas1512/coolTools-Minecraft-Plugin",
        technologies: ["Java", "Bukkit", "Spigot"]
    },
    {
        imgsrc: pro4,
        title: "My Portfolio Website (This Website)",
        text: "This portfolio website demonstrates my web design capabilities through modern UI/UX principles, featuring responsive layouts, elegant animations, and interactive elements that enhance user engagement. The project showcases my front-end development skills with React, custom CSS animations, and thoughtful component architecture while implementing practical features like EmailJS integration for direct communication.",
        view: "https://youtu.be/tEaearGaP5k",
        source: "https://github.com/Iwas1512/first-portfolio",
        technologies: ["React", "CSS", "HTML"]
    }
];

export default ProjectCardData;