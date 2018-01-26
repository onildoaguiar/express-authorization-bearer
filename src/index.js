'use strict';

const HEADER_AUTHORIZATION = 'authorization';

module.exports = (req, res, next) => {
	const authorization = req.headers[HEADER_AUTHORIZATION];

	if (authorization) {
		const parts = authorization.split(' ');

		if (parts.length === 2) {
			const scheme = parts[0];
			const token = parts[1];

			if (/^Bearer$/i.test(scheme)) {
				req.token = token;
				next();
			}
		}
	} else {
		res.sendStatus(401);
	}
};
