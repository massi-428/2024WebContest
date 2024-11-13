//hamburgermenu
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    toggleClasses();
});

function toggleClasses() {
  hamburger.classList.toggle('open');
    menu.classList.toggle('open');
}


//loading window
const element = document.querySelector(".loader");
let fadeoutFlag = true;
// セッションストレージからフラグを取得
const isFirstLoad = sessionStorage.getItem('isFirstLoad');

// ページの読み込みが完了したときに実行される関数
document.addEventListener('DOMContentLoaded', function() {
  // フラグがない場合（初回アクセス時）
  if (!isFirstLoad) {
    // 初回アクセス時の処理を記述
    element.style = "display: block;";
      // js-textというクラスを取得し、elementsという変数を宣言

  // animateTextという関数を、elementsの文字数の回数繰り返す
  // for (var i = 0; i < element.children[0].length; i++) {
      animateText(element.children[0]);
  // }
    console.log('初回アクセスです');
    
    // セッションストレージにフラグを保存
    sessionStorage.setItem('isFirstLoad', true);
  } else {
    // 2回目以降のアクセス時の処理を記述
    console.log('2回目以降のアクセスです');
    element.style = "display: none;";
  }
});

function animateText(element) {
  // elementの文字情報のみをtextという変数に代入
  let text = element.innerText;
  element.innerText = "";

  // textの一文字ずつをspanタグで囲う
  for (var i = 0; i < text.length; i++) {
      var span = document.createElement("span");
      span.innerText = text[i];
      element.appendChild(span);
  }

  // spanで囲った文字をspansに代入
  let spans = element.getElementsByTagName("span");
  // spansのstyleをopacity=1にする処理を、文字数分繰り返す
  for (var j = 0; j < spans.length; j++) {
      (function (index) {
          setTimeout(function () {
              spans[index].style.opacity = 1;
        }, index * 30); // 遅延時間を調整
      })(j);
  }
}
function FadeoutWindow(){
  $('.loader').fadeOut(800);
  fadeoutFlag = false;
}
window.onload=function(){
  setTimeout(function(){FadeoutWindow();},3000)
}
