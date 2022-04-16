import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

import type { PersonSummary } from '@/store/types';

const { persistAtom } = recoilPersist();

export const photoStore = atom<PersonSummary[]>({
	key: 'photoStore',
	default: [],
	effects: [persistAtom],
});
