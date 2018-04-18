---
layout: pics
title: Pictures
permalink: /pics/
---

{% assign image_files = site.static_files | where: "image", true | reverse %}
{% for myimage in image_files %}
  ![]({{ myimage.path }})
{% endfor %}
