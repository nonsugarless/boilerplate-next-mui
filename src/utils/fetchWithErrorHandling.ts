import { stringify } from 'query-string';
import fetch from 'isomorphic-unfetch';

const handleErrors = (response: Response) => {
	if (response.ok) {
		return response;
	}
	throw Error(`${response.status} ${response.statusText}`);
};

export default function fetchWithErrorHandling<T extends unknown>(
	url: string,
	params?: {
		[key: string]: unknown;
	}
): Promise<T> {
	const baseUrl = process.env.API_BASE_URL;
	const apiUrl = `${baseUrl}${url}?${stringify({
		...params,
		api_key: process.env.API_KEY,
	})}`;

	return fetch(apiUrl, {
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
	})
		.catch((error) => {
			throw Error(error);
		})
		.then(handleErrors)
		.then((response) => response.json());
}
