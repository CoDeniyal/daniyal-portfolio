import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
const HeroSection = () => {
  return <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-glow-pulse" style={{
        animationDelay: '1.5s'
      }} />
      </div>

      <div className="container mx-auto px-6 pt-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} className="mb-6">
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
              Welcome to my portfolio
            </span>
          </motion.div>

          <motion.h1 initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.1
        }} className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Hi, I'm{' '}
            <span className="gradient-text">Daniyal Robin</span>
          </motion.h1>

          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Aspiring Software Developer & Data Enthusiast
          </motion.p>

          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.3
        }} className="text-muted-foreground mb-10 max-w-xl mx-auto">
            Building innovative solutions through code, data analysis, and a passion for continuous learning.
          </motion.p>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.4
        }} className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <a href="#projects" className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25">
              View My Work
            </a>
            <a href="#contact" className="px-8 py-3 border border-border rounded-lg font-medium hover:bg-secondary transition-all">
              Contact Me
            </a>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.5
        }} className="flex items-center justify-center gap-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-2">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-2">
              <Linkedin size={24} />
            </a>
            <a href="mailto:daniyal@example.com" className="text-muted-foreground hover:text-primary transition-colors p-2">
              <Mail size={24} />
            </a>
          </motion.div>
        </div>

        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 0.6,
        delay: 0.8
      }} className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <a href="#about" className="animate-float block">
            <ArrowDown className="text-muted-foreground" size={24} />
          </a>
        </motion.div>
      </div>
    </section>;
};
export default HeroSection;