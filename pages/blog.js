import Head from 'next/head';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaCalendar, FaUser, FaArrowRight } from 'react-icons/fa';

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch blog posts from API
    fetch('/api/blog')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch(() => {
        // Set default posts if API fails
        setPosts([
          {
            id: 1,
            title: 'Getting Started with n8n Automation',
            excerpt: 'Learn the basics of n8n and how to create your first automation workflow.',
            content: 'Full content here...',
            author: 'Waseem Ahmed',
            date: '2024-02-08',
            image: 'https://via.placeholder.com/600x300?text=n8n+Tutorial',
          },
          {
            id: 2,
            title: 'Building Scalable React Applications',
            excerpt: 'Best practices for architecting large-scale React applications.',
            content: 'Full content here...',
            author: 'Waseem Ahmed',
            date: '2024-02-01',
            image: 'https://via.placeholder.com/600x300?text=React',
          },
          {
            id: 3,
            title: 'API Integration Patterns',
            excerpt: 'Common patterns and best practices for integrating multiple APIs.',
            content: 'Full content here...',
            author: 'Waseem Ahmed',
            date: '2024-01-25',
            image: 'https://via.placeholder.com/600x300?text=API',
          },
        ]);
        setLoading(false);
      });
  }, []);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <>
      <Head>
        <title>Blog - Portfolio</title>
        <meta name="description" content="Read my latest blog posts about web development and automation" />
      </Head>

      {/* Hero */}
      <section className="bg-gradient-to-br from-ink via-charcoal to-dark py-20 px-4 pt-32">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold text-white mb-6">Blog</h1>
          <p className="text-xl text-sand/80">Insights, tutorials, and thoughts on web development and automation</p>
        </motion.div>
      </section>

      {/* Posts */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          {loading ? (
            <div className="text-center text-sand/80">Loading posts...</div>
          ) : (
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              {posts.map((post, idx) => (
                <motion.div
                  key={post.id}
                  className="bg-primary/10 rounded-lg overflow-hidden hover:shadow-lg transition hover-lift"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -8, scale: 1.01 }}
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-2/5 h-48 md:h-auto overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover hover:scale-110 transition"
                      />
                    </div>
                    <div className="p-6 md:w-3/5 flex flex-col justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{post.title}</h3>
                        <p className="text-sand/80 mb-4">{post.excerpt}</p>
                      </div>

                      <div className="flex items-center gap-6 mb-4 text-sm text-sand/60">
                        <div className="flex items-center gap-2">
                          <FaCalendar />
                          {formatDate(post.date)}
                        </div>
                        <div className="flex items-center gap-2">
                          <FaUser />
                          {post.author}
                        </div>
                      </div>

                      <Link
                        href={`/blog/${post.id}`}
                        className="flex items-center gap-2 text-secondary hover:text-secondary/90 transition w-fit"
                      >
                        Read More <FaArrowRight />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}
