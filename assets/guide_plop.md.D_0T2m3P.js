import{_ as e,c as o,o as a,a3 as t,ay as c,az as p,aA as l,aB as d,aC as r}from"./chunks/framework.Cy24DNF9.js";const q=JSON.parse('{"title":"代码文件自动生成","description":"","frontmatter":{},"headers":[],"relativePath":"guide/plop.md","filePath":"guide/plop.md"}'),s={name:"guide/plop.md"},i=t('<h1 id="代码文件自动生成" tabindex="-1">代码文件自动生成 <a class="header-anchor" href="#代码文件自动生成" aria-label="Permalink to &quot;代码文件自动生成&quot;">​</a></h1><div class="info custom-block"><p class="custom-block-title">INFO</p><p>该功能基于 <a href="https://www.npmjs.com/package/plop" target="_blank" rel="noreferrer">plop</a> 实现，在扩展新的模式前，请先详细阅读 plop 官方文档。</p></div><p>开发过程中，避免不了手动去频繁创建页面、组件等文件，并且还要在文件里写一些必要的代码，是不是觉得很麻烦？现在你可以用更简洁的方式来处理这一切。</p><p>框架默认提供了 5 种模式，通过 <code>pnpm run new</code> 指令可以自行选择。</p><ul><li><code>page</code> 页面文件</li><li><code>component</code> 组件文件</li><li><code>store</code> pinia 全局状态文件</li><li><code>mock</code> mock 文件</li><li><code>module</code> 页面模块文件</li></ul><p>除了框架提供的 5 种模式，你还可以自定义新的模式，其原理就是通过预设模板，按照特定规则创建文件或者文件夹。</p><p>预设模板文件存放在 <code>/plop-templates/</code> 目录下，并在 <code>/plopfile.js</code> 文件里进行引用，你可以参考现有 5 种模式的目录结构进行创建新的模板。</p><h2 id="page" tabindex="-1">page <a class="header-anchor" href="#page" aria-label="Permalink to &quot;page&quot;">​</a></h2><p><img src="'+c+'" alt="" data-zoomable=""></p><p>page 模式下，只能在 <code>/src/views/</code> 目录下选择指定的文件夹进行生成，生成的文件中，部分关键位置会被替换掉，例如 <code>&lt;page-header /&gt;</code> 中的 <code>title</code> 会按照你输入的中文名称替换，页面的 <code>name</code> 会根据当前文件目录和文件名自动生成，确保唯一。</p><h2 id="component" tabindex="-1">component <a class="header-anchor" href="#component" aria-label="Permalink to &quot;component&quot;">​</a></h2><p><img src="'+p+'" alt="" data-zoomable=""></p><p>component 模式可以选择生成的是公共组件还是局部组件，公共组件生成目录为 <code>/src/components/</code> ，局部组件则在 <code>/src/views/</code> 目录下选择指定的文件夹进行生成。</p><h2 id="store" tabindex="-1">store <a class="header-anchor" href="#store" aria-label="Permalink to &quot;store&quot;">​</a></h2><p><img src="'+l+'" alt="" data-zoomable=""></p><p>store 模式则会在 <code>/src/store/modules/</code> 目录下生成一个空模板</p><h2 id="mock" tabindex="-1">mock <a class="header-anchor" href="#mock" aria-label="Permalink to &quot;mock&quot;">​</a></h2><p><img src="'+d+'" alt="" data-zoomable=""></p><p>mock 模式则会在 <code>/src/mock/</code> 目录下生成一个标准 CURD 的 mock 数据</p><h2 id="module" tabindex="-1">module <a class="header-anchor" href="#module" aria-label="Permalink to &quot;module&quot;">​</a></h2><p><img src="'+r+'" alt="" data-zoomable=""></p><p>module 模式是一个标准模块模板，会在指定目录下生成模块文件夹，并且包含列表页、编辑（详情）页，以及相关局部组件。</p><p>这块部分详细介绍请阅读《<a href="./plop-module.html">标准模块</a>》。</p>',23),m=[i];function n(h,_,u,k,b,f){return a(),o("div",null,m)}const P=e(s,[["render",n]]);export{q as __pageData,P as default};
