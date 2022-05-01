import Typography from '@mui/material/Typography';
import getConfig from 'next/config';
import Head from 'next/head';
import type { NextPage } from 'next';
import fetchWithErrorHandling from '@/utils/fetchWithErrorHandling';

type Props = {
	name: string;
};
const Home: NextPage<Props> = ({ name }) => {
	const { publicRuntimeConfig } = getConfig();

	return (
		<>
			<Head>
				<title>{publicRuntimeConfig.project.siteTitle}</title>
			</Head>
			<div>
				<Typography variant="h3" component="h2" mb={2}>
					{name}
				</Typography>
			</div>
		</>
	);
};

export async function getServerSideProps() {
	const result = await fetchWithErrorHandling<Props>(`/demo`);

	return {
		props: result,
	};
}

export default Home;
