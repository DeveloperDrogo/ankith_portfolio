import React from 'react';

const Experience = () => {
    const projects = [
        {
            title: 'Schoolphins, Collegephins & ParroBees',
            period: '2022 - Present',
            description: 'Led delivery of 90+ Android/iOS apps and 16+ Flutter Web apps under Schoolphins, Collegephins, and ParroBees for students, staff, and parents. Features include homework & study material management, attendance tracking, internal marks, timetable, online fee payment, wallet system, and push notifications with text-to-speech.',
            tech: ['Flutter', 'Clean Architecture', 'Bloc', 'PHP CodeIgniter', 'MySQL', 'Firebase'],
            impact: '90+ apps deployed for both playstore and appstore, 21,000+ active users across 95+ institutions',
        },
        {
            title: 'Alumean - Alumni Platform',
            period: '2024 - Present',
            description: 'Led end-to-end development of the "Alumean" alumni platform (mobile apps + staff/admin web) with news feeds, fundraising and donations, certificate request workflows, and committee information management.',
            tech: ['Flutter', 'Bloc', 'Clean Architecture', 'Node.js', 'MongoDB', 'Firebase'],
            impact: 'Active alumni communities across multiple institutions',
        },
        {
            title: 'Parropass',
            period: '2023 - 2024',
            description: 'Led development of "Parropass" app (mobile + admin web) featuring staff permission workflows and visitor management system.',
            tech: ['Flutter', 'Bloc', 'PHP CodeIgniter', 'Firebase'],
            impact: 'Deployed across multiple institutions',
        },
        {
            title: 'Employee Management System',
            period: '2025',
            description: 'Led development of an in-house employee management app for Parrophins Pvt. Ltd., featuring OTP login, digital ID cards, leave/permission workflows, employee & client management, task tracking, job applicant resume review.',
            tech: ['Flutter', 'Bloc', 'Clean Architecture', 'PHP CodeIgniter', 'Node.js', 'MongoDB', 'Firebase'],
            impact: 'Deployed on Play Store & App Store, actively used company-wide',
        },
        {
            title: 'Event Registration App',
            period: '2025',
            description: 'Developed a cross-platform event registration app (mobile & web) with OTP login, ticket selection, EaseBuzz payment integration, and automated ticket generation.',
            tech: ['Flutter', 'Bloc', 'Clean Architecture', 'EaseBuzz'],
            impact: 'Streamlined event registration process',
        },
        {
            title: 'Staff & Hostel Management Apps',
            period: '2022 - Present',
            description: 'Developed reusable staff and hostel management apps, replicated across 20+ institutions, featuring leave management, OTP login, WebView integration, gate pass, food tracking, and fee payments via EaseBuzz.',
            tech: ['Flutter', 'Bloc', 'Clean Architecture', 'PHP CodeIgniter', 'EaseBuzz', 'Firebase'],
            impact: '20+ apps deployed across institutions',
        },
        {
            title: 'Payment Gateway Integrations',
            period: '2022 - Present',
            description: 'Integrated multiple payment gateways across all applications including Paytm, Razorpay, EaseBuzz, and PhonePe for seamless fee collection and transactions.',
            tech: ['Paytm', 'Razorpay', 'EaseBuzz', 'PhonePe', 'Flutter'],
            impact: 'Secure payments across 100+ apps',
        },
    ];

    return (
        <section id="experience" className="section-padding bg-gradient-to-b from-dark-100 to-dark-200 relative overflow-hidden">
            {/* Background gradients */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>

            <div className="container-custom mx-auto relative z-10">
                <div className="experience-title text-center mb-16">
                    <h2 className="gradient-text font-display mb-4">Work Experience</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Building impactful solutions at Parrophins Private Limited
                    </p>
                </div>

                {/* Company Info */}
                <div className="company-info glass-purple rounded-3xl p-8 mb-12 max-w-4xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-2">Parrophins Private Limited</h3>
                            <p className="text-purple-400 font-semibold">Mobile Application Developer</p>
                        </div>
                        <div className="text-gray-400 mt-2 md:mt-0">
                            <p className="font-medium">Dec 2022 - Present</p>
                            <p className="text-sm">3+ Years</p>
                        </div>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                        Leading development of 100+ production apps across Android, iOS, and Web platforms.
                        Specialized in Flutter development with Bloc pattern and Clean Architecture.
                    </p>
                </div>

                {/* Projects Timeline */}
                <div className="experience-timeline space-y-8 max-w-5xl mx-auto">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="experience-item glass-dark rounded-2xl p-8 card-hover relative border border-white/5"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-4 top-8 w-8 h-8 bg-gradient-to-r from-purple-600 to-orange-500 rounded-full border-4 border-dark-100 hidden md:flex items-center justify-center">
                                <span className="text-white text-xs font-bold">{index + 1}</span>
                            </div>

                            <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
                                    <p className="text-purple-400 text-sm font-medium">{project.period}</p>
                                </div>
                            </div>

                            <p className="text-gray-300 mb-4 leading-relaxed">
                                {project.description}
                            </p>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="px-3 py-1 bg-purple-900/30 text-purple-300 rounded-full text-sm border border-purple-500/30"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Impact */}
                            <div className="glass-purple rounded-lg p-4 mt-4">
                                <p className="text-sm text-gray-300">
                                    <span className="text-orange-400 font-semibold">Impact:</span> {project.impact}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Overall Impact */}
                <div className="impact-stats mt-16 text-center glass-purple rounded-3xl p-8 max-w-4xl mx-auto">
                    <h3 className="text-2xl font-bold gradient-text mb-6">Overall Impact</h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div>
                            <p className="text-4xl font-bold gradient-text-orange mb-2">100+</p>
                            <p className="text-gray-300">Production Apps</p>
                            <p className="text-sm text-gray-400 mt-1">Android & iOS</p>
                        </div>
                        <div>
                            <p className="text-4xl font-bold gradient-text-orange mb-2">16+</p>
                            <p className="text-gray-300">Flutter Web Apps</p>
                            <p className="text-sm text-gray-400 mt-1">Responsive & Scalable</p>
                        </div>
                        <div>
                            <p className="text-4xl font-bold gradient-text-orange mb-2">95+</p>
                            <p className="text-gray-300">Institutions Served</p>
                            <p className="text-sm text-gray-400 mt-1">Schools & Colleges</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
