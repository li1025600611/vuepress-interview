import{_ as s,c as n}from"./app.f724c7d9.js";var a="/vuepress-interview/assets/error.d5732f7e.jpg",p="/vuepress-interview/assets/bg.4e54dc39.jpeg",e="/vuepress-interview/assets/inline.ffba4b5c.jpeg",t="/vuepress-interview/assets/source.2f5be222.jpeg";const o={},l=n(`<h1 id="asset" tabindex="-1"><a class="header-anchor" href="#asset" aria-hidden="true">#</a> asset</h1><p>\u65E5\u5E38\u5F00\u53D1\u7684\u9879\u76EE\u4E2D\uFF0C\u9664\u4E86 js \u548C css\uFF0C\u8FD8\u6709\u4E00\u4E9B\u9759\u6001\u8D44\u6E90\u6587\u4EF6\u3002\u5728 webpack4 \u4E2D\u8FD9\u4E9B\u9759\u6001\u8D44\u6E90\u6587\u4EF6\u4E5F\u662F\u4EA4\u7531 loader \u5904\u7406\u7684\u3002</p><p>\u800C webpack5 \u4E2D\u5185\u7F6E\u4E86\u8FD9\u4E9B loader\u3002\u6211\u4EEC\u76F4\u63A5\u901A\u8FC7\u914D\u7F6E\u4F7F\u7528 asset \u5373\u53EF\u3002</p><h2 id="\u5F15\u5165\u56FE\u7247\u8D44\u6E90" tabindex="-1"><a class="header-anchor" href="#\u5F15\u5165\u56FE\u7247\u8D44\u6E90" aria-hidden="true">#</a> \u5F15\u5165\u56FE\u7247\u8D44\u6E90</h2><p>\u5728 src \u4E0B\u65B0\u5EFA assets \u76EE\u5F55\uFF0C\u6DFB\u52A0 <code>bg.jpeg</code> \u6587\u4EF6\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>webpack-demo
\u251C\u2500 src
\u2502  \u251C\u2500 assets
\u2502  \u2502  \u2514\u2500 bg.jpeg
\u2502  \u251C\u2500 index.js
\u2502  \u251C\u2500 index.less
\u2502  \u2514\u2500 math.js
\u251C\u2500 package-lock.json
\u251C\u2500 package.json
\u2514\u2500 webpack.config.js
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u7136\u540E\u5728<code>index.js</code>\u4E2D\u589E\u52A0\u4E00\u4E2A div, div \u7684\u80CC\u666F\u662F<code>bg.jpeg</code>.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> add <span class="token keyword">from</span> <span class="token string">&#39;./math.js&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&#39;./index.less&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> bgImg <span class="token keyword">from</span> <span class="token string">&#39;./assets/bg.jpeg&#39;</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> box <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
box<span class="token punctuation">.</span>style<span class="token punctuation">.</span>width <span class="token operator">=</span> <span class="token string">&#39;300px&#39;</span><span class="token punctuation">;</span>
box<span class="token punctuation">.</span>style<span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token string">&#39;300px&#39;</span><span class="token punctuation">;</span>
box<span class="token punctuation">.</span>style<span class="token punctuation">.</span>backgroundImage <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">url(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>bgImg<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>box<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u6700\u540E<code>npx webpack</code>\u6765\u6253\u5305\uFF0C\u5219\u4F1A\u62A5\u9519:</p><p><img src="`+a+`" alt=""></p><p>\u63A5\u7740\uFF0C\u6211\u4EEC\u914D\u7F6E asset \u9009\u9879\uFF1A</p><h2 id="asset-\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#asset-\u914D\u7F6E" aria-hidden="true">#</a> asset \u914D\u7F6E</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.js&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;bundle.js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./dist&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">clean</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.less$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;style-loader&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;less-loader&#39;</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(png|svg|jpg|jpeg|gif)$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;asset&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;development&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>\u6211\u4EEC\u518D\u6253\u5305, \u6253\u5305\u6210\u529F\u3002dist \u76EE\u5F55\u4E0B\u591A\u4E86\u4E2A\u56FE\u7247\u6587\u4EF6\u3002\u6253\u5F00 <code>dist/index.html</code> ,\u53EF\u4EE5\u770B\u5230\uFF0C\u6211\u4EEC\u56FE\u7247\u751F\u6548\u4E86\u3002</p><p><img src="`+p+`" alt=""></p><h2 id="asset-\u5206\u7C7B" tabindex="-1"><a class="header-anchor" href="#asset-\u5206\u7C7B" aria-hidden="true">#</a> asset \u5206\u7C7B</h2><p>asset \u4E3B\u8981\u6709\u4EE5\u4E0B\u56DB\u79CD\u5206\u7C7B:</p><ul><li><p><code>asset/resource</code>: \u6587\u4EF6\u88AB\u53D1\u9001\u5230\u8F93\u51FA\u76EE\u5F55\uFF0C\u5E76\u4E14\u5176\u8DEF\u5F84\u5C06\u88AB\u6CE8\u5165\u5230 bundle \u4E2D</p></li><li><p><code>asset/inline</code>: \u4F5C\u4E3A data URI \u6CE8\u5165\u5230 bundle \u4E2D</p></li><li><p><code>asset</code>: \u81EA\u52A8\u5728 resource \u548C inline \u4E4B\u95F4\u8FDB\u884C\u9009\u62E9\uFF1A\u5C0F\u4E8E 8kb \u7684\u6587\u4EF6\uFF0C\u5C06\u4F1A\u89C6\u4E3A inline \u7C7B\u578B\uFF0C\u5426\u5219\u4F1A\u88AB\u89C6\u4E3A resource \u7C7B\u578B</p></li><li><p><code>asset/source</code>: \u76F4\u63A5\u5C06\u6587\u4EF6\u5185\u5BB9\u6CE8\u5165\u5230 bundle \u4E2D</p></li></ul><p>\u4E0A\u9762\u5F15\u5165\u56FE\u7247\u8D44\u6E90\u5C31\u662F\u4F7F\u7528\u4E86<code>asset</code>\u7C7B\u578B, \u4E0B\u9762\u6211\u4EEC\u9010\u4E2A\u4F7F\u7528\u4E0B\u53E6\u5916\u4E09\u79CD\u7C7B\u578B\uFF1A</p><ol><li><code>asset/resource</code></li></ol><p>\u4FEE\u6539<code>webpack.config.js</code>:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.js&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;bundle.js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./dist&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">clean</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.less$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;style-loader&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;less-loader&#39;</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(png|svg|jpg|jpeg|gif)$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;asset/resource&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;development&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>\u6253\u5305\u540E\u67E5\u770B\u6548\u679C\uFF0C\u4F1A\u53D1\u73B0\u8DDF\u4E4B\u524D\u4E00\u6837\u3002\u8FD9\u662F\u56E0\u4E3A\u6211\u4EEC\u7684 <code>bg.jpeg</code>\u5927\u4E8E 8kb\uFF0C<code>asset</code> \u7C7B\u578B\u4F1A\u81EA\u52A8\u89C6\u5176\u4E3A <code>asset/resource</code> \u7C7B\u578B</p><ol start="2"><li><code>asset/inline</code></li></ol><p>\u4FEE\u6539<code>webpack.config.js</code>:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// ...</span>
<span class="token punctuation">{</span>
  <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(png|svg|jpg|jpeg|gif)$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;asset/inline&#39;</span>
<span class="token punctuation">}</span>
<span class="token comment">// ...</span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u518D\u6B21\u6253\u5305, \u6211\u4EEC\u53D1\u73B0 dist \u91CC\u6CA1\u6709\u56FE\u7247\u4E86\u3002\u6253\u5F00 html \u4F1A\u53D1\u73B0\uFF0C\u56FE\u7247\u53D8\u6210 base64 \u5185\u8054\u5230\u9875\u9762\u91CC\u4E86\u3002</p><p><img src="`+e+`" alt=""></p><ol start="3"><li><code>asset/source</code> \u5728 assets \u76EE\u5F55\u4E0B\u65B0\u5EFA<code>hello.txt</code>\u6587\u4EF6, \u65B0\u589E\u4EE5\u4E0B\u5185\u5BB9:</li></ol><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>hello, webpack!
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u6B64\u65F6, \u9879\u76EE\u76EE\u5F55\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>webpack-demo
\u251C\u2500 src
\u2502  \u251C\u2500 assets
\u2502  \u2502  \u251C\u2500 bg.jpeg
\u2502  \u2502  \u2514\u2500 hello.txt
\u2502  \u251C\u2500 index.js
\u2502  \u251C\u2500 index.less
\u2502  \u2514\u2500 math.js
\u251C\u2500 babel.config.js
\u251C\u2500 package-lock.json
\u251C\u2500 package.json
\u2514\u2500 webpack.config.js
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u7136\u540E\uFF0C\u6211\u4EEC\u4FEE\u6539<code>index.js</code>\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> add <span class="token keyword">from</span> <span class="token string">&#39;./math.js&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&#39;./index.less&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> bgImg <span class="token keyword">from</span> <span class="token string">&#39;./assets/bg.jpeg&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> helloText <span class="token keyword">from</span> <span class="token string">&#39;./assets/hello.txt&#39;</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> box <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
box<span class="token punctuation">.</span>style<span class="token punctuation">.</span>width <span class="token operator">=</span> <span class="token string">&#39;300px&#39;</span><span class="token punctuation">;</span>
box<span class="token punctuation">.</span>style<span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token string">&#39;300px&#39;</span><span class="token punctuation">;</span>
box<span class="token punctuation">.</span>style<span class="token punctuation">.</span>backgroundImage <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">url(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>bgImg<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>box<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> textDiv <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
textDiv<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> helloText<span class="token punctuation">;</span>
document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>textDiv<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u6700\u540E\uFF0C\u6211\u4EEC\u5728 <code>webpack.config.js</code> \u589E\u52A0\u5BF9 txt \u6587\u4EF6\u7684\u5904\u7406\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.js&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;bundle.js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./dist&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">clean</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.less$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;style-loader&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;less-loader&#39;</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(png|svg|jpg|jpeg|gif)$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;asset/resource&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.txt$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;asset/source&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;development&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p>\u6253\u5305\u540E\u67E5\u770B\u6548\u679C, \u4F1A\u53D1\u73B0 txt \u4E2D\u7684\u5185\u5BB9\u76F4\u63A5\u88AB\u6CE8\u5165\u8FDB\u6765\u4E86\u3002 <img src="`+t+'" alt=""></p><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><ol><li>\u5BF9\u4E8E\u9759\u6001\u8D44\u6E90\u6587\u4EF6\uFF0C\u6211\u4EEC\u4F7F\u7528 asset \u6765\u5904\u7406</li><li>asset \u7684\u56DB\u79CD\u5206\u7C7B\uFF1A</li></ol><ul><li><p><code>asset/resource</code>: \u6587\u4EF6\u88AB\u53D1\u9001\u5230\u8F93\u51FA\u76EE\u5F55\uFF0C\u5E76\u4E14\u5176\u8DEF\u5F84\u5C06\u88AB\u6CE8\u5165\u5230 bundle \u4E2D</p></li><li><p><code>asset/inline</code>: \u4F5C\u4E3A data URI \u6CE8\u5165\u5230 bundle \u4E2D</p></li><li><p><code>asset</code>: \u81EA\u52A8\u5728 resource \u548C inline \u4E4B\u95F4\u8FDB\u884C\u9009\u62E9\uFF1A\u5C0F\u4E8E 8kb \u7684\u6587\u4EF6\uFF0C\u5C06\u4F1A\u89C6\u4E3A inline \u7C7B\u578B\uFF0C\u5426\u5219\u4F1A\u88AB\u89C6\u4E3A resource \u7C7B\u578B</p></li><li><p><code>asset/source</code>: \u76F4\u63A5\u5C06\u6587\u4EF6\u5185\u5BB9\u6CE8\u5165\u5230 bundle \u4E2D</p></li></ul>',40);function c(r,i){return l}var k=s(o,[["render",c],["__file","asset.html.vue"]]);export{k as default};
