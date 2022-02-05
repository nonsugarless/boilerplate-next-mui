import GlobalStyles from '@mui/material/GlobalStyles';

const GlobalStyle: React.VFC = () => {
	return (
		<GlobalStyles
			styles={{
				'*, *::before, *::after': {
					boxSizing: 'border-box',
				},
				'ul, ol': {
					listStyle: 'none',
					padding: 0,
					margin: 0,
				},
				button: {
					border: 'none',
					background: 'none',
					cursor: 'pointer',
				},
				img: {
					maxWidth: '100%',
					display: 'block',
				},
				a: {
					textDecoration: 'none',
					color: 'inherit',
				},
			}}
		/>
	);
};

export default GlobalStyle;
