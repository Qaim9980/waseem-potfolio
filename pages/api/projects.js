// This endpoint fetches projects data
// Can be connected to Google Sheets, Airtable, or a database

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const projects = [
        {
          id: 1,
          title: 'AI Customer Support Chatbot',
          description: 'An LLM-powered chatbot that handles customer queries, escalates complex issues, and logs conversations — built with LangChain, OpenAI GPT-4, and FastAPI.',
          image: '/proj-ai-chatbot.svg',
          tags: ['Python', 'LangChain', 'OpenAI', 'FastAPI', 'RAG'],
          github: 'https://github.com',
          live: 'https://example.com',
        },
        {
          id: 2,
          title: 'n8n E-commerce Automation',
          description: 'End-to-end order management automation — new orders trigger inventory updates, customer emails, Slack alerts, and Google Sheets logging via n8n workflows.',
          image: '/proj-n8n-ecommerce.svg',
          tags: ['n8n', 'Shopify', 'Google Sheets', 'Webhooks', 'Email'],
          github: 'https://github.com',
          live: 'https://example.com',
        },
        {
          id: 3,
          title: 'RAG Document Q&A System',
          description: 'Upload PDFs and ask questions — uses ChromaDB for vector storage, OpenAI embeddings, and a Streamlit UI to provide accurate answers from your documents.',
          image: '/proj-rag-system.svg',
          tags: ['Python', 'LangChain', 'ChromaDB', 'OpenAI', 'Streamlit'],
          github: 'https://github.com',
          live: 'https://example.com',
        },
        {
          id: 4,
          title: 'E-commerce Price Monitor',
          description: 'Scrapes product prices across Amazon, eBay, and Daraz on a schedule, detects price drops, and sends instant alerts via email and Telegram using n8n.',
          image: '/proj-price-monitor.svg',
          tags: ['Python', 'Scrapy', 'n8n', 'PostgreSQL', 'Telegram Bot'],
          github: 'https://github.com',
          live: 'https://example.com',
        },
        {
          id: 5,
          title: 'n8n Lead Generation Pipeline',
          description: 'Automated B2B lead pipeline — scrapes LinkedIn data, enriches with AI, scores leads, pushes to CRM, and triggers personalized follow-up email sequences.',
          image: '/proj-lead-gen.svg',
          tags: ['n8n', 'OpenAI', 'HubSpot', 'Gmail', 'Web Scraping'],
          github: 'https://github.com',
          live: 'https://example.com',
        },
        {
          id: 6,
          title: 'AI Inventory Management',
          description: 'ML model that predicts stock depletion and auto-triggers reorders via WooCommerce API. Includes a Streamlit dashboard for sales analytics and forecasting.',
          image: '/proj-inventory-ai.svg',
          tags: ['Python', 'Scikit-learn', 'WooCommerce', 'Streamlit', 'n8n'],
          github: 'https://github.com',
          live: 'https://example.com',
        },
      ];

      return res.status(200).json(projects);
    } catch (error) {
      console.error('Error fetching projects:', error);
      return res.status(500).json({ error: 'Failed to fetch projects' });
    }
  } else if (req.method === 'POST') {
    const { title, description, image, tags, github, live } = req.body;

    if (!title || !description) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
      return res.status(201).json({ success: true, message: 'Project added successfully' });
    } catch (error) {
      console.error('Error adding project:', error);
      return res.status(500).json({ error: 'Failed to add project' });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}
