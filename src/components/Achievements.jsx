import React from 'react';

const Achievements = () => {
    const achievements = [
        {
            icon: '🎨',
            title: 'Figma Workshop Conductor',
            description: 'Conducted a comprehensive Figma workshop at Srinivas Institute of Technology, sharing design expertise with students.',
            highlight: 'Educational Impact',
        },
        {
            icon: '📱',
            title: '90+ Apps Designed',
            description: 'Proud designer of 90+ applications, showcasing commitment to user-friendly interfaces and diverse projects.',
            highlight: 'Design Excellence',
        },
        {
            icon: '🚀',
            title: 'Multi-Platform Expertise',
            description: 'Successfully deployed apps on Play Store and App Store, managing the complete deployment lifecycle.',
            highlight: 'Production Ready',
        },
        {
            icon: '💳',
            title: 'Payment Gateway Integration',
            description: 'Integrated multiple payment gateways including Paytm, Razorpay, EaseBuzz, and PhonePe across applications.',
            highlight: 'Technical Mastery',
        },
    ];

    const highlights = [
        { icon: '✨', title: 'Clean Architecture Advocate', desc: 'Implementing scalable and maintainable code structures' },
        { icon: '🎯', title: 'Full-Stack Mobile Developer', desc: 'From UI/UX to backend integration and deployment' },
        { icon: '🔄', title: 'Continuous Learner', desc: 'Always exploring new technologies and best practices' },
        { icon: '👥', title: 'Team Leadership', desc: 'Leading development teams and mentoring developers' },
    ];

    return (
        <section id="achievements" className="section-padding particle-bg relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>

            <div className="container-custom mx-auto relative z-10">
                <div className="ach-title text-center mb-16">
                    <h2 className="gradient-text font-display mb-4">Achievements</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Milestones and accomplishments throughout my journey
                    </p>
                </div>

                <div className="ach-grid grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {achievements.map((achievement, index) => (
                        <div
                            key={index}
                            className="ach-card glass-purple rounded-2xl p-8 card-hover border border-white/5"
                        >
                            <div className="text-5xl mb-4">{achievement.icon}</div>
                            <div className="mb-3">
                                <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-xs font-semibold">
                                    {achievement.highlight}
                                </span>
                            </div>
                            <h4 className="text-xl font-bold text-white mb-3">{achievement.title}</h4>
                            <p className="text-gray-300 leading-relaxed">{achievement.description}</p>
                        </div>
                    ))}
                </div>

                {/* Additional Highlights */}
                <div className="highlight-section mt-16 glass-dark rounded-3xl p-8 max-w-4xl mx-auto border border-white/5">
                    <h3 className="text-2xl font-bold text-center gradient-text mb-8">Key Highlights</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        {highlights.map((item, index) => (
                            <div key={index} className="highlight-item flex items-start space-x-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
                                <div className="text-2xl">{item.icon}</div>
                                <div>
                                    <h5 className="text-white font-semibold mb-1">{item.title}</h5>
                                    <p className="text-gray-400 text-sm">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achievements;
