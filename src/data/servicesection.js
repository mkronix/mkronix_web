import app from '../assets/img/app.jpg';
import uiux from '../assets/img/uiux.jpg';
import web from '../assets/img/web.jpg';

const serviceData = [
    {
        id: 1,
        src: web,
        text: 'Web Design & Development',
        marqueeTexts: [
            "Innovative Web Design ✨",
            "Crafting Digital Experiences 🎨",
            "Digital Brilliance by MkRonix 💡",
            "Elevate Your Brand 🚀",
        ],
        place: "justify-start",
    },
    {
        id: 2,
        src: app,
        text: 'App Design & Development',
        marqueeTexts: [
            "Creative UI/UX Design 🎨",
            "Tailored App Solutions 📱",
            "Custom Digital Experiences 🔧",
            "Empowering Brands with MkRonix 🌐",
        ],
        place: "justify-center",
    },
    {
        id: 3,
        src: uiux,
        text: 'UI/UX Design',
        marqueeTexts: [
            "Award-Winning Designs 🏆",
            "Cutting-Edge Applications 💻",
            "Scalable Platforms by MkRonix 📈",
            "User-Centered Innovations 🌟",
        ],
        place: "justify-end",
    },
];

export default serviceData;
