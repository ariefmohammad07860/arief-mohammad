    import React from 'react';
    import '../styles/main.css'; // Ensure you have this CSS file for styling

    const Header = () => {
    return (
        <header className="header">
        <div className="header-container">
            <h1 className="header-title">Arief Mohammad</h1>
            <nav className="header-nav">
            <ul className="nav-list">
                <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
                <li className="nav-item"><a href="#skills" className="nav-link">Skills</a></li>
                <li className="nav-item"><a href="#projects" className="nav-link">Projects</a></li>
                <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>
            </ul>
            </nav>
        </div>
        </header>
    );
    };

    export default Header;
