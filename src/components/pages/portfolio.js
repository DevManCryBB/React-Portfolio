import React from 'react';
import Project from '../Project'
import Frog from '../../assets/images/Joke.png'
import Gym from '../../assets/images/Exercise Categories.png'
import Port from '../../assets/images/Portfolio1.png'
import Doodle from '../../assets/images/ScreenLoad.png'


export default function Portfolio() {
    const projects = [
        {
            id: 1,
            name: "Cursed Frog Generator Group Project 1",
            description: "A funny frog gif generator that usees API's to choose a randmom joke, wisdom, or uplifting quote",
            deployed: "https://mercurybased.github.io/Cursed-Frog-Generator/",
            github: "https://github.com/mercurybased/Cursed-Frog-Generator",
            display: Frog
        },
        {
            id: 2,
            name: "Cirque Du Sore Legs Group Project 2",
            description: "We wanted to create a fun new fitness app with a twist: funny exercises you can do anywhere. There are many fitness apps that cater to the serious gym rat, but we wanted to create an app for the more lax, on-the-go user who may not have access to a gym.",
            deployed: "https://cirque-du-sore-legs.herokuapp.com/",
            github: "https://github.com/DevManCryBB/circue-de-sore-legs",
            display: Gym
        },
        {
            id: 3,
            name: "First Portfolio",
            description: "My first portfolio project design",
            deployed: "https://devmancrybb.github.io/second-challenge/",
            github: "https://github.com/DevManCryBB/second-challenge",
            display: Port
        },
        {
            id: 4,
            name: "DoodleDash",
            description: "A fun drawing/word guessing game",
            deployed: "https://doodledash.netlify.app/",
            github: "https://github.com/17anguyen/notPictionary",
            display: Doodle
        },

    ]
    return (
        <Project projects={projects} />
    );
}