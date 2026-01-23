# 🚀 Quick Start Guide - Vijay Maniya Portfolio

## How to View Your Portfolio

### Method 1: Direct Browser Opening (Simplest)
1. Navigate to the portfolio folder
2. Double-click on `index.html`
3. Your default browser will open the portfolio

### Method 2: Using XAMPP (Recommended)
1. Copy the entire `portfolio` folder to `C:/xampp/htdocs/`
2. Start Apache in XAMPP Control Panel
3. Open browser and go to: `http://localhost/portfolio/`

### Method 3: Using VS Code Live Server
1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

## 📂 File Structure

```
portfolio/
├── index.html              # Main portfolio page
├── css/
│   └── portfolio.css       # All custom styles
├── js/
│   └── portfolio.js        # Interactive features
├── README.md              # Full documentation
├── QUICKSTART.md          # This file
└── images/                # (Create this folder for your images)
```

## ✏️ Customization Guide

### 1. Update Personal Information

**In `index.html`, find and update:**

```html
<!-- Line ~50: Your name -->
<h1 class="display-3 fw-bold mb-3">Vijay Maniya</h1>

<!-- Line ~52: Your title -->
<h2 class="h3 text-muted mb-4">
    <span class="typing-text">Web Developer & PHP Developer</span>
</h2>

<!-- Line ~55: Your description -->
<p class="lead mb-4">
    Your custom description here...
</p>

<!-- Line ~65: Social media links -->
<a href="YOUR_GITHUB_URL" class="social-icon">
<a href="YOUR_LINKEDIN_URL" class="social-icon">
<a href="YOUR_TWITTER_URL" class="social-icon">
<a href="mailto:YOUR_EMAIL" class="social-icon">
```

### 2. Update Contact Information

**Find these sections in `index.html`:**

```html
<!-- Email -->
<p class="mb-0 text-muted">vijaymaniya264@gmail.com</p>

<!-- Phone -->
<p class="mb-0 text-muted">+91 7265912623</p>

<!-- Location -->
<p class="mb-0 text-muted">Rajkot, Gujarat</p>
```

### 3. Adjust Skills & Percentages

**In the Skills section, update progress bars:**

```html
<!-- Example: Change HTML5 skill percentage -->
<div class="skill-item">
    <div class="d-flex justify-content-between mb-2">
        <span class="skill-name">HTML5 & CSS3</span>
        <span class="skill-percentage">90%</span> <!-- Change this -->
    </div>
    <div class="progress">
        <div class="progress-bar bg-primary" 
             style="width: 90%"></div> <!-- And this -->
    </div>
</div>
```

### 4. Add Your Projects

**Update project cards with your actual projects:**

```html
<div class="col-lg-4 col-md-6">
    <div class="project-card">
        <div class="project-image">
            <i class="bi bi-YOUR-ICON display-1 text-primary"></i>
        </div>
        <div class="project-content">
            <h4 class="project-title">Your Project Name</h4>
            <p class="project-description">
                Your project description...
            </p>
            <div class="project-tech">
                <span class="badge bg-primary">Tech 1</span>
                <span class="badge bg-info">Tech 2</span>
            </div>
            <div class="project-links mt-3">
                <a href="YOUR_DEMO_URL" class="btn btn-sm btn-outline-primary">
                    <i class="bi bi-eye me-1"></i>View Demo
                </a>
                <a href="YOUR_GITHUB_URL" class="btn btn-sm btn-outline-dark">
                    <i class="bi bi-github me-1"></i>Code
                </a>
            </div>
        </div>
    </div>
</div>
```

### 5. Change Colors

**Edit `css/portfolio.css` - CSS Variables:**

```css
:root {
    --primary-color: #2563eb;      /* Main blue color */
    --secondary-color: #1f2937;    /* Dark gray */
    --accent-color: #60a5fa;       /* Light blue */
    --text-dark: #1f2937;          /* Text color */
    --text-light: #6b7280;         /* Light text */
    --bg-light: #f9fafb;           /* Background */
}
```

### 6. Add Your Profile Image

**Replace the icon with an actual image:**

```html
<!-- Find this in the hero section -->
<div class="profile-img-wrapper">
    <!-- Replace this icon -->
    <i class="bi bi-person-circle display-1 text-primary"></i>
    
    <!-- With an actual image -->
    <img src="images/profile.jpg" alt="Vijay Maniya" class="img-fluid rounded-circle">
</div>
```

## 🎨 Color Schemes (Pre-made Options)

### Blue Theme (Current)
```css
--primary-color: #2563eb;
--accent-color: #60a5fa;
```

### Green Theme
```css
--primary-color: #10b981;
--accent-color: #34d399;
```

### Purple Theme
```css
--primary-color: #8b5cf6;
--accent-color: #a78bfa;
```

### Orange Theme
```css
--primary-color: #f59e0b;
--accent-color: #fbbf24;
```

## 📱 Testing Responsiveness

1. Open portfolio in browser
2. Press `F12` to open Developer Tools
3. Click the device toggle icon (or press `Ctrl+Shift+M`)
4. Test different screen sizes:
   - Mobile: 375px
   - Tablet: 768px
   - Desktop: 1920px

## ✅ Checklist Before Going Live

- [ ] Updated all personal information
- [ ] Changed email and phone numbers
- [ ] Updated social media links
- [ ] Added real project descriptions
- [ ] Adjusted skill percentages
- [ ] Added profile image (optional)
- [ ] Added project screenshots (optional)
- [ ] Tested on mobile devices
- [ ] Tested contact form
- [ ] Checked all links work
- [ ] Verified responsive design
- [ ] Tested in different browsers

## 🐛 Common Issues & Solutions

### Issue: Styles not loading
**Solution:** Check that `portfolio.css` is in the `css/` folder

### Issue: JavaScript not working
**Solution:** Check that `portfolio.js` is in the `js/` folder

### Issue: Bootstrap not loading
**Solution:** Check your internet connection (Bootstrap loads from CDN)

### Issue: Contact form not sending emails
**Solution:** The form currently has client-side validation only. To send emails, you need to add PHP backend code.

## 📧 Contact Form Backend (Optional)

To make the contact form actually send emails, create `contact.php`:

```php
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);
    
    $to = "vijaymaniya264@gmail.com";
    $headers = "From: " . $email;
    
    if (mail($to, $subject, $message, $headers)) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false]);
    }
}
?>
```

Then update the form action in `index.html`:
```html
<form id="contactForm" action="contact.php" method="POST">
```

## 🚀 Deployment Options

### 1. GitHub Pages (Free)
1. Create GitHub repository
2. Upload portfolio files
3. Enable GitHub Pages in settings
4. Access at: `username.github.io/portfolio`

### 2. Netlify (Free)
1. Sign up at netlify.com
2. Drag and drop portfolio folder
3. Get instant URL

### 3. Shared Hosting
1. Purchase hosting (Hostinger, Bluehost, etc.)
2. Upload via FTP
3. Access via your domain

## 💡 Tips

- Keep your portfolio updated with new projects
- Add real screenshots of your work
- Update skills as you learn new technologies
- Test on multiple devices before sharing
- Get feedback from friends/colleagues
- Keep the design clean and professional

## 📞 Need Help?

If you encounter any issues:
1. Check the README.md for detailed documentation
2. Review the code comments in HTML/CSS/JS files
3. Test in different browsers
4. Check browser console for errors (F12)

---

**Happy Coding! 🎉**

*Your portfolio is ready to showcase your amazing work!*
