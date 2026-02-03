import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Database, Lightbulb } from 'lucide-react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: Code2,
      title: 'Development',
      description: 'Building robust applications with modern frameworks and best practices.',
    },
    {
      icon: Database,
      title: 'Data Analysis',
      description: 'Transforming raw data into actionable insights and visualizations.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Exploring new technologies and implementing creative solutions.',
    },
  ];

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm">01. ABOUT</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">About Me</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I'm an aspiring software developer and data enthusiast with a passion for 
              creating impactful digital solutions. My journey in tech has been driven by 
              curiosity and a desire to solve real-world problems through code.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I build projects that combine coding, data analysis, and innovative solutions. 
              Whether it's developing full-stack web applications, designing desktop software, 
              or diving into machine learning, I'm always exploring new technologies and 
              sharing my learning through hands-on projects.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My goal is to continuously grow as a developer while contributing to 
              meaningful projects that make a difference. I believe in clean code, 
              user-centric design, and the power of data-driven decision making.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
