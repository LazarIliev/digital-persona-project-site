
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Lazar Iliev</h3>
            <p className="text-gray-400 leading-relaxed">
              Senior Backend Engineer building correct, reliable systems for fintech 
              with Kotlin, Spring Boot and Kafka.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">About</a></li>
              <li><a href="#skills" className="text-gray-400 hover:text-white transition-colors duration-300">Skills</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors duration-300">Projects</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/LazarIliev" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-300"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/lazar-iliev" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:lazar.iliev.it@gmail.com" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center space-x-2">
            <span>© 2026 Lazar Iliev. Made with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>and lots of coffee</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
