import React, { useState } from 'react';
import Button from '../components/UI/Button';
import Card from '../components/UI/Card';
import Modal from '../components/UI/Modal';

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');

  const projectsData = [
    {
      id: 1,
      title: 'E-commerce Platform',
      category: 'fullstack',
      description: 'A comprehensive e-commerce solution built with PHP,  and vanilla javascript eaturing user authentication, payment processing, inventory management, and an admin dashboard.',
      detailedDescription: 'This full-stack e-commerce platform was built to handle high-traffic scenarios with a focus on performance and user experience.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      technologies: ['PHP', 'Vanilla js', 'MSQL', ],
      github: 'https://github.com/zablonzekky/Ecommerce-website',
        features: [
        'User authentication and authorization',
        'Product catalog with search and filtering',
        'Shopping cart and checkout process',
        'Order tracking and history',
        'Admin dashboard for inventory management'
      ]
    },
    {
      id: 2,
      title: 'Task Management App',
      category: 'Fullstack',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      detailedDescription: 'This task management application focuses on team collaboration and productivity. Built with React.js and python fast api, it offers real-time synchronization across all connected devices. The interface features an intuitive drag-and-drop system for task organization, and comprehensive project tracking.',
      image: 'https://images.pixabay.com/photo/2016/11/30/20/58/programming-1873854_1280.png',
      technologies: ['Vue.js', 'Firebase', 'Tailwind CSS', 'Vuex'],
      github: 'https://github.com/zablonzekky/task-management-app',
      features: [
        'Real-time collaboration',
        'Drag-and-drop task organization',
        'Project and team management',
        'Progress tracking and analytics',
        'Mobile-responsive design'
      ]
    },
    {
      id: 3,
      title: 'Weather Analytics Dashboard',
      category: 'frontend',
      description: 'Real-time weather analytics dashboard with interactive charts, location-based forecasts, and historical data visualization.',
      detailedDescription: 'A comprehensive weather analytics platform that aggregates data from multiple weather APIs to provide detailed insights and forecasts. The dashboard features interactive charts built with React.js, real-time weather updates, and historical data analysis for weather patterns.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['React', 'vanilla.js', '', 'Weather API'],
      github: 'https://github.com/zablonzekky/Sentiment-analysis-software',
      features: [
        'Real-time weather data',
        'Interactive data visualizations',
        'Location-based forecasts',
        'Weather alerts and notifications',
      ]
    },
    {
      id: 4,
      title: 'Restaurant Management System',
      category: 'fullstack',
      description: 'Complete restaurant management system with table booking, menu management, order processing, and inventory tracking.',
      detailedDescription: 'A comprehensive restaurant management solution that streamlines operations from customer booking to kitchen management. The system includes a customer-facing web app for reservations and orders, a kitchen display system, and an admin panel for complete restaurant operations management.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      technologies: ['PHP', 'codeigniter framework', 'MYSQL',],
      github: 'https://github.com/zablonzekky/Fedoproject',
      features: [
        'Booking reservation system',
        'Digital menu management',
        'Order processing and tracking',
        'Inventory management',
        'Hotel location scheduling',
        'Sales analytics and reporting'
      ]
    },
    {
      id: 5,
      title: 'Sentiment analysis system',
      category: 'Backend',
      description: 'Backend API for a social media analytics platform with real-time data processing and comprehensive reporting.',
      detailedDescription: 'A robust backend system designed to handle social media data aggregation and analysis. The API processes millions of social media posts daily, provides real-time analytics, and offers comprehensive reporting tools for social media managers and marketers categorizing sentiments into Positive,Negative and Neutral.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=2939&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      technologies: ['Python', 'Flask',  ' Machine Learning model','PostgreSQL'],
      github: 'https://github.com/zablonzekky/Sentiment-analysis-web-app',
      features: [
        'Real-time data processing',
        'Social media API integrations',
        'Analytics and reporting',
        'User authentication and permissions',
        'Rate limiting and caching',
        'Sentiment categorisation'
      ]
    },
    {
      id: 6,
      title: 'Learning Management System',
      category: 'fullstack',
      description: 'Educational platform with course management, student progress tracking, and interactive learning modules.',
      detailedDescription: 'A complete learning management system designed for educational institutions and online course providers. The platform supports multimedia content delivery, student assessment tools, progress tracking, and comprehensive course management capabilities.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      technologies: ['Next.js', 'Node.js', 'MongoDB', 'Socket.io', 'AWS S3'],
      github: 'https://github.com/zablonzekky/Elite-Writing',
      features: [
        'Course creation and management',
        'Student enrollment and progress tracking',
        'Interactive quizzes and assignments',
        'Video streaming and file sharing',
        'Discussion forums and messaging',
        'Gradebook and reporting'
      ]
    }
  ];

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'fullstack', label: 'Full Stack' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' }
  ];

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
            My <span className="text-accent">Projects</span>
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-gray-200 leading-relaxed max-w-3xl mx-auto">
            Explore a collection of projects showcasing modern web development practices, 
            innovative solutions, and cutting-edge technologies.
          </p>
          <div className="flex justify-center">
            <Button 
              to="/contact" 
              variant="primary"
              icon={
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                </svg>
              }
            >
              Let's Work Together
            </Button>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-surface border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setFilter(category.key)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-fast ${
                  filter === category.key
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-text-secondary hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card 
                key={project.id} 
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer"
              >
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
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-heading font-semibold text-primary">{project.title}</h3>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      project.category === 'fullstack' ? 'bg-accent text-white' :
                      project.category === 'frontend' ? 'bg-primary text-white' :
                      'bg-secondary text-white'
                    }`}>
                      {project.category}
                    </span>
                  </div>
                  <p className="text-text-secondary mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-100 text-text-secondary text-sm rounded-full">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-gray-100 text-text-secondary text-sm rounded-full">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
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
        </div>
      </section>

      {/* Project Details Modal */}
      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title || ''}
        size="lg"
      >
        {selectedProject && (
          <div className="space-y-6">
            <div className="aspect-video overflow-hidden rounded-lg">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                className="w-full h-full object-cover" 
                onError={(e) => {
                  e.target.src = 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
                }}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <span className={`px-3 py-1 text-sm rounded-full ${
                selectedProject.category === 'fullstack' ? 'bg-accent text-white' :
                selectedProject.category === 'frontend' ? 'bg-primary text-white' :
                'bg-secondary text-white'
              }`}>
                {selectedProject.category}
              </span>
              <div className="flex gap-3">
                <Button 
                  href={selectedProject.github}
                  variant="secondary"
                  size="sm"
                  icon={
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  }
                >
                  GitHub
                </Button>
                {/* <Button 
                  href={selectedProject.live}
                  variant="primary"
                  size="sm"
                  icon={
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                    </svg>
                  }
                >
                  Live Demo
                </Button> */}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-primary mb-3">Description</h4>
              <p className="text-text-secondary leading-relaxed">
                {selectedProject.detailedDescription}
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-primary mb-3">Key Features</h4>
              <ul className="space-y-2">
                {selectedProject.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    <span className="text-text-secondary">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-primary mb-3">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-primary text-white text-sm rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </Modal>

      {/* Call to Action Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">
            Have a Project in Mind?
          </h2>
          <p className="text-xl mb-8 text-gray-200 leading-relaxed">
            I'm always excited to work on new challenges and bring innovative ideas to life. 
            Let's discuss your project requirements.
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
              Start a Project
            </Button>
            <Button to="/skills" variant="outline">
              View My Skills
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;