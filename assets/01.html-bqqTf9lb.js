import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,a as t}from"./app-D55J74Dq.js";const e="/essayBlog/assets/bVc1feq-IMOHOs6G.png",p="/essayBlog/assets/bVc1f6k-DYDZ65Nx.png",o="/essayBlog/assets/bVc1gie-BjO-ewOn.gif",l="/essayBlog/assets/bVc1jrW-Bkew865v.gif",c="/essayBlog/assets/bVc1niq-CpdH8GJK.png",i="/essayBlog/assets/bVc1niY-d-ZmkTOf.png",r="/essayBlog/assets/bVc1nr9-B89C9Y66.png",u="/essayBlog/assets/bVc1nsJ-CLk9Dqyp.png",d="/essayBlog/assets/bVbiahu-CeK6rNd_.png",k="/essayBlog/assets/bVbfUnd-D_OyvUyq.png",v="/essayBlog/assets/bVc1Ct1-qctRS0DZ.gif",m={},b=t('<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><p>vue的两大特性是响应式编程和组件化。组件（Component）是 Vue 最核心的功能，但是各个组件实例的作用域是相互独立的，这表明不同组件之间的数据是无法直接相互引用的。如果想要跨组件引用数据，就需要用到组件通信了，在通信之前先要理解组件之间的关系：</p><figure><img src="'+e+`" alt="vue组件关系" tabindex="0" loading="lazy"><figcaption>vue组件关系</figcaption></figure><p>如上图所示：<br> 父子关系：A与B，A与C，B与D，C与E<br> 兄弟关系：B与C<br> 隔代关系（可能隔更多代）：A与D，A与E<br> 跨级关系：B与E，D与E等</p><h2 id="通信方式" tabindex="-1"><a class="header-anchor" href="#通信方式"><span>通信方式</span></a></h2><h3 id="一、props-emit" tabindex="-1"><a class="header-anchor" href="#一、props-emit"><span>一、<code>props</code>/<code>$emit</code></span></a></h3><p>父组件通过<code>v-bind</code>绑定一个自定义的属性，子组件通过<code>props</code>接收父组件传来的数据；子组件通过<code>$emit</code>触发事件，父组件用<code>on()</code>或者在子组件的自定义标签上使用<code>v-on</code>来监听子组件触发的自定义事件，从而接收子组件传来的数据。</p><h4 id="_1、父组件向子组件传值" tabindex="-1"><a class="header-anchor" href="#_1、父组件向子组件传值"><span>1、父组件向子组件传值</span></a></h4><p>下面通过一个例子来说明父组件向子组件传值，父组件parent.vue把数据<code>books:[&#39;JavaScript高级程序设计&#39;, &#39;CSS新世界&#39;, &#39;图解 HTTP 彩色版&#39;]</code>传给子组件child.vue，并在child.vue中展示出来</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 父组件parent.vue</span>
<span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>Child <span class="token operator">:</span>books<span class="token operator">=</span><span class="token string">&quot;books&quot;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">import</span> Child <span class="token keyword">from</span> <span class="token string">&#39;./components/Child.vue&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;parent&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    Child
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">books</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;JavaScript高级程序设计&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;CSS新世界&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;图解 HTTP 彩色版&#39;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 子组件child.vue</span>
<span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>ul<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>li v<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">&quot;(item, index) in books&quot;</span> <span class="token operator">:</span>key<span class="token operator">=</span><span class="token string">&quot;index&quot;</span><span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span>item<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">books</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Array<span class="token punctuation">,</span>
      <span class="token function-variable function">default</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+p+`" alt="props传值结果" loading="lazy"><br> 注意：通过props传递数据是单向的，父组件数据变化时会传递给子组件，但子组件不能通过修改props传过来的数据来修改父组件的相应状态，即所谓的单向数据流。</p><h3 id="_2、子组件向父组件传值" tabindex="-1"><a class="header-anchor" href="#_2、子组件向父组件传值"><span>2、子组件向父组件传值</span></a></h3><p>下面通过子组件点击书籍列表，用<code>$emit()</code>触发，然后再父组件中获取</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 子组件child.vue</span>
<span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>ul<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>li v<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">&quot;(item, index) in books&quot;</span> <span class="token operator">:</span>key<span class="token operator">=</span><span class="token string">&quot;index&quot;</span> @click<span class="token operator">=</span><span class="token string">&quot;like(item)&quot;</span><span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span>item<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">books</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Array<span class="token punctuation">,</span>
      <span class="token function-variable function">default</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">like</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">&#39;likeBook&#39;</span><span class="token punctuation">,</span> item<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 父组件parent.vue</span>
<span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>Child <span class="token operator">:</span>books<span class="token operator">=</span><span class="token string">&quot;books&quot;</span> @likeBook<span class="token operator">=</span><span class="token string">&quot;likeBook&quot;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">import</span> Child <span class="token keyword">from</span> <span class="token string">&#39;./components/Child.vue&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;parent&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    Child
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">books</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;JavaScript高级程序设计&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;CSS新世界&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;图解 HTTP 彩色版&#39;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">likeBook</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;我最喜欢的书籍是《&#39;</span> <span class="token operator">+</span> val <span class="token operator">+</span> <span class="token string">&#39;》&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+o+`" alt="子组件向父组件传值结果" tabindex="0" loading="lazy"><figcaption>子组件向父组件传值结果</figcaption></figure><h3 id="二、-parent-children" tabindex="-1"><a class="header-anchor" href="#二、-parent-children"><span>二、<code>$parent</code>/<code>$children</code></span></a></h3><ul><li>$parent：访问父组件实例</li><li>$children：访问子组件实例</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 父组件parent.vue</span>
<span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>Child <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">&quot;getChildData&quot;</span><span class="token operator">&gt;</span>获取子组件数据<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">import</span> Child <span class="token keyword">from</span> <span class="token string">&#39;./components/Child.vue&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;parent&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    Child
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">books</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;JavaScript高级程序设计&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;CSS新世界&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;图解 HTTP 彩色版&#39;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">getChildData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">alert</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$children<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>msg<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 子组件child.vue</span>
<span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>ul<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>li v<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">&quot;(item, index) in bookLists&quot;</span> <span class="token operator">:</span>key<span class="token operator">=</span><span class="token string">&quot;index&quot;</span><span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span>item<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;child&#39;</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">bookLists</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&#39;我是子组件的值！&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>bookLists <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$parent<span class="token punctuation">.</span>books
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：<code>$parent</code>拿到的是对象，如果是最顶层没有父组件的情况下拿到的是<code>undefined</code>；<code>$children</code>拿到的是数组，如果是做底层没有子组件的情况下，拿到的是空数组;这两种通信方式只能用于父子组件通信</p><h3 id="三、ref" tabindex="-1"><a class="header-anchor" href="#三、ref"><span>三、<code>ref</code></span></a></h3><p>ref如果在普通Dom元素上使用，引用指向的就是 DOM 元素；如果在子组件上使用，引用就指向组件实例，可以通过实例直接调用组件的方法和数据</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 父组件parent.vue</span>
<span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>Child ref<span class="token operator">=</span><span class="token string">&quot;child&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">&quot;getChildData&quot;</span><span class="token operator">&gt;</span>获取子组件数据<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">import</span> Child <span class="token keyword">from</span> <span class="token string">&#39;./components/Child.vue&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;parent&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    Child
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">getChildData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> msg <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">[</span><span class="token string">&#39;child&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span>msg
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">[</span><span class="token string">&#39;child&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 子组件child.vue</span>
<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;child&#39;</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&#39;我是子组件的值！&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;你好，我是子组件！&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="四、provide-inject" tabindex="-1"><a class="header-anchor" href="#四、provide-inject"><span>四、<code>provide</code>/<code>inject</code></span></a></h3><p>祖先组件通过<code>provide</code>来提供变量，子孙组件通过<code>inject</code>注入变量来获取祖先组件的数据，不管子孙组件嵌套有多深, 只要调用了inject 那么就可以注入provide中的数据。下面是具体代码：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 父组件</span>
<span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>康熙<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>Son <span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">import</span> Son <span class="token keyword">from</span> <span class="token string">&#39;./components/Son.vue&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    Son
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">provide</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">FatherToSon</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>FatherToSon<span class="token punctuation">,</span>
      <span class="token literal-property property">FatherToGrandson</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>FatherToGrandson<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">FatherToSon</span><span class="token operator">:</span> <span class="token string">&#39;我是康熙，雍正，你是我儿子！&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">FatherToGrandson</span><span class="token operator">:</span> <span class="token string">&#39;我是康熙，乾隆，你是我孙子！&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 子组件</span>
<span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>雍正<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">&quot;receive&quot;</span><span class="token operator">&gt;</span>接收<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>Grandson <span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">import</span> Grandson <span class="token keyword">from</span> <span class="token string">&#39;./Grandson.vue&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
    Grandson 
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">inject</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;FatherToSon&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">receive</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">alert</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>FatherToSon<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 孙组件</span>
<span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>乾隆<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">&quot;receive&quot;</span><span class="token operator">&gt;</span>接收<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">inject</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;FatherToGrandson&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">receive</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">alert</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>FatherToGrandson<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+l+`" alt="provide和inject传值" loading="lazy"><br> 注意：provide/inject只能从上往下传值，且不是响应式，若要变成响应式的数据provide需要提供函数</p><h3 id="五、eventbus的-emit-on" tabindex="-1"><a class="header-anchor" href="#五、eventbus的-emit-on"><span>五、<code>eventBus</code>的<code>$emit</code>/<code>$on</code></span></a></h3><p>eventBus是消息传递的一种方式，基于一个消息中心，订阅和发布消息的模式，称为发布订阅者模式。<br> eventBus 又称为事件总线。在 Vue 中可使用 eventBus 来作为沟通桥梁的概念，就像是所有组件共用相同的事件中心，可向该中心注册发送事件或接收事件，所以组件都可以上下平行地通知其他组件。</p><ul><li><code>$emit(&#39;name&#39;,args)</code>: name:发布的消息名称 ， args：发布的消息</li><li><code>$on(&#39;name&#39;,fn)</code>: name:订阅的消息名称， fn: 订阅的消息</li><li><code>$once(&#39;name&#39;,fn)</code>: name:订阅的消息名称， fn: 订阅的消息。与$on相似但是只触发一次，一旦触发之后，监听器就会被移除</li><li><code>$off(&#39;name&#39;,callback)</code>:name:事件名称，callback:回调监听器<br> eventbus可以实现任何组件之前的通信，下面以兄弟组件为例</li></ul><h4 id="_1、初始化-全局引入" tabindex="-1"><a class="header-anchor" href="#_1、初始化-全局引入"><span>1、初始化，全局引入</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// main.js</span>
<span class="token comment">// 全局添加事件总线</span>
<span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>$bus <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2、发送事件" tabindex="-1"><a class="header-anchor" href="#_2、发送事件"><span>2、发送事件</span></a></h4><p>在parent.vue引入ChildA和ChildB组件，使它们成为兄弟组件</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 父组件parent.vue</span>
<span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>ChildA <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>ChildB <span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">import</span> ChildA <span class="token keyword">from</span> <span class="token string">&#39;./components/childA&#39;</span>
<span class="token keyword">import</span> ChildB <span class="token keyword">from</span> <span class="token string">&#39;./components/childB&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    ChildA<span class="token punctuation">,</span>
    ChildB
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在ChildA组件中用<code>$emit</code>发送事件</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// ChildA组件</span>
<span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>组件<span class="token constant">A</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">&quot;send&quot;</span><span class="token operator">&gt;</span>发送<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 发送事件</span>
    <span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>$bus<span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">&#39;message&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;欢迎使用eventBus!&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3、接收事件发送的事件" tabindex="-1"><a class="header-anchor" href="#_3、接收事件发送的事件"><span>3、接收事件发送的事件</span></a></h4><p>在ChildB组件中用<code>$on</code>接收ChildA发送的事件</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// ChildB组件</span>
<span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>组件<span class="token constant">B</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 接收事件</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>$bus<span class="token punctuation">.</span><span class="token function">$on</span><span class="token punctuation">(</span><span class="token string">&#39;message&#39;</span><span class="token punctuation">,</span> <span class="token parameter">data</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;我是组件B，我收到的消息为：&#39;</span> <span class="token operator">+</span> data<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">beforeDestroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>$bus<span class="token punctuation">.</span><span class="token function">$off</span><span class="token punctuation">(</span><span class="token string">&#39;message&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：<code>$on</code>监听的事件不会自动移除监听，因此在不用时最好使用<code>$off</code>移除监听以免产生问题</p><h3 id="六、-attrs-listeners" tabindex="-1"><a class="header-anchor" href="#六、-attrs-listeners"><span>六、<code>$attrs</code>/<code>$listeners</code></span></a></h3><h4 id="_1、简介" tabindex="-1"><a class="header-anchor" href="#_1、简介"><span>1、简介</span></a></h4><p>当组件为两级嵌套时，一般采用<code>props</code>和<code>$emit</code>，但遇到多级组件嵌套时这种方法就不太适用了，如果不做中间处理，只传递数据用vuex有点大材小用了。因此在<code>vue2.4</code>中为了解决这一需求，便引入了<code>$attrs</code>和<code>$listeners</code>， 新增了<code>inheritAttrs</code>属性</p><ul><li><code>$attrs</code>：当父组件传递了很多数据给子组件时，子组件没有声明props来进行接收，么子组件中的attrs属性就包含了所有父组件传来的数据(除开已经props声明了的)；子组件还可以使用<code>v−bind=&quot;$attrs&quot;</code>的形式将所有父组件传来的数据(除开已经props声明了的)传向下一级子组件,通常和<code>interitAttrs</code>属性一起使用。</li><li><code>$listeners</code>：包含了父组件中(不含<code>.native</code>修饰器的)v-on 事件监听器，通过<code>v-on=&quot;$listeners&quot;</code>，可以将这些事件绑定给它自己的子组件</li></ul><h4 id="_2、实例" tabindex="-1"><a class="header-anchor" href="#_2、实例"><span>2、实例</span></a></h4><p>下面看一个例子：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 父组件</span>
<span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>ChildA <span class="token operator">:</span>name<span class="token operator">=</span><span class="token string">&quot;name&quot;</span> <span class="token operator">:</span>sex<span class="token operator">=</span><span class="token string">&quot;sex&quot;</span> <span class="token operator">:</span>age<span class="token operator">=</span><span class="token string">&quot;age&quot;</span> @getName<span class="token operator">=</span><span class="token string">&quot;getName&quot;</span> @getAge<span class="token operator">=</span><span class="token string">&quot;getAge&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">import</span> ChildA <span class="token keyword">from</span> <span class="token string">&#39;./components/childA&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;parent&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    ChildA<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;小明&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
      <span class="token literal-property property">sex</span><span class="token operator">:</span> <span class="token string">&#39;男&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 获取名字</span>
    <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;我的名字是&#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 获取年龄</span>
    <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;我今年&#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">+</span> <span class="token string">&#39;岁&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 子组件A</span>
<span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>组件<span class="token constant">A</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
    <span class="token punctuation">{</span><span class="token punctuation">{</span> msgA <span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span>hr<span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>ChildB v<span class="token operator">-</span>bind<span class="token operator">=</span><span class="token string">&quot;$attrs&quot;</span> <span class="token operator">:</span>height<span class="token operator">=</span><span class="token string">&quot;height&quot;</span> v<span class="token operator">-</span>on<span class="token operator">=</span><span class="token string">&quot;$listeners&quot;</span> @getHeight<span class="token operator">=</span><span class="token string">&quot;getHeight&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">import</span> ChildB <span class="token keyword">from</span> <span class="token string">&#39;./childB.vue&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;ChildA&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    ChildB
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">msgA</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
      <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">&#39;175cm&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">sex</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>msgA <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$attrs
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;组件A获取的$listeners:&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$listeners<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 获取身高</span>
    <span class="token function">getHeight</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;我的身高是&#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>height<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 孙组件B</span>
<span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>组件<span class="token constant">B</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
    <span class="token punctuation">{</span><span class="token punctuation">{</span> msgB <span class="token punctuation">}</span><span class="token punctuation">}</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;ChildB&#39;</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">msgB</span><span class="token operator">:</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>msgB <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$attrs
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;组件B获取的$listeners:&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$listeners<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>$attrs获取的结果：<br><img src="`+c+'" alt="$attrs结果" loading="lazy"></p><p>$listeners获取的结果：<br><img src="'+i+'" alt="$listeners结果" loading="lazy"></p><p>如代码和图所示组件A中<code>props</code>声明接收了sex属性，因此组件中<code>$attrs</code>获取的是父组件中绑定的除去sex属性的值；组件A中使用了<code>v-bind=&quot;$attrs&quot;</code>和<code>v-on=&quot;$listeners&quot;</code>，则组件B获取不仅是组件A中本身绑定的属性和方法还包含组件A获取父组件绑定的属性和方法</p><h4 id="_3、inheritattrs" tabindex="-1"><a class="header-anchor" href="#_3、inheritattrs"><span>3、inheritAttrs</span></a></h4><p>如果父组件传递了很多参数给子组件，而子组件没有用props完全接收，那么没有接收的这些属性作为普通的 HTML <code>attribute </code>应用在子组件的根元素上<br> 如果你不希望子组件的根元素继承特性，你可以在组件的选项中设置<code>inheritAttrs: false</code></p><p>以上面的组件B为例，当inheritAttrs为true（inheritAttrs默认为true）<br><img src="'+r+`" alt="inheritAttrs为true" loading="lazy"></p><p>当inheritAttrs为false时</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 孙组件B</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;ChildB&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">inheritAttrs</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">msgB</span><span class="token operator">:</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>msgB <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$attrs
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;组件B获取的$listeners:&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$listeners<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+u+'" alt="inheritAttrs为false时" tabindex="0" loading="lazy"><figcaption>inheritAttrs为false时</figcaption></figure><h3 id="七、vuex" tabindex="-1"><a class="header-anchor" href="#七、vuex"><span>七、<code>Vuex</code></span></a></h3><h4 id="_1、vuex概述" tabindex="-1"><a class="header-anchor" href="#_1、vuex概述"><span>1、Vuex概述</span></a></h4><p>Vuex 是一个专为 Vue.js 应用程序开发的<strong>状态管理模式 + 库</strong>。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。<br> 状态管理包含以下几个部分：<br><img src="'+d+'" alt="vuex状态" loading="lazy"></p><ul><li><strong>状态（State）</strong>，驱动应用的数据源</li><li><strong>视图（View）</strong>，以声明方式将<strong>状态</strong>映射到视图；</li><li><strong>操作（Actions）</strong>，响应在<strong>视图</strong>上的用户输入导致的状态变化</li></ul><p>视图发生变化会导致数据源的改变，数据源发生变化则会改变视图，则上面表示是一个“单向数据流”。但是当我们的应用遇到多个组件共享状态时，单向数据流的简洁性很容易被破坏：</p><ul><li>多个视图依赖于同一状态。</li><li>来自不同视图的行为需要变更同一状态。</li></ul><p>因此，为了解决这种问题我们把组件的共享状态抽取出来，以一个全局单例模式管理。在这种模式下，我们的组件树构成了一个巨大的“视图”，不管在树的哪个位置，任何组件都能获取状态或者触发行为！</p><p>通过定义和隔离状态管理中的各种概念并通过强制规则维持视图和状态间的独立性，我们的代码将会变得更结构化且易维护。<br><img src="'+k+`" alt="vuex" loading="lazy"></p><h3 id="_2、-vuex各个模块" tabindex="-1"><a class="header-anchor" href="#_2、-vuex各个模块"><span>2、 Vuex各个模块</span></a></h3><p>1、<code>state</code>：存储应用中需要共享的状态，是<strong>Vuex</strong>中的唯一数据源。<br> 2、<code>getters</code>:类似Vue中的计算属性<code>computed</code>，<strong>getter</strong> 的返回值会根据它的依赖被缓存起 来，且只有当它的依赖值发生了改变才会被重新计算。<br> 3、<code>mutations</code>:更改 Vuex 的 store 中的状态(state)的唯一方法，且mutation 必须是同步函数<br> 4、<code>actions</code>：类似于 mutation，提交的是 mutation，而不是直接变更状态；可以包含任意异步操作<br> 5、<code>modules</code>：将 store 分割成模块（module）。每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块——从上至下进行同样方式的分割</p><h3 id="_3、vuex举例" tabindex="-1"><a class="header-anchor" href="#_3、vuex举例"><span>3、Vuex举例</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 父组件</span>
<span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;home&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>父组件<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>hr<span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>ChildA <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>hr<span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>ChildB <span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">import</span> ChildA <span class="token keyword">from</span> <span class="token string">&#39;./components/ChildA&#39;</span>
<span class="token keyword">import</span> ChildB <span class="token keyword">from</span> <span class="token string">&#39;./components/ChildB&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;parent&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    ChildA<span class="token punctuation">,</span>
    ChildB
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 子组件A</span>
<span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>组件<span class="token constant">A</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span><span class="token constant">A</span><span class="token literal-property property">获取的值</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> count <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">&quot;add(5)&quot;</span><span class="token operator">&gt;</span>ChildA<span class="token operator">-</span>add<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>count
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 改变store里count的值</span>
    <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">&#39;countAdd&#39;</span><span class="token punctuation">,</span> num<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>style<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 子组件B</span>
<span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>组件<span class="token constant">B</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span><span class="token constant">B</span><span class="token literal-property property">获取的值</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> countB <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">&quot;add(10)&quot;</span><span class="token operator">&gt;</span>ChildB<span class="token operator">-</span>add<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> mapMutations<span class="token punctuation">,</span> mapGetters <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span><span class="token function">mapGetters</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">countB</span><span class="token operator">:</span> <span class="token string">&#39;getCount&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span><span class="token function">mapMutations</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;countAdd&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// 改变store里count的值</span>
    <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">countAdd</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>style<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>store.js</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> Vuex <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Vuex<span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">getters</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">getCount</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> state<span class="token punctuation">.</span>count
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">countAdd</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">.</span>count <span class="token operator">+=</span> num
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">countAdd</span><span class="token punctuation">(</span><span class="token parameter">context<span class="token punctuation">,</span> num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      context<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;countAdd&#39;</span><span class="token punctuation">,</span> num<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+v+`" alt="Vuex传值" tabindex="0" loading="lazy"><figcaption>Vuex传值</figcaption></figure><h3 id="八、localstorage-sessionstorage" tabindex="-1"><a class="header-anchor" href="#八、localstorage-sessionstorage"><span>八、<code>localStorage</code>/<code>sessionStorage</code></span></a></h3><h4 id="_1、介绍" tabindex="-1"><a class="header-anchor" href="#_1、介绍"><span>1、介绍</span></a></h4><p><strong>localStorage</strong>：本地存储对象，存储的数据是永久性数据,页面刷新，即使浏览器重启，除非主动删除不然存储的数据会一直存在<br><strong>sessionStorage</strong>：与localStorage相似，但是只有在当前页面下有效，关闭页面或浏览器存储的数据将会清空</p><p>localStorage和sessionStorage常用的API：<br> setItem (key, value) —— 保存数据，以键值对的方式储存信息。<br> getItem (key) —— 获取数据，将键值传入，即可获取到对应的value值。<br> removeItem (key) —— 删除单个数据，根据键值移除对应的信息。<br> clear () —— 删除所有的数据<br> key (index) —— 获取某个索引的key</p><h4 id="_2、举例" tabindex="-1"><a class="header-anchor" href="#_2、举例"><span>2、举例</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 存储</span>
<span class="token function">setItem</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  window<span class="token punctuation">.</span>localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">&#39;name1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;小明&#39;</span><span class="token punctuation">)</span>
  window<span class="token punctuation">.</span>sessionStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">&#39;name2&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;小红&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 接收</span>
<span class="token function">receive</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> name1 <span class="token operator">=</span> window<span class="token punctuation">.</span>localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">&#39;name1&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> name2 <span class="token operator">=</span> window<span class="token punctuation">.</span>sessionStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">&#39;name2&#39;</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name1<span class="token punctuation">)</span> <span class="token comment">// 打印结果为：小明</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name2<span class="token punctuation">)</span> <span class="token comment">// 打印结果为：小红</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3、setitem-和getitem-使用时的类型转换" tabindex="-1"><a class="header-anchor" href="#_3、setitem-和getitem-使用时的类型转换"><span>3、setItem()和getItem()使用时的类型转换</span></a></h4><p>localStorage和sessionStorage通过<code>setItem()</code>存储数据会自动转换为<code>String</code>类型，但是通过<code>getItem()</code>其类型并不会转换回来（localStorage和sessionStorage使用方法一样，下面均以localStorage为例）</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> num <span class="token operator">=</span> <span class="token number">1</span>
window<span class="token punctuation">.</span>localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">&#39;num&#39;</span><span class="token punctuation">,</span> num<span class="token punctuation">)</span>

<span class="token keyword">const</span> numRec <span class="token operator">=</span> window<span class="token punctuation">.</span>localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">&#39;num&#39;</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>numRec<span class="token punctuation">,</span> <span class="token keyword">typeof</span><span class="token punctuation">(</span>numRec<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 1 string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因此正确的存储方式应该为：存储之前用<code>JSON.stringify()</code>方法将数据转换成json<code>字符串</code>形式；需要使用数据的时候用<code>JSON.parse()</code>方法将之前存储的字符串转换成json对象</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> num <span class="token operator">=</span> <span class="token number">1</span>
window<span class="token punctuation">.</span>localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">&#39;num&#39;</span><span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
   <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;小红&#39;</span><span class="token punctuation">,</span>
   <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span>
 <span class="token punctuation">}</span>
window<span class="token punctuation">.</span>localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">&#39;obj&#39;</span><span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> numRec <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">&#39;num&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>numRec<span class="token punctuation">,</span> <span class="token keyword">typeof</span><span class="token punctuation">(</span>numRec<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 1 &#39;number&#39;</span>
<span class="token keyword">const</span> objRec <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">&#39;obj&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>objRec<span class="token punctuation">,</span> <span class="token keyword">typeof</span><span class="token punctuation">(</span>objRec<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// {name: &#39;小红&#39;, age: 18} &#39;object&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意</strong>：localStorage.setItem()和sessionStorage.setItem()不能直接存储对象，必须使用<code>JSON.stringify()</code>和<code>JSON.parse()</code>转换实现</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2><p>以上8种通信方式主要应用在以下三类场景：</p><ul><li>**父子组件通信：**最经常使用通信方式的是<code>props</code>/<code>$emit</code>，单一的父子组件通信使用<code>$parent&gt;</code>/<code>$children</code>也比较方便；父组件也常使用<code>ref</code>获取子组件实例；也可使用<code>provide</code>/<code>inject</code>、<code>$attrs</code>/<code>$listeners</code>以及<code>localStorage</code>/<code>sessionStorage</code></li><li>**兄弟组件通信：**简单的数据传递可使用<code>eventBus</code>的<code>$emit</code>/<code>$on</code>；复杂的数据使用<code>Vuex</code>比较方便;也可以使用<code>localStorage</code>/<code>sessionStorage</code>;</li><li>**跨级组件通信：**父子孙等嵌套组件通信方式多使用<code>provide</code>/<code>inject</code>和<code>$attrs</code>/<code>$listeners</code>；跨级组件通信的数据如果不复杂可使用<code>eventBus</code>和<code>localStorage</code>/<code>sessionStorage</code>；如果数据复杂可使用<code>Vuex</code>，但是要注意刷新界面Vuex存储的数据会消失</li></ul><h2 id="结尾" tabindex="-1"><a class="header-anchor" href="#结尾"><span>结尾</span></a></h2><p>本篇文章只是简单记录了一下平时使用的组件通信方式，并没有深入的介绍其细节，如果有错误的地方欢迎指正</p>`,99),g=[b];function h(y,f){return s(),a("div",null,g)}const x=n(m,[["render",h],["__file","01.html.vue"]]),$=JSON.parse('{"path":"/notes/vue/01.html","title":"Vue组件的通信方式","lang":"zh-CN","frontmatter":{"title":"Vue组件的通信方式","category":["前端"],"tag":["vue"]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"通信方式","slug":"通信方式","link":"#通信方式","children":[{"level":3,"title":"一、props/$emit","slug":"一、props-emit","link":"#一、props-emit","children":[]},{"level":3,"title":"2、子组件向父组件传值","slug":"_2、子组件向父组件传值","link":"#_2、子组件向父组件传值","children":[]},{"level":3,"title":"二、$parent/$children","slug":"二、-parent-children","link":"#二、-parent-children","children":[]},{"level":3,"title":"三、ref","slug":"三、ref","link":"#三、ref","children":[]},{"level":3,"title":"四、provide/inject","slug":"四、provide-inject","link":"#四、provide-inject","children":[]},{"level":3,"title":"五、eventBus的$emit/$on","slug":"五、eventbus的-emit-on","link":"#五、eventbus的-emit-on","children":[]},{"level":3,"title":"六、$attrs/$listeners","slug":"六、-attrs-listeners","link":"#六、-attrs-listeners","children":[]},{"level":3,"title":"七、Vuex","slug":"七、vuex","link":"#七、vuex","children":[]},{"level":3,"title":"2、 Vuex各个模块","slug":"_2、-vuex各个模块","link":"#_2、-vuex各个模块","children":[]},{"level":3,"title":"3、Vuex举例","slug":"_3、vuex举例","link":"#_3、vuex举例","children":[]},{"level":3,"title":"八、localStorage/sessionStorage","slug":"八、localstorage-sessionstorage","link":"#八、localstorage-sessionstorage","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]},{"level":2,"title":"结尾","slug":"结尾","link":"#结尾","children":[]}],"git":{"createdTime":1716457827000,"updatedTime":1716457827000,"contributors":[{"name":"王帅豪","email":"shuaihaome@163.com","commits":1}]},"readingTime":{"minutes":13.49,"words":4048},"filePathRelative":"notes/vue/01.md","localizedDate":"2024年5月23日","excerpt":""}');export{x as comp,$ as data};
