---
layout: coding.njk
title: Let's Code
tags: codingSeries
---

This series documents me learning Eleventy, a static site generator and using it to implement this website.
 
{% for video in collections.letsCode %}
<h1>{{video.data.title}}</h1>  
<h2>Published: {{video.data.date | date}}</h2> 
<iframe 
    width="560" 
    height="315" 
    src="https://www.youtube-nocookie.com/embed/{{video.data.id}}" 
    frameborder="0" 
    allow="accelerometer; 
    autoplay; 
    encrypted-media; 
    gyroscope; 
    picture-in-picture" 
    allowfullscreen></iframe>
<p>{{video.templateContent}}</p>
{% endfor %}