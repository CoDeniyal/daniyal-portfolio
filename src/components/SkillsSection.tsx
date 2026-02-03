import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skills = {
  languages: [
    { name: 'Python', level: 85 },
    { name: 'Java', level: 80 },
    { name: 'C#', level: 75 },
    { name: 'JavaScript', level: 80 },
  ],
  frontend: [
    { name: 'React.js', level: 85 },
    { name: 'HTML/CSS', level: 90 },
    { name: 'Bootstrap', level: 80 },
    { name: 'Tailwind CSS', level: 75 },
  ],
  backend: [
    { name: 'ASP.NET Core MVC', level: 80 },
    { name: 'SQL Server', level: 85 },
    { name: 'RESTful APIs', level: 80 },
  ],
  tools: [
    { name: 'Git & GitHub', level: 85 },
    { name: 'Data Analysis', level: 80 },
    { name: 'Machine Learning', level: 70 },
    { name: 'Problem Solving', level: 90 },
  ],
};

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-primary to-primary/70"
        />
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const categories = [
    { title: 'Programming Languages', skills: skills.languages },
    { title: 'Frontend Development', skills: skills.frontend },
    { title: 'Backend & Database', skills: skills.backend },
    { title: 'Tools & Other Skills', skills: skills.tools },
  ];

  return (
    <section id="skills" className="py-24 bg-card/50" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm">02. SKILLS</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Technical Skills</h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            A diverse toolkit of programming languages, frameworks, and technologies 
            that I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="p-6 rounded-xl bg-background border border-border"
            >
              <h3 className="font-semibold text-lg mb-6 text-primary">{category.title}</h3>
              {category.skills.map((skill, skillIndex) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  delay={catIndex * 0.1 + skillIndex * 0.1}
                />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
