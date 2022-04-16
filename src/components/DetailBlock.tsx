import type { PersonDetail } from '@/models/PersonDetail';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import styled from '@mui/system/styled';
import { common } from '@mui/material/colors';

const DefinitionList = styled('dl')(({ theme }) => ({
	margin: 0,
	padding: '1rem 0.5rem',
	'& dt': {
		fontWeight: 'bold',
		color: theme.palette.grey[700],
		fontSize: '0.9em',
		textTransform: 'capitalize',
		marginBottom: '0.2rem',
	},
	'& dd': {
		margin: 0,
	},
}));

export type Props = {
	name: PersonDetail['name'];
	profile_path: PersonDetail['profile_path'];
	biography: PersonDetail['biography'];
};
const DetailBlock = ({ name, profile_path, biography }: Props) => {
	return (
		<div>
			<Typography variant="h1" component="h1" gutterBottom mb={2}>
				{name}
			</Typography>
			<Stack direction="row" spacing={4}>
				<Box
					sx={{
						flexGrow: 1,
					}}
				>
					<img src={`https://image.tmdb.org/t/p/w500/${profile_path}`} alt="" />
				</Box>
				<Stack
					sx={{
						background: common.white,
						padding: 2,
						flex: '0 0 calc(560 / 900 * 100%)',
					}}
					divider={<Divider flexItem />}
				>
					<DefinitionList>
						<dt>経歴</dt>
						<dd>{biography}</dd>
					</DefinitionList>
				</Stack>
			</Stack>
		</div>
	);
};

export default DetailBlock;
