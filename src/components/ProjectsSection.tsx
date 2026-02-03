import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Folder } from 'lucide-react';

const projects = [
  {
    title: 'Hotel Management System',
    description: 'A comprehensive desktop application for managing hotel operations including room bookings, guest check-ins/check-outs, and billing. Built without a database using file-based storage.',
    tech: ['Java', 'Java Swing', 'File I/O'],
    github: '#',
    live: null,
  },
  {
    title: 'MotorDeal',
    description: 'Full-stack vehicle listing and management website with dynamic filters, search functionality, and user authentication. Features a modern UI for browsing and managing vehicle listings.',
    tech: ['React', 'ASP.NET Core', 'SQL Server', 'Bootstrap'],
    github: '#',
    live: '#',
  },
  {
    title: 'Blood Donation Website',
    description: 'Web application connecting blood donors with recipients. Includes user registration, donor search, request management, and an admin panel for overseeing the platform.',
    tech: ['React', 'ASP.NET Core', 'SQL Server', 'REST API'],
    github: '#',
    live: '#',
  },
  {
    title: 'Company Management Software',
    description: 'Desktop software for managing business operations including customers, services, invoices, and employees. Features comprehensive reporting and data management capabilities.',
    tech: ['C#', 'WinForms', '.NET Framework', 'SQL Server'],
    github: '#',
    live: null,
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 rounded-lg bg-primary/10 text-primary">
          <Folder size={24} />
        </div>
        <div className="flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github size={20} />
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>

      <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
        {project.title}
      </h3>
      <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-xs font-mono bg-secondary rounded-full text-muted-foreground"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm">03. PROJECTS</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Featured Projects</h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            A collection of projects showcasing my skills in full-stack development, 
            desktop applications, and problem-solving.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
