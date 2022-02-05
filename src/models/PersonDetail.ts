import type { PersonSummary } from '@/store/types';

export type PersonDetail = PersonSummary & {
	[key: string]: unknown;
	birthday: Date;
	deathday: Date | null;
	biography: string;
	place_of_birth: string;
	also_known_as: string[];
	homepage: string | null;
};
