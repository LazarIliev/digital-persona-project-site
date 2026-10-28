import { Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "UK Regulated Liability Network",
      description: "Tokenised deposit and CBDC transaction modules in Kotlin for a UK Finance-led initiative with Barclays, HSBC, Lloyds, NatWest and others. Owned the transfer and settlement lifecycle with double-spend protection, atomic commits and an auditable history.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
      technologies: ["Kotlin", "Corda", "Spring Boot", "REST"],
    },
    {
      title: "Agentic LLM Decision Service",
      description: "A Kotlin service integrating LLMs into an automated decision path — strict JSON Schema validation, multi-provider fallback, and timeout and cost budgets so failures surface loudly.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      technologies: ["Kotlin", "LLMs", "Azure", "CI/CD"],
    },
    {
      title: "AI Structured Output Library",
      description: "Provider-agnostic library for dynamic, schema-driven structured output with strict JSON Schema, reconciling OpenAI and Anthropic rules, with validation, targeted retries and graceful fallback.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
      technologies: ["Kotlin", "Spring Boot", "Spring AI"],
      githubUrl: "https://github.com/LazarIliev/AI-structure-output-strict-response"
    },
    {
      title: "Loan Insurance Digitisation",
      description: "Backend modules for a tier-1 Netherlands bank. Commitments on a shared ledger, payloads off-ledger — meeting both immutable audit and GDPR erasure requirements.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
      technologies: ["Kotlin", "Distributed Ledger", "PostgreSQL", "GDPR"],
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Featured Work</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Highlights from fintech, payments and AI engineering
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">{tech}</span>
                  ))}
                </div>
                {project.githubUrl && (
                  <a href={project.githubUrl} className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors duration-300">
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
