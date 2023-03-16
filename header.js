const template = document.createElement('template');
template.innerHTML=`
  <head>
    <meta name="description" content="Kelly Zomer: data engineer, economic geographer and parttime traveler who likes to climb. Read more about me, my interests and my contact details.">
      <meta name="author" content="Kelly Zomer">
      <meta name="robots" content="index, follow">
      <link rel="stylesheet" href="/style.css">
      <!-- Mobile friendly size -->
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <!-- all icons -->
      <script src="https://kit.fontawesome.com/4aafe338a2.js" crossorigin="anonymous"></script>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
   </head>
   <header>
       <nav>
         <a href="/" title="About me">Home</a>
         <a href="/resume/" title="Resume">Resume</a>
         <a href="/blog/" title="Blog">Blog</a>
         <a href="/contact/" title="Contact">Contact</a>
      </nav>
      <h1>Kelly Zomer</h1>
   </header>
`

document.body.prepend(template.content);


