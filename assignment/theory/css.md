## 2. What is CSS? How does it differ from HTML?

CSS stands for Cascading Style Sheets.  
CSS is used to style and design web pages.  
It controls how elements look, such as color, size, layout, spacing, and fonts.  
CSS makes the website attractive and user-friendly.

HTML and CSS have different roles:

- HTML is used to create structure of the web page.
- CSS is used to design and decorate that structure.
- HTML shows what content is on the page.
- CSS shows how that content should look.

**Example:**  
HTML creates a paragraph, while CSS changes its color or font size.

## 3. Explain the three ways to apply CSS to a web page.

There are three ways to apply CSS in a web page.

### 1. Inline CSS

Inline CSS is written inside an HTML tag.  
It affects only that single element.  
It is not recommended for large projects.

**Example:**

```html
<p style="color: red;">This is a paragraph</p>
```

### 2. Internal CSS

Internal CSS is written inside the `<style>` tag.  
It is placed inside the `<head>` section.  
It affects one full HTML page.

**Example:**

```html
<head>
<style>
p {
    color: blue;
}
</style>
</head>
```

### 3. External CSS

External CSS is written in a separate .css file.  
It is linked with HTML using the `<link>` tag.  
It is the best and most professional method.

**Example:**

```html
<link rel="stylesheet" href="style.css">
```

## 3. What are CSS selectors? List and describe the different types of selectors.

CSS selectors are used to select HTML elements.  
They tell CSS which element should be styled.

### Types of CSS Selectors

1. **Element Selector**  
   Selects HTML elements by tag name.

   **Example:**

   ```css
   p {
       color: red;
   }
   ```

2. **Class Selector**  
   Selects elements using class name.  
   It starts with a dot (.).

   **Example:**

   ```css
   .box {
       background-color: yellow;
   }
   ```

3. **ID Selector**  
   Selects an element using its ID.  
   It starts with a hash (#).  
   ID should be unique.

   **Example:**

   ```css
   #main {
       width: 100%;
   }
   ```

4. **Universal Selector**  
   Selects all elements on the page.

   **Example:**

   ```css
   * {
       margin: 0;
       padding: 0;
   }
   ```

5. **Group Selector**  
   Used to apply same style to multiple elements.

   **Example:**

   ```css
   h1, p, div {
       color: green;
   }
   ```

## 4. What is the box model in CSS? Explain its components.

The CSS box model explains how elements are designed and spaced on a webpage.  
Every HTML element is treated as a rectangular box.

### Components of Box Model

- **Content**  
  This is the actual text or image inside the element.

- **Padding**  
  Space between content and border.

- **Border**  
  A line that surrounds the padding and content.

- **Margin**  
  Space outside the border that separates elements.

**Example:**

```css
div {
    margin: 10px;
    padding: 15px;
    border: 2px solid black;
}
```
