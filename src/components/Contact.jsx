import React from 'react';
import resumePdf from '../../assets/ankith_resume.pdf';

const Contact = () => {
    return (
        <section id="contact" className="section-padding bg-gradient-to-b from-dark-200 to-dark-100">
            <div className="container-custom mx-auto">
                <div className="contact-title text-center mb-16">
                    <h2 className="gradient-text font-display mb-4">Get In Touch</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Let's collaborate and build something amazing together
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="contact-card glass-purple rounded-3xl p-8 md:p-12">
                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                            {/* Contact Information */}
                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

                                <div className="contact-info-item flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm">Phone</p>
                                        <a href="tel:+918431804131" className="text-white font-medium hover:text-purple-400 transition-colors">
                                            +91 8431804131
                                        </a>
                                    </div>
                                </div>

                                <div className="contact-info-item flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm">Email</p>
                                        <a href="mailto:developerdrogo06@gmail.com" className="text-white font-medium hover:text-purple-400 transition-colors break-all">
                                            developerdrogo06@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="contact-info-item flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm">Location</p>
                                        <p className="text-white font-medium">
                                            Narikombu Post, Bantwal Taluk<br />
                                            Mangalore, Karnataka
                                        </p>
                                    </div>
                                </div>

                                <div className="contact-info-item flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm">Portfolio</p>
                                        <a href="https://www.portfolio.com" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-purple-400 transition-colors">
                                            www.portfolio.com
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Social Media Links */}
                            <div className="space-y-4 md:space-y-6">
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">Connect With Me</h3>

                                <a
                                    href="https://www.instagram.com/ankith__bangera/?igsh=NXljYmJkdGZ5aHNz"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-link flex items-center space-x-2 md:space-x-4 glass-dark rounded-xl p-3 md:p-4 hover:scale-105 transition-transform"
                                >
                                    <div className="w-10 md:w-12 h-10 md:h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 md:w-6 h-5 md:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98-.059-1.281-.073-1.689-.073-4.948zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-white font-medium text-sm md:text-base">Instagram</p>
                                        <p className="text-gray-400 text-xs md:text-sm">Follow my journey</p>
                                    </div>
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/ankith-bangera-624719192"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-link flex items-center space-x-2 md:space-x-4 glass-dark rounded-xl p-3 md:p-4 hover:scale-105 transition-transform"
                                >
                                    <div className="w-10 md:w-12 h-10 md:h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 md:w-6 h-5 md:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-white font-medium text-sm md:text-base">LinkedIn</p>
                                        <p className="text-gray-400 text-xs md:text-sm">Professional network</p>
                                    </div>
                                </a>

                                <a
                                    href="https://github.com/DeveloperDrogo"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-link flex items-center space-x-2 md:space-x-4 glass-dark rounded-xl p-3 md:p-4 hover:scale-105 transition-transform"
                                >
                                    <div className="w-10 md:w-12 h-10 md:h-12 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 md:w-6 h-5 md:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-white font-medium text-sm md:text-base">GitHub</p>
                                        <p className="text-gray-400 text-xs md:text-sm">View my code</p>
                                    </div>
                                </a>

                                <a
                                    href="https://www.youtube.com/@DeveloperDrogo-o9l"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-link flex items-center space-x-2 md:space-x-4 glass-dark rounded-xl p-3 md:p-4 hover:scale-105 transition-transform"
                                >
                                    <div className="w-10 md:w-12 h-10 md:h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 md:w-6 h-5 md:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-white font-medium text-sm md:text-base">YouTube</p>
                                        <p className="text-gray-400 text-xs md:text-sm">Watch tutorials</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="contact-cta text-center pt-8 border-t border-gray-700">
                            <p className="text-gray-300 mb-6">
                                Available for freelance projects and full-time opportunities
                            </p>
                            <a
                                href={resumePdf}
                                download="ankith_resume.pdf"
                                className="btn-secondary inline-block"
                            >
                                Download Resume
                            </a>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="text-center mt-16 text-gray-400">
                    <p>&copy; 2024 Ankith. All rights reserved.</p>
                    <p className="text-sm mt-2">Built with React & Tailwind CSS</p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
