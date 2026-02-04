import React from 'react';

const Projects = () => {
    const projects = [
        {
            title: 'Schoolphins',
            category: 'White Label ERP System',
            description: 'Comprehensive school management ERP system deployed across 50+ schools. Features include homework management, study materials, student profiles with personal details, calendar integration, exam marks display, and notification system with audio text-to-speech.',
            features: [
                'Homework & Study Material Management',
                'Student Profile & Personal Details',
                'Calendar & Exam Schedule',
                'Marks Display & Report Cards',
                'Audio Text-to-Speech Notifications',
                'Online Payment (EaseBuzz, Razorpay, PhonePe)',
                'Wallet System',
                'Leave & Permission Management',
                'Role-based Dashboard',
                'WebView Integration for existing web features'
            ],
            tech: ['Flutter', 'Clean Architecture', 'Bloc', 'PHP CodeIgniter', 'MySQL', 'Firebase'],
            stats: {
                apps: '50+',
                platforms: 'Android & iOS',
                users: '10,000+'
            },
            color: 'from-blue-500 to-cyan-500'
        },
        {
            title: 'Collegephins',
            category: 'White Label ERP System',
            description: 'Advanced college management system with comprehensive features tailored for higher education institutions. Handles everything from attendance to fee payments with a modern, intuitive interface.',
            features: [
                'Attendance Tracking System',
                'Internal Marks Management',
                'Timetable & Schedule',
                'Study Materials Distribution',
                'Online Fee Payment',
                'Wallet System',
                'Push Notifications with TTS',
                'Leave Management',
                'Academic Calendar',
                'Role-based Access Control'
            ],
            tech: ['Flutter', 'Clean Architecture', 'Bloc', 'PHP CodeIgniter', 'MySQL', 'Firebase'],
            stats: {
                apps: '30+',
                platforms: 'Android & iOS',
                users: '8,000+'
            },
            color: 'from-purple-500 to-pink-500'
        },
        {
            title: 'ParroBees',
            category: 'White Label Preschool App',
            description: 'Specialized preschool management application designed for early childhood education centers. Features child-friendly interfaces, parent communication tools, activity tracking, and multimedia content delivery.',
            features: [
                'Activity & Progress Tracking',
                'Parent-Teacher Communication',
                'Multimedia Content Delivery',
                'Daily Reports & Updates',
                'Photo & Video Sharing',
                'Attendance Management',
                'Fee Payment Integration',
                'Notification System',
                'Child Profile Management',
                'Calendar & Events'
            ],
            tech: ['Flutter', 'Clean Architecture', 'Bloc', 'PHP CodeIgniter', 'MySQL', 'Firebase'],
            stats: {
                apps: '15+',
                platforms: 'Android & iOS',
                users: '3,000+'
            },
            color: 'from-orange-500 to-red-500'
        }
    ];

    return (
        <section id="projects" className="section-padding bg-gradient-to-b from-dark-200 to-dark-100">
            <div className="container-custom mx-auto">
                <div className="projects-title text-center mb-16">
                    <h2 className="gradient-text font-display mb-4">Featured Projects</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        White label ERP systems deployed across 95+ institutions on Play Store and App Store
                    </p>
                </div>

                {/* Stats Overview */}
                <div className="projects-stats glass-purple rounded-3xl p-8 mb-16 max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-4 gap-6 text-center">
                        <div>
                            <p className="text-3xl font-bold gradient-text">95+</p>
                            <p className="text-gray-400 text-sm mt-1">Mobile Apps</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold gradient-text">16+</p>
                            <p className="text-gray-400 text-sm mt-1">Web Apps</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold gradient-text">21,000+</p>
                            <p className="text-gray-400 text-sm mt-1">Active Users</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold gradient-text">95+</p>
                            <p className="text-gray-400 text-sm mt-1">Institutions</p>
                        </div>
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="projects-grid space-y-12">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="project-card glass-purple rounded-3xl p-8 card-hover border border-white/5"
                        >
                            <div className="flex flex-col lg:flex-row gap-8">
                                {/* Project Info */}
                                <div className="lg:w-1/2">
                                    <span className={`inline-block px-4 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${project.color} text-white mb-4`}>
                                        {project.category}
                                    </span>
                                    <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                                    <p className="text-gray-300 leading-relaxed mb-6">{project.description}</p>

                                    {/* Stats */}
                                    <div className="grid grid-cols-3 gap-4 mb-6">
                                        <div className="text-center glass-dark rounded-lg p-3">
                                            <p className="text-lg font-bold gradient-text-orange">{project.stats.apps}</p>
                                            <p className="text-xs text-gray-400">Apps</p>
                                        </div>
                                        <div className="text-center glass-dark rounded-lg p-3">
                                            <p className="text-sm font-bold text-white">{project.stats.platforms}</p>
                                            <p className="text-xs text-gray-400">Platforms</p>
                                        </div>
                                        <div className="text-center glass-dark rounded-lg p-3">
                                            <p className="text-lg font-bold gradient-text-orange">{project.stats.users}</p>
                                            <p className="text-xs text-gray-400">Users</p>
                                        </div>
                                    </div>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="px-3 py-1 bg-purple-900/30 text-purple-300 rounded-full text-sm border border-purple-500/30"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Features List */}
                                <div className="lg:w-1/2">
                                    <h4 className="text-lg font-semibold text-white mb-4">Key Features</h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {project.features.map((feature, featureIndex) => (
                                            <div key={featureIndex} className="flex items-center text-gray-300">
                                                <svg className="w-5 h-5 text-purple-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                                <span className="text-sm">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Architecture Section */}
                <div className="architecture-section mt-16 glass-dark rounded-3xl p-8 max-w-4xl mx-auto border border-white/5">
                    <h3 className="text-2xl font-bold text-center gradient-text mb-6">Technical Architecture</h3>
                    <div className="grid md:grid-cols-3 gap-6 text-center">
                        <div className="p-4">
                            <div className="text-4xl mb-3">📱</div>
                            <h4 className="text-white font-semibold mb-2">Flutter Frontend</h4>
                            <p className="text-gray-400 text-sm">Clean Architecture with Bloc state management for scalable apps</p>
                        </div>
                        <div className="p-4">
                            <div className="text-4xl mb-3">⚙️</div>
                            <h4 className="text-white font-semibold mb-2">PHP CodeIgniter</h4>
                            <p className="text-gray-400 text-sm">Robust backend APIs with MySQL database integration</p>
                        </div>
                        <div className="p-4">
                            <div className="text-4xl mb-3">🔥</div>
                            <h4 className="text-white font-semibold mb-2">Firebase Services</h4>
                            <p className="text-gray-400 text-sm">Push notifications, analytics, and cloud messaging</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
