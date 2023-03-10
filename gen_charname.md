---
layout: post
title: charname.js の実験用ファイル生成器
authors: Takym
category: shutage
---

<pre><code id="code">---
title: charname.js の実験
authors: Takym
tags: 実験用
category: shutage
---
[最新](https://takym.github.io/blog/shutage/charname.html)

</code></pre>

<script>
const code = document.getElementById("code");
for (let i = 0; i < charnames.length; ++i) {
	code.innerText += "**^" + charnames[i].name + "**\r\n";
}
</script>
