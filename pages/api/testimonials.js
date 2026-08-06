// This endpoint manages client testimonials
// Can be connected to Google Sheets, Airtable, or a database

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      // Sample testimonials - replace with actual data source
      const testimonials = [
        {
          id: 1,
          name: 'John Doe',
          company: 'Tech Startup Inc',
          role: 'CEO',
          testimonial: 'Excellent work! The automation workflows saved us hours of manual work every week.',
          rating: 5,
          image: 'https://via.placeholder.com/100?text=John',
        },
        {
          id: 2,
          name: 'Jane Smith',
          company: 'Digital Agency',
          role: 'Project Manager',
          testimonial: 'Professional, responsive, and innovative solutions. Highly recommended!',
          rating: 5,
          image: 'https://via.placeholder.com/100?text=Jane',
        },
        {
          id: 3,
          name: 'Mike Johnson',
          company: 'E-Commerce Co',
          role: 'Founder',
          testimonial: 'Great developer with deep understanding of full-stack development. A pleasure to work with.',
          rating: 5,
          image: 'https://via.placeholder.com/100?text=Mike',
        },
      ];

      return res.status(200).json(testimonials);
    } catch (error) {
      console.error('Error fetching testimonials:', error);
      return res.status(500).json({ error: 'Failed to fetch testimonials' });
    }
  } else if (req.method === 'POST') {
    // Add new testimonial (for n8n webhook integration)
    const { name, company, role, testimonial, rating, image } = req.body;

    if (!name || !testimonial) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
      // Validate rating
      if (rating && (rating < 1 || rating > 5)) {
        return res.status(400).json({ error: 'Rating must be between 1 and 5' });
      }

      // Save testimonial to database/Google Sheets/Airtable
      // console.log('New testimonial added:', { name, company, role, testimonial, rating, image });

      return res.status(201).json({ success: true, message: 'Testimonial added successfully' });
    } catch (error) {
      console.error('Error adding testimonial:', error);
      return res.status(500).json({ error: 'Failed to add testimonial' });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}
