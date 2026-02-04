import React, { useState, useEffect } from 'react';
import drogoLogo from '../../assets/drogo_no_bg.png';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-dark shadow-lg' : 'bg-transparent'
            }`}>
            <div className="container-custom mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    {/* <div className="cursor-pointer">
                        <img src={drogoLogo} alt="Ankith Logo" className="h-14 w-auto object-contain" />
                    </div> */}
                    <div></div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        <button onClick={() => scrollToSection('home')} className="nav-link text-gray-300 hover:text-white transition-colors">
                            Home
                        </button>
                        <button onClick={() => scrollToSection('about')} className="nav-link text-gray-300 hover:text-white transition-colors">
                            About
                        </button>
                        <button onClick={() => scrollToSection('skills')} className="nav-link text-gray-300 hover:text-white transition-colors">
                            Skills
                        </button>
                        <button onClick={() => scrollToSection('experience')} className="nav-link text-gray-300 hover:text-white transition-colors">
                            Experience
                        </button>
                        {/* <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-white transition-colors">
                            Projects
                        </button> */}
                        <button onClick={() => scrollToSection('contact')} className="nav-link text-gray-300 hover:text-white transition-colors">
                            Contact
                        </button>
                    </div>

                    {/* CTA Button */}
                    <button
                        onClick={() => scrollToSection('contact')}
                        className="btn-secondary hidden md:block"
                    >
                        Hire Me
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
