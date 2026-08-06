# Google Sheets Integration Guide

Complete guide to setting up and using Google Sheets as your portfolio data source.

## Overview

Google Sheets serves as your CMS (Content Management System) for:
- Portfolio projects
- Blog posts
- Testimonials
- Contact inquiries
- Team members
- Skill categories

## Getting Started

### 1. Create Google Cloud Project

1. Go to https://console.cloud.google.com
2. Create a new project
3. Name it: "Portfolio Dashboard"
4. Enable APIs:
   - Google Sheets API
   - Google Forms API
   - Google Calendar API (optional)

### 2. Generate Credentials

**For n8n Integration:**

1. Go to **APIs & Services** → **Credentials**
2. Click **Create Credentials** → **Service Account**
3. Fill in details
4. Create key (JSON)
5. Download and save safely

**For API Access:**

1. Create OAuth 2.0 Credentials
2. Application type: Web application
3. Add authorized redirect URIs
4. Download credentials

### 3. Create Master Spreadsheet

1. Go to https://docs.google.com/spreadsheets
2. Create new spreadsheet: "Portfolio Master Data"
3. Get the Sheet ID from URL: `...d/[SHEET_ID]/...`

## Sheet Structures

### Sheet 1: Projects

```
Column A: ID (auto-increment)
Column B: Title (required)
Column C: Description (required)
Column D: Category (Web, Mobile, Automation)
Column E: Image URL
Column F: Technologies (comma-separated)
Column G: GitHub Link
Column H: Live Link
Column I: Start Date
Column J: End Date
Column K: Status (Active, Completed, Archived)
Column L: Featured (Yes/No)
Column M: Date Added
Column N: Last Modified
```

**Example Data**:
```
1, E-Commerce Platform, Full-stack solution, Web, https://..., React/Node.js, https://github.com/..., https://..., 2023-01-01, 2023-06-01, Completed, Yes, 2023-01-01, 2024-02-08
```

### Sheet 2: Blog Posts

```
Column A: ID
Column B: Title (required)
Column C: Excerpt (required)
Column D: Content (required)
Column E: Author
Column F: Category (Web Dev, Automation, etc.)
Column G: Tags (comma-separated)
Column H: Featured Image URL
Column I: Publish Date
Column J: Status (Draft, Published, Archived)
Column K: Slug (auto-generated from title)
Column L: Views
Column M: Date Created
```

### Sheet 3: Testimonials

```
Column A: ID
Column B: Client Name (required)
Column C: Company Name
Column D: Position/Role
Column E: Testimonial Text (required)
Column F: Rating (1-5)
Column G: Client Photo URL
Column H: Email (for follow-up)
Column I: Date Submitted
Column J: Status (Pending, Approved, Published)
Column K: Featured (Yes/No)
```

### Sheet 4: Contact Inquiries

```
Column A: ID
Column B: Name (required)
Column C: Email (required)
Column D: Phone
Column E: Subject (required)
Column F: Message (required)
Column G: Service Interested In
Column H: Budget (if mentioned)
Column I: Date Submitted
Column J: IP Address
Column K: Status (New, Contacted, In Progress, Completed)
Column L: Assigned To
Column M: Notes
```

### Sheet 5: Skills & Expertise

```
Column A: Category (Frontend, Backend, Tools, etc.)
Column B: Skill Name (required)
Column C: Proficiency Level (1-5)
Column D: Years of Experience
Column E: Certifications
Column F: Date Last Updated
```

### Sheet 6: Experience

```
Column A: Company Name
Column B: Position
Column C: Duration (Start Date)
Column D: Duration (End Date)
Column E: Description
Column F: Technologies Used
Column G: Achievements
```

### Sheet 7: Subscribers

```
Column A: ID
Column B: Email (required)
Column C: Name
Column D: Date Subscribed
Column E: Status (Active, Unsubscribed, Bounced)
Column F: Source (Form, Website, Referral)
```

## Using the Data

### Fetching in n8n

**Simple GET**:
```javascript
// Fetch all projects
node.parameters = {
  resource: 'sheet',
  operation: 'read',
  documentId: 'YOUR_SHEET_ID',
  sheetName: 'Projects',
  options: { limit: 100 }
}
```

**With Filtering**:
```javascript
node.parameters = {
  resource: 'sheet',
  operation: 'read',
  documentId: 'YOUR_SHEET_ID',
  sheetName: 'Projects',
  where: { Status: 'Completed' }
}
```

**Append New Row**:
```javascript
node.parameters = {
  resource: 'sheet',
  operation: 'append',
  documentId: 'YOUR_SHEET_ID',
  sheetName: 'Contact Inquiries',
  columns: {
    Name: 'John Doe',
    Email: 'john@example.com',
    Subject: 'Project Inquiry',
    'Date Submitted': new Date().toISOString()
  }
}
```

### Fetching in API Routes

```javascript
// pages/api/projects.js
export default async function handler(req, res) {
  try {
    // Call Google Sheets API
    const response = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/Projects?key=${API_KEY}`
    );
    const data = await response.json();
    
    // Transform data
    const projects = data.values.slice(1).map(row => ({
      id: row[0],
      title: row[1],
      description: row[2],
      // ... map other columns
    }));
    
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch projects' });
  }
}
```

## Data Validation

### Add Data Validation to Sheets

1. Select column range
2. Data → Validation
3. Choose criteria:

**For Rating Column** (1-5):
- Type: Number
- Criteria: Between 1 and 5

**For Status Column**:
- Type: List of items
- Options: Draft, Published, Archived

**For Email Column**:
- Type: Custom formula
- Formula: `=ISTEXT(A2)`

## Formulas for Automation

### Auto-increment ID
```
=IF(ROW()=2,1,A1+1)
```

### Auto-populate Current Date
```
=TODAY()
```

### Auto-generate Slug from Title
```
=LOWER(REGEX(B2,"[^A-Za-z0-9-]","","g"))
```

### Calculate Years of Experience
```
=DATEDIF(C2,TODAY(),"Y")
```

### Featured Items Count
```
=COUNTIF(L:L,"Yes")
```

## Sharing & Permissions

### For n8n Access

1. Share spreadsheet with service account email
2. Grant "Editor" permissions
3. Share link: Get from share button

### For Team Collaboration

1. Share with team members
2. Set "Viewer" or "Editor" based on role
3. Leave comments for updates
4. Enable notification rules

### Public Access (Optional)

1. Make sheet "Publicly viewable"
2. Use public link in portfolio
3. Add form for public submissions

## Integration with Third Parties

### Zapier Integration

```
Trigger: New row added to Projects sheet
Action: 
  - Post to Slack
  - Send email notification
  - Add to Airtable
```

### Forms Integration

Connect Google Form → Google Sheet:

1. Create form
2. Click **Responses**
3. Choose **Create spreadsheet**
4. Form responses auto-populate sheet

## Data Backup & Security

### Backup Strategy

1. **Manual Backup**:
   - File → Download → Excel/PDF

2. **Automatic Sync**:
   - Use n8n to backup daily
   - Save to Google Drive backup folder

3. **Version Control**:
   - Enable version history
   - See all changes by date

### Security Tips

1. **Never share real data publicly**
2. **Use service accounts for automation**
3. **Limit column access if needed**
4. **Audit share settings monthly**
5. **Enable 2FA for Google account**
6. **Regularly review access logs**

## Maintenance

### Weekly Tasks

- [ ] Review new contact inquiries
- [ ] Update project progress
- [ ] Approve new testimonials
- [ ] Check blog post status

### Monthly Tasks

- [ ] Archive completed projects
- [ ] Clean up spam inquiries
- [ ] Review analytics/views
- [ ] Test automation workflows

### Quarterly Tasks

- [ ] Update skills proficiency
- [ ] Review and update experience
- [ ] Archive old blog posts
- [ ] Verify all links are working

## Example Scripts

### Create Backup of Sheet

```javascript
function backupSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const copy = ss.copy('Portfolio Backup - ' + new Date());
  Logger.log('Backup created: ' + copy.getUrl());
}
```

### Cleanup Old Inquiries

```javascript
function cleanupOldInquiries() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const data = sheet.getDataRange().getValues();
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
  
  for (let i = data.length - 1; i > 0; i--) {
    if (data[i][9] === 'Completed' && new Date(data[i][8]) < thirtyDaysAgo) {
      sheet.deleteRow(i + 1);
    }
  }
}
```

## Troubleshooting

### Sheet Not Updating

- Check n8n execution logs
- Verify service account has editor access
- Confirm sheet name matches exactly
- Check API quota limits

### Authorization Errors

1. Verify credentials are up to date
2. Re-authenticate service account
3. Check share settings
4. Ensure APIs are enabled

## Resources

- [Google Sheets API Docs](https://developers.google.com/sheets/api)
- [Google Forms Documentation](https://support.google.com/docs/answer/6281888)
- [Zapier Integration Guides](https://zapier.com/zapbook/google-sheets/)

---

Your Google Sheets is now set up as your portfolio data source!
