# Deployment Guide

Complete guide to deploying your portfolio website to production.

## Platform Comparison

| Platform | Difficulty | Cost | Scaling | Build Time |
|----------|-----------|------|---------|-----------|
| Vercel | Easy | Free/Paid | Auto | 2-3 min |
| Netlify | Easy | Free/Paid | Auto | 2-3 min |
| AWS | Medium | Variable | Manual | 5-10 min |
| DigitalOcean | Medium | $5+/month | Manual | 5-10 min |
| Heroku | Easy | Paid | Auto | 2-3 min |

## Vercel (Recommended)

### 1. Prepare for Deployment

```bash
# Install Vercel CLI
npm install -g vercel

# Build locally to test
npm run build

# Check for errors
npm run lint
```

### 2. Deploy to Vercel

**Option A: Via CLI**
```bash
vercel login
# Follow prompts
vercel --prod
```

**Option B: Via GitHub**
1. Push code to GitHub
2. Go to https://vercel.com
3. Click "New Project"
4. Select your repository
5. Click "Deploy"

### 3. Configure Environment Variables

1. Go to project settings on Vercel
2. Click **Environment Variables**
3. Add each variable:
   - `EMAIL_USER`
   - `EMAIL_PASSWORD`
   - `ADMIN_EMAIL`
   - `SLACK_WEBHOOK_URL`
4. Save and redeploy

### 4. Configure Custom Domain

1. Go to **Settings** → **Domains**
2. Add your domain
3. Update DNS records:
   ```
   A Record: 76.76.19.132
   CNAME: cname.vercel.com
   ```
4. Wait for propagation (24 hours)

### 5. Enable Auto-deployments

1. Go to **Settings** → **Git**
2. Select **Automatic Deployments**
3. Choose branch (main/master)
4. Each push auto-deploys

## Netlify

### 1. Deploy via Git

1. Go to https://app.netlify.com
2. Click "New site from Git"
3. Select GitHub/GitLab/Bitbucket
4. Choose your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Click "Deploy site"

### 2. Deploy via CLI

```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

### 3. Set Environment Variables

1. Go to **Site settings** → **Build & deploy** → **Environment**
2. Add your variables
3. Trigger redeploy

### 4. Configure Domain

1. Buy domain or connect existing
2. Update DNS records
3. Netlify provides instructions

### 5. Enable Functions (for API)

1. Create `netlify/functions/` directory
2. Move API routes there
3. Redeploy automatically

## Self-Hosted on DigitalOcean

### 1. Create Droplet

```bash
# Requirements: Ubuntu 20.04+, 1GB RAM, 25GB SSD

# Connect via SSH
ssh root@your_ip

# Update system
apt update && apt upgrade -y

# Install Node.js
curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash -
apt install -y nodejs

# Install Nginx
apt install -y nginx

# Install PM2
npm install -g pm2
```

### 2. Clone and Setup

```bash
cd /var/www
git clone https://github.com/yourusername/portfolio.git
cd portfolio

npm install
npm run build
```

### 3. Configure PM2

```bash
# Create ecosystem.config.js
cat > ecosystem.config.js << 'EOF'
module.exports = {
  apps: [{
    name: 'portfolio',
    script: 'npm',
    args: 'start',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
};
EOF

pm2 start ecosystem.config.js
pm2 save
```

### 4. Configure Nginx

```bash
# Create Nginx config
cat > /etc/nginx/sites-available/portfolio << 'EOF'
server {
  listen 80;
  server_name yourdomain.com;
  
  location / {
    proxy_pass http://localhost:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
  }
}
EOF

# Enable site
ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
nginx -t
systemctl restart nginx
```

### 5. SSL Certificate (Free)

```bash
apt install -y certbot python3-certbot-nginx
certbot --nginx -d yourdomain.com

# Auto-renewal
systemctl enable certbot.timer
```

### 6. Setup Environment Variables

```bash
# Create .env.local on server
cat > /var/www/portfolio/.env.local << 'EOF'
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=app-password
ADMIN_EMAIL=admin@example.com
N8N_WEBHOOK_URL=..
SLACK_WEBHOOK_URL=..
EOF

chmod 600 /var/www/portfolio/.env.local
```

## Docker Deployment

### Create Dockerfile

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

### Create docker-compose.yml

```yaml
version: '3.8'

services:
  portfolio:
    build: .
    ports:
      - "3000:3000"
    environment:
      - EMAIL_USER=${EMAIL_USER}
      - EMAIL_PASSWORD=${EMAIL_PASSWORD}
      - ADMIN_EMAIL=${ADMIN_EMAIL}
    restart: unless-stopped
```

### Deploy Docker

```bash
# Build
docker-compose build

# Run
docker-compose up -d

# View logs
docker-compose logs -f
```

## Post-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Test contact form submission
- [ ] Verify email notifications sent
- [ ] Test n8n webhooks
- [ ] Check mobile responsiveness
- [ ] Verify analytics tracking
- [ ] Test API endpoints
- [ ] Check loading performance
- [ ] Test 404 error page
- [ ] Verify SSL certificate
- [ ] Monitor error logs
- [ ] Set up uptime monitoring
- [ ] Configure CDN (optional)
- [ ] Set up backups
- [ ] Document deployment steps

## Monitoring & Maintenance

### Setup Monitoring

**Vercel**:
1. Go to Analytics
2. Monitor page performance
3. Check error tracking

**Netlify**:
1. Log in to dashboard
2. View deploy logs
3. Monitor functions

**Self-hosted**:
```bash
# Install monitoring
npm install -g pm2-monitoring
pm2 monitoring

# View logs
pm2 logs portfolio
```

### Updating Website

**Via Git** (Vercel/Netlify):
```bash
# Push changes to GitHub
git add .
git commit -m "Update portfolio"
git push origin main
# Auto-deployment happens!
```

**Self-hosted**:
```bash
cd /var/www/portfolio
git pull
npm install
npm run build
pm2 restart portfolio
```

### Backing Up Data

**Automated Backups**:
```bash
# Using n8n
- Schedule: Daily at 2 AM
- Action: Download Google Sheets
- Storage: AWS S3 / Dropbox
```

**Manual Backup**:
```bash
# Database backup
pg_dump portfolio_db > backup_$(date +%Y%m%d).sql

# Files backup
tar -czf portfolio_backup_$(date +%Y%m%d).tar.gz ./
```

## Troubleshooting Deployment

### Build Failures

Check logs:
```bash
# Vercel: View build logs in dashboard
# Netlify: View build logs in dashboard
# Local: npm run build
```

Common issues:
- Missing dependencies: `npm install`
- Node version mismatch: Check `package.json` engines
- Environment variable issues: Ensure all vars set

### Performance Issues

- Enable caching headers
- Use CDN for static assets
- Optimize images
- Monitor Core Web Vitals

### Database Errors

- Verify connection string
- Check database service running
- Review database logs
- Check backup status

## Security Best Practices

1. **Update Dependencies Regularly**
```bash
npm outdated
npm update
npm audit fix
```

2. **Monitor Security Advisories**
- GitHub: Security alerts
- npm: `npm audit`

3. **Rotate Secrets Regularly**
- Update API keys monthly
- Change email passwords
- Regenerate tokens

4. **Enable 2FA**
- GitHub account
- Email account
- n8n dashboard
- Cloud platform accounts

5. **HTTPS Only**
- Force HTTPS redirects
- Enable HSTS header

## Performance Optimization

### Enable Caching

In `next.config.js`:
```javascript
module.exports = {
  onDemandEntries: {
    maxInactiveAge: 60 * 1000,
    pagesBufferLength: 5,
  },
};
```

### Image Optimization

```javascript
<Image
  src="/image.jpg"
  alt="Description"
  width={500}
  height={300}
  priority // For above-fold images
/>
```

### Database Indexing

```sql
CREATE INDEX idx_projects_status ON projects(status);
CREATE INDEX idx_inquiries_date ON contacts(date_submitted);
```

## Rollback Strategy

### Vercel Rollback

1. Go to Deployments
2. Find previous deployment
3. Click three dots → Promote to Production

### GitHub Revert

```bash
git log --oneline
git revert <commit-hash>
git push origin main
```

## Useful Commands

```bash
# Check Node version
node --version

# Clear npm cache
npm cache clean --force

# List global packages
npm list -g --depth=0

# Check open ports
lsof -i :3000

# Kill process on port
kill -9 $(lsof -t -i:3000)
```

## Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com)
- [DigitalOcean Guides](https://www.digitalocean.com/docs/)
- [Next.js Deployment](https://nextjs.org/docs/deployment/static-export)

---

Successfully deployed! 🚀

