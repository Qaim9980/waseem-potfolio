# 🚀 GitHub Upload & Deployment Guide
### Portfolio Website → GitHub → Vercel → name.com Domain

---

## ✅ BEFORE YOU UPLOAD — Code is Already Ready

Your code is fully prepared for upload. Here's what's already in place:

- `.gitignore` — blocks `.env.local`, `node_modules/`, `.next/` from being uploaded
- `.env.local.example` — safe template (no real secrets)
- `next.config.js` — configured for production
- `.github/workflows/deploy.yml` — CI/CD pipeline already exists

> ⚠️ Your real `.env.local` file will **NOT** be uploaded (it's in `.gitignore`). Good.

---

## STEP 1 — Create GitHub Repository

1. Go to **https://github.com/new**
2. Fill in:
   - Repository name: `portfolio` (or any name you like)
   - Description: `My professional portfolio website`
   - Visibility: **Public** ✅ (required for free Vercel hosting)
   - ❌ Do NOT check "Add README" (you already have one)
3. Click **"Create repository"**

---

## STEP 2 — Initialize Git & Push Your Code

Open your terminal in the project folder and run these commands **one by one**:

```bash
# 1. Go to your project folder
cd /mnt/i/profolio

# 2. Initialize git (if not already done)
git init

# 3. Add all files (gitignore will block secrets automatically)
git add .

# 4. Check what's being added (optional but recommended)
git status

# 5. Create your first commit
git commit -m "Initial commit: Portfolio website with n8n automation"

# 6. Set main branch
git branch -M main

# 7. Connect to your GitHub repo (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# 8. Push to GitHub
git push -u origin main
```

> 💡 Replace `YOUR_USERNAME` with your GitHub username and `REPO_NAME` with the repo name you created.

---

## STEP 3 — Deploy on Vercel (Free Hosting)

Vercel is the best platform for Next.js. It's free and works perfectly.

### 3.1 Connect GitHub to Vercel

1. Go to **https://vercel.com** → Sign up / Log in with GitHub
2. Click **"Add New Project"**
3. Click **"Import"** next to your portfolio repository
4. Vercel will auto-detect it's a Next.js project

### 3.2 Configure Environment Variables on Vercel

Before deploying, add your environment variables:

1. On the deployment screen, open **"Environment Variables"**
2. Add these one by one (copy from your `.env.local` file):

| Name | Value |
|------|-------|
| `EMAIL_SERVICE` | `gmail` |
| `EMAIL_USER` | your Gmail address |
| `EMAIL_PASSWORD` | your Gmail app password |
| `ADMIN_EMAIL` | your admin email |
| `SLACK_WEBHOOK_URL` | your Slack webhook (optional) |
| `N8N_WEBHOOK_URL` | your n8n webhook URL (optional) |

3. Click **"Deploy"**

### 3.3 Wait for Build

- Vercel will build your project automatically
- Takes about 1–2 minutes
- You'll get a free URL like: `https://portfolio-xyz.vercel.app`
- Test it — make sure everything works!

---

## STEP 4 — Connect name.com Domain to Vercel

### 4.1 Add Domain in Vercel

1. Go to your Vercel project dashboard
2. Click **"Settings"** → **"Domains"**
3. Type your domain: `yourdomain.com`
4. Click **"Add"**
5. Also add: `www.yourdomain.com`
6. Vercel will show you DNS records to configure

### 4.2 Configure DNS on name.com

1. Log in to **https://www.name.com**
2. Go to **"My Domains"** → click your domain
3. Click **"DNS Records"** (or "Manage DNS")
4. **Delete** any existing A records for `@` (root domain)
5. Add the following records:

**For root domain (`yourdomain.com`):**
| Type | Host | Answer/Value | TTL |
|------|------|--------------|-----|
| `A` | `@` | `76.76.21.21` | 300 |

**For www subdomain:**
| Type | Host | Answer/Value | TTL |
|------|------|--------------|-----|
| `CNAME` | `www` | `cname.vercel-dns.com` | 300 |

> 💡 Vercel will show the exact values in their dashboard — always use those if different.

### 4.3 Wait for DNS Propagation

- DNS changes take **5 minutes to 48 hours** to fully propagate
- Usually works within **15–30 minutes**
- Check status at: https://dnschecker.org

### 4.4 SSL Certificate

- Vercel automatically issues a free SSL certificate
- Your site will be accessible via `https://yourdomain.com`
- No extra setup needed

---

## STEP 5 — Update n8n Webhook URL

Once your domain is live, update your n8n webhook URL:

1. In Vercel → Settings → Environment Variables
2. Update `N8N_WEBHOOK_URL` to `https://yourdomain.com`
3. Redeploy: Vercel → Deployments → click the three dots → "Redeploy"

---

## STEP 6 — Future Updates (How to Push Changes)

Every time you make changes to your code:

```bash
# Add changed files
git add .

# Commit with a description
git commit -m "Update: describe what you changed"

# Push to GitHub
git push

# Vercel auto-deploys within 1-2 minutes ✅
```

---

## 🗂️ What Gets Uploaded vs Blocked

| Files/Folders | Uploaded? | Reason |
|---------------|-----------|--------|
| `pages/` | ✅ Yes | Your website code |
| `components/` | ✅ Yes | React components |
| `public/` | ✅ Yes | Images & assets |
| `styles/` | ✅ Yes | CSS files |
| `n8n-workflows/` | ✅ Yes | Workflow templates |
| `package.json` | ✅ Yes | Dependencies list |
| `.env.local.example` | ✅ Yes | Safe template |
| `README.md` | ✅ Yes | Documentation |
| `.gitignore` | ✅ Yes | Git config |
| `.env.local` | ❌ NO | Contains your secrets |
| `node_modules/` | ❌ NO | Too large, auto-reinstalled |
| `.next/` | ❌ NO | Build files, auto-generated |

---

## 🛠️ Troubleshooting

**Build fails on Vercel?**
- Check the build logs in Vercel dashboard
- Make sure all environment variables are set
- Run `npm run build` locally first to catch errors

**Domain not working after DNS change?**
- Wait up to 48 hours for propagation
- Clear your browser cache
- Try in incognito mode
- Check DNS at https://dnschecker.org

**Contact form not sending emails?**
- Verify `EMAIL_USER` and `EMAIL_PASSWORD` are set in Vercel
- Make sure you're using a Gmail App Password (not your regular password)
- Check Vercel function logs under "Functions" tab

**Git push rejected?**
```bash
# If remote already has commits
git pull origin main --allow-unrelated-histories
git push -u origin main
```

---

## 📋 Quick Checklist

- [ ] GitHub repository created
- [ ] `git init` done
- [ ] `git add .` and `git commit` done
- [ ] `git push` to GitHub successful
- [ ] Vercel account created and linked to GitHub
- [ ] Environment variables added in Vercel
- [ ] Vercel deployment successful — test the `.vercel.app` URL
- [ ] Domain added in Vercel settings
- [ ] DNS A record set on name.com → `76.76.21.21`
- [ ] DNS CNAME set for `www` → `cname.vercel-dns.com`
- [ ] SSL certificate active (auto by Vercel)
- [ ] Final test on custom domain ✅

---

## 🔗 Useful Links

- GitHub: https://github.com
- Vercel: https://vercel.com
- name.com DNS: https://www.name.com/account/domain/details/YOUR_DOMAIN#dns
- DNS Checker: https://dnschecker.org
- Vercel Docs (Custom Domains): https://vercel.com/docs/projects/domains
- Gmail App Passwords: https://myaccount.google.com/apppasswords
