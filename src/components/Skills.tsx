const Skills = () => {
  const skillCategories = [
    { title: "Languages & Frameworks", skills: ["Kotlin (coroutines)", "Java 17/21", "Spring Boot", "SQL"] },
    { title: "Distributed Systems", skills: ["Event-driven architecture", "Kafka", "Microservices & API design", "Idempotency, outbox & CDC", "Sagas, retries & backpressure"] },
    { title: "Payments & Fintech", skills: ["Transaction state machines", "Transfer & settlement logic", "Double-entry ledgers", "Double-spend protection", "Tokenised deposits, CBDC, Corda"] },
    { title: "Data", skills: ["PostgreSQL", "Data modelling", "Hibernate", "Redis", "NoSQL"] },
    { title: "Cloud & Operations", skills: ["Azure", "Docker & Kubernetes", "CI/CD & Gradle", "Prometheus & Grafana", "Distributed tracing"] },
    { title: "AI", skills: ["LLM & agent orchestration", "Structured outputs", "MCP", "RAG", "AI-assisted engineering"] }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The stack and practices I use to build correct, reliable backend systems
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-gray-600">
          <p><strong>Education:</strong> Software University (SoftUni) — Academy for Backend Engineers, 2017–2019</p>
          <p><strong>Certifications & awards:</strong> AZ-900 Microsoft Azure Fundamentals · Barclays CBDC Hackathon, 4th place (London)</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
