export const setLayoutClass = (n = 200) => {
	const innerWidth = window.innerWidth;
	const el = document.getElementById("root")!;
	const level = Math.ceil(innerWidth / n);
	const className = `g${level}`;
	el.classList.remove("g1", "g2", "g3", "g4", "g5", "g6", "g7", "g8", "g9", "g10");
	el.classList.add(className);
	document.documentElement.style.fontSize = 16 * (innerWidth <= 660 ? innerWidth / 440 : 1) + "px";
};
