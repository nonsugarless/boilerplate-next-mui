import { setConfig } from 'next/config';
import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyle from '@/components/helpers/GlobalStyle';
import { styleTheme } from '@/theme/styleTheme';

const project = require('../project');

setConfig({
	publicRuntimeConfig: {
		project,
	},
});

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};

export const decorators = [
	(Story) => (
		<ThemeProvider theme={styleTheme}>
			<CssBaseline />
			<GlobalStyle />
			<Story />
		</ThemeProvider>
	),
];
