const scrollButton = document.getElementById("scrollToTopButton");

function scrollFunction() {
	const scrollTop =
		document.body.scrollTop || document.documentElement.scrollTop;

	if (scrollTop > 20 && scrollButton) {
		scrollButton.style.display = "block";
	} else if (scrollButton) {
		scrollButton.style.display = "none";
	}
}

function topFunction() {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
}

window.addEventListener("scroll", scrollFunction);
if (scrollButton) {
	scrollButton.addEventListener("click", topFunction);
}
