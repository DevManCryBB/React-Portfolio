import React from 'react';
import Profile from '../../assets/images/ProfilePic.JPG';
import "../pages/css/about.css";

export default function About() {
    return (
        <main className='abtbg'>
            <div className='row'>

                <div className='col-3 p-3 mb-2 text-center'>
                    <img classname='profile ' alt="profile" src={Profile} style={{ width: '100%' }} />
                    <h1 style={{ fontSize: '80px', }}>About Me</h1>
                </div>

                <div className='text-center col-sm-9 p-33 body' style={{ width: '70%' }}>
                    <p>Junior Software Developer from the PNW </p>

                </div>

            </div>
        </main>
    );
}