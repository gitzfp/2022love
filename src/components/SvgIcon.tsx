import svgFile from "themes/202210/assets/symbol-defs.da0dce54.svg";

interface SvgIconProps {
	dataKey: string;
	className?: string;
}

const SvgIcon: React.FC<SvgIconProps> = ({ dataKey, className = "" }) => {
	return (
		<svg xmlnsXlink="http://www.w3.org/1999/xlink" className={`s1yetyrx icon ${className}`}>
			<use xlinkHref={`${svgFile}#${dataKey}`}></use>
		</svg>
	);
};

export default SvgIcon;
