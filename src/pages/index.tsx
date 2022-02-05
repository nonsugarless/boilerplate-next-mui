import styled from '@mui/system/styled';
import usePeople from '@/hooks/usePeople';
import Typography from '@mui/material/Typography';
import getConfig from 'next/config';
import Head from 'next/head';
import Card from '@/components/Card';
import type { NextPage } from 'next';
import type { PersonSummary } from '@/store/types';
import fetchWithErrorHandling from '@/utils/fetchWithErrorHandling';

const List = styled('ul')(({ theme }) => ({
	display: 'grid',
	gridTemplateColumns: 'repeat(3, 1fr)',
	gap: '1.5rem',
	[theme.breakpoints.down('sm')]: {
		gridTemplateColumns: 'auto',
	},
}));

type Props = {
	data: PersonSummary[];
};
const Home: NextPage<Props> = ({ data }) => {
	const { publicRuntimeConfig } = getConfig();
	const { peopleSortByPopularity } = usePeople(data);

	return (
		<>
			<Head>
				<title>{publicRuntimeConfig.project.siteTitle}</title>
			</Head>
			<div>
				<Typography variant="h3" component="h2" mb={2}>
					People
				</Typography>
			</div>
			<List>
				{peopleSortByPopularity.map((person) => (
					<Card key={person.id} as="li" {...person} />
				))}
			</List>
		</>
	);
};

export async function getServerSideProps() {
	const result = await fetchWithErrorHandling<{ results: PersonSummary[] }>(
		`/3/person/popular`,
		{
			language: 'ja-JP',
		}
	);

	return {
		props: {
			data: result.results,
		},
	};
}

export default Home;
