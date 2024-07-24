import{_ as s,c as i,o as a,a3 as t,b5 as e}from"./chunks/framework.Cy24DNF9.js";const _=JSON.parse('{"title":"动态标题","description":"","frontmatter":{},"headers":[],"relativePath":"guide/title.md","filePath":"guide/title.md"}'),n={name:"guide/title.md"},l=t(`<h1 id="动态标题" tabindex="-1">动态标题 <a class="header-anchor" href="#动态标题" aria-label="Permalink to &quot;动态标题&quot;">​</a></h1><p>让网页标题显示路由配置的 <code>meta.title</code> 字段。</p><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><p>在应用配置中设置：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> globalSettings</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Settings</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">all</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  app: {</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    enableDynamicTitle: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>效果如下：</p><p><img src="`+e+'" alt="" data-zoomable=""></p>',7),h=[l];function p(d,k,r,o,c,g){return a(),i("div",null,h)}const m=s(n,[["render",p]]);export{_ as __pageData,m as default};