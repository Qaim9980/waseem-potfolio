import Head from 'next/head';
import Image from 'next/image';
import { FaCode, FaLightbulb, FaRocket, FaUsers, FaReact, FaServer, FaBrain, FaEnvelope, FaDatabase, FaTools } from 'react-icons/fa';

export default function About() {
  const skillCategories = [
    {
      icon: FaBrain,
      title: 'Artificial Intelligence',
      color: 'bg-gradient-to-br from-clay/20 via-copper/15 to-clay/10',
      borderColor: 'border-clay/50',
      hoverColor: 'hover:border-clay/80 hover:shadow-xl hover:shadow-copper/20',
      iconColor: 'bg-gradient-to-br from-clay to-copper',
      textColor: 'text-clay/90',
      skills: [
        { name: 'AI Application Development', description: 'End-to-end intelligent app building' },
        { name: 'Generative AI', description: 'Text, image & content generation' },
        { name: 'LLM Integration', description: 'GPT, Claude, Gemini & more' },
        { name: 'AI Agents', description: 'Autonomous AI agent development' },
        { name: 'RAG Systems', description: 'Retrieval-Augmented Generation' },
      ]
    },
    {
      icon: FaServer,
      title: 'Machine Learning & Deep Learning',
      color: 'bg-gradient-to-br from-olive/20 via-clay/15 to-olive/10',
      borderColor: 'border-olive/50',
      return (
        <>
          <Head>
            <title>About - Waseem Ahmed | AI Engineer</title>
            <meta name="description" content="AI Engineer, ML Engineer, n8n Automation Developer & E-commerce AI Solutions" />
          </Head>

          <section className="bg-gradient-to-br from-ink via-charcoal to-dark py-20 px-4 pt-32">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold text-white mb-6">About Me</h1>
              <p className="text-xl text-sand/80">AI Engineer | ML Engineer | n8n Automation Developer | E-commerce AI Solutions</p>
            </div>
          </section>

          <section className="py-20 px-4 bg-primary/5">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="flex justify-center">
                  <div className="relative w-full max-w-lg">
                    <Image
                      src="/profile.png"
                      alt="Profile Picture"
                      width={600}
                      height={600}
                      className="rounded-lg shadow-2xl w-full h-auto"
                      priority
                    />
                  </div>
                </div>

                <div>
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-clay to-copper bg-clip-text text-transparent mb-6">Hi, I'm <span className="text-copper">Waseem Ahmed</span></h2>
                  <p className="text-sand/80 text-lg leading-relaxed mb-6">
                    I am an AI Engineer passionate about building intelligent applications that solve real-world problems using Artificial Intelligence,
                    Machine Learning, Deep Learning, NLP, Computer Vision, and AI Automation.
                  </p>
                  <p className="text-sand/80 text-lg leading-relaxed mb-6">
                    I specialize in designing scalable AI solutions, developing intelligent workflows with <strong className="text-copper">n8n</strong>, and
                    integrating Large Language Models (LLMs) into modern applications. My goal is to automate business processes, improve decision-making,
                    and create AI-powered systems that deliver measurable results.
                  </p>
                  <p className="text-sand/80 text-lg leading-relaxed">
                    Alongside AI development, I also work in the <strong className="text-copper">E-commerce</strong> industry — building automation systems,
                    product data pipelines, web scraping solutions, AI chatbots, inventory automation, and customer support workflows for online businesses.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-16">
                <h2 className="text-4xl font-bold text-white mb-6">Professional Background</h2>
                <p className="text-sand/80 text-lg leading-relaxed mb-6">
                  I am an AI Engineer with deep expertise in Machine Learning, Deep Learning, Natural Language Processing, Computer Vision,
                  and AI Automation. I build scalable AI solutions that help startups and businesses automate processes, reduce manual work,
                  and accelerate digital transformation.
                </p>
                <p className="text-sand/80 text-lg leading-relaxed">
                  I specialize in <strong className="text-copper">n8n workflow automation</strong>, enabling me to architect intelligent pipelines that connect AI models,
                  APIs, databases, and business tools. I also build e-commerce AI systems — from product scraping and inventory automation to
                  AI-powered customer support and sales analytics.
                </p>
              </div>

              <div className="mb-16 font-sans">
                <div className="flex items-center justify-center gap-4 mb-12">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="6" y="6" width="36" height="36" rx="8" fill="url(#skills-grad)" />
                    <path d="M24 16L28 20L24 24L20 20L24 16Z" fill="white" fillOpacity="0.9" />
                    <path d="M24 24L28 28L24 32L20 28L24 24Z" fill="white" fillOpacity="0.7" />
                    <defs>
                      <linearGradient id="skills-grad" x1="6" y1="6" x2="42" y2="42">
                        <stop offset="0" stopColor="rgb(202, 160, 106)" />
                        <stop offset="0.5" stopColor="rgb(184, 92, 58)" />
                        <stop offset="1" stopColor="rgb(123, 138, 90)" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-clay via-copper to-olive bg-clip-text text-transparent">Skills & Expertise</h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {skillCategories.map((category, idx) => {
                    const Icon = category.icon;
                    return (
                      <div
                        key={idx}
                        className={`${category.color} border-2 ${category.borderColor} ${category.hoverColor} p-8 rounded-3xl overflow-hidden group backdrop-blur-sm shadow-lg transition-all duration-300`}
                      >
                        <div className="relative z-10">
                          <div className="flex items-center gap-4 mb-7">
                            <div className={`${category.iconColor} text-white text-3xl p-3 rounded-xl shadow-lg transform transition-transform group-hover:rotate-12 group-hover:scale-110`}>
                              <Icon />
                            </div>
                            <h3 className="text-2xl font-bold bg-gradient-to-r from-sand to-stone bg-clip-text text-transparent">{category.title}</h3>
                          </div>

                          <div className="space-y-3">
                            {category.skills.map((skill, i) => (
                              <div
                                key={i}
                                className="bg-ink/60 backdrop-blur-sm p-4 rounded-xl border-2 border-sand/10 hover:border-sand/20 hover:bg-charcoal/70 transition-all duration-300 hover:shadow-lg"
                              >
                                <div className="flex justify-between items-start">
                                  <div className="flex-1">
                                    <p className="font-bold text-white text-base mb-1">{skill.name}</p>
                                    <p className="text-sand/70 text-xs">{skill.description}</p>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mb-16">
                <div className="flex items-center justify-center gap-4 mb-10">
                  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 4L28 10L22 16L16 10L22 4Z" fill="url(#spec-grad-1)" />
                    <path d="M22 16L28 22L22 28L16 22L22 16Z" fill="url(#spec-grad-2)" />
                    <path d="M22 28L28 34L22 40L16 34L22 28Z" fill="url(#spec-grad-3)" />
                    <defs>
                      <linearGradient id="spec-grad-1" x1="16" y1="4" x2="28" y2="16">
                        <stop offset="0" stopColor="rgb(202, 160, 106)" />
                        <stop offset="1" stopColor="rgb(184, 92, 58)" />
                      </linearGradient>
                      <linearGradient id="spec-grad-2" x1="16" y1="16" x2="28" y2="28">
                        <stop offset="0" stopColor="rgb(184, 92, 58)" />
                        <stop offset="1" stopColor="rgb(123, 138, 90)" />
                      </linearGradient>
                      <linearGradient id="spec-grad-3" x1="16" y1="28" x2="28" y2="40">
                        <stop offset="0" stopColor="rgb(123, 138, 90)" />
                        <stop offset="1" stopColor="rgb(202, 160, 106)" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-clay via-copper to-olive bg-clip-text text-transparent">Core Specializations</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    {
                      title: '🤖 AI Engineering',
                      description: 'Build intelligent applications powered by LLMs, RAG, and AI agents',
                      features: ['LLM Integration', 'AI Agents', 'RAG Systems', 'Prompt Engineering'],
                      color: 'from-clay/25 via-copper/20 to-clay/15',
                      borderColor: 'border-clay/60',
                      accentColor: 'text-clay/90',
                      hoverColor: 'hover:border-clay/90 hover:shadow-2xl hover:shadow-copper/30',
                      iconBg: 'bg-gradient-to-br from-clay to-copper'
                    },
                    {
                      title: '⚡ n8n Automation',
                      description: 'Design powerful automation workflows connecting AI, APIs, and business tools',
                      features: ['AI Workflow Automation', 'CRM & Lead Gen', 'Email Automation', 'API Integration'],
                      color: 'from-copper/25 via-olive/20 to-copper/15',
                      borderColor: 'border-copper/60',
                      accentColor: 'text-copper/90',
                      hoverColor: 'hover:border-copper/90 hover:shadow-2xl hover:shadow-copper/30',
                      iconBg: 'bg-gradient-to-br from-copper to-olive'
                    },
                    {
                      title: '🛒 E-commerce AI',
                      description: 'AI-powered solutions for online businesses and marketplaces',
                      features: ['Product Scraping', 'Inventory Automation', 'Shopify/WooCommerce', 'AI Chatbots'],
                      color: 'from-olive/25 via-clay/20 to-olive/15',
                      borderColor: 'border-olive/60',
                      accentColor: 'text-olive/90',
                      hoverColor: 'hover:border-olive/90 hover:shadow-2xl hover:shadow-olive/30',
                      iconBg: 'bg-gradient-to-br from-olive to-clay'
                    }
                  ].map((spec, idx) => (
                    <div
                      key={idx}
                      className={`bg-gradient-to-br ${spec.color} border-2 ${spec.borderColor} ${spec.hoverColor} p-8 rounded-2xl transition-all duration-300 backdrop-blur-sm`}
                    >
                      <div className={`${spec.iconBg} w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-5 shadow-lg transform transition-transform hover:rotate-12 hover:scale-110`}>
                        {spec.title.split(' ')[0]}
                      </div>
                      <h3 className={`text-2xl font-bold ${spec.accentColor} mb-3`}>{spec.title.substring(3)}</h3>
                      <p className="text-sand/80 text-base mb-6 leading-relaxed">{spec.description}</p>
                      <div className="space-y-3">
                        {spec.features.map((feature, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-3 bg-ink/60 p-3 rounded-xl border border-sand/10 hover:border-sand/20 transition-all"
                          >
                            <span className={`${spec.accentColor} font-black text-2xl`}>✓</span>
                            <span className="text-white text-sm font-semibold">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-16">
                <div className="flex items-center justify-center gap-4 mb-8">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="20" fill="url(#title-grad)" />
                    <path d="M18 24L24 18L30 24L24 30L18 24Z" fill="white" fillOpacity="0.9" />
                    <defs>
                      <linearGradient id="title-grad" x1="4" y1="4" x2="44" y2="44">
                        <stop offset="0" stopColor="rgb(202, 160, 106)" />
                        <stop offset="1" stopColor="rgb(184, 92, 58)" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-clay via-copper to-olive bg-clip-text text-transparent">n8n Automation Workflows</h2>
                </div>
                <div className="relative overflow-hidden bg-gradient-to-br from-ink/90 to-charcoal/70 border-2 border-sand/10 p-10 rounded-3xl backdrop-blur-sm shadow-2xl">
                  <div className="pointer-events-none absolute -top-12 -right-12 opacity-40">
                    <svg width="280" height="280" viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id="n8n-abstract" x1="0" y1="0" x2="280" y2="280" gradientUnits="userSpaceOnUse">
                          <stop offset="0" stopColor="rgb(202, 160, 106)" stopOpacity="0.8" />
                          <stop offset="0.5" stopColor="rgb(184, 92, 58)" stopOpacity="0.6" />
                          <stop offset="1" stopColor="rgb(123, 138, 90)" stopOpacity="0.4" />
                        </linearGradient>
                        <linearGradient id="n8n-secondary" x1="280" y1="0" x2="0" y2="280" gradientUnits="userSpaceOnUse">
                          <stop offset="0" stopColor="rgb(245, 239, 230)" stopOpacity="0.7" />
                          <stop offset="1" stopColor="rgb(184, 92, 58)" stopOpacity="0.5" />
                        </linearGradient>
                      </defs>
                      <circle cx="140" cy="140" r="120" fill="url(#n8n-abstract)" />
                      <circle cx="140" cy="140" r="90" stroke="url(#n8n-secondary)" strokeWidth="3" />
                      <circle cx="140" cy="140" r="60" stroke="url(#n8n-abstract)" strokeWidth="2" />
                      <path d="M80 160C80 118 112 80 154 80C182 80 206 92 222 112C202 112 186 126 176 144C162 168 138 186 106 198C92 204 78 206 68 206C64 194 64 176 80 160Z" fill="rgb(245, 239, 230)" fillOpacity="0.6" />
                      <circle cx="190" cy="120" r="14" fill="rgb(202, 160, 106)" fillOpacity="0.8" />
                      <circle cx="90" cy="180" r="10" fill="rgb(184, 92, 58)" fillOpacity="0.7" />
                    </svg>
                  </div>
                  <p className="text-sand/80 text-center mb-10 text-lg font-semibold">🔗 Connect powerful automation nodes to create seamless workflows 🚀</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { name: 'Webhook Trigger', desc: 'HTTP triggers', category: 'trigger' },
                      { name: 'Google Sheets', desc: 'Spreadsheet sync', category: 'data' },
                      { name: 'Email Send', desc: 'Email delivery', category: 'comms' },
                      { name: 'Slack Notify', desc: 'Notifications', category: 'comms' },
                      { name: 'API Request', desc: 'API calls', category: 'data' },
                      { name: 'Airtable', desc: 'Database sync', category: 'data' },
                      { name: 'Decision Node', desc: 'Conditional logic', category: 'logic' },
                      { name: 'Data Transform', desc: 'Data mapping', category: 'data' },
                      { name: 'Stripe Payment', desc: 'Payments', category: 'finance' },
                      { name: 'PDF Generate', desc: 'PDF creation', category: 'finance' },
                      { name: 'OpenAI Integration', desc: 'AI output', category: 'ai' },
                      { name: 'Discord Bot', desc: 'Discord messages', category: 'comms' },
                    ].map((node, idx) => {
                      const colors = getCategoryColors(node.category);
                      return (
                        <div
                          key={idx}
                          className={`bg-gradient-to-br ${colors.bg} border-2 ${colors.border} ${colors.hover} p-5 rounded-2xl hover:shadow-xl transition-all cursor-pointer backdrop-blur-sm`}
                        >
                          <div className="text-center">
                            <div className="flex flex-col items-center gap-3 mb-2">
                              <div className="transform transition-transform duration-300 hover:rotate-12 hover:scale-110">
                                {renderCategoryLogo(node.category)}
                              </div>
                              <p className={`text-sm font-bold ${colors.text}`}>{node.name}</p>
                            </div>
                            <p className="text-xs text-sand/70 font-medium">{node.desc}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-8 text-center">
                    <p className="text-sand/80 text-lg mb-6 font-semibold">
                      🔄 <span className="bg-gradient-to-r from-clay via-copper to-olive bg-clip-text text-transparent font-bold">Seamless Integration</span> - Connect triggers, process data, and execute actions automatically
                    </p>
                    <div className="flex justify-center gap-4">
                      <div className="w-4 h-4 rounded-full bg-gradient-to-r from-clay to-copper shadow-lg shadow-copper/40"></div>
                      <div className="w-4 h-4 rounded-full bg-gradient-to-r from-copper to-olive shadow-lg shadow-copper/40"></div>
                      <div className="w-4 h-4 rounded-full bg-gradient-to-r from-olive to-clay shadow-lg shadow-olive/40"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-center gap-4 mb-10">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="20" fill="url(#values-grad)" />
                    <path d="M24 10L28 16L24 22L20 16L24 10Z" fill="white" fillOpacity="0.9" />
                    <path d="M24 22L28 28L24 34L20 28L24 22Z" fill="white" fillOpacity="0.7" />
                    <circle cx="24" cy="24" r="3" fill="white" />
                    <defs>
                      <linearGradient id="values-grad" x1="4" y1="4" x2="44" y2="44">
                        <stop offset="0" stopColor="rgb(202, 160, 106)" />
                        <stop offset="0.5" stopColor="rgb(184, 92, 58)" />
                        <stop offset="1" stopColor="rgb(123, 138, 90)" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-clay via-copper to-olive bg-clip-text text-transparent">Core Values</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {values.map((value, idx) => {
                    const Icon = value.icon;
                    const gradients = [
                      { bg: 'from-clay/20 to-copper/10', border: 'border-clay/50', icon: 'from-clay to-copper', text: 'text-clay/90' },
                      { bg: 'from-copper/20 to-olive/10', border: 'border-copper/50', icon: 'from-copper to-olive', text: 'text-copper/90' },
                      { bg: 'from-olive/20 to-clay/10', border: 'border-olive/50', icon: 'from-olive to-clay', text: 'text-olive/90' },
                      { bg: 'from-clay/20 to-sand/10', border: 'border-clay/50', icon: 'from-clay to-sand', text: 'text-clay/90' }
                    ];
                    const colors = gradients[idx % gradients.length];
                    return (
                      <div
                        key={idx}
                        className={`flex gap-5 bg-gradient-to-br ${colors.bg} border-2 ${colors.border} p-6 rounded-2xl hover:shadow-2xl hover:border-opacity-80 transition-all duration-300 backdrop-blur-sm`}
                      >
                        <div className={`bg-gradient-to-br ${colors.icon} text-white text-4xl p-4 rounded-xl shadow-lg flex items-center justify-center transform transition-transform hover:rotate-12 hover:scale-110`}>
                          <Icon />
                        </div>
                        <div>
                          <h3 className={`text-2xl font-bold ${colors.text} mb-3`}>{value.title}</h3>
                          <p className="text-sand/80 text-base leading-relaxed">{value.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        </>
      );
                >
                  <div className={`${spec.iconBg} w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-5 shadow-lg transform transition-transform hover:rotate-12 hover:scale-110`}>
                    {spec.title.split(' ')[0]}
                  </div>
                  <h3 className={`text-2xl font-bold ${spec.accentColor} mb-3`}>{spec.title.substring(3)}</h3>
                  <p className="text-sand/80 text-base mb-6 leading-relaxed">{spec.description}</p>
                  <div className="space-y-3">
                    {spec.features.map((feature, i) => (
                      <motion.div
                        key={i}
                        className="flex items-center gap-3 bg-ink/60 p-3 rounded-xl border border-sand/10 hover:border-sand/20 transition-all"
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.15 + i * 0.08 }}
                        whileHover={{ x: 4 }}
                      >
                        <span className={`${spec.accentColor} font-black text-2xl`}>✓</span>
                        <span className="text-white text-sm font-semibold">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* n8n Automation Nodes Visualization */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="20" fill="url(#title-grad)" />
                <path d="M18 24L24 18L30 24L24 30L18 24Z" fill="white" fillOpacity="0.9" />
                <defs>
                  <linearGradient id="title-grad" x1="4" y1="4" x2="44" y2="44">
                    <stop offset="0" stopColor="rgb(202, 160, 106)" />
                    <stop offset="1" stopColor="rgb(184, 92, 58)" />
                  </linearGradient>
                </defs>
              </svg>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-clay via-copper to-olive bg-clip-text text-transparent">n8n Automation Workflows</h2>
            </div>
            <div className="relative overflow-hidden bg-gradient-to-br from-ink/90 to-charcoal/70 border-2 border-sand/10 p-10 rounded-3xl backdrop-blur-sm shadow-2xl">
              <div className="pointer-events-none absolute -top-12 -right-12 opacity-40">
                <svg
                  width="280"
                  height="280"
                  viewBox="0 0 280 280"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="n8n-abstract" x1="0" y1="0" x2="280" y2="280" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stopColor="rgb(202, 160, 106)" stopOpacity="0.8" />
                      <stop offset="0.5" stopColor="rgb(184, 92, 58)" stopOpacity="0.6" />
                      <stop offset="1" stopColor="rgb(123, 138, 90)" stopOpacity="0.4" />
                    </linearGradient>
                    <linearGradient id="n8n-secondary" x1="280" y1="0" x2="0" y2="280" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stopColor="rgb(245, 239, 230)" stopOpacity="0.7" />
                      <stop offset="1" stopColor="rgb(184, 92, 58)" stopOpacity="0.5" />
                    </linearGradient>
                  </defs>
                  <circle cx="140" cy="140" r="120" fill="url(#n8n-abstract)" />
                  <circle cx="140" cy="140" r="90" stroke="url(#n8n-secondary)" strokeWidth="3" />
                  <circle cx="140" cy="140" r="60" stroke="url(#n8n-abstract)" strokeWidth="2" />
                  <path
                    d="M80 160C80 118 112 80 154 80C182 80 206 92 222 112C202 112 186 126 176 144C162 168 138 186 106 198C92 204 78 206 68 206C64 194 64 176 80 160Z"
                    fill="rgb(245, 239, 230)"
                    fillOpacity="0.6"
                  />
                  <circle cx="190" cy="120" r="14" fill="rgb(202, 160, 106)" fillOpacity="0.8" />
                  <circle cx="90" cy="180" r="10" fill="rgb(184, 92, 58)" fillOpacity="0.7" />
                </svg>
              </div>
              <p className="text-sand/80 text-center mb-10 text-lg font-semibold">🔗 Connect powerful automation nodes to create seamless workflows 🚀</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: 'Webhook Trigger', desc: 'HTTP triggers', category: 'trigger' },
                  { name: 'Google Sheets', desc: 'Spreadsheet sync', category: 'data' },
                  { name: 'Email Send', desc: 'Email delivery', category: 'comms' },
                  { name: 'Slack Notify', desc: 'Notifications', category: 'comms' },
                  { name: 'API Request', desc: 'API calls', category: 'data' },
                  { name: 'Airtable', desc: 'Database sync', category: 'data' },
                  { name: 'Decision Node', desc: 'Conditional logic', category: 'logic' },
                  { name: 'Data Transform', desc: 'Data mapping', category: 'data' },
                  { name: 'Stripe Payment', desc: 'Payments', category: 'finance' },
                  { name: 'PDF Generate', desc: 'PDF creation', category: 'finance' },
                  { name: 'OpenAI Integration', desc: 'AI output', category: 'ai' },
                  { name: 'Discord Bot', desc: 'Discord messages', category: 'comms' },
                ].map((node, idx) => {
                  const colors = getCategoryColors(node.category);
                  return (
                    <motion.div
                      key={idx}
                      className={`bg-gradient-to-br ${colors.bg} border-2 ${colors.border} ${colors.hover} p-5 rounded-2xl hover:shadow-xl transition-all cursor-pointer backdrop-blur-sm`}
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: idx * 0.05 }}
                      whileHover={{ scale: 1.08, y: -8 }}
                    >
                      <div className="text-center">
                        <div className="flex flex-col items-center gap-3 mb-2">
                          <div className="transform transition-transform duration-300 hover:rotate-12 hover:scale-110">
                            {renderCategoryLogo(node.category)}
                          </div>
                          <p className={`text-sm font-bold ${colors.text}`}>{node.name}</p>
                        </div>
                        <p className="text-xs text-sand/70 font-medium">{node.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
              
              {/* Animation Flow Description */}
              <motion.div 
                className="mt-8 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <p className="text-sand/80 text-lg mb-6 font-semibold">
                  🔄 <span className="bg-gradient-to-r from-clay via-copper to-olive bg-clip-text text-transparent font-bold">Seamless Integration</span> - Connect triggers, process data, and execute actions automatically
                </p>
                <div className="flex justify-center gap-4">
                  <motion.div 
                    className="w-4 h-4 rounded-full bg-gradient-to-r from-clay to-copper shadow-lg shadow-copper/40"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  ></motion.div>
                  <motion.div 
                    className="w-4 h-4 rounded-full bg-gradient-to-r from-copper to-olive shadow-lg shadow-copper/40"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                  ></motion.div>
                  <motion.div 
                    className="w-4 h-4 rounded-full bg-gradient-to-r from-olive to-clay shadow-lg shadow-olive/40"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                  ></motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-4 mb-10">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="20" fill="url(#values-grad)" />
                <path d="M24 10L28 16L24 22L20 16L24 10Z" fill="white" fillOpacity="0.9" />
                <path d="M24 22L28 28L24 34L20 28L24 22Z" fill="white" fillOpacity="0.7" />
                <circle cx="24" cy="24" r="3" fill="white" />
                <defs>
                  <linearGradient id="values-grad" x1="4" y1="4" x2="44" y2="44">
                    <stop offset="0" stopColor="rgb(202, 160, 106)" />
                    <stop offset="0.5" stopColor="rgb(184, 92, 58)" />
                    <stop offset="1" stopColor="rgb(123, 138, 90)" />
                  </linearGradient>
                </defs>
              </svg>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-clay via-copper to-olive bg-clip-text text-transparent">Core Values</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, idx) => {
                const Icon = value.icon;
                const gradients = [
                  { bg: 'from-clay/20 to-copper/10', border: 'border-clay/50', icon: 'from-clay to-copper', text: 'text-clay/90' },
                  { bg: 'from-copper/20 to-olive/10', border: 'border-copper/50', icon: 'from-copper to-olive', text: 'text-copper/90' },
                  { bg: 'from-olive/20 to-clay/10', border: 'border-olive/50', icon: 'from-olive to-clay', text: 'text-olive/90' },
                  { bg: 'from-clay/20 to-sand/10', border: 'border-clay/50', icon: 'from-clay to-sand', text: 'text-clay/90' }
                ];
                const colors = gradients[idx % gradients.length];
                return (
                  <motion.div
                    key={idx}
                    className={`flex gap-5 bg-gradient-to-br ${colors.bg} border-2 ${colors.border} p-6 rounded-2xl hover:shadow-2xl hover:border-opacity-80 transition-all duration-300 backdrop-blur-sm`}
                    initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    whileHover={{ x: 10, scale: 1.02 }}
                  >
                    <div className={`bg-gradient-to-br ${colors.icon} text-white text-4xl p-4 rounded-xl shadow-lg flex items-center justify-center transform transition-transform hover:rotate-12 hover:scale-110`}>
                      <Icon />
                    </div>
                    <div>
                      <h3 className={`text-2xl font-bold ${colors.text} mb-3`}>{value.title}</h3>
                      <p className="text-sand/80 text-base leading-relaxed">{value.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
