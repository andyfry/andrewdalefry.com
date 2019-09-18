---
layout: coding.njk
tags: codingSeries
title: Coding Dojo
date: 2019-05-04
---
Information about our coding Dojo.

Link to FizzBuzz
Link to Bowling Game

{% for video in collections.codingDojo %}
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