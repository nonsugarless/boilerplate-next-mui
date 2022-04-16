import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { grey } from '@mui/material/colors';

import Navigation from '@/layouts/Navigation';

const Layout = ({ children }: { children: React.ReactChild }) => {
	return (
		<Box
			sx={{
				height: '100vh',
				display: 'grid',
				gridTemplateRows: '1fr auto',
				backgroundColor: grey[200],
			}}
		>
			<Box sx={{ order: 1 }}>
				<Navigation />
			</Box>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					overflow: 'auto',
					px: 4,
					py: 6,
				}}
			>
				<Container
					component="main"
					maxWidth="md"
					disableGutters
					sx={{
						padding: 0,
						m: 0,
					}}
				>
					{children}
				</Container>
			</Box>
		</Box>
	);
};

export default Layout;
