import React from 'react';
import profile from '../../assets/images/ProfilePic.JPG';
import "../pages/css/about.css";

export default function About() {
    return (
        <main className='abtbg'>
            <div className='row'>

                <div className='col-3 p-3 mb-2 text-center'>
                    <img className='profile' alt="profile" src={profile} style={{ width: '100%' }} />
                    <h1 style={{ fontSize: '80px', }}>About Me</h1>
                </div>

                <div className='m-25 col-sm-9 p-33 body' style={{ width: '70%' }}>
                    <p style={{ fontSize: '20px', }}>Junior Software Developer, born and raised in the PNW, with a passion for coding!</p>

                </div>

            </div>
        </main>
    );
}