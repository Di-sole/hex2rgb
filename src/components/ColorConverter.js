import { useState } from "react";
import convertHexToRgb from "./convertHexToRgb";

function ColorConverter() {
	const [hexValue, setHexValue] = useState("#000000");
	const [result, setResult] = useState("rgb(0,0,0)");
	
	const handleChange = ({target}) => {
		const hex = target.value;
		setHexValue(hex);

		if (hex[0] !== '#') {
			setHexValue('#');
		}

		if (hex.length < 7) {
			return
		}
	
		const rgb = convertHexToRgb(hex);
		setResult(rgb ? `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})` : null);
	}


	return (
		<div className="color-converter" style={{backgroundColor: result ?? "orange"}}>
			<form className="converter-form" onSubmit={(e) => e.preventDefault()}>
				<input className="hex-input" type="text" maxLength="7" value={hexValue} onChange={handleChange} />
				<span className="rgb-result">{result ?? "Ошибка"}</span>
			</form>
		</div>
	)
}

export default ColorConverter;
