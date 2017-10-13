'use strict';

import axios from 'axios';
import { newsAPI } from '../config';

export async function getNewsFromSource(source, sort = '') {
	let options = {
		method: 'get',
		url: `${newsAPI.url}`,
		params: {
			source: source,
			sortBy: sort,
			apiKey: newsAPI.apiKey
		}
	};

	let response = await axios(options);
	return response;
}