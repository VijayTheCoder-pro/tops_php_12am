# 3. Responsive Web Design

## 1. What is responsive web design? Why is it important?

Responsive web design means creating a website that automatically adjusts itself according to the screen size of the device.  
The same website works properly on mobile phones, tablets, laptops, and desktops.  
In responsive design, layout, images, text size, and navigation change smoothly based on screen width.

Earlier, websites were made only for computers.  
But today, most people use mobile phones to browse the internet.  
So, responsive web design has become very important.

### Importance of Responsive Web Design

- It provides a better user experience on all devices.
- Users do not need to zoom or scroll sideways.
- It helps websites rank better in search engines (SEO).
- One website works for all devices, so it saves time and cost.
- It makes the website look professional and modern.

Because of these reasons, responsive web design is necessary in today's web development.

## 2. Explain the use of media queries in CSS. Provide an example.

Media queries are a feature of CSS used to make websites responsive.  
They allow us to apply different CSS styles for different screen sizes.  
Media queries check conditions like screen width, height, and device type.

Using media queries, we can change layout, font size, or colors for mobile and desktop screens.  
This helps the website look good on every device.

### Syntax of Media Query

```css
@media (condition) {
    CSS code
}
```

### Example of Media Query

```css
@media (max-width: 768px) {
    body {
        background-color: lightgray;
    }

    h1 {
        font-size: 20px;
    }
}
```

**Explanation:**  
When the screen width becomes 768px or smaller, the background color changes and heading size becomes smaller.  
This is useful for mobile and tablet screens.

Media queries are the main reason websites become responsive.

## 3. What are the benefits of using a mobile-first approach in web design?

Mobile-first approach means designing the website for mobile devices first, then adjusting it for larger screens like tablets and desktops.  
In this approach, we focus on important content first.

Nowadays, most users access websites through mobile phones.  
So, designing for mobile first is a smart and practical choice.

### Benefits of Mobile-First Approach

- Better experience for mobile users.
- Website loads faster on small devices.
- Improves SEO ranking because search engines prefer mobile-friendly sites.
- Keeps design simple and clean.
- Makes scaling to larger screens easy.

Mobile-first approach helps developers create efficient and user-friendly websites.
