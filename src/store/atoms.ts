import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

import type { Foo } from '@/store/types';

const { persistAtom } = recoilPersist();

export const fooStore = atom<Foo>({
	key: 'fooStore',
	default: {},
	effects: [persistAtom],
});
