const pixelToRem = (size: number) => `${size / 16}rem`;

const fontSizes = {
	tiny: pixelToRem(10),
	small: pixelToRem(12),
	default: pixelToRem(16),
	medium: pixelToRem(24),
	large: pixelToRem(32),
};

const colors = {
	navy: '#313964',
	blue: '#576EE7',
	mint: '#67E0B2',
	white: '#FFFFFF',
	lightGrey: '#EEEEEE',
	grey: '#CFCFCF',
	darkGrey: '#767676',
	black: '#000000',
};

const common = {
	flexCenter: `
    display: flex;
    justify-content: center;
    align-items: center;
  `,
	flexCenterColumn: `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
	minmaxWidth: `
	max-width: 1200px;
	min-width: 768px;
  `,
};

const theme = {
	fontSizes,
	colors,
	common,
};

export default theme;
