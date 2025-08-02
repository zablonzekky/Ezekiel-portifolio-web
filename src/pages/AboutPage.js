import React, { useState, useEffect } from 'react';
import Button from '../components/UI/Button';
import Card from '../components/UI/Card';

const AboutPage = () => {
  const [expandedExperience, setExpandedExperience] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const toggleExperience = (id) => {
    setExpandedExperience(expandedExperience === id ? null : id);
  };

  const experienceData = [
    {
      id: 1,
      title: 'Software Engineer',
      company: 'Emobili technology institute',
      period: '2023 - 2024',
      logo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg',
      description: 'Leading development of enterprise-scale applications using React, Node.js, and cloud technologies.',
      achievements: [
        'Led a team of 5 developers in building a customer management platform serving 10,000+ users',
        'Implemented CI/CD pipelines reducing deployment time by 60%',
        'Architected microservices infrastructure improving system scalability by 300%',
        'Collaborated with other developers and established coding standards across the organization'
      ],
      technologies: ['React', 'Node.js', 'AWS', 'Docker']
    },
    {
      id: 2,
      title: 'Service Desk Engineer',
      company: 'Safaricom Plc Kenya',
      period: '2024 - 2024',
      logo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg',
      description: 'Built and maintained multiple web applications for a fast-growing fintech startup.',
      achievements: [
        'Developed payment processing system handling $2M+ in transactions monthly',
        'Built responsive web applications using Vue.js and Express.js',
        'Collaborated with design team to implement pixel-perfect UI components',
        'Optimized application performance resulting in 40% faster load times'
      ],
      technologies: ['React.js', 'Express.js', 'MongoDB', 'Django']
    },
    {
      id: 3,
      title: 'Junior Developer',
      company: 'SANET COMPUTING',
      period: '2020 - 2021',
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43',
      description: 'Started my professional journey building websites and learning modern development practices.',
      achievements: [
        'Delivered 15+ client websites using HTML, CSS, and JavaScript',
        'Learned modern frameworks including React and Angular',
        'Collaborated with senior developers on complex projects',
        'Gained experience with version control and agile methodologies'
      ],
      technologies: ['HTML/CSS', 'JavaScript', 'WordPress', 'Git']
    }
  ];

  const interestsData = [
    {
      title: 'Innovation & Research',
      description: 'Passionate about emerging technologies like AI, blockchain, and IoT.',
      icon: <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 16h.01M16 16h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
      color: 'from-accent to-red-600'
    },
    {
      title: 'Open Source',
      description: 'Active contributor to open source projects.',
      icon: <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
      color: 'from-primary to-blue-600'
    },
    {
      title: 'Photography',
      description: 'Love capturing moments and exploring composition.',
      icon: <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22..." /></svg>,
      color: 'from-secondary to-gray-600'
    },
    {
      title: 'Mentoring',
      description: 'Enjoy teaching and mentoring aspiring developers.',
      icon: <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13..." /></svg>,
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Gaming',
      description: 'Strategy games and puzzles help me think creatively.',
      icon: <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828..." /></svg>,
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Travel',
      description: 'Exploring cultures inspires creativity and design thinking.',
      icon: <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26..." /></svg>,
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <div>
      {/* HERO */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left fade-in">
              <h1 className="text-5xl font-bold mb-6 leading-tight">About <span className="text-accent">Ezekiel Wekesa Wabwoba</span></h1>
              <p className="text-xl mb-6 text-gray-200">Passionate Full Stack Developer with 5+ years of experience creating digital solutions.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <div className="flex items-center gap-2 text-gray-200">
                  📍 Nairobi, Kenya
                </div>
                <div className="flex items-center gap-2 text-gray-200">
                  📧 ewwabwoba@gmail.com
                </div>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-8 border-white shadow-2xl">
                <img src="/assets/images/DSC_2487_2-1750763328346.jpg" alt="Ezekiel Portrait" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUMMARY */}
      <section className="py-12 lg:py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-primary mb-4">Professional Summary</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          </div>
          <div className="text-text-secondary space-y-6 text-lg">
            <p>I’m a passionate Full Stack Developer with 3+ years of experience building scalable web applications and digital solutions...</p>
            <p>I’ve worked with diverse teams and clients, from startups to enterprises, focusing on business needs, UX, and clean architecture.</p>
            <p>I specialize in JavaScript frameworks, cloud platforms, and agile development.</p>
          </div>
        </div>
      </section>

      {/* CAREER SECTION */}
      <section className="py-12 lg:py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-primary mb-4">Career Journey</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">Professional growth and milestones across organizations.</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {experienceData.map(exp => (
              <Card key={exp.id} onClick={() => toggleExperience(exp.id)} className="p-4 hover:shadow-md transition">
                <div className="flex items-center gap-4 mb-4">
                  <img src={exp.logo} className="w-12 h-12 rounded-lg" alt={`${exp.company} logo`} loading="lazy" />
                  <div>
                    <h3 className="text-lg font-bold text-primary">{exp.title}</h3>
                    <p className="text-accent">{exp.company}</p>
                    <p className="text-sm text-text-secondary">{exp.period}</p>
                  </div>
                </div>
                <p className="text-sm text-text-secondary mb-4">{exp.description}</p>
                <p className="text-accent text-sm flex items-center gap-1">
                  <span>{expandedExperience === exp.id ? 'Collapse' : 'Expand'}</span>
                  <svg className={`w-4 h-4 transform ${expandedExperience === exp.id ? 'rotate-180' : ''}`} viewBox="0 0 24 24" stroke="currentColor"><path d="M19 9l-7 7-7-7" /></svg>
                </p>
              </Card>
            ))}
          </div>

          {expandedExperience && (
            <div className="mt-8 max-w-4xl mx-auto">
              {experienceData.map(exp => expandedExperience === exp.id && (
                <Card key={exp.id} className="p-6 bg-gray-50">
                  <h4 className="text-lg font-semibold text-primary mb-4">Key Responsibilities & Tech:</h4>
                  <ul className="space-y-2 list-disc list-inside text-sm text-text-secondary">
                    {exp.achievements.map((ach, idx) => <li key={idx}>{ach}</li>)}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 text-xs bg-primary text-white rounded-full">{tech}</span>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* INTERESTS */}
      <section className="py-12 lg:py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-primary mb-4">Beyond the Code</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {interestsData.map((item, idx) => (
              <Card key={idx} className="p-4 text-center hover:shadow-md transition">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-text-secondary">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 lg:py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-lg mb-6 text-gray-200">Looking for a reliable developer to join your next project?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/contact" variant="primary">Get In Touch</Button>
            <Button to="/projects" variant="outline">View My Work</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
