# 1. What is HTML? Explain its structure.

HTML stands for HyperText Markup Language.

HTML is the basic language used to create web pages. It helps us to structure the content like text, images, links, and headings on a website. HTML does not perform logic like programming languages, so it is called a markup language.

An HTML document follows a fixed structure which helps the browser understand the page properly.

```html
<!DOCTYPE html>
<html>
<head>
    <title>My Web Page</title>
</head>
<body>
    <h1>Hello World</h1>
    <p>This is a paragraph.</p>
</body>
</html>
```

In this structure:

- `<!DOCTYPE html>` defines the document type.
- `<html>` is the main container of the page.
- `<head>` contains information about the page.
- `<title>` shows the title on the browser tab.
- `<body>` contains all the visible content of the webpage.

# 2. Describe the purpose of HTML tags and provide examples of commonly used tags.

HTML tags are used to define and format content on a web page. They tell the browser how to display text, images, and links. Most tags come with an opening and a closing tag.

Some commonly used HTML tags are:

- `<h1>` to `<h6>` for headings
- `<p>` for paragraphs
- `<br>` for line break
- `<img>` for images
- `<a>` for links
- `<div>` for grouping content
- `<span>` for inline styling

Example:

```html
<h1>My Website</h1>
<p>This is my first webpage.</p>
<a href="https://google.com">Visit Google</a>
```

# 3. What are the differences between block-level and inline elements? Give examples of each.

HTML elements are mainly divided into block-level and inline elements.

## Block-Level Elements

Block-level elements always start on a new line. They take full width available on the screen.

Examples of block-level elements are: `<div>`, `<p>`, `<h1>`, `<section>`, `<ul>`

Example:

```html
<p>This is first paragraph</p>
<p>This is second paragraph</p>
```

## Inline Elements

Inline elements do not start on a new line. They take only the space they need.

Examples of inline elements are: `<span>`, `<a>`, `<img>`, `<strong>`, `<em>`

Example:

```html
<p>This is <span>important</span> information.</p>
```

# 4. Explain the concept of semantic HTML and why it is important.

Semantic HTML means using HTML tags that clearly describe the meaning of the content. These tags make the structure of the webpage more clear and meaningful.

Some common semantic tags are: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`

Semantic HTML is important because:

- It improves SEO of the website
- It helps screen readers understand the content
- It makes the code clean and readable
- It helps developers understand page structure easily

Example:

```html
<header>
    <h1>My Blog</h1>
</header>

<section>
    <article>
        <p>This is a blog post.</p>
    </article>
</section>

<footer>
    <p>© 2026 All rights reserved</p>
