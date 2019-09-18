---
layout: coding.njk
tags: codingSeries
title: Bowling Game Kata
---

This kata has us creating a program that scores a game of bowling.
This version of the kata was taken from The Coding Dojo Handbook.

{% for video in collections.bowlingKata %}
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