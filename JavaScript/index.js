import { Loader } from "./util.js";

//hamburgermenu
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle("open");
  menu.classList.toggle("open");
});

/** ロード画面 */
const loader = new Loader(document.querySelector(".loader"));

/** サイトに訪れたか。セッションストレージに保存される */ 
const visited = sessionStorage.getItem('visited');

// フラグがない場合（初回アクセス時）
if (!visited) {
  loader.setText(
    `project name: Code from -zero-
     system loading... success
     let's start cording!`
  ).display(true).animate().fadeOut(3000);
  
  // セッションストレージにフラグを保存
  sessionStorage.setItem('visited', true);
}
else {
  loader.setText(
    `system loading... success`
  ).display(true).animate().fadeOut(1200);
}
// ページの読み込みが完了したときに実行される関数
document.addEventListener('DOMContentLoaded', function() {
  
});
