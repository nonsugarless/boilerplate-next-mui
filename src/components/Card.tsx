import MuiCard from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import type { PersonSummary } from '@/store/types';

export type Props = {
	as?: React.ElementType;
	id: PersonSummary['id'];
	profile_path: PersonSummary['profile_path'];
	name: PersonSummary['name'];
	known_for: PersonSummary['known_for'];
};
const Card: React.VFC<Props> = ({ as = 'div', id, profile_path, name, known_for }) => {
	return (
		<MuiCard component={as}>
			<CardActionArea
				href={`/detail/${id}`}
				sx={{
					display: 'grid',
					gridTemplateRows: 'auto 1fr',
					gridTemplateColumns: '1fr',
					height: '100%',
				}}
			>
				<CardMedia
					component="img"
					image={`https://image.tmdb.org/t/p/w500/${profile_path}`}
					alt=""
					loading="lazy"
					height={240}
				/>
				<CardContent
					sx={{
						height: '100%',
					}}
				>
					<Typography gutterBottom variant="subtitle1" component="h3">
						{name}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						代表作: {known_for.map((item) => item.title).join('、')}
					</Typography>
				</CardContent>
			</CardActionArea>
		</MuiCard>
	);
};

export default Card;
