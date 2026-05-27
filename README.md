# 📄 Student Report Generator using Google Apps Script

This project automatically generates personalized Google Docs reports from student data stored in Google Sheets using Google Apps Script.

---

## 🚀 Features
- Reads student data directly from Google Sheets
- Automatically generates individual Google Docs for each student
- Uses a pre-designed Google Docs template
- Replaces placeholders with real data
- Saves time by eliminating manual report creation

---

## 🧠 How It Works
1. Student data is stored in a Google Sheet:
   - Name
   - Level
   - Summary
   - Points

2. A Google Docs template is created with placeholders like:
   - `{{NAME}}`
   - `{{LEVEL}}`
   - `{{SUMMARY}}`
   - `{{POINTS}}`

3. The script:
   - Reads each row from the sheet
   - Copies the template
   - Replaces placeholders with actual values
   - Generates a new document for each student

---

## 🛠️ Tech Stack
- Google Apps Script
- Google Sheets
- Google Docs
- Google Drive API (via Apps Script services)

---
