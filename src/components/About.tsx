
import { Code, Palette, Smartphone, Globe } from 'lucide-react';

const About = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full Stack Development",
      description: "Building robust web applications with modern technologies"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user experiences"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Development",
      description: "Responsive designs that work perfectly on all devices"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Optimization",
      description: "Performance optimization and SEO best practices"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I'm a passionate developer with 5+ years of experience creating digital solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl transform rotate-3 shadow-2xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" 
                alt="Alex Johnson" 
                className="w-80 h-80 object-cover rounded-2xl shadow-2xl absolute top-0 left-1/2 transform -translate-x-1/2 -rotate-3"
              />
            </div>
          </div>
          
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Hello! I'm Alex Johnson</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I'm a Full Stack Developer based in San Francisco, passionate about creating 
              exceptional digital experiences. With expertise in modern web technologies, 
              I help businesses and individuals bring their ideas to life through clean, 
              efficient code and beautiful design.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing 
              to open source projects, or enjoying the great outdoors with my camera.
            </p>
            
            <div className="flex space-x-4">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">React</span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Node.js</span>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">TypeScript</span>
              <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-medium">Design</span>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow duration-300 group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h4>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
