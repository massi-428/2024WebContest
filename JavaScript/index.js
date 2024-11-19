import { Loader } from "./util.js";

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

/** メニュー */
const menu = document.querySelector('#menu');

// メニューを開く
document.getElementById("menuOpen").addEventListener("click", () => {
	menu.classList.add("active");
})

// メニューを閉じる
document.getElementById("menuClose").addEventListener("click", () => {
	menu.classList.remove("active");
})

// ヘッダーの開閉トリガー
window.addEventListener("scroll", () => {
	const header = document.querySelector("header");
	if (window.scrollY >= document.querySelector("section").offsetTop) {
		header.classList.add("active");
	}
	else if (header.classList.contains("active") && window.scrollY === 0) {
		header.classList.remove("active");
	}
})

// ページの読み込みが完了したときに実行される関数
document.addEventListener('DOMContentLoaded', function () {
	
});
