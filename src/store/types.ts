type Media = {
	[key: string]: unknown;
	adult: boolean;
	backdrop_path: string;
	genre_ids: number[];
	id: number;
	media_type: string;
	original_language: string;
	original_title: string;
	overview: string;
	poster_path: string;
	release_date: Date;
	title: string;
};

export type PersonSummary = {
	adult: boolean;
	gender: number;
	id: number;
	known_for: Media[];
	known_for_department: string;
	name: string;
	popularity: number;
	profile_path: string;
};
