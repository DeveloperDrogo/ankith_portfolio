import { FaGraduationCap, FaCode } from 'react-icons/fa';

const About = () => {
    return (
        <section id="about" className="section-padding bg-gradient-to-b from-dark-200 to-dark-100 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

            <div className="container-custom mx-auto relative z-10">
                <div className="about-header text-center mb-16">
                    <h2 className="gradient-text font-display mb-4">About Me</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Passionate about creating exceptional mobile experiences
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left Column: Bio & Mission */}
                    <div className="about-left space-y-8">
                        <div className="glass-purple rounded-3xl p-8 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <FaCode className="text-9xl text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="w-12 h-1 bg-purple-500 rounded-full"></span>
                                Who I Am
                            </h3>
                            <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                Experienced <span className="text-white font-semibold">Mobile Application Developer</span> with
                                a strong track record of delivering scalable, high-quality cross-platform solutions.
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                Specialized in <span className="text-purple-400">Flutter development</span>, API integration,
                                and clean UI implementation. My journey involves hands-on experience across the full software
                                development lifecycle from requirements into deployment and maintenance.
                            </p>
                        </div>

                        {/* Mission Quote */}
                        <div className="glass-dark border-l-4 border-purple-500 p-6 rounded-r-xl">
                            <p className="text-gray-300 italic text-lg">
                                "Through Parrophins Private Limited, I've led the development of impactful applications ranging from alumni platforms to institution management systems, delivering 100+ production apps."
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Key Details & Education */}
                    <div className="about-right space-y-6">
                        {/* Education Card */}
                        <div className="glass-dark rounded-2xl p-6 border border-white/5">
                            <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                <FaGraduationCap className="text-purple-400 text-2xl" />
                                Education
                            </h4>

                            <div className="education-item relative pl-8 border-l-2 border-purple-500/30">
                                <div className="absolute top-0 left-[-9px] w-4 h-4 bg-purple-500 rounded-full"></div>
                                <h5 className="text-white font-semibold text-lg">Bachelor of Engineering</h5>
                                <p className="text-purple-400">Computer Science</p>
                                <p className="text-gray-400 text-sm mt-1">Srinivas Institute of Technology, Mangalore</p>
                                <p className="text-gray-500 text-sm mt-2 font-mono bg-white/5 inline-block px-2 py-1 rounded">2018 - 2022 | GPA: 6.9</p>
                            </div>

                            <div className="education-item relative pl-8 border-l-2 border-purple-500/30 pt-8">
                                <div className="absolute top-8 left-[-9px] w-4 h-4 bg-purple-500 rounded-full"></div>
                                <h5 className="text-white font-semibold text-lg">Pre-University Course (PUC)</h5>
                                <p className="text-purple-400">Science</p>
                                <p className="text-gray-400 text-sm mt-1">Vivekananda Pre-University College, Puttur</p>
                                <p className="text-gray-500 text-sm mt-2 font-mono bg-white/5 inline-block px-2 py-1 rounded">Graduated: 2018 | Score: 66%</p>
                            </div>

                            <div className="education-item relative pl-8 border-l-2 border-purple-500/30 pt-8">
                                <div className="absolute top-8 left-[-9px] w-4 h-4 bg-purple-500 rounded-full"></div>
                                <h5 className="text-white font-semibold text-lg">SSLC</h5>
                                <p className="text-purple-400">High School</p>
                                <p className="text-gray-400 text-sm mt-1">Shri Sharada High School, Panemangalore</p>
                                <p className="text-gray-500 text-sm mt-2 font-mono bg-white/5 inline-block px-2 py-1 rounded">Graduated: 2016 | Score: 76%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
