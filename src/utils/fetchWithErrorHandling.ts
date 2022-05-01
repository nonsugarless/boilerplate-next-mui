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
	})}`;

	return fetch(apiUrl, {
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
	})
		.catch((_error) => {
			throw Error(apiUrl);
		})
		.then(handleErrors)
		.then((response) => response.json());
}
