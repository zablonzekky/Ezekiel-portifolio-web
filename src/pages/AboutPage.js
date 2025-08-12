import React, { useState, useEffect } from "react";
import Button from "../components/UI/Button";
import Card from "../components/UI/Card";

const AboutPage = () => {
  const [expandedExperience, setExpandedExperience] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-in").forEach((el) =>
      observer.observe(el)
    );
    return () => observer.disconnect();
  }, []);

  const toggleExperience = (id) => {
    setExpandedExperience(expandedExperience === id ? null : id);
  };

  const experienceData = [
    {
      id: 1,
      title: "Software Engineer",
      company: "Emobili Technology Institute",
      period: "2023 - 2024",
      logo: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg",
      description:
        "Led development of enterprise-scale apps using React, Node.js, and AWS.",
      achievements: [
        "Managed 5 devs for a customer platform serving 10k+ users",
        "Built CI/CD pipelines cutting deployment time by 60%",
        "Architected microservices improving scalability by 300%",
        "Set coding standards across the org",
      ],
      technologies: ["React", "Node.js", "AWS", "Docker"],
    },
    {
      id: 2,
      title: "Service Desk Engineer",
      company: "Safaricom Plc Kenya",
      period: "2024",
      logo: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg",
      description:
        "Maintained and optimized web applications for fintech solutions.",
      achievements: [
        "Built payment system processing $2M+/month",
        "Developed responsive apps in Vue.js & Express.js",
        "Collaborated with design team for pixel-perfect UI",
        "Improved load times by 40%",
      ],
      technologies: ["React.js", "Express.js", "MongoDB", "Django"],
    },
    {
      id: 3,
      title: "Junior Developer",
      company: "SANET Computing",
      period: "2020 - 2021",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43",
      description:
        "Built websites and learned modern development workflows.",
      achievements: [
        "Delivered 15+ client sites with HTML, CSS, JS",
        "Learned React and Angular basics",
        "Worked with senior devs on large projects",
        "Gained Git & agile skills",
      ],
      technologies: ["HTML/CSS", "JavaScript", "WordPress", "Git"],
    },
  ];

  const interestsData = [
    {
      title: "Innovation & Research",
      description: "Passionate about AI, blockchain, and IoT.",
      color: "from-blue-500 to-blue-700",
    },
    {
      title: "Open Source",
      description: "Active contributor to open source projects.",
      color: "from-purple-500 to-purple-700",
    },
    {
      title: "Photography",
      description: "Love capturing moments creatively.",
      color: "from-green-500 to-green-700",
    },
    {
      title: "Mentoring",
      description: "Guide and mentor aspiring developers.",
      color: "from-orange-500 to-orange-700",
    },
    {
      title: "Gaming",
      description: "Enjoy strategic games and puzzles.",
      color: "from-red-500 to-red-700",
    },
    {
      title: "Travel",
      description: "Exploring cultures sparks creativity.",
      color: "from-teal-500 to-teal-700",
    },
  ];

  return (
    <div className="bg-white">
      {/* HERO */}
      <section
        className="relative min-h-[70vh] flex items-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#001f3f]/90 to-[#001f3f]/95"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center text-white">
          {/* Left Column */}
          <div className="fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About{" "}
              <span className="text-accent">Ezekiel Wekesa Wabwoba</span>
            </h1>
            <p className="text-lg mb-4">
              Passionate Full Stack Developer with 5+ years of crafting scalable
              digital solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <span>📍 Nairobi, Kenya</span>
              <span>📧 ewwabwoba@gmail.com</span>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-72 md:w-80 lg:w-96 aspect-square rounded-2xl overflow-hidden border-8 border-white shadow-2xl">
              <img
                src="/assets/images/DSC_2487_2-1750763328346.jpg"
                alt="Ezekiel Portrait"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SUMMARY */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Professional Summary
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I’m a passionate Full Stack Developer with 3+ years of experience
            building scalable apps...
          </p>
        </div>
      </section>

      {/* CAREER */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-8">
            Career Journey
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {experienceData.map((exp) => (
              <Card
                key={exp.id}
                onClick={() => toggleExperience(exp.id)}
                className="p-4 hover:shadow-lg transition"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={exp.logo}
                    className="w-12 h-12 rounded-lg"
                    alt={`${exp.company} logo`}
                    loading="lazy"
                  />
                  <div>
                    <h3 className="font-bold text-primary">{exp.title}</h3>
                    <p className="text-accent">{exp.company}</p>
                    <p className="text-xs text-gray-500">{exp.period}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">{exp.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* INTERESTS */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-8">
            Beyond the Code
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {interestsData.map((item, idx) => (
              <Card
                key={idx}
                className="p-4 text-center hover:shadow-md transition"
              >
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white`}
                >
                  {item.title.charAt(0)}
                </div>
                <h3 className="font-semibold text-primary">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
