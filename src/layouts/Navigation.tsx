import HomeIcon from '@mui/icons-material/Home';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { common } from '@mui/material/colors';
import styled from '@mui/system/styled';
import Link from 'next/link';
import { useRouter } from 'next/router';

import NextLinkComposed from '@/components/helpers/NextLinkComposed';

const LinkLogo = styled('a')(() => ({}));

export default function Navigation() {
	const router = useRouter();
	const currentPage = router.pathname;

	return (
		<Box
			sx={{
				display: 'grid',
				gridTemplateColumns: 'auto 1fr auto',
				alignItems: 'center',
				background: common.white,
				p: 2,
				width: '100%',
			}}
		>
			<Typography component="h1" variant="h4" fontWeight="500" pl={1}>
				<Link href="/" passHref>
					<LinkLogo>Logo</LinkLogo>
				</Link>
			</Typography>
			<BottomNavigation
				showLabels
				value={currentPage}
				sx={{
					justifyContent: 'flex-end',
					color: common.white,
				}}
			>
				<BottomNavigationAction
					label="Home"
					value="/"
					href="/"
					icon={<HomeIcon />}
					component={NextLinkComposed}
				/>
			</BottomNavigation>
		</Box>
	);
}
