
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Lazar Iliev</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
            Senior Backend Engineer — Kotlin · Payments · Distributed Systems
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-xl">
            6+ years building reliable, production-grade backends for regulated fintech — ledgers, payments and AI-powered services
          </p>
        </div>
        
        <div className="flex space-x-6 mb-16 animate-fade-in">
          <a href="#contact" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg">
            Get In Touch
          </a>
          <a href="#projects" className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
            View My Work
          </a>
        </div>
        
        <div className="flex space-x-4 mb-16">
          <a href="https://github.com/LazarIliev" className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com/in/lazar-iliev" className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform">
            <Linkedin size={24} />
          </a>
          <a href="mailto:lazar.iliev.it@gmail.com" className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform">
            <Mail size={24} />
          </a>
        </div>
        
        <div className="absolute bottom-8 animate-bounce">
          <ChevronDown className="text-white opacity-70" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
