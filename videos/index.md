---
layout: videos.njk
eleventyExcludeFromCollections: true
pagination:
  data: collections.codingSeries
  size: 10
  alias: seriesList
---

<div class="posts">
    {%- for series in seriesList -%}
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
