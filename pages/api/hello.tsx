/** @format */

import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	// const jql = 'assignee = currentUser() ';
	
	const response = await fetch('http://localhost:7777/api/posts', {
		headers: {
			Accept: 'application/json',
		},
	})
	const data = await response.json()

	res.status(200).json(data)
}
