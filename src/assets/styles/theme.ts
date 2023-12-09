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
	lighterGrey: '#F4F4F4',
	lightGrey: '#EEEEEE',
	grey: '#CFCFCF',
	darkGrey: '#767676',
	darkerGrey: '#4B4B4B',
};

const widths = {
	minWidth: '768px',
	maxWidth: '1200px',
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
	ellipsisOneLine: `
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	word-break: break-all;
  `,
	ellipsisTwoLine: `
	overflow: hidden;
	text-overflow: ellipsis;
  	display: -webkit-box;
  	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
  `,
};

const style = {
	whiteBox: `
		border-radius: 40px;
		background: white;
		box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.05);
	`,
};

const theme = {
	fontSizes,
	colors,
	widths,
	common,
	style,
};

export default theme;
