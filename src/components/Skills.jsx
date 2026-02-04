import { SiFlutter, SiDart, SiNodedotjs, SiCodeigniter, SiMongodb, SiMysql, SiFirebase, SiFigma, SiGit, SiGithub, SiGoogleplay, SiAppstore, SiPaytm, SiRazorpay, SiPhonepe, SiPostman } from 'react-icons/si';
import { FaLayerGroup, FaRocket, FaCubes } from 'react-icons/fa';
import { TbApi, TbWorldWww } from 'react-icons/tb';
import { MdPayment, MdPassword, MdNotificationsActive } from 'react-icons/md';

const Skills = () => {
    const skills = [
        { name: 'Flutter', level: 95, color: 'from-blue-500 to-cyan-500', icon: <SiFlutter /> },
        { name: 'Dart', level: 95, color: 'from-blue-600 to-blue-400', icon: <SiDart /> },
        { name: 'Flutter Bloc', level: 90, color: 'from-purple-500 to-pink-500', icon: <FaCubes /> },
        { name: 'Clean Architecture', level: 85, color: 'from-green-500 to-emerald-500', icon: <FaLayerGroup /> },
        { name: 'Node.js', level: 80, color: 'from-green-600 to-green-400', icon: <SiNodedotjs /> },
        { name: 'CodeIgniter 3', level: 85, color: 'from-red-500 to-orange-500', icon: <SiCodeigniter /> },
        { name: 'MongoDB', level: 80, color: 'from-green-500 to-teal-500', icon: <SiMongodb /> },
        { name: 'MySQL', level: 85, color: 'from-blue-500 to-blue-600', icon: <SiMysql /> },
        { name: 'Firebase', level: 90, color: 'from-yellow-500 to-orange-500', icon: <SiFirebase /> },
        { name: 'Figma', level: 85, color: 'from-purple-500 to-purple-600', icon: <SiFigma /> },
        { name: 'REST API', level: 90, color: 'from-indigo-500 to-purple-500', icon: <TbApi /> },
        { name: 'App Deployment', level: 95, color: 'from-pink-500 to-rose-500', icon: <FaRocket /> },
    ];

    const additionalSkills = [
        { name: 'Git', icon: <SiGit className="text-orange-500" /> },
        { name: 'GitHub', icon: <SiGithub className="text-white" /> },
        { name: 'Play Store', icon: <SiGoogleplay className="text-green-500" /> },
        { name: 'App Store', icon: <SiAppstore className="text-blue-500" /> },
        { name: 'Paytm', icon: <SiPaytm className="text-blue-400" /> },
        { name: 'Razorpay', icon: <SiRazorpay className="text-blue-600" /> },
        { name: 'PhonePe', icon: <SiPhonepe className="text-purple-500" /> },
        { name: 'EaseBuzz', icon: <MdPayment className="text-green-400" /> },
        { name: 'WebView', icon: <TbWorldWww className="text-blue-300" /> },
        { name: 'OTP Auth', icon: <MdPassword className="text-yellow-400" /> },
        { name: 'Notifications', icon: <MdNotificationsActive className="text-red-400" /> },
        { name: 'Postman', icon: <SiPostman className="text-orange-500" /> },
    ];

    return (
        <section id="skills" className="section-padding particle-bg">
            <div className="container-custom mx-auto">
                <div className="skills-title text-center mb-16">
                    <h2 className="gradient-text font-display mb-4">Skills & Expertise</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Technologies and tools I use to bring ideas to life
                    </p>
                </div>

                {/* Main Skills Grid */}
                <div className="skills-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="skill-card glass-purple rounded-2xl p-6 card-hover group flex items-center gap-4"
                        >
                            <div className={`text-4xl p-3 rounded-xl bg-gradient-to-br ${skill.color} text-white inline-block shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                {skill.icon}
                            </div>
                            <h4 className="text-white font-bold text-lg">{skill.name}</h4>
                        </div>
                    ))}
                </div>

                {/* Additional Skills */}
                <div className="additional-skills">
                    <h3 className="text-2xl font-bold text-center gradient-text mb-8">Additional Expertise</h3>
                    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {additionalSkills.map((tech, index) => (
                            <div
                                key={index}
                                className="additional-skill glass-dark border border-white/5 rounded-xl p-4 flex flex-col items-center justify-center gap-3 hover:bg-white/5 hover:border-purple-500/30 transition-all duration-300 group cursor-default"
                            >
                                <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                                    {tech.icon}
                                </div>
                                <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors text-center">
                                    {tech.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
