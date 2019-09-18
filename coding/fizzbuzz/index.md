---
layout: coding.njk
tags: codingSeries
title: FizzBuzz Kata
---

This kata has us solving the simple math game FizzBuzz.
It is a simple game and a simple program, but there are still many skills we can focus on during our katas.
This kata was taken from The Coding Dojo Handbook.
 
{% for video in collections.fizzbuzzKata %}
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

