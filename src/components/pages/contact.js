import React, { useState } from 'react';

export default function Contact() {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = () => {
        // Perform actions with the form data
        console.log('Email:', email);
        console.log('First Name:', firstName);
        console.log('Last Name:', lastName);
        console.log('Message:', message);
        
        // Reset the form fields
        setEmail('');
        setFirstName('');
        setLastName('');
        setMessage('');
    };

    return (
        <main>
            <div className="card">
                <div className="card-header">
                    Lets Connect!
                </div>
                <div className="card-body">
                    <div className="mb-3 mx-auto p-2">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="name@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="input-group">
                        <span className="input-group-text bg-success">First and last name</span>
                        <input
                            type="text"
                            aria-label="First name"
                            className="form-control"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <input
                            type="text"
                            aria-label="Last name"
                            className="form-control"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                        <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows="3"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                    </div>
                    <button type="button" className="btn btn-success btn-lg" onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </main>
    );
}
