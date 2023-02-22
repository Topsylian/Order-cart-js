const btn = document.querySelector("button");
const select = document.querySelector("select");
const h1 = document.querySelector("h1");
const html = document.querySelector("html");
const list = document.querySelector("ul");
const showImg = document.querySelector("div.product-main-pic");
const otherImg = document.querySelectorAll("div.product-other-pic > div");

for (let i = 0; i < otherImg.length; i++) {
	otherImg[i].addEventListener("click", () => {
		showImg.innerHTML = otherImg[i].innerHTML;
		otherImg[i].classList.add('shake');
		btn.classList.add('shake');
		showImg.classList.add('shake');
		setTimeout(() => {
			otherImg[i].classList.remove('shake');
			btn.classList.remove('shake');
			showImg.classList.remove('shake');
		}, 500);
	});
}

