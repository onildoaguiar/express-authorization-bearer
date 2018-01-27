# About
Bearer authorization token middleware for express.

[![NPM](https://nodei.co/npm/express-authorization-bearer.png)](https://nodei.co/npm/express-authorization-bearer/)

## Purpose?

This module will attempt to extract a bearer token from a request from this location:

* The value from the header `Authorization: Bearer <token>`.

If a token is found, it will be stored on `req.token`. Otherwise, it will abort the request immediately by sending code 401.
```js
const express = require('express');
const bearerAuthorization = require('express-authorization-bearer');
const app = express();
const router = app.Router();

app.use('/', router.get('user/:id', bearerAuthorization, function (req, res) {
  res.send(`token ${req.token}`);
}));
app.listen(3000);
```
# License
This project is licensed under the MIT License - see the LICENSE.md file for details
