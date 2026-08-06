// This endpoint fetches blog posts
// Can be connected to Google Sheets, Airtable, Contentful, Ghost, or a database

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      // Sample blog posts - replace with actual data source
      const posts = [
        {
          id: 1,
          title: 'Getting Started with n8n Automation',
          excerpt: 'Learn the basics of n8n and how to create your first automation workflow.',
          content: 'Full content here...',
          author: 'Waseem Ahmed',
          date: '2024-02-08',
          image: 'https://via.placeholder.com/600x300?text=n8n+Tutorial',
          tags: ['n8n', 'automation', 'tutorial'],
        },
        {
          id: 2,
          title: 'Building Scalable React Applications',
          excerpt: 'Best practices for architecting large-scale React applications.',
          content: 'Full content here...',
          author: 'Waseem Ahmed',
          date: '2024-02-01',
          image: 'https://via.placeholder.com/600x300?text=React',
          tags: ['react', 'javascript', 'best-practices'],
        },
        {
          id: 3,
          title: 'API Integration Patterns',
          excerpt: 'Common patterns and best practices for integrating multiple APIs.',
          content: 'Full content here...',
          author: 'Waseem Ahmed',
          date: '2024-01-25',
          image: 'https://via.placeholder.com/600x300?text=API',
          tags: ['api', 'backend', 'integration'],
        },
      ];

      return res.status(200).json(posts);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
      return res.status(500).json({ error: 'Failed to fetch blog posts' });
    }
  } else if (req.method === 'POST') {
    // Add new blog post (for n8n webhook integration)
    const { title, excerpt, content, author, date, image, tags } = req.body;

    if (!title || !excerpt || !content) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
      // Save blog post to database/Google Sheets/Airtable
      // console.log('New blog post added:', { title, excerpt, content, author, date, image, tags });

      return res.status(201).json({ success: true, message: 'Blog post published successfully' });
    } catch (error) {
      console.error('Error publishing blog post:', error);
      return res.status(500).json({ error: 'Failed to publish blog post' });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}
