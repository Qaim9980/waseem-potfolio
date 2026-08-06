# Quick Start Guide

Get your portfolio website up and running in 5 minutes!

## 1. Installation (1 min)

```bash
cd d:\profolio
npm install
```

## 2. Configuration (2 min)

```bash
# Copy environment template
copy .env.local.example .env.local

# Edit .env.local with your settings:
# - Gmail: your-email@gmail.com
# - App password: (from Google account settings)
# - Admin email: your@email.com
# - Slack webhook (optional)
```

## 3. Start Development (1 min)

```bash
npm run dev
```

Visit: `http://localhost:3000`

## 4. Test Features (1 min)

- ✓ Browse home, about, portfolio pages
- ✓ Submit contact form
- ✓ Check your email for confirmation
- ✓ Mobile responsive check

## What's Included

### Pages
- **Home** (`/`) - Introduction + featured projects
- **About** (`/about`) - Background and skills
- **Portfolio** (`/portfolio`) - All projects gallery
- **Blog** (`/blog`) - Blog posts list
- **Contact** (`/contact`) - Contact form

### API Endpoints
- `POST /api/contact` - Contact form handler
- `GET/POST /api/projects` - Projects management
- `GET/POST /api/blog` - Blog posts management
- `GET/POST /api/testimonials` - Testimonials

### n8n Workflows
5 ready-to-import automation workflows in `n8n-workflows/` folder

## Next Steps

### Development
1. Customize colors in `tailwind.config.js`
2. Update content in pages (home, about, etc.)
3. Add your projects to Google Sheets
4. Configure n8n workflows

### Testing
```bash
# Run linter
npm run lint

# Test build
npm run build
npm start
```

### Deployment
See `docs/DEPLOYMENT_GUIDE.md` for:
- Vercel (easiest)
- Netlify
- Self-hosted options

## Key Files to Customize

```
pages/
  └── index.js              ← Hero section, intro text
pages/
  └── about.js              ← Your background, skills
components/
  └── Navbar.js             ← Logo, navigation links
components/
  └── Footer.js             ← Footer links, social media
pages/api/
  └── contact.js            ← Email settings
.env.local                ← Email & API keys
```

## Configuration Checklist

- [ ] Install dependencies: `npm install`
- [ ] Create `.env.local` file
- [ ] Set email credentials
- [ ] Update your name/info in pages
- [ ] Test contact form
- [ ] Set up Google Sheets (optional)
- [ ] Import n8n workflows (optional)
- [ ] Test on mobile
- [ ] Ready to deploy!

## Troubleshooting

**Port 3000 already in use:**
```bash
# Kill process on port 3000
npx kill-port 3000
# Then try again:
npm run dev
```

**Module not found errors:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Email not sending:**
1. Check `.env.local` has correct credentials
2. Gmail: Enable "Less secure apps" or use app password
3. Check spam folder
4. Review API console for errors

## Documentation

- **Main README**: Complete project documentation
- **N8N_SETUP_GUIDE**: Detailed workflow setup
- **GOOGLE_SHEETS_GUIDE**: Data management
- **DEPLOYMENT_GUIDE**: Production deployment

## Support

1. Check the main `README.md`
2. Review relevant guide in `docs/`
3. Check n8n logs for workflow issues
4. Review browser console for frontend errors

## Quick Links

- Next.js Docs: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- n8n Platform: https://n8n.io
- Google Sheets API: https://developers.google.com/sheets

---

**You're all set!** 🎉

Your portfolio is ready to build and deploy. Start by customizing the content to match your background and projects.

For detailed setup of n8n automation and Google Sheets, check the documentation files.
