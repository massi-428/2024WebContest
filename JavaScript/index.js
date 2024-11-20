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
});

// メニューを閉じる
document.getElementById("menuClose").addEventListener("click", () => {
	menu.classList.remove("active");
});

menu.querySelectorAll("li").forEach((element, i) => {
	switch (i) {
		case 0:
			element.addEventListener("click", () => {
				window.location = "/";
			});
			break;
		case 1:
			element.addEventListener("click", () => {
				window.location = "/introduce_c.html";
			});
			break;
		case 2:
			element.addEventListener("click", () => {
				window.location = "/introduce_rust.html";
			});
			break;
		case 3:
			element.addEventListener("click", () => {
				window.location = "/introduce_java.html";
			});
			break;
		case 4:
			element.addEventListener("click", () => {
				window.location = "/introduce_python.html";
			});
			break;
		case 5:
			element.addEventListener("click", () => {
				window.location = "/credit.html";
			});
			break;
	}
});
