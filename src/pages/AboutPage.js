import React, { useState, useEffect } from 'react';
import Button from '../components/UI/Button';
import Card from '../components/UI/Card';

const AboutPage = () => {
  const [expandedExperience, setExpandedExperience] = useState(null);

  useEffect(() => {
    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);
    
    document.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const toggleExperience = (id) => {
    setExpandedExperience(expandedExperience === id ? null : id);
  };

  const experienceData = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      company: 'TechCorp Solutions',
      period: '2022 - Present',
      logo: 'https://images.pixabay.com/photo/2016/12/27/13/10/logo-1933884_1280.png',
      description: 'Leading development of enterprise-scale applications using React, Node.js, and cloud technologies.',
      achievements: [
        'Led a team of 5 developers in building a customer management platform serving 10,000+ users',
        'Implemented CI/CD pipelines reducing deployment time by 60%',
        'Architected microservices infrastructure improving system scalability by 300%',
        'Mentored junior developers and established coding standards across the organization'
      ],
      technologies: ['React', 'Node.js', 'AWS', 'Docker']
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      company: 'StartupXYZ',
      period: '2020 - 2022',
      logo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Built and maintained multiple web applications for a fast-growing fintech startup.',
      achievements: [
        'Developed payment processing system handling $2M+ in transactions monthly',
        'Built responsive web applications using Vue.js and Express.js',
        'Collaborated with design team to implement pixel-perfect UI components',
        'Optimized application performance resulting in 40% faster load times'
      ],
      technologies: ['Vue.js', 'Express.js', 'MongoDB', 'Stripe API']
    },
    {
      id: 3,
      title: 'Junior Developer',
      company: 'WebDev Agency',
      period: '2019 - 2020',
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=2126&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
      description: 'Passionate about emerging technologies like AI, blockchain, and IoT. Always experimenting with new frameworks and tools.',
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 16h.01M16 16h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      ),
      color: 'from-accent to-red-600'
    },
    {
      title: 'Open Source',
      description: 'Active contributor to open source projects. Believe in giving back to the community that has taught me so much.',
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
      ),
      color: 'from-primary to-blue-600'
    },
    {
      title: 'Photography',
      description: 'Love capturing moments and exploring composition. Photography helps me see the world from different perspectives.',
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/>
        </svg>
      ),
      color: 'from-secondary to-gray-600'
    },
    {
      title: 'Mentoring',
      description: 'Enjoy teaching and mentoring aspiring developers. Volunteer at coding bootcamps and tech meetups.',
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
        </svg>
      ),
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Gaming',
      description: 'Strategy games and puzzle solving help me think creatively about problem-solving approaches in development.',
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.01M15 10h1.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
        </svg>
      ),
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Travel',
      description: 'Exploring different cultures and places inspires creativity and provides fresh perspectives on design and user experience.',
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
      ),
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <div>
      {/* Hero Section with Professional Headshot */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Professional Info */}
            <div className="text-center lg:text-left fade-in">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
                About <span className="text-accent">Ezekiel Wekesa Wabwoba</span>
              </h1>
              <p className="text-xl sm:text-2xl mb-8 text-gray-200 leading-relaxed">
                Passionate Full Stack Developer with 5+ years of experience creating innovative digital solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <div className="flex items-center text-gray-200">
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  San Francisco, CA
                </div>
                <div className="flex items-center text-gray-200">
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  ezekiel.wekesa@email.com
                </div>
              </div>
            </div>
            
            {/* Professional Headshot */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-8 border-white shadow-2xl">
                  <img 
                    src="/assets/images/DSC_2487_2-1750763328346.jpg" 
                    alt="Ezekiel Wekesa Wabwoba - Professional Portrait" 
                    className="w-full h-full object-cover" 
                    loading="lazy" 
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
                    }}
                  />
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent rounded-full opacity-80 animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-white rounded-full opacity-60 animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Summary Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-6">
              Professional Summary
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          </div>
          
          <div className="prose prose-lg max-w-none text-text-secondary leading-relaxed">
            <p className="text-xl mb-6">
              I'm a passionate Full Stack Developer with over 5 years of experience building scalable web applications 
              and digital solutions. My journey in technology began with a curiosity about how things work, which evolved 
              into a deep love for creating innovative software that makes a real difference in people's lives.
            </p>
            <p className="text-lg mb-6">
              Throughout my career, I've had the privilege of working with diverse teams and clients, from early-stage 
              startups to established enterprises. This experience has taught me the importance of understanding business 
              needs, user experience, and technical excellence in equal measure.
            </p>
            <p className="text-lg">
              I specialize in modern JavaScript frameworks, cloud technologies, and agile development practices. 
              My approach combines technical expertise with strong communication skills, ensuring that complex 
              technical concepts are accessible to all stakeholders.
            </p>
          </div>
        </div>
      </section>

      {/* Career Timeline Section */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-6">
              Career Journey
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              A timeline of my professional growth and key experiences that shaped my expertise.
            </p>
          </div>
          
          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 lg:left-1/2 transform lg:-translate-x-1/2 w-0.5 h-full bg-gray-300"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12">
              {experienceData.map((exp, index) => (
                <div key={exp.id} className="relative flex items-start lg:items-center">
                  <div className="absolute left-4 lg:left-1/2 transform lg:-translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-white shadow-lg"></div>
                  <div className={`ml-12 lg:ml-0 ${index % 2 === 0 ? 'lg:w-1/2 lg:pr-8 lg:text-right' : 'lg:w-1/2 lg:pl-8 lg:ml-auto'}`}>
                    <Card onClick={() => toggleExperience(exp.id)} className="cursor-pointer">
                      <div className={`flex items-center mb-4 ${index % 2 === 0 ? 'lg:justify-end' : ''}`}>
                        <img 
                          src={exp.logo} 
                          alt={`${exp.company} Logo`} 
                          className={`w-12 h-12 rounded-lg mr-4 ${index % 2 === 0 ? 'lg:mr-0 lg:ml-4 lg:order-2' : ''}`}
                          loading="lazy" 
                          onError={(e) => {
                            e.target.src = 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=2126&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
                          }}
                        />
                        <div className={index % 2 === 0 ? 'lg:order-1' : ''}>
                          <h3 className="text-xl font-heading font-semibold text-primary">{exp.title}</h3>
                          <p className="text-accent font-semibold">{exp.company}</p>
                        </div>
                      </div>
                      <p className="text-text-secondary mb-2">{exp.period}</p>
                      <p className="text-text-secondary">{exp.description}</p>
                      <div className={`mt-4 flex items-center text-accent text-sm ${index % 2 === 0 ? 'lg:justify-end' : ''}`}>
                        <span className="mr-2">Click to expand</span>
                        <svg 
                          className={`w-4 h-4 transform transition-transform duration-fast ${expandedExperience === exp.id ? 'rotate-180' : ''}`} 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                        </svg>
                      </div>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Expandable Details */}
          {expandedExperience && (
            <div className="mt-8 lg:max-w-4xl lg:mx-auto">
              {experienceData.map((exp) => 
                expandedExperience === exp.id && (
                  <Card key={exp.id} className="bg-gray-50">
                    <h4 className="font-semibold text-primary mb-4">Key Achievements & Responsibilities:</h4>
                    <ul className="space-y-2 text-text-secondary">
                      {exp.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                          </svg>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.technologies.map((tech, index) => (
                        <span key={index} className="px-3 py-1 bg-primary text-white text-sm rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </Card>
                )
              )}
            </div>
          )}
        </div>
      </section>

      {/* Personal Interests Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-6">
              Beyond the Code
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              When I'm not coding, I enjoy exploring new technologies, contributing to open source, and pursuing creative hobbies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {interestsData.map((interest, index) => (
              <Card key={index} className="text-center group hover:scale-105 transition-transform duration-fast">
                <div className={`w-20 h-20 bg-gradient-to-br ${interest.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-fast`}>
                  {interest.icon}
                </div>
                <h3 className="text-xl font-heading font-semibold text-primary mb-3">{interest.title}</h3>
                <p className="text-text-secondary">
                  {interest.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl mb-8 text-gray-200 leading-relaxed">
            I'm always interested in new opportunities and exciting projects. Let's discuss how we can create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              to="/contact" 
              variant="primary"
              icon={
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                </svg>
              }
            >
              Get In Touch
            </Button>
            <Button to="/projects" variant="outline">
              View My Work
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;