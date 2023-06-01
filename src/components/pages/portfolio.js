import React from 'react';


export default function Portfolio() {
    const projects = [
        {
            id: 1,
            name: "Cursed Frog Generator Group Project 1",
            description: "A funny frog gif generator that usees API's to choose a randmom joke, wisdom, or uplifting quote",
            deployed: "",
            github: "",
            display:

        },
        {
            id: 2,
            name: "Cirque Du Sore Legs Group Project 2",
            description: "This app utilizes Socket.Io and Cloudinary creating a SQL based social networking app with an open chat and matching users based on interests",
            deployed: "",
            github: "",
            display: 

        },
        {
            id: 3,
            name: "First Portfolio",
            description: "My first portfolio project design",
            deployed: "https://17anguyen.github.io/Portfolio-Project/",
            github: "https://github.com/17anguyen/Portfolio-Project/blob/main/README.md",
            display: 

        },
        {
            id: 4,
            name: "",
            description: "",
            github: "",
            deployed: "",
            display: 

        },

    ]
    return (
        <Project projects={projects} />
    );
}