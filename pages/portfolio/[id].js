import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaCheck } from 'react-icons/fa';

function ImageSlider({ images, title }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full rounded-xl overflow-hidden shadow-2xl bg-ink" style={{ height: '420px' }}>
      {images.map((src, idx) => (
        <motion.div
          key={idx}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: idx === current ? 1 : 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image src={src} alt={`${title} screenshot ${idx + 1}`} fill className="object-contain" />
        </motion.div>
      ))}
      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${idx === current ? 'bg-copper scale-125' : 'bg-sand/30 hover:bg-sand/60'}`}
          />
        ))}
      </div>
      {/* Arrows */}
      <button
        onClick={() => setCurrent((current - 1 + images.length) % images.length)}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-ink/70 hover:bg-ink text-white rounded-full w-9 h-9 flex items-center justify-center text-lg z-10 transition"
      >‹</button>
      <button
        onClick={() => setCurrent((current + 1) % images.length)}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-ink/70 hover:bg-ink text-white rounded-full w-9 h-9 flex items-center justify-center text-lg z-10 transition"
      >›</button>
      {/* Counter */}
      <div className="absolute top-3 right-4 bg-ink/70 text-sand/70 text-xs px-2 py-1 rounded-full z-10 font-mono">
        {current + 1} / {images.length}
      </div>
    </div>
  );
}

export default function ProjectDetail() {
  const router = useRouter();
  const { id } = router.query;

  // Extended project data with full details
  const projects = {
    1: {
      id: 1,
      title: 'AI Customer Support Chatbot',
      tagline: 'LLM-Powered Support Automation',
      description: 'GPT-4 chatbot with RAG that handles customer queries, escalates complex issues, and logs conversations via FastAPI.',
      longDescription: 'Built a production-ready AI chatbot using LangChain and GPT-4 with a RAG pipeline backed by ChromaDB. The bot retrieves relevant knowledge base chunks, generates grounded answers with citations, and auto-escalates unresolved queries to human agents via email. Deployed as a FastAPI service with Streamlit admin panel.',
      image: '/proj-ai-chatbot.svg',
      images: ['/proj-ai-chatbot.svg', '/proj-ai-chatbot-2.svg', '/proj-ai-chatbot-3.svg'],
      tags: ['Python', 'LangChain', 'OpenAI', 'FastAPI', 'RAG'],
      github: 'https://github.com/WaseemAhmed376',
      live: 'https://example.com',
      problem: 'Support team was overwhelmed with repetitive queries. 70% of tickets were answerable from existing docs but required manual lookup.',
      goal: 'Automate tier-1 support with an AI agent that answers from company knowledge base with zero hallucination.',
      features: [
        'RAG pipeline with ChromaDB vector search',
        'GPT-4 answer generation with inline citations',
        'Auto-escalation to human agents via email',
        'Conversation history and logging',
        'Streamlit admin dashboard',
        'FastAPI REST endpoints',
        'Multi-document knowledge base ingestion',
        'Confidence scoring per response',
      ],
      techStack: {
        AI: ['OpenAI GPT-4', 'LangChain', 'HuggingFace Embeddings'],
        'Vector DB': ['ChromaDB'],
        Backend: ['Python', 'FastAPI'],
        Frontend: ['Streamlit'],
        Automation: ['n8n (escalation flow)'],
      },
      results: ['Resolved 68% of tickets automatically', 'Response time reduced from 4h to <10s', 'Support team workload down 60%'],
      challenges: 'Preventing hallucinations when the knowledge base had no relevant answer.',
      solution: 'Added confidence threshold gating — below 0.75 similarity score, bot replies "I\'ll connect you to a human" instead of guessing.',
      duration: '6 weeks',
      role: 'AI Engineer',
    },
    2: {
      id: 2,
      title: 'n8n E-commerce Automation',
      tagline: 'End-to-End Order Workflow Automation',
      description: 'Fully automated order management — new orders trigger inventory sync, customer emails, Slack alerts, and Google Sheets logging.',
      longDescription: 'Designed and deployed a complete e-commerce automation suite in n8n. When a new Shopify order arrives via webhook, the workflow updates inventory in Google Sheets, sends a branded confirmation email, posts to a Slack #orders channel, and logs the order with status tracking. Failed steps trigger retry logic and alert the admin.',
      image: '/proj-n8n-ecommerce.svg',
      images: ['/proj-n8n-ecommerce.svg', '/proj-n8n-ecommerce-2.svg', '/proj-n8n-ecommerce-3.svg'],
      tags: ['n8n', 'Shopify', 'Google Sheets', 'Webhooks', 'Email'],
      github: 'https://github.com/WaseemAhmed376',
      live: 'https://example.com',
      problem: 'Manual order processing was causing delays, data entry errors, and missed customer emails — costing 3+ hours per day.',
      goal: 'Zero-touch order processing from purchase to fulfillment notification using n8n automation.',
      features: [
        'Shopify webhook trigger on new orders',
        'Real-time Google Sheets inventory update',
        'Branded customer confirmation email',
        'Slack #orders channel notification',
        'Order status tracking dashboard',
        'Retry logic for failed steps',
        'Admin alert on errors',
        'Daily summary report via email',
      ],
      techStack: {
        Automation: ['n8n (self-hosted)'],
        Integrations: ['Shopify API', 'Google Sheets API', 'Gmail API', 'Slack API'],
        'Hosting': ['Docker on VPS'],
        Monitoring: ['n8n execution logs'],
      },
      results: ['3+ hours/day saved on manual work', 'Order error rate dropped to 0%', 'Customer email delivery at 99.8%'],
      challenges: 'Shopify webhooks occasionally fire duplicate events causing double-processing.',
      solution: 'Added a deduplication node using order ID as idempotency key stored in a Google Sheet lookup before processing.',
      duration: '3 weeks',
      role: 'n8n Automation Developer',
    },
    3: {
      id: 3,
      title: 'RAG Document Q&A System',
      tagline: 'Hybrid Search · Reranking · Per-Tenant Evaluation',
      description: 'Production RAG platform with hybrid search, cross-encoder reranking, and async evaluation harness — P95 latency under 150ms.',
      longDescription: 'Replaced a brittle single-vector prototype suffering from high hallucination rates. Built a robust RAG platform with hybrid retrieval (dense + sparse BM25 fused via RRF), cross-encoder reranking, per-tenant namespacing in Qdrant, and an async LLM-as-judge evaluation harness scoring every response for faithfulness and groundedness.',
      image: '/proj-rag-system.svg',
      images: ['/proj-rag-system.svg', '/proj-rag-system-2.svg', '/proj-rag-system-3.svg'],
      tags: ['Python', 'LangChain', 'ChromaDB', 'OpenAI', 'Streamlit'],
      github: 'https://github.com/WaseemAhmed376',
      live: 'https://example.com',
      problem: 'Single-vector search returned irrelevant chunks, LLM fabricated answers, latency was unpredictable, no quality measurement per tenant.',
      goal: 'Build a robust RAG platform with hybrid search, cross-encoder reranking, per-tenant evaluation, and P95 latency under 150ms.',
      features: [
        'Hybrid retrieval: dense (Qdrant) + sparse (BM25) fused with RRF',
        'Cross-encoder reranker for precision before LLM context assembly',
        'Per-tenant namespacing — each customer sees only their data',
        'GPT-4o answer generation with inline chunk citations',
        'Async evaluation harness scoring faithfulness & groundedness',
        'Ray-based parallel ingestion pipeline (50k docs/day)',
        'P95 latency SLA with circuit breakers & cached fallback',
        'Grafana dashboard tracking hallucination rate & NPS per tenant',
      ],
      techStack: {
        AI: ['OpenAI GPT-4o', 'LangChain', 'Cross-Encoder Reranker'],
        'Vector DB': ['Qdrant (dense + sparse)', 'BM25'],
        'Ingestion': ['Ray parallel pipeline'],
        Backend: ['Python', 'FastAPI'],
        Monitoring: ['Grafana', 'LLM-as-judge eval harness'],
      },
      results: ['Hallucination rate dropped 63% after reranking + eval gating', 'P95 latency held at 120ms across all tenant sizes', 'Internal NPS rose to 4.1★ within 30 days', 'Ingestion scaled to 50k docs/day with zero manual intervention'],
      challenges: 'Single-vector search was returning irrelevant chunks causing the LLM to hallucinate, with no visibility into quality per tenant.',
      solution: 'Implemented hybrid RRF fusion + cross-encoder reranking to filter top chunks, and an async LLM-as-judge harness that gates responses below a faithfulness threshold.',
      duration: '8 weeks',
      role: 'AI Engineer',
    },
    4: {
      id: 4,
      title: 'E-commerce Price Monitor',
      tagline: 'Multi-Marketplace Price Intelligence',
      description: 'Scrapes prices across Amazon, eBay and Daraz on schedule, detects drops, and sends instant alerts via email and Telegram.',
      longDescription: 'Built a scheduled scraping system using Scrapy that monitors product prices across multiple marketplaces. Price history is stored in PostgreSQL, anomaly detection flags significant drops, and n8n triggers instant Telegram + email alerts. Includes a Streamlit dashboard for price trend visualization.',
      image: '/proj-price-monitor.svg',
      images: ['/proj-price-monitor.svg', '/proj-price-monitor-2.svg', '/proj-price-monitor-3.svg'],
      tags: ['Python', 'Scrapy', 'n8n', 'PostgreSQL', 'Telegram Bot'],
      github: 'https://github.com/WaseemAhmed376',
      live: 'https://example.com',
      problem: 'Manually checking competitor prices across 3 marketplaces was taking 2 hours daily and price changes were being missed.',
      goal: 'Fully automated price monitoring with instant alerts and historical trend tracking.',
      features: [
        'Scrapy spiders for Amazon, eBay, Daraz',
        'Scheduled scraping every 6 hours via n8n',
        'PostgreSQL price history storage',
        'Price drop anomaly detection (>5% threshold)',
        'Telegram Bot instant alerts',
        'Email digest with weekly summary',
        'Streamlit price trend dashboard',
        'Proxy rotation to avoid blocks',
      ],
      techStack: {
        Scraping: ['Python', 'Scrapy', 'Rotating Proxies'],
        Automation: ['n8n (scheduler + alerts)'],
        Database: ['PostgreSQL'],
        Alerts: ['Telegram Bot API', 'Gmail API'],
        Dashboard: ['Streamlit', 'Plotly'],
      },
      results: ['2 hours/day saved on manual checks', 'Caught 23 significant price drops in first month', '500+ products monitored simultaneously'],
      challenges: 'Anti-scraping measures on Amazon blocking requests after a few pages.',
      solution: 'Implemented rotating proxy pool with randomized user agents and request delays between 2–5 seconds.',
      duration: '4 weeks',
      role: 'Python Developer & Automation Engineer',
    },
    5: {
      id: 5,
      title: 'n8n Lead Generation Pipeline',
      tagline: 'AI-Powered B2B Lead Automation',
      description: 'Automated B2B pipeline — scrapes leads, enriches with AI, scores, pushes to CRM, and triggers personalized email sequences.',
      longDescription: 'Built a fully automated B2B lead generation system in n8n. Leads scraped from LinkedIn and Apollo are enriched via OpenAI (company summary, pain points, ICP score), scored by fit, pushed to HubSpot CRM, and trigger a 3-step personalized email sequence via Gmail API. All steps are logged to Google Sheets.',
      image: '/proj-lead-gen.svg',
      images: ['/proj-lead-gen.svg', '/proj-lead-gen-2.svg', '/proj-lead-gen-3.svg'],
      tags: ['n8n', 'OpenAI', 'HubSpot', 'Gmail', 'Web Scraping'],
      github: 'https://github.com/WaseemAhmed376',
      live: 'https://example.com',
      problem: 'Sales team spending 4+ hours daily on manual lead research, copy-paste into CRM, and writing personalized outreach emails.',
      goal: 'Fully automated lead research, enrichment, CRM entry, and personalized outreach — zero manual steps.',
      features: [
        'Lead scraping from LinkedIn & Apollo',
        'AI enrichment via OpenAI (ICP scoring, pain points)',
        'Automatic HubSpot CRM entry',
        '3-step personalized email sequence via Gmail',
        'Lead quality scoring (0–100)',
        'Google Sheets lead tracker',
        'Slack alert on high-score leads (>80)',
        'Unsubscribe handling and bounce management',
      ],
      techStack: {
        Automation: ['n8n (self-hosted)'],
        AI: ['OpenAI GPT-4 (enrichment)'],
        CRM: ['HubSpot API'],
        Outreach: ['Gmail API'],
        'Data Sources': ['LinkedIn, Apollo.io'],
        Tracking: ['Google Sheets'],
      },
      results: ['4 hours/day saved on manual research', 'Lead pipeline grew 3x in 6 weeks', 'Email open rate 38% (vs 18% manual)'],
      challenges: 'Personalized emails sounding generic when using a template prompt for all leads.',
      solution: 'Used per-lead AI enrichment to extract 3 specific pain points, injected into email prompt so every message references the company\'s actual situation.',
      duration: '5 weeks',
      role: 'n8n Automation Developer',
    },
    6: {
      id: 6,
      title: 'AI Inventory Management',
      tagline: 'ML-Powered Stock Forecasting & Auto-Reorder',
      description: 'ML model predicts stock depletion and auto-triggers reorders via WooCommerce API with a Streamlit analytics dashboard.',
      longDescription: 'Trained a time-series forecasting model (LSTM + XGBoost ensemble) on 2 years of sales data to predict stock depletion per SKU. When predicted stock falls below threshold, n8n auto-triggers a WooCommerce reorder and notifies the supplier via email. Streamlit dashboard shows forecast vs actuals and reorder history.',
      image: '/proj-inventory-ai.svg',
      images: ['/proj-inventory-ai.svg', '/proj-inventory-ai-2.svg', '/proj-inventory-ai-3.svg'],
      tags: ['Python', 'Scikit-learn', 'WooCommerce', 'Streamlit', 'n8n'],
      github: 'https://github.com/WaseemAhmed376',
      live: 'https://example.com',
      problem: 'Stockouts and overstock both happening due to manual reorder decisions based on gut feel rather than data.',
      goal: 'ML-driven inventory forecasting with automated reorders to eliminate stockouts and reduce overstock.',
      features: [
        'LSTM + XGBoost ensemble for demand forecasting',
        'Per-SKU reorder point calculation',
        'WooCommerce API auto-reorder trigger',
        'Supplier email notification via n8n',
        'Streamlit forecast vs actuals dashboard',
        'Seasonal trend detection',
        'Low-stock Slack alerts',
        'Weekly forecast accuracy report',
      ],
      techStack: {
        ML: ['Python', 'Scikit-learn', 'TensorFlow (LSTM)', 'XGBoost'],
        Automation: ['n8n (reorder trigger)'],
        'E-commerce': ['WooCommerce REST API'],
        Dashboard: ['Streamlit', 'Plotly'],
        Database: ['PostgreSQL'],
      },
      results: ['Stockouts reduced by 82%', 'Overstock holding costs down 35%', 'Forecast accuracy 91% at 30-day horizon'],
      challenges: 'Sales data had seasonal spikes (Eid, Black Friday) that linear models could not capture.',
      solution: 'Added LSTM layer to capture long-range seasonal patterns, combined with XGBoost for short-term signals via a stacking ensemble.',
      duration: '7 weeks',
      role: 'ML Engineer',
    },
  };

  const project = projects[id];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl text-white mb-4">Project Not Found</h1>
          <Link href="/portfolio" className="text-secondary hover:text-secondary/90">
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{project.title} - Portfolio</title>
        <meta name="description" content={project.description} />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-ink via-charcoal to-dark py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/portfolio" className="text-secondary hover:text-secondary/90 flex items-center gap-2 mb-8">
              <FaArrowLeft /> Back to Portfolio
            </Link>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">{project.title}</h1>
            <p className="text-2xl text-secondary mb-6">{project.tagline}</p>
            <p className="text-xl text-sand/80 max-w-3xl">{project.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Project Image Slider */}
      <section className="py-12 px-4 bg-primary/5">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <ImageSlider images={project.images || [project.image]} title={project.title} />
        </motion.div>
      </section>

      {/* Project Details */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Project Overview</h2>
              <p className="text-sand/80 text-lg leading-relaxed">{project.longDescription}</p>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-start gap-3 bg-primary/10 p-4 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                  >
                    <FaCheck className="text-secondary mt-1 flex-shrink-0" />
                    <span className="text-sand/80">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Technology Stack</h2>
              <div className="space-y-4">
                {Object.entries(project.techStack).map(([category, technologies]) => (
                  <div key={category} className="bg-primary/10 p-4 rounded-lg">
                    <h3 className="text-secondary font-semibold mb-3">{category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-secondary/20 text-secondary px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Problem / Goal */}
            {project.problem && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-white mb-6">Problem & Goal</h2>
                <div className="space-y-4">
                  <div className="bg-red-900/20 border border-red-500/30 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-red-400 mb-2">⚠ Problem</h3>
                    <p className="text-sand/80">{project.problem}</p>
                  </div>
                  <div className="bg-green-900/20 border border-green-500/30 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-green-400 mb-2">◎ Goal</h3>
                    <p className="text-sand/80">{project.goal}</p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Challenges & Solutions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Challenge & Solution</h2>
              <div className="space-y-4">
                <div className="bg-primary/10 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-white mb-2">Challenge</h3>
                  <p className="text-sand/80">{project.challenges}</p>
                </div>
                <div className="bg-primary/10 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-white mb-2">Solution</h3>
                  <p className="text-sand/80">{project.solution}</p>
                </div>
              </div>
            </motion.div>

            {/* Results */}
            {project.results && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-white mb-6">▲ Results</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.results.map((result, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-start gap-3 bg-copper/10 border border-copper/30 p-4 rounded-lg"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                    >
                      <span className="text-copper font-bold text-lg mt-0.5">★</span>
                      <span className="text-sand/90 font-medium">{result}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Project Info */}
            <motion.div
              className="bg-primary/10 p-6 rounded-lg sticky top-24"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-bold text-white mb-4">Project Info</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sand/60 text-sm mb-1">Duration</p>
                  <p className="text-white font-semibold">{project.duration}</p>
                </div>
                <div>
                  <p className="text-sand/60 text-sm mb-1">Role</p>
                  <p className="text-white font-semibold">{project.role}</p>
                </div>
                <div>
                  <p className="text-sand/60 text-sm mb-1">Technologies</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-secondary/20 text-secondary px-2 py-1 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Links */}
              <div className="mt-6 space-y-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/90 text-dark font-bold py-3 rounded-lg transition w-full"
                >
                  <FaGithub /> View Code
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 border-2 border-secondary text-secondary hover:bg-secondary hover:text-dark font-bold py-3 rounded-lg transition w-full"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
