# n8n Workflows Setup Guide

This guide provides detailed instructions for setting up each n8n workflow for your portfolio website automation.

## Prerequisites

Before setting up workflows, ensure you have:

1. **n8n Instance**
   - Self-hosted: `http://localhost:5678`
   - Or cloud version at https://n8n.cloud

2. **Google Cloud Project**
   - Create a project at https://console.cloud.google.com
   - Enable APIs: Google Sheets, Google Forms, Google Calendar
   - Create service account or OAuth credentials

3. **Email Service**
   - Gmail with 2FA and app password
   - Or alternative (SendGrid, Mailgun, etc.)

4. **Optional: Slack Workspace**
   - Create a Slack app
   - Generate webhook URL

## Common n8n Setup

### 1. Add Google Sheets Credentials

1. Go to **Credentials** in n8n
2. Click **New**
3. Select **Google Sheets**
4. Follow OAuth flow or upload service account JSON
5. Save credentials

### 2. Add Email Credentials

1. Go to **Credentials** in n8n
2. Click **New**
3. Select **Email** (or specific service like Gmail)
4. Add your credentials:
   ```
   Email: your-email@gmail.com
   Password: app-specific-password (for Gmail)
   ```
5. Save credentials

### 3. Add Slack Credentials

1. Go to **Credentials** in n8n
2. Click **New**
3. Select **Slack**
4. Add webhook URL from your Slack app
5. Save credentials

## Workflow 1: Add New Project to Portfolio

### Purpose
Automatically update portfolio when new projects are added to Google Sheets.

### Setup Steps

1. **Create Google Sheet**
   - Sheet name: "Projects"
   - Columns: title, description, image, tags, github, live

2. **Import Workflow**
   - Copy content from `1-add-project-workflow.json`
   - Create new workflow in n8n
   - Paste JSON

3. **Configure Nodes**

   **Node: Google Sheets Trigger**
   - Operation: Watch new rows
   - Document ID: Your Google Sheet ID
   - Sheet: Projects
   - Save credentials

   **Node: Fetch project data**
   - Similar Google Sheets config
   - Filter for latest row

   **Node: HTTP Request**
   - URL: `http://your-portfolio.com/api/projects`
   - Method: POST
   - Body: Project data from spreadsheet

   **Node: Slack**
   - Channel: #projects
   - Message: Notification about new project

4. **Test**
   - Add row to Google Sheet
   - Execute workflow manually
   - Check logs for success

### Trigger Options

```n8n
// Every 5 minutes
{
  "trigger": "interval",
  "interval": 5
}

// On row addition
{
  "trigger": "new_row",
  "documentId": "YOUR_SHEET_ID"
}
```

## Workflow 2: Handle Contact Form Submissions

### Purpose
Process contact form submissions with confirmation emails and logging.

### Setup Steps

1. **Create Webhook**
   - In n8n, add Webhook node
   - Set path: `/webhook/contact`
   - Note the full webhook URL

2. **Update Contact API**
   - Edit `pages/api/contact.js`
   - Add webhook posting:
   ```javascript
   // After form validation
   await fetch(process.env.N8N_WEBHOOK_URL, {
     method: 'POST',
     body: JSON.stringify({ name, email, subject, message })
   });
   ```

3. **Import Workflow**
   - Copy from `2-contact-form-workflow.json`
   - Create workflow in n8n

4. **Configure Nodes**

   **Node: Webhook**
   - Use the webhook URL from step 1
   - Method: POST

   **Node: Email - Acknowledgment**
   - Recipient: `{{ $node.Webhook.json.email }}`
   - Subject: "Thank you for contacting us"
   - Body: Acknowledgment message

   **Node: Google Sheets**
   - Log all contact entries
   - Add timestamp for tracking

   **Node: Slack**
   - Alert about new inquiry
   - Include sender info and subject

5. **Test**
   - Submit contact form on portfolio
   - Check Gmail for confirmation
   - Verify Google Sheets entry
   - Check Slack notification

### Form Field Mapping

```json
{
  "name": "Full Name",
  "email": "Email Address",
  "subject": "Inquiry Subject",
  "message": "Message Text"
}
```

## Workflow 3: Update Testimonials Section

### Purpose
Automatically add and display new client testimonials.

### Setup Steps

1. **Create Google Form**
   - Form title: "Client Testimonial"
   - Fields:
     - Full Name (required)
     - Company Name
     - Your Role
     - Testimonial (required)
     - Rating (1-5 scale)

2. **Create Google Sheet for Testimonials**
   - Sheet name: "Testimonials"
   - Spreadsheet linked to Google Form

3. **Import Workflow**
   - Copy from `3-testimonials-workflow.json`
   - Create workflow in n8n

4. **Configure Nodes**

   **Node: Google Forms Trigger**
   - Form ID: Your Google Form ID
   - Trigger: New form response

   **Node: Google Sheets - Append**
   - Document: Testimonials sheet
   - Columns:
     ```
     name -> {{ $node.Webhook.json.name }}
     company -> {{ $node.Webhook.json.company }}
     role -> {{ $node.Webhook.json.role }}
     testimonial -> {{ $node.Webhook.json.testimonial }}
     rating -> {{ $node.Webhook.json.rating }}
     timestamp -> {{ now() }}
     ```

   **Node: HTTP Request**
   - POST to `/api/testimonials`
   - Send testimonial data

   **Node: Slack**
   - Notify about new testimonial
   - Show rating and quote

5. **Test**
   - Submit Google Form
   - Check Google Sheets update
   - Verify API POST
   - Check Slack notification

## Workflow 4: Resume/CV Update Reminder

### Purpose
Send scheduled reminders to update resume/CV.

### Setup Steps

1. **Import Workflow**
   - Copy from `4-resume-reminder-workflow.json`

2. **Configure Cron Node**
   - Frequency: Weekly (Monday 9 AM)
   - Expression: `0 9 * * 1`

3. **Configure Nodes**

   **Node: Cron Schedule**
   - Run: `0 9 * * 1` (Every Monday 9 AM UTC)

   **Node: Email Reminder**
   - To: Your email
   - Subject: "Weekly CV Update Reminder"
   - Include: Checklist of what to review

   **Node: Google Calendar**
   - Fetch upcoming events
   - Display on reminder

   **Node: Slack**
   - Confirm reminder sent
   - Channel: #reminders

### Cron Expressions

```
0 9 * * 1     -> Every Monday at 9 AM
0 0 * * *     -> Every day at midnight
0 8-17 * * *  -> Every hour 8 AM - 5 PM
0 0 1 * *     -> First day of month
```

## Workflow 5: Publish New Blog Posts

### Purpose
Automatically publish and promote new blog posts.

### Setup Steps

1. **Create Blog Sheet**
   - Sheet name: "Blog Posts"
   - Columns: title, excerpt, content, author, date, image, tags

2. **Create Subscriber List**
   - Sheet or Airtable for email subscribers

3. **Import Workflow**
   - Copy from `5-blog-publication-workflow.json`

4. **Configure Nodes**

   **Node: Google Sheets**
   - Watch for new rows with status: "Ready to Publish"
   - Filter only published posts

   **Node: HTTP Request**
   - POST to `/api/blog`
   - Send blog data

   **Node: Slack**
   - Post to #blog channel
   - Include title, excerpt, link

   **Node: Email**
   - Fetch subscribers
   - Send announcement

5. **Test**
   - Add blog post to sheet
   - Mark as ready to publish
   - Verify all notifications

## Testing Workflows

### Manual Testing

1. n8n Dashboard
2. Select workflow
3. Click "Test" or "Execute"
4. Check execution logs
5. Verify outputs

### Debug Mode

```javascript
// Log values in n8n expressions
{{ JSON.stringify($node.NodeName.json) }}

// Check variables
{{ $env.VARIABLE_NAME }}

// Test conditions
{{ $node.Input.json.email !== null }}
```

## Error Handling

### Common Issues

**"Invalid Google Sheets ID"**
- Copy full ID from sheet URL: `docs.google.com/spreadsheets/d/[ID]/`

**"Email sending failed"**
- Verify credentials
- Check email service limits
- Verify recipient address

**"Slack webhook not working"**
- Verify webhook URL is current
- Check channel permissions
- Verify Slack app scopes

### Retry Logic

Add to any node that might fail:

```json
{
  "retryNumber": 3,
  "waitTime": 5000
}
```

## Monitoring

### View Execution History

1. Go to workflow
2. Click "Executions" tab
3. View timestamps, status, logs

### Set Up Alerts

1. Add error handling nodes
2. Send alert to Slack on failure
3. Log errors to database

## Best Practices

1. **Test First**
   - Test each workflow with real data
   - Verify all connections work

2. **Error Handling**
   - Add error nodes for robustness
   - Log failures for debugging

3. **Scheduling**
   - Avoid peak hours
   - Space out scheduled workflows
   - Monitor resource usage

4. **Security**
   - Use environment variables for secrets
   - Rotate API keys regularly
   - Limit webhook access

5. **Documentation**
   - Document custom expressions
   - Comment workflow purpose
   - Keep integration notes

## Webhooks Reference

### Contact Form Webhook

**URL**: `https://your-n8n.com/webhook/contact`

**Method**: POST

**Body**:
```json
{
  "name": "string",
  "email": "string",
  "subject": "string",
  "message": "string"
}
```

### Project Update Webhook

**Path**: `POST /webhook/project`

```json
{
  "title": "string",
  "description": "string",
  "image": "url",
  "tags": ["string"]
}
```

## Support & Resources

- [n8n Docs](https://docs.n8n.io)
- [Google Sheets API](https://developers.google.com/sheets)
- [Slack API](https://api.slack.com)
- [n8n Community](https://community.n8n.io)

---

For more help, check the main README.md or review n8n execution logs.
