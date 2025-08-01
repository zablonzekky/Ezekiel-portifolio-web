import React from 'react';
import Button from '../components/UI/Button';
import Card from '../components/UI/Card';

const SkillsPage = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
      ),
      color: 'from-blue-500 to-blue-600',
      skills: [
        { name: 'React', level: 95, description: 'Building complex UIs with hooks, context, and modern patterns' },
        { name: 'Vue.js', level: 90, description: 'Creating reactive applications with Vuex and Vue Router' },
        { name: 'Angular', level: 85, description: 'Developing enterprise applications with TypeScript' },
        { name: 'JavaScript (ES6+)', level: 95, description: 'Modern JavaScript with async/await, modules, and more' },
        { name: 'TypeScript', level: 88, description: 'Type-safe development with advanced TypeScript features' },
        { name: 'HTML5 & CSS3', level: 95, description: 'Semantic markup and modern CSS including Grid and Flexbox' },
        { name: 'Tailwind CSS', level: 92, description: 'Utility-first CSS framework for rapid UI development' },
        { name: 'Sass/SCSS', level: 85, description: 'CSS preprocessing with variables, mixins, and functions' }
      ]
    },
    {
      title: 'Backend Development',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"/>
        </svg>
      ),
      color: 'from-green-500 to-green-600',
      skills: [
        { name: 'Node.js', level: 92, description: 'Server-side JavaScript with Express.js and ecosystem' },
        { name: 'Python', level: 88, description: 'Django, Flask, and FastAPI for web development' },
        { name: 'PHP', level: 80, description: 'Laravel and modern PHP development practices' },
        { name: 'REST APIs', level: 95, description: 'Designing and implementing RESTful web services' },
        { name: 'GraphQL', level: 82, description: 'Query language and runtime for APIs' },
        { name: 'Microservices', level: 85, description: 'Distributed system architecture and implementation' },
        { name: 'Authentication', level: 90, description: 'JWT, OAuth, and security best practices' },
        { name: 'API Design', level: 92, description: 'Designing scalable and maintainable APIs' }
      ]
    },
    {
      title: 'Database & Storage',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"/>
        </svg>
      ),
      color: 'from-purple-500 to-purple-600',
      skills: [
        { name: 'MongoDB', level: 90, description: 'NoSQL database design and optimization' },
        { name: 'PostgreSQL', level: 88, description: 'Advanced SQL queries and database design' },
        { name: 'MySQL', level: 85, description: 'Relational database management and optimization' },
        { name: 'Redis', level: 82, description: 'In-memory caching and session storage' },
        { name: 'Firebase', level: 85, description: 'Real-time database and authentication' },
        { name: 'Supabase', level: 80, description: 'Open-source Firebase alternative' },
        { name: 'Database Design', level: 90, description: 'Normalization, indexing, and performance tuning' },
        { name: 'Data Modeling', level: 87, description: 'Entity relationships and schema design' }
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/>
        </svg>
      ),
      color: 'from-orange-500 to-orange-600',
      skills: [
        { name: 'AWS', level: 85, description: 'EC2, S3, Lambda, RDS, and other AWS services' },
        { name: 'Docker', level: 88, description: 'Containerization and orchestration' },
        { name: 'Kubernetes', level: 75, description: 'Container orchestration and management' },
        { name: 'CI/CD', level: 87, description: 'Automated testing and deployment pipelines' },
        { name: 'GitHub Actions', level: 85, description: 'Workflow automation and deployment' },
        { name: 'Netlify/Vercel', level: 90, description: 'Frontend deployment and hosting' },
        { name: 'Linux/Unix', level: 82, description: 'Server administration and command line' },
        { name: 'Monitoring', level: 80, description: 'Application monitoring and logging' }
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
      ),
      color: 'from-red-500 to-red-600',
      skills: [
        { name: 'Git & GitHub', level: 95, description: 'Version control and collaborative development' },
        { name: 'VS Code', level: 92, description: 'IDE customization and productivity extensions' },
        { name: 'Webpack', level: 80, description: 'Module bundling and build optimization' },
        { name: 'Vite', level: 85, description: 'Fast build tool and development server' },
        { name: 'Jest/Testing', level: 82, description: 'Unit testing and test-driven development' },
        { name: 'Figma', level: 75, description: 'UI/UX design and prototyping' },
        { name: 'Postman', level: 88, description: 'API testing and documentation' },
        { name: 'Chrome DevTools', level: 90, description: 'Debugging and performance optimization' }
      ]
    },
    {
      title: 'Soft Skills',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
        </svg>
      ),
      color: 'from-indigo-500 to-indigo-600',
      skills: [
        { name: 'Problem Solving', level: 95, description: 'Analytical thinking and creative solutions' },
        { name: 'Team Leadership', level: 88, description: 'Leading development teams and mentoring' },
        { name: 'Communication', level: 90, description: 'Technical writing and stakeholder communication' },
        { name: 'Project Management', level: 85, description: 'Agile methodologies and timeline management' },
        { name: 'Code Review', level: 92, description: 'Quality assurance and knowledge sharing' },
        { name: 'Mentoring', level: 87, description: 'Teaching and developing junior developers' },
        { name: 'Adaptability', level: 93, description: 'Learning new technologies and adapting to change' },
        { name: 'Client Relations', level: 82, description: 'Requirements gathering and client communication' }
      ]
    }
  ];

  const certifications = [
    {
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      year: '2023',
      icon: '☁️'
    },
    {
      title: 'Google Cloud Professional Developer',
      issuer: 'Google Cloud Platform',
      year: '2022',
      icon: '🚀'
    },
    {
      title: 'Certified Kubernetes Administrator',
      issuer: 'Cloud Native Computing Foundation',
      year: '2022',
      icon: '⚙️'
    },
    {
      title: 'MongoDB Certified Developer',
      issuer: 'MongoDB University',
      year: '2021',
      icon: '🍃'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
            Skills & <span className="text-accent">Expertise</span>
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-gray-200 leading-relaxed max-w-3xl mx-auto">
            A comprehensive overview of my technical skills, tools, and technologies 
            I use to create exceptional digital experiences.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">50+</div>
              <div className="text-gray-200 text-sm">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">5+</div>
              <div className="text-gray-200 text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">100+</div>
              <div className="text-gray-200 text-sm">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">15+</div>
              <div className="text-gray-200 text-sm">Certifications</div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Categories */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16 last:mb-0">
              <div className="text-center mb-12">
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  {category.icon}
                </div>
                <h2 className="text-3xl font-heading font-bold text-primary mb-4">
                  {category.title}
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <Card key={skillIndex} className="p-6 hover:scale-105 transition-transform duration-fast">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-primary">{skill.name}</h3>
                      <span className="text-accent font-bold text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                      <div 
                        className={`bg-gradient-to-r ${category.color} h-2 rounded-full transition-all duration-slow`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {skill.description}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-6">
              Certifications & Achievements
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Professional certifications that validate my expertise and commitment to continuous learning.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="p-6 text-center hover:scale-105 transition-transform duration-fast">
                <div className="text-4xl mb-4">{cert.icon}</div>
                <h3 className="font-semibold text-primary mb-2">{cert.title}</h3>
                <p className="text-text-secondary text-sm mb-1">{cert.issuer}</p>
                <p className="text-accent font-semibold text-sm">{cert.year}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Philosophy Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-6">
            My Technical Philosophy
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:scale-105 transition-transform duration-fast">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold text-primary mb-3">Clean Code</h3>
              <p className="text-text-secondary">
                Writing maintainable, readable code that follows best practices and industry standards.
              </p>
            </Card>

            <Card className="p-6 text-center hover:scale-105 transition-transform duration-fast">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold text-primary mb-3">Performance</h3>
              <p className="text-text-secondary">
                Optimizing applications for speed, efficiency, and scalability to deliver exceptional user experiences.
              </p>
            </Card>

            <Card className="p-6 text-center hover:scale-105 transition-transform duration-fast">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold text-primary mb-3">Continuous Learning</h3>
              <p className="text-text-secondary">
                Staying updated with the latest technologies and continuously improving skills and knowledge.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl mb-8 text-gray-200 leading-relaxed">
            Let's leverage these skills to create innovative solutions for your next project. 
            I'm always excited to take on new challenges and deliver exceptional results.
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
              Let's Collaborate
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

export default SkillsPage;