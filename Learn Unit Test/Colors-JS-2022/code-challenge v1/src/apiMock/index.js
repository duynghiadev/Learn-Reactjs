exports.getColor = async function(colorName) {
	await new Promise(resolve => setTimeout(resolve, 500))
	if (colorName === 'black') return { name: 'black', HEX: '#000000', RGB: { R: 0, G: 0, B: 0 }}
	if (colorName === 'white') return { name: 'white', HEX: '#ffffff', RGB: { R: 255, G: 255, B: 255 }}
	if (colorName === 'blue') return { name: 'blue', HEX: '#0000ff', RGB: { R: 0, G: 0, B: 255 }}
	if (colorName === 'green') return { name: 'green', HEX: '#00ff00', RGB: { R: 0, G: 255, B: 0 }}
	if (colorName === 'red') return { name: 'red', HEX: '#ff0000', RGB: { R: 255, G: 0, B: 0 }}
	throw new Error('Unknown color')
}
