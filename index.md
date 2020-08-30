---
title: Front Page
date: 2019-07-29
layout: frontpage.njk
eleventyExcludeFromCollections: true

---
<h1>Blog Posts</h1>
<div class="posts">
    {%- for post in collections.post -%}
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

<div style="margin-top:150px"></div>
<h1>Video Series</h1>
<div class="posts">
    {%- for series in collections.codingSeries -%}
        <a href={{series.url}}>
            <span class="title">{{series.data.title}}</span>
            <div class="meta">
                <span class="date">{{series.date | date}}</span>
                <div class="tags">
                    {%- for tag in series.data.tags -%}
                        <span class="tag">{{tag | capitalize}}</span>
                    {%- endfor -%}    
                </div>
            </div>
        </a>
    {%- endfor -%}
</div>