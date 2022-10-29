import svgFile from "themes/202210/assets/symbol-defs.da0dce54.svg";

export const svgIcon = (key: string, classes = "") => {
	return (
		<svg xmlnsXlink="http://www.w3.org/1999/xlink" className={`s1yetyrx icon ${classes}`}>
			<use xlinkHref={`${svgFile}#${key}`}></use>
		</svg>
	);
};
