// ES6
import Turbolinks from 'turbolinks'
// Turbolinksで遷移した場合の初期化処理
document.addEventListener('turbolinks:load', function(event) {
  var url = event.data.url;
  dataLayer.push({
    'event':'turbolinks_load_pageView',
    'virtualUrl': url
  });
});
// Turbolinks処理開始
Turbolinks.start()
