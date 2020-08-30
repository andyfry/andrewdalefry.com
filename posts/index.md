---
layout: posts.njk
eleventyExcludeFromCollections: true
pagination:
  data: collections.post
  size: 1000
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
                        <span class="tag">{{tag | capitalize}}</span>
                    {%- endfor -%}    
                </div>
            </div>
        </a>
    {%- endfor -%}
</div>
