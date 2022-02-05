import { photoStore } from '@/store/atoms';
import { useLayoutEffect, useMemo } from 'react';
import { useRecoilState } from 'recoil';
import type { PersonSummary } from '@/store/types';

export default function usePeople(data: PersonSummary[]) {
	const [people, setPeople] = useRecoilState(photoStore);

	useLayoutEffect(() => {
		setPeople(data);
	}, [data]);

	const peopleSortByPopularity = useMemo(
		() => people.slice().sort((a, b) => b.popularity - a.popularity),
		[people]
	);

	return {
		people,
		peopleSortByPopularity,
	};
}
