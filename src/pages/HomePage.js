import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/UI/Button';
import Card from '../components/UI/Card';

const HomePage = () => {
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

  const projectsData = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      technologies: ['React', 'Node.js', 'MongoDB']
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.pixabay.com/photo/2016/11/30/20/58/programming-1873854_1280.png',
      technologies: ['Vue.js', 'Firebase', 'Tailwind']
    },
    {
      id: 3,
      title: 'Weather Analytics',
      description: 'Real-time weather analytics dashboard with interactive charts, location-based forecasts, and historical data visualization.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['Angular', 'D3.js', 'API']
    }
  ];

  const skillsData = [
    { name: 'React', level: 90, color: 'bg-blue-500' },
    { name: 'Node.js', level: 85, color: 'bg-green-500' },
    { name: 'JavaScript', level: 95, color: 'bg-yellow-500' },
    { name: 'Python', level: 80, color: 'bg-purple-500' },
    { name: 'MongoDB', level: 75, color: 'bg-red-500' },
    { name: 'AWS', level: 70, color: 'bg-indigo-500' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-secondary text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="text-center lg:text-left fade-in">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
                Full Stack Developer & 
                <span className="text-accent"> Digital Innovator</span>
              </h1>
              <p className="text-xl sm:text-2xl mb-8 text-gray-200 leading-relaxed">
                Crafting exceptional digital experiences with modern technologies and user-centered design principles.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  to="/projects" 
                  variant="primary"
                  icon={
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                  }
                >
                  View My Work
                </Button>
                <Button to="/contact" variant="outline">
                  Get In Touch
                </Button>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                  <img 
                    src="/assets/images/DSC_2487_2-1750763328346.jpg" 
                    alt="Ezekiel Wekesa Wabwoba - Professional Headshot" 
                    className="w-full h-full object-cover" 
                    loading="lazy" 
                    onError={(e) => {
                      e.target.src = 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
                    }}
                  />
                </div>
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent rounded-full opacity-80 animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-white rounded-full opacity-60 animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Summary Section */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-6">
              Passionate About Creating Digital Solutions
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
              With over 5 years of experience in full-stack development, I specialize in building scalable web applications 
              that deliver exceptional user experiences. My expertise spans modern JavaScript frameworks, cloud technologies, 
              and agile development practices.
            </p>
          </div>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">50+</div>
              <div className="text-text-secondary">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">5+</div>
              <div className="text-text-secondary">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">30+</div>
              <div className="text-text-secondary">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">15+</div>
              <div className="text-text-secondary">Technologies</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-6">
              Featured Projects
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Explore some of my recent work showcasing modern web development practices and innovative solutions.
            </p>
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {projectsData.map((project) => (
              <Card key={project.id} onClick={() => window.location.href='/projects'}>
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-medium" 
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-semibold text-primary mb-3">{project.title}</h3>
                  <p className="text-text-secondary mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-primary text-white text-sm rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center text-accent font-semibold group-hover:translate-x-2 transition-transform duration-fast">
                    View Details
                    <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          {/* View All Projects Button */}
          <div className="text-center">
            <Button 
              to="/projects"
              icon={
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              }
            >
              View All Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Overview Section */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-6">
              Core Technologies & Skills
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Proficient in modern web technologies with a focus on creating scalable, maintainable solutions.
            </p>
          </div>
          
          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
            {skillsData.map((skill, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-fast">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-primary mb-2">{skill.name}</h3>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className={`${skill.color} h-2 rounded-full`} style={{ width: `${skill.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
          
          {/* View All Skills Button */}
          <div className="text-center">
            <Button to="/skills" variant="secondary">
              View All Skills
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-xl mb-8 text-gray-200 leading-relaxed">
            Let's collaborate to bring your ideas to life with cutting-edge technology and exceptional design.
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
              Start a Conversation
            </Button>
            <Button to="/projects" variant="outline">
              Explore Portfolio
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;