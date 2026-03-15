/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Database, 
  Cpu, 
  Layers, 
  Cloud, 
  LineChart, 
  Shield, 
  ExternalLink, 
  Linkedin, 
  Mail, 
  ChevronRight,
  Code2,
  BrainCircuit,
  Workflow,
  Server
} from 'lucide-react';

// --- Components ---

const LogoIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <div className={`relative flex flex-col items-center justify-center ${className}`}>
    <div className="w-full h-1/4 bg-savant-pink rounded-sm transform -skew-x-12 -translate-y-1.5 z-40 shadow-sm"></div>
    <div className="w-full h-1/4 bg-savant-orange rounded-sm transform -skew-x-12 -translate-y-0.5 z-30 shadow-sm"></div>
    <div className="w-full h-1/4 bg-savant-blue rounded-sm transform -skew-x-12 translate-y-0.5 z-20 shadow-sm"></div>
    <div className="w-full h-1/4 bg-savant-cyan rounded-sm transform -skew-x-12 translate-y-1.5 z-10 shadow-sm"></div>
  </div>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass py-3 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <LogoIcon className="w-8 h-8" />
          <span className="font-bold text-xl tracking-tight text-slate-900">i-savant</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#skills" className="hover:text-savant-blue transition-colors">Skills & Services</a>
          <a href="#stack" className="hover:text-savant-blue transition-colors">Tech Stack</a>
          <a href="#about" className="hover:text-savant-blue transition-colors">About</a>
          <a href="https://www.linkedin.com/in/tt1309" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-savant-blue hover:opacity-80 transition-opacity">
            LinkedIn <ExternalLink size={14} />
          </a>
          <a href="#contact" className="bg-slate-900 text-white px-5 py-2 rounded-full hover:bg-slate-800 transition-all shadow-lg shadow-slate-200">
            Get in Touch
          </a>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => (
  <section className="relative pt-32 pb-20 overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30">
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-savant-blue/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-savant-pink/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </div>
    
    <div className="max-w-7xl mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-savant-blue text-xs font-bold uppercase tracking-wider mb-6 border border-blue-100">
          Independent Data & AI Architect
        </span>
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 leading-[1.1] tracking-tight">
          Architecting Intelligent <br />
          <span className="text-gradient">Data Ecosystems</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-slate-600 mb-10 leading-relaxed">
          Empowering organizations with scalable data infrastructure, advanced AI integration, 
          and strategic technical leadership. From vision to production-ready systems.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#skills" className="w-full sm:w-auto bg-slate-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-xl shadow-slate-200">
            Explore Skills & Services <ChevronRight size={18} />
          </a>
          <a href="https://www.linkedin.com/in/tt1309" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-xl font-semibold hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
            View LinkedIn Profile
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

const Partnerships = () => {
  const partners = [
    { name: "Microsoft", role: "Partner" },
    { name: "Google", role: "Cloud Partner" },
    { name: "dbt Labs", role: "Service Partner" },
    { name: "dltHub", role: "Affiliate" },
  ];

  return (
    <div className="bg-white border-y border-slate-100 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-10">
          Strategic Partnerships & Ecosystem Expertise
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 md:gap-x-24">
          {partners.map((partner, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col items-center gap-1"
            >
              <span className="text-xl md:text-2xl font-bold text-slate-300 group-hover:text-slate-900 transition-colors duration-300 tracking-tight">
                {partner.name}
              </span>
              <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {partner.role}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const SkillsAndServices = () => {
  const [selectedSkill, setSelectedSkill] = useState<number | null>(null);

  const skills = [
    {
      id: 1,
      title: "Data Architecture",
      icon: Database,
      color: "bg-savant-blue",
      shortDesc: "Designing scalable, future-proof data foundations.",
      longDesc: "We architect next-generation data ecosystems that unify intelligence and infrastructure. Our approach leverages cloud-native paradigms and decentralized governance to transform complex data landscapes into agile, high-performance assets for the AI-first enterprise.",
      services: ["Lakehouse Design (Databricks/BigQuery)", "Data Mesh Strategy", "Medallion Architecture Implementation", "Enterprise Data Modeling"],
      application: "We apply this by assessing current bottlenecks and designing a target state that supports both BI and AI workloads seamlessly."
    },
    {
      id: 2,
      title: "Agentic AI & Orchestration",
      icon: BrainCircuit,
      color: "bg-savant-pink",
      shortDesc: "Building autonomous agents and complex AI workflows.",
      longDesc: "We specialize in the next generation of AI: Agentic systems. This involves moving beyond simple chat interfaces to autonomous agents that can reason, use tools, and collaborate to solve complex multi-step problems.",
      services: ["Agentic Architecture & Orchestration", "Tool Design & MCP Integration", "Advanced Prompt Engineering", "Dynamic Context Management"],
      application: "We implement robust orchestration layers that allow AI agents to interact with external systems securely and reliably while maintaining long-term context."
    },
    {
      id: 3,
      title: "Cloud Computing",
      icon: Cloud,
      color: "bg-savant-cyan",
      shortDesc: "Leveraging the power of distributed infrastructure.",
      longDesc: "Cloud-native is the default. We help organizations navigate the complexities of Azure and GCP, ensuring their infrastructure is secure, scalable, and cost-effective.",
      services: ["Cloud Migration Strategy", "Infrastructure as Code (Terraform/Pulumi)", "Serverless & Containerized Apps", "Cloud Cost Optimization"],
      application: "We use cloud-native services to build highly available systems that scale automatically with demand, reducing operational overhead."
    },
    {
      id: 4,
      title: "Data Engineering",
      icon: Workflow,
      color: "bg-savant-orange",
      shortDesc: "The plumbing that powers data-driven decisions.",
      longDesc: "Data is only useful if it's clean, timely, and accessible. We build robust pipelines that handle massive volumes of data with high reliability and observability.",
      services: ["ETL/ELT Orchestration (Airflow/dbt)", "Real-time Streaming (Kafka/Flink)", "Data Quality & Observability", "Schema Evolution Management"],
      application: "We implement automated testing and monitoring within pipelines to ensure that downstream consumers always have high-fidelity data."
    },
    {
      id: 5,
      title: "Consulting",
      icon: Shield,
      color: "bg-slate-700",
      shortDesc: "Strategic guidance for the data-driven enterprise.",
      longDesc: "Technology is only half the battle. We provide the strategic oversight needed to align technical initiatives with business goals and organizational structure.",
      services: ["Data Strategy Roadmaps", "Technical Due Diligence", "Team Mentorship & Upskilling", "Vendor Selection & Evaluation"],
      application: "We work closely with stakeholders to define clear KPIs and ensure that every technical investment has a measurable impact on the bottom line."
    }
  ];

  return (
    <section id="skills" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-50 to-transparent -z-10 opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Skills & Services</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              An interactive look at my core competencies and the specialized services I offer to help your business thrive in the data age.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Skills Matrix */}
          <div className="lg:col-span-5 space-y-4">
            {skills.map((skill, idx) => (
              <motion.button
                key={skill.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => setSelectedSkill(skill.id)}
                className={`w-full text-left p-6 rounded-2xl transition-all duration-300 border ${
                  selectedSkill === skill.id 
                    ? 'bg-white shadow-xl border-savant-blue ring-1 ring-savant-blue/20' 
                    : 'bg-white/50 border-slate-100 hover:bg-white hover:shadow-md'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${skill.color}`}>
                    <skill.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{skill.title}</h3>
                    <p className="text-sm text-slate-500 line-clamp-1">{skill.shortDesc}</p>
                  </div>
                  <ChevronRight 
                    size={20} 
                    className={`ml-auto transition-transform duration-300 ${selectedSkill === skill.id ? 'rotate-90 text-savant-blue' : 'text-slate-300'}`} 
                  />
                </div>
              </motion.button>
            ))}
          </div>

          {/* Details Panel */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {selectedSkill ? (
                <motion.div
                  key={selectedSkill}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border border-slate-100 h-full"
                >
                  {(() => {
                    const skill = skills.find(s => s.id === selectedSkill)!;
                    return (
                      <div className="space-y-8">
                        <div className="flex items-center gap-4">
                          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${skill.color}`}>
                            <skill.icon className="text-white" size={32} />
                          </div>
                          <div>
                            <h3 className="text-3xl font-bold text-slate-900">{skill.title}</h3>
                            <p className="text-savant-blue font-medium">Core Competency</p>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400">The Approach</h4>
                          <p className="text-slate-600 leading-relaxed text-lg">
                            {skill.longDesc}
                          </p>
                          <div className="p-4 bg-slate-50 rounded-xl border-l-4 border-savant-blue italic text-slate-700 text-sm">
                            {skill.application}
                          </div>
                        </div>

                        <div className="space-y-4">
                          <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400">Services Offered</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {skill.services.map((service, i) => (
                              <div key={i} className="flex items-center gap-3 p-3 bg-white border border-slate-100 rounded-xl shadow-sm">
                                <div className="w-2 h-2 rounded-full bg-savant-cyan"></div>
                                <span className="text-sm font-medium text-slate-700">{service}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <button 
                          onClick={() => window.location.href = '#contact'}
                          className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg shadow-slate-200"
                        >
                          Discuss a {skill.title} Project
                        </button>
                      </div>
                    );
                  })()}
                </motion.div>
              ) : (
                <div className="bg-slate-100/50 border-2 border-dashed border-slate-200 rounded-3xl h-full flex flex-col items-center justify-center p-12 text-center">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm mb-6">
                    <Layers className="text-slate-300" size={40} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-400 mb-2">Select a Competency</h3>
                  <p className="text-slate-400 max-w-xs">
                    Click on a skill from the list to explore my approach and specific service offerings.
                  </p>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

const TechStack = () => {
  const stacks = [
    { category: "Cloud & Infra", items: ["Azure", "GCP", "Terraform"] },
    { category: "Data Platforms", items: ["BigQuery", "Databricks", "MongoDB"] },
    { category: "Processing", items: ["Apache Spark", "Kafka", "dbt", "Airflow"] },
    { category: "Agentic AI", items: ["Gemini", "OpenAI", "Anthropic", "MCP"] },
    { category: "Languages", items: ["Python", "Scala", "SQL", "TypeScript"] },
  ];

  return (
    <section id="stack" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="md:w-1/3">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Technical Arsenal</h2>
            <p className="text-slate-600 mb-8">
              Leveraging a modern, battle-tested tech stack to build resilient and intelligent systems.
            </p>
            <div className="p-6 rounded-2xl bg-slate-900 text-white">
              <div className="flex items-center gap-3 mb-4">
                <Code2 className="text-savant-cyan" />
                <span className="font-bold">Always Evolving</span>
              </div>
              <p className="text-sm text-slate-400">
                Staying at the forefront of AI and data innovation to provide cutting-edge solutions for complex challenges.
              </p>
            </div>
          </div>
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {stacks.map((stack, i) => (
              <div key={i} className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">{stack.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {stack.items.map((item, j) => (
                    <span key={j} className="px-3 py-1 bg-slate-50 border border-slate-100 rounded-lg text-sm font-medium text-slate-700">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => (
  <section id="about" className="py-24 bg-slate-50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="aspect-square rounded-3xl overflow-hidden bg-slate-200 shadow-2xl">
            <img 
              src="https://picsum.photos/seed/architect/800/800" 
              alt="Data Architect at work" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl shadow-xl max-w-[200px]">
            <p className="text-xs font-bold text-savant-blue uppercase mb-2">Independent</p>
            <p className="text-sm font-medium text-slate-800 italic">"Turning complex data challenges into elegant, scalable solutions."</p>
          </div>
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">The i-savant Approach</h2>
          <div className="space-y-6 text-slate-600 leading-relaxed">
            <p>
              As an independent architect, I provide unbiased, high-impact technical leadership. 
              I don't just build systems; I design ecosystems that grow with your business.
            </p>
            <p>
              With years of experience across diverse industries, I bring a unique perspective 
              to every project, combining deep technical expertise with strategic business insight.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div>
                <p className="text-3xl font-bold text-slate-900">20+</p>
                <p className="text-xs uppercase tracking-wider font-bold text-slate-400">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-slate-900">50+</p>
                <p className="text-xs uppercase tracking-wider font-bold text-slate-400">Projects Delivered</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-24 bg-white">
    <div className="max-w-3xl mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Ready to build something extraordinary?</h2>
      <p className="text-slate-600 mb-10">
        Whether you're looking for a strategic roadmap or a hands-on technical lead for your next AI initiative, 
        I'm here to help.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
        <a href="mailto:tuan@i-savant.com" className="flex items-center gap-3 text-lg font-bold text-slate-900 hover:text-savant-blue transition-colors">
          <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center">
            <Mail size={20} />
          </div>
          tuan@i-savant.com
        </a>
        <a href="https://www.linkedin.com/in/tt1309" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-lg font-bold text-slate-900 hover:text-savant-blue transition-colors">
          <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center">
            <Linkedin size={20} />
          </div>
          LinkedIn Profile
        </a>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 border-t border-slate-100 bg-slate-50">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-3">
        <LogoIcon className="w-6 h-6" />
        <span className="font-bold text-lg text-slate-900">i-savant</span>
      </div>
      <p className="text-sm text-slate-500">
        &copy; {new Date().getFullYear()} i-savant. All rights reserved.
      </p>
      <div className="flex items-center gap-6 text-slate-400">
        <a href="https://www.linkedin.com/in/tt1309" target="_blank" rel="noopener noreferrer" className="hover:text-savant-blue transition-colors">
          <Linkedin size={18} />
        </a>
        <a href="mailto:tuan@i-savant.com" className="hover:text-savant-blue transition-colors">
          <Mail size={18} />
        </a>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <main>
        <Hero />
        <Partnerships />
        <SkillsAndServices />
        <TechStack />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
