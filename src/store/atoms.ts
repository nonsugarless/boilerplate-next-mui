import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

import type { Person } from '@/store/types';

const { persistAtom } = recoilPersist();

export const photoStore = atom<Person[]>({
	key: 'photoStore',
	default: [],
	effects: [persistAtom],
});
