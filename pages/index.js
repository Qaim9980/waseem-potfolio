import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaArrowRight, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import FeaturedProjects from '../components/FeaturedProjects';
import Typewriter from '../components/Typewriter';

export default function Home() {
  return (
    <>
      <Head>
        <title>Waseem Ahmed | AI Developer & n8n Expert</title>
        <meta name="description" content="AI Developer, n8n Expert & Automation Enthusiast — building intelligent workflows and AI-powered applications" />
      </Head>

      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-ink via-charcoal to-dark flex items-center justify-center px-4 pt-20">
        <motion.div
          className="text-center max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
            <Typewriter text="Welcome to My " speed={50} />
            <span className="text-secondary">Portfolio</span>
          </h1>
          {/* Tag Badges */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {[
              '🤖 AI Developer',
              '⚡ n8n Expert',
              '🔄 Automation Enthusiast',
              '🧠 ML Engineer',
              '🛒 E-commerce AI',
              '💬 LLM Integration',
              '🐍 Python Developer',
              '📊 Data Science',
            ].map((tag, i) => (
              <motion.span
                key={i}
                className="px-4 py-2 rounded-full text-sm font-semibold border border-copper/40 bg-copper/10 text-copper hover:bg-copper/25 hover:border-copper/70 transition-all duration-300 cursor-default"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
                whileHover={{ scale: 1.08, y: -2 }}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>

          <p className="text-lg text-sand/60 mb-16 leading-relaxed">
            I build intelligent, scalable applications and automate business workflows using n8n and AI for maximum efficiency.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <Link
                href="/portfolio"
                className="block bg-secondary hover:bg-secondary/90 text-dark font-bold py-4 px-10 rounded-lg flex items-center justify-center gap-3 transition animate-glow text-lg"
              >
                View My Work <FaArrowRight />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <Link
                href="/contact"
                className="block border-2 border-secondary text-secondary hover:bg-secondary hover:text-dark font-bold py-4 px-10 rounded-lg text-center transition text-lg"
              >
                Get In Touch
              </Link>
            </motion.div>
          </div>

          {/* Social Links */}
          <motion.div 
            className="flex gap-8 justify-center mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <motion.a 
              href="https://github.com/WaseemAhmed376" 
              className="text-sand/60 hover:text-secondary transition text-2xl"
              whileHover={{ scale: 1.2, rotate: 5 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/waseem-ahmed-376" 
              className="text-sand/60 hover:text-secondary transition text-2xl"
              whileHover={{ scale: 1.2, rotate: 5 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a 
              href="https://wa.me/923247144941"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sand/60 hover:text-green-400 transition text-2xl"
              whileHover={{ scale: 1.2, rotate: 5 }}
            >
              <FaWhatsapp />
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Projects */}
      <FeaturedProjects />

      {/* CTA Section */}
      <section className="bg-primary/10 py-20 px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start a Project?</h2>
          <p className="text-xl text-sand/80 mb-8">
            Let's collaborate and build something amazing together.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-secondary hover:bg-secondary/90 text-dark font-bold py-3 px-8 rounded-lg transition"
          >
            Contact Me Today
          </Link>
        </motion.div>
      </section>
    </>
  );
}
