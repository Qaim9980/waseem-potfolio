import Head from 'next/head';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

export default function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch projects from API - limited to 4 projects
    fetch('/api/projects')
      .then((res) => res.json())
      .then((data) => {
        setProjects(data.slice(0, 4)); // Only show 4 projects
        setLoading(false);
      })
      .catch(() => {
        // Set default projects if API fails - only 4
        setProjects([
          {
            id: 1,
            title: 'AI Customer Support Chatbot',
            description: 'LLM-powered chatbot with RAG, built on GPT-4 + LangChain + FastAPI for automated customer support.',
            image: '/proj-ai-chatbot.svg',
            tags: ['Python', 'LangChain', 'OpenAI', 'RAG'],
            slug: '1',
          },
          {
            id: 2,
            title: 'n8n E-commerce Automation',
            description: 'End-to-end order automation — inventory sync, email alerts, Slack notifications via n8n workflows.',
            image: '/proj-n8n-ecommerce.svg',
            tags: ['n8n', 'Shopify', 'Google Sheets', 'Webhooks'],
            slug: '2',
          },
          {
            id: 3,
            title: 'RAG Document Q&A System',
            description: 'Upload PDFs and get AI-powered answers using ChromaDB vector search and OpenAI embeddings.',
            image: '/proj-rag-system.svg',
            tags: ['LangChain', 'ChromaDB', 'OpenAI', 'Streamlit'],
            slug: '3',
          },
          {
            id: 4,
            title: 'E-commerce Price Monitor',
            description: 'Scrapes prices across Amazon & eBay, detects drops, and sends instant alerts via email and Telegram.',
            image: '/proj-price-monitor.svg',
            tags: ['Python', 'Scrapy', 'n8n', 'PostgreSQL'],
            slug: '4',
          },
        ]);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Portfolio - My Projects</title>
        <meta name="description" content="View my portfolio of projects and work samples" />
      </Head>

      {/* Hero */}
      <section className="bg-gradient-to-br from-ink via-charcoal to-dark py-20 px-4 pt-32">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold text-white mb-6">My Portfolio</h1>
          <p className="text-xl text-sand/80">Showcase of projects built with modern technologies and best practices</p>
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {loading ? (
            <div className="text-center text-sand/80">Loading projects...</div>
          ) : (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              {projects.map((project, idx) => (
                <Link key={project.id} href={`/portfolio/${project.slug || project.id}`}>
                  <motion.div
                    className="bg-primary/10 rounded-lg overflow-hidden hover:shadow-lg transition group hover-lift cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                  >
                    <div className="relative h-48 overflow-hidden bg-ink/60">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-sand/80 mb-4 text-sm">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, i) => (
                          <span key={i} className="bg-secondary/20 text-secondary px-2 py-1 rounded text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="text-secondary hover:text-secondary/90 transition font-semibold">
                        View Details →
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}
