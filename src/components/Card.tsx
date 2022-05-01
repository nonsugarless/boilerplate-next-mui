import MuiCard from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export type Props = {
	as?: React.ElementType;
	id: string;
	imagePath: string;
	name: string;
};
const Card: React.FC<Props> = ({ as = 'div', id, imagePath, name }) => {
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
					image={imagePath}
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
				</CardContent>
			</CardActionArea>
		</MuiCard>
	);
};

export default Card;
