# Student Internship Email Automation System

A modern web-based **Internship Application Form** built with **React + Vite + Tailwind CSS**, designed to automate internship inquiry emails for students across multiple domains.

This project allows students to submit their details and automatically trigger a **pre-filled internship email** to the organization, reducing manual effort and improving response consistency.

---

## 🚀 Features

- Clean and responsive Internship Application UI
- Domain-based internship selection
- Automated email generation using `mailto`
- Modern UI styled with Tailwind CSS
- Fast development and build using Vite
- Mobile-friendly and lightweight

---

## 📝 Internship Form Fields

- Full Name  
- College Name  
- Education (e.g., B.Tech, MCA)  
- Internship Domain (Dropdown)
  - Frontend Development  
  - Backend Development  
  - Machine Learning  
  - Data Analytics  
  - Human Resources  
  - Digital Marketing  
- Contact Number  
- Email ID  
- Resume Google Drive Link  

---

## 🛠️ Tech Stack

**Frontend**
- React 19
- React Router DOM
- Vite

**Styling**
- Tailwind CSS
- PostCSS
- Autoprefixer

**Tooling**
- ESLint
- GitHub Version Control

---

## 📁 Project Structure

```
student-email-automation/
│
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   └── main.jsx
│
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── README.md
```

---

## ⚙️ Installation & Setup

Clone the repository:

```bash
git clone https://github.com/Flansh1137/student-email-automation.git
```

Navigate to the project directory:

```bash
cd student-email-automation
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## 📧 How Email Automation Works

- User fills out the internship form
- On submission, a **pre-structured email** opens in the user’s default mail client
- Email content includes:
  - Student details
  - Selected internship domain
  - Resume link
- Ensures standardized internship communication

## 🎯 Use Cases

- Training Institutes
- IT Companies
- Startups
- Colleges managing internship outreach
- NGOs or EdTech platforms
  
## 📌 Future Enhancements

- Backend email automation (Node.js / SMTP)
- Database integration for applicant storage
- Admin dashboard for application tracking
- Resume upload validation
- CAPTCHA & form validation

👨‍💻 **Flansh Gajbhiye**  
Full Stack Developer  
GitHub: https://github.com/Flansh1137  
