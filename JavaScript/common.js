// ヘッダーの開閉トリガー
window.addEventListener("scroll", () => {
	const header = document.querySelector("header");
	if (window.scrollY >= document.querySelector("section").offsetTop) {
		header.classList.add("active");
	}
	else if (header.classList.contains("active") && window.scrollY === 0) {
		header.classList.remove("active");
	}
});