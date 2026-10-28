import { Server, Landmark, Bot, Activity } from 'lucide-react';
import profile from '@/assets/lazar_profile.jpg.asset.json';

const About = () => {
  const services = [
    { icon: <Server className="w-8 h-8" />, title: "Backend Engineering", description: "Kotlin & Java microservices with Spring Boot, PostgreSQL and Kafka" },
    { icon: <Landmark className="w-8 h-8" />, title: "Payments & Fintech", description: "Ledgers, settlement logic, CBDC and tokenised deposits" },
    { icon: <Bot className="w-8 h-8" />, title: "AI Integration", description: "LLM agents, structured outputs, MCP and RAG in production" },
    { icon: <Activity className="w-8 h-8" />, title: "Reliability", description: "Observability, CI/CD, Kubernetes and production support" }
  ];

  const experience = [
    { role: "Senior Software Engineer", company: "diva-e", period: "Jun 2024 – Present" },
    { role: "Software Engineer", company: "INDUSTRIA", period: "Jun 2021 – Jun 2024" },
    { role: "Junior Software Engineer", company: "INDUSTRIA", period: "Aug 2020 – Jun 2021" },
    { role: "Software Engineering Intern", company: "Sirma Solutions", period: "Sep 2019 – Feb 2020" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Backend engineer with 6+ years delivering production services on a cloud-native JVM stack
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
            <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl transform rotate-3 shadow-2xl"></div>
            <img
              src={profile.url}
              alt="Lazar Iliev"
              className="w-80 h-80 object-cover rounded-2xl shadow-2xl absolute top-0 left-1/2 transform -translate-x-1/2 -rotate-3"
            />
          </div>

          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Hello! I'm Lazar Iliev</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I'm a Senior Backend Engineer based in Sofia, Bulgaria. Most of my career has been in
              regulated fintech: I owned the transaction and ledger path for tokenised deposit and CBDC
              infrastructure for UK tier-1 banks, and built payment orchestration and distributed ledger backends.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I take ambiguous problems from refinement through design, implementation, testing, observability
              and production support — and I apply AI tooling both in the products I build and in day-to-day
              engineering. I'm happiest where correctness, reliability and the user's experience all matter.
            </p>
            <ul className="space-y-2 mb-6">
              {experience.map((e) => (
                <li key={e.role + e.company} className="flex justify-between text-sm border-b border-gray-100 pb-2">
                  <span className="text-gray-900 font-medium">{e.role} · {e.company}</span>
                  <span className="text-gray-500">{e.period}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Kotlin</span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Spring Boot</span>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Kafka</span>
              <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-medium">Payments</span>
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
