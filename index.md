---
title: Front Page
date: 2019-07-29
layout: frontpage.njk
eleventyExcludeFromCollections: true
pagination:
  data: collections.all
  size: 10
  reverse: true
  alias: posts
---

<div class="posts">
    {%- for post in posts  -%}
        <a href={{post.url}}>
            <span class="title">{{post.data.title}}</span>
            <div class="meta">
                <span class="date">{{post.date | date}}</span>
                <div class="tags">
                    {%- for tag in post.data.tags -%}
                        <span class="tag">{{tag}}</span>
                    {%- endfor -%}    
                </div>
            </div>
        </a>
    {%- endfor -%}
</div>