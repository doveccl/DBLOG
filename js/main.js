var as = document.querySelectorAll('a');
for (var a of as) {
  var d = a.href.replace(/^\w*:\/\/([^/]+)(\/.*)*$/, '$1');
  if (/\/\//.test(a.href) && d !== location.host)
    a.target = '_blank';
}

var drop = document.querySelector('.drop-nav');
drop.addEventListener('click', function(e) {
  if (drop.getAttribute('open') === 'on')
    drop.setAttribute('open', 'off');
  else drop.setAttribute('open', 'on');
  e.stopPropagation();
});
document.body.addEventListener('click', function() {
  drop.setAttribute('open', 'off');
});

var aplayer = document.querySelectorAll('.aplayer');
for (var ap of aplayer) {
  try {
    var _a = ap.getAttribute('auto');
    new APlayer({
      lrcType: 3,
      container: ap,
      audio: JSON.parse(ap.textContent),
      autoplay: _a == null ? true : _a == 'true'
    });
  } catch (e) {
    console.warn('load aplayer error');
  }
}

renderMathInElement(document.body, {
  delimiters: [
    {left: '$', right: '$', display: false}
  ]
});

if (document.getElementById('disqus_thread')) {
  var disqus_config = function() {
    this.page.url = location.href;
    this.page.identifier = location.href;
  };
  (function() {
    var d = document, s = d.createElement('script');
    var dsq_url = d.getElementById('dsq_url').innerHTML;
    s.src = dsq_url + '/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
  })();
}
