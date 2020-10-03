# react-native-mathjax
Render Mathjax content in React Native Webview with auto height adjustment.

Added react-native-autoheight-webview to replace webview.

# Showcase
TODO

# Installation
`yarn add https://github.com/ajmalpkc/react-native-mathjax.git`
or
`npm install ajmalpkc/react-native-mathjax#master --save`

# Usage
```javascript
<MathJax
  // HTML content with MathJax support
  html={'$\sum_{i=0}^n i^2 = \frac{(n^2+n)(2n+1)}{6}$<br><p>This is an equation</p>'}
  // Font size inside html
  fontSize="20px"
  // MathJax config option
  mathJaxOptions={{
    messageStyle: 'none',
    extensions: [ 'tex2jax.js' ],
    jax: [ 'input/TeX', 'output/HTML-CSS' ],
    tex2jax: {
      inlineMath: [ ['$','$'], ['\\(','\\)'] ],
      displayMath: [ ['$$','$$'], ['\\[','\\]'] ],
      processEscapes: true,
    },
    TeX: {
      extensions: ['AMSmath.js','AMSsymbols.js','noErrors.js','noUndefined.js']
    }
  }}
  {...WebView props}
/>

```
