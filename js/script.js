// toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
	// tampil class active
	navbarNav.classList.toggle("active");
};

// Klik diluar Sidebar untuk menghilangkan Nav
const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
	// selama yg diklik bukan navbar dan bukan hamburger
	if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
		navbarNav.classList.remove("active");
	}
});
