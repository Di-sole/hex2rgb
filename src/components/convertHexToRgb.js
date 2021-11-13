export default function convertHexToRgb(hex) {
	const isHexColor = /^#[A-Fa-f0-9]{6}$/.test(hex);

	if (!isHexColor) {
		return null;
	}

	return {
		r: parseInt(hex.slice(1, 3), 16),
		g: parseInt(hex.slice(3, 5), 16),
		b: parseInt(hex.slice(5, 7), 16)
	}
}
