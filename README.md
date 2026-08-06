# Portfolio Website with n8n Automation yeah

A professional portfolio website built with Next.js, featuring automated workflows powered by n8n for managing projects, testimonials, blog posts, and client inquiries.

## 🚀 Features

- **Responsive Design**: Mobile-friendly interface built with Tailwind CSS
- **Dynamic Content**: Projects, testimonials, and blog posts loaded from APIs
- **Contact Form**: Automated form submissions with email notifications
- **n8n Workflows**: Complete automation suite for portfolio management
- **SEO Optimized**: Meta tags and structured data for better search visibility
- **Fast Performance**: Built with Next.js for optimal speed and performance

## 📋 Project Structure

```
portfolio/
├── pages/                          # Next.js pages
│   ├── _app.js                    # App wrapper with layout
│   ├── index.js                   # Home page
│   ├── about.js                   # About page
│   ├── portfolio.js               # Portfolio/Projects page
│   ├── blog.js                    # Blog listing page
│   ├── contact.js                 # Contact form page
│   └── api/                       # Backend API routes
│       ├── contact.js             # Contact form handler
│       ├── projects.js            # Projects API
│       ├── blog.js                # Blog posts API
│       └── testimonials.js        # Testimonials API
├── components/                     # Reusable React components
│   ├── Navbar.js                  # Navigation component
│   ├── Footer.js                  # Footer component
│   └── FeaturedProjects.js        # Featured projects section
├── styles/
│   └── globals.css                # Global styles
├── n8n-workflows/                 # n8n automation workflows
│   ├── 1-add-project-workflow.json
│   ├── 2-contact-form-workflow.json
│   ├── 3-testimonials-workflow.json
│   ├── 4-resume-reminder-workflow.json
│   └── 5-blog-publication-workflow.json
├── public/                        # Static assets
├── .env.local.example             # Environment variables template
├── tailwind.config.js             # Tailwind CSS configuration
├── postcss.config.js              # PostCSS configuration
├── next.config.js                 # Next.js configuration
└── package.json                   # Dependencies and scripts
```

## 🛠️ Prerequisites

- Node.js 16.x or higher
- npm or yarn
- n8n instance (self-hosted or cloud)
- Google Sheets (for data management)
- Gmail account or email service (for notifications)
- Slack workspace (optional, for notifications)

## 📦 Installation

### 1. Clone and Setup

```bash
# Navigate to project directory
cd portfolio

# Install dependencies
npm install
```

### 2. Configure Environment Variables

Copy `.env.local.example` to `.env.local` and fill in your details:

```bash
cp .env.local.example .env.local
```

Edit `.env.local`:

```env
# Email Configuration
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
ADMIN_EMAIL=admin@example.com

# Optional: Third-party integrations
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/YOUR/WEBHOOK/URL
N8N_WEBHOOK_URL=https://your-n8n-instance.com/webhook
```

### 3. Start Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` to view your portfolio.

## 🔗 API Routes

### POST /api/contact
Handles contact form submissions.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Project Inquiry",
  "message": "I'm interested in working with you..."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Email sent successfully"
}
```

### GET /api/projects
Fetches all portfolio projects.

**Response:**
```json
[
  {
    "id": 1,
    "title": "Project Name",
    "description": "Description",
    "image": "url",
    "tags": ["tag1", "tag2"],
    "github": "url",
    "live": "url"
  }
]
```

### POST /api/projects
Adds a new project (called by n8n workflows).

### GET /api/blog
Fetches all blog posts.

### POST /api/blog
Publishes a new blog post.

### GET /api/testimonials
Fetches all testimonials.

### POST /api/testimonials
Adds a new testimonial.

## 🤖 n8n Workflows Setup

### Prerequisites for n8n

- n8n instance running
- Google Sheets account with API enabled
- Google Forms (for testimonials)
- Slack workspace (optional)
- SMTP credentials for email

### Importing Workflows

1. **Open n8n Dashboard**
   - Go to your n8n instance (http://localhost:5678)
   - Click "Create new workflow"

2. **Import Workflow JSON**
   - Copy the content from `n8n-workflows/1-add-project-workflow.json`
   - Go to workflow settings and paste the JSON
   - Click "Save"

3. **Configure Node Credentials**
   - For each workflow, update the node credentials:
     - Google Sheets: Add your credentials and Sheet IDs
     - Slack: Add your webhook URL
     - Email: Configure your email service
     - HTTP: Set correct API endpoints

4. **Activate Workflows**
   - Click "Activate" button to enable each workflow

### Workflow Details

#### 1. Add Project Workflow
- **Trigger**: New row in Google Sheets (Projects sheet)
- **Actions**:
  - Fetch project data
  - POST to `/api/projects`
  - Send Slack notification

#### 2. Contact Form Workflow
- **Trigger**: Webhook from contact form
- **Actions**:
  - Send acknowledgment email
  - Log to Google Sheets
  - Send Slack notification

#### 3. Testimonials Workflow
- **Trigger**: New Google Form submission
- **Actions**:
  - Add to Google Sheets
  - POST to `/api/testimonials`
  - Send Slack notification

#### 4. Resume Reminder Workflow
- **Trigger**: Scheduled (Every Monday at 9 AM)
- **Actions**:
  - Send email reminder
  - Check Google Calendar
  - Log to Slack

#### 5. Blog Publication Workflow
- **Trigger**: New blog post in Google Sheets
- **Actions**:
  - POST to `/api/blog`
  - Send email to subscribers
  - Announce on Slack

## 📊 Google Sheets Setup

Create the following sheets in your Google Sheet:

### Projects Sheet
| Column | Type | Example |
|--------|------|---------|
| title | Text | E-Commerce Platform |
| description | Text | Full-stack solution... |
| image | URL | https://example.com/image.jpg |
| tags | Text | React, Node.js, MongoDB |
| github | URL | https://github.com/repo |
| live | URL | https://example.com |

### Contact Inquiries Sheet
| Column | Type | Example |
|--------|------|---------|
| name | Text | John Doe |
| email | Email | john@example.com |
| subject | Text | Project Inquiry |
| message | Text | Message content |
| timestamp | DateTime | Auto-generated |
| status | Text | New/In Progress/Done |

### Testimonials Sheet
| Column | Type | Example |
|--------|------|---------|
| name | Text | Client Name |
| company | Text | Company Name |
| role | Text | CEO |
| testimonial | Text | Great work! |
| rating | Number | 5 |
| timestamp | DateTime | Auto-generated |

### Blog Posts Sheet
| Column | Type | Example |
|--------|------|---------|
| title | Text | Getting Started with n8n |
| excerpt | Text | Brief summary |
| content | Long Text | Full content |
| author | Text | Your Name |
| date | Date | 2024-02-08 |
| image | URL | https://example.com/image.jpg |
| tags | Text | n8n, automation |
| status | Text | Draft/Published |

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

```bash
# Build the project
npm run build

# Deploy to Netlify
netlify deploy --prod --dir=out
```

### Self-hosted

```bash
# Build production version
npm run build

# Start server
npm run start
```

## 🔒 Security Tips

1. **Environment Variables**: Never commit `.env.local`
2. **Email Passwords**: Use app-specific passwords for Gmail
3. **API Keys**: Rotate keys regularly
4. **Webhook URLs**: Keep n8n webhooks private
5. **CORS**: Configure CORS properly for your domain

## 📧 Email Configuration

### Gmail Setup

1. Enable 2-Factor Authentication
2. Create an App Password at https://myaccount.google.com/apppasswords
3. Use the app password in `.env.local`

### Alternative Email Services

- SendGrid
- Mailgun
- AWS SES
- Custom SMTP

## 🎨 Customization

### Colors

Edit `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      primary: '#0066cc',      // Main color
      secondary: '#00d4ff',    // Accent color
      dark: '#1a1a1a',        // Background
      light: '#f5f5f5',       // Light background
    },
  },
},
```

### Content

- **Home Page**: Edit `pages/index.js`
- **About Page**: Edit `pages/about.js`
- **Navigation**: Edit `components/Navbar.js`
- **Footer**: Edit `components/Footer.js`

## 🐛 Troubleshooting

### Contact form not sending emails
- Check `.env.local` configuration
- Verify Gmail app password
- Check email service is not blocking

### n8n workflows not triggering
- Verify webhook URLs are correct
- Check credentials in n8n
- Review n8n execution logs

### Projects not showing
- Verify `/api/projects` endpoint is working
- Check Google Sheets connection (if using)
- Review browser console for errors

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [n8n Documentation](https://docs.n8n.io)
- [Framer Motion](https://www.framer.com/motion)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Support

For issues or questions:
1. Check the troubleshooting section
2. Review n8n execution logs
3. Check browser console for errors
4. Review API response status codes

## 🎯 Next Steps

1. ✅ Install dependencies
2. ✅ Configure environment variables
3. ✅ Test portfolio locally
4. ✅ Set up n8n workflows
5. ✅ Configure Google Sheets
6. ✅ Deploy to Vercel/Netlify
7. ✅ Monitor workflow executions

Happy building! 🚀
