import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './about.css';

export function About() {
    return (
        <div className="container">
            <div className="info-box">
                <h1>About Me</h1>
                <h3>
                    I provide the latest news updates across all genres. Stay informed with real-time news.
                </h3>
                <h2>Karthik Vankadara</h2>
                <h2>Contact</h2>
                <div className="social-links">
                    <a href="https://www.instagram.com/" className="instagram"><i className="bi bi-instagram"></i></a>
                    <a href="https://www.linkedin.com/in/" className="linkedin"><i className="bi bi-linkedin"></i></a>
                    <a href="https://github.com/" className="github"><i className="bi bi-github"></i></a>
                </div>
                <h3>Phone: 9059858326</h3>
            </div>
        </div>
    );
}
