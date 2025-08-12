import React, { useEffect } from 'react';
import Button from '../components/UI/Button';
import Card from '../components/UI/Card';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import heroImage from '../assets/images/banner.png'; // Local image

const HomePage = () => {
  useEffect(() => {
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

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const projectsData = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB']
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=2940&auto=format&fit=crop',
      technologies: ['Vue.js', 'Firebase', 'Tailwind']
    },
    {
      id: 3,
      title: 'Weather Analytics',
      description: 'Real-time weather analytics dashboard with interactive charts, location-based forecasts, and historical data visualization.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg',
      technologies: ['Angular', 'D3.js', 'API']
    }
  ];

  const skillsData = [
    { name: 'React', level: 95, color: 'bg-blue-500' },
    { name: 'Node.js', level: 92, color: 'bg-green-500' },
    { name: 'JavaScript', level: 95, color: 'bg-yellow-500' },
    { name: 'Python', level: 88, color: 'bg-purple-500' },
    { name: 'MongoDB', level: 90, color: 'bg-red-500' },
    { name: 'AWS', level: 85, color: 'bg-indigo-500' }
  ];

  return (
    <div>
      {/* Static Single Image Carousel */}
      <section className="w-full">
        <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay interval={5000}>
          <div>
            <img src={heroImage} alt="Hero" className="object-cover w-full h-[500px]" />
          </div>
        </Carousel>
      </section>

      {/* Professional Summary Section */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-6">
            Passionate About Creating Digital Solutions
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            With over 3 years of experience in full-stack development, I specialize in building scalable web applications 
            that deliver exceptional user experiences.
          </p>
        </div>
      </section>

      {/* Featured Projects */}
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {projectsData.map((project) => (
              <Card key={project.id}>
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" 
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-3">{project.title}</h3>
                  <p className="text-text-secondary mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-primary text-white text-sm rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button to="/projects">View All Projects</Button>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-6">
            Core Technologies & Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {skillsData.map((skill, index) => (
              <div key={index}>
                <h3 className="font-semibold text-primary mb-2">{skill.name}</h3>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className={`${skill.color} h-2 rounded-full`} style={{ width: `${skill.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-primary to-secondary text-white text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Start Your Next Project?</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button to="/contact" variant="primary">Start a Conversation</Button>
          <Button to="/projects" variant="outline">Explore Portfolio</Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
