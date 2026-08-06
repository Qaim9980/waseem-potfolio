import Head from 'next/head';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { FaEnvelope, FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting }, watch } = useForm();
  const [submitStatus, setSubmitStatus] = useState(null);

  const onSubmit = async (data) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        reset();
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    }
  };

  return (
    <>
      <Head>
        <title>Contact Me - Portfolio</title>
        <meta name="description" content="Get in touch with me for projects and inquiries" />
      </Head>

      {/* Hero */}
      <section className="bg-gradient-to-br from-ink via-charcoal to-dark py-20 px-4 pt-32">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold text-white mb-6">Get In Touch</h1>
          <p className="text-xl text-sand/80">Have a project in mind? Let's talk!</p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-white mb-8">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-secondary text-2xl mt-1">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Email</h3>
                    <a href="mailto:rw3761840@gmail.com" className="text-sand/60 hover:text-secondary transition">
                      rw3761840@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-secondary text-2xl mt-1">
                    <FaWhatsapp />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Phone</h3>
                    <a href="tel:+923247144941" className="text-sand/60 hover:text-secondary transition">
                      +92 324 7144941
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-secondary text-2xl mt-1">
                    <FaLinkedin />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">LinkedIn</h3>
                    <a href="https://www.linkedin.com/in/waseem-ahmed-376" target="_blank" rel="noopener noreferrer" className="text-sand/60 hover:text-secondary transition">
                      Waseem Ahmed · LinkedIn
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-secondary text-2xl mt-1">
                    <FaGithub />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">GitHub</h3>
                    <a href="https://github.com/WaseemAhmed376" target="_blank" rel="noopener noreferrer" className="text-sand/60 hover:text-secondary transition">
                      @WaseemAhmed376
                    </a>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="mt-12 bg-primary/10 p-6 rounded-lg">
                <h3 className="text-white font-semibold mb-2">Response Time</h3>
                <p className="text-sand/80">
                  I typically respond to inquiries within 24 hours. For urgent matters, please call or mention it in your message.
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-white mb-8">Send Me a Message</h2>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block text-white font-semibold mb-2">Full Name *</label>
                  <input
                    type="text"
                    {...register('name', { required: 'Name is required' })}
                    className="w-full bg-primary/10 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                    placeholder="Your Name"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Email *</label>
                  <input
                    type="email"
                    {...register('email', { required: 'Email is required', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Invalid email' } })}
                    className="w-full bg-primary/10 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Subject *</label>
                  <input
                    type="text"
                    {...register('subject', { required: 'Subject is required' })}
                    className="w-full bg-primary/10 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                    placeholder="Project Inquiry"
                  />
                  {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Message *</label>
                  <textarea
                    {...register('message', { required: 'Message is required' })}
                    rows="5"
                    className="w-full bg-primary/10 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-secondary hover:bg-secondary/90 text-dark font-bold py-3 rounded-lg transition disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {submitStatus === 'success' && (
                  <motion.div
                    className="bg-green-500/20 text-green-400 p-4 rounded-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    ✓ Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    className="bg-red-500/20 text-red-400 p-4 rounded-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    ✗ Error sending message. Please try again.
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
