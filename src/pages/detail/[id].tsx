import Head from 'next/head';
import getConfig from 'next/config';
import type { NextPage, GetStaticProps } from 'next';
import fetchWithErrorHandling from '@/utils/fetchWithErrorHandling';
import type { PersonSummary } from '@/store/types';
import type { PersonDetail } from '@/models/PersonDetail';
import DetailBlock from '@/components/DetailBlock';
import { useRouter } from 'next/router';

type Props = {
	person: PersonDetail | null;
};
const Detail: NextPage<Props> = ({ person }) => {
	const { publicRuntimeConfig } = getConfig();
	const router = useRouter();

	if (router.isFallback) {
		return <div>Loading...</div>;
	}

	return (
		<>
			<Head>
				<title>
					{person?.name} | {publicRuntimeConfig.project.siteTitle}
				</title>
			</Head>
			{!!person ? <DetailBlock {...person} /> : <div>Not found</div>}
		</>
	);
};

export async function getStaticPaths() {
	const result = await fetchWithErrorHandling<{ results: PersonSummary[] }>(
		`/3/person/popular`,
		{
			language: 'ja-JP',
		}
	).catch((error) => {
		console.log(error);
		return -1;
	});

	const paths =
		typeof result === 'number'
			? []
			: result.results.map((post) => ({
					params: { id: `${post.id}` },
			  }));
	return { paths, fallback: 'blocking' };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const result = await fetchWithErrorHandling<PersonDetail[]>(
		`/3/person/${params?.id}`
	).catch((error) => {
		console.log(error);
		return -1;
	});
	const person = typeof result === 'number' ? null : result;

	return {
		props: {
			person,
		},
	};
};

export default Detail;
